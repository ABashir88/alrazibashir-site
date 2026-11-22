#!/usr/bin/env python3
"""Append new main-branch commit subjects to the public site activity log.

Only uses the standard library and local git history. Does not make approval
judgments and never modifies REDESIGN_DECISIONS.md.
"""
from datetime import datetime, timezone
from pathlib import Path
import json
import os
import subprocess

FILE = Path("docs/SITE_CHANGELOG.md")
START = "<!-- AUTO-CHANGELOG:START -->"
END = "<!-- AUTO-CHANGELOG:END -->"


def git(*args):
    return subprocess.run(["git", *args], check=True, text=True, capture_output=True).stdout.strip()


def main():
    event = json.loads(Path(os.environ["GITHUB_EVENT_PATH"]).read_text(encoding="utf-8"))
    head = os.environ["GITHUB_SHA"]
    before = event.get("before", "")
    if before and before != "0" * 40:
        try:
            hashes = git("rev-list", "--reverse", f"{before}..{head}").splitlines()
        except subprocess.CalledProcessError:
            hashes = [head]
    else:
        hashes = [head]

    content = FILE.read_text(encoding="utf-8")
    if content.count(START) != 1 or content.count(END) != 1:
        raise SystemExit("Missing or duplicate changelog markers")

    rows = []
    for sha in hashes:
        name = git("log", "-1", "--format=%an", sha)
        if name in {"github-actions[bot]", "github-actions"}:
            continue
        if f"/commit/{sha}" in content:
            continue
        subject = git("log", "-1", "--format=%s", sha)
        subject = " ".join(subject.split()).replace("|", r"\|").replace("[", r"\[").replace("]", r"\]")
        date = git("show", "-s", "--format=%cs", sha)
        url = f"https://github.com/{os.environ['GITHUB_REPOSITORY']}/commit/{sha}"
        rows.append(f"- {date} · [`{sha[:7]}`]({url}) · {subject}")

    if not rows:
        print("No new change-log entries")
        return

    content = content.replace(END, "\n".join(rows) + "\n" + END)
    FILE.write_text(content, encoding="utf-8")
    print(f"Appended {len(rows)} commit(s) to {FILE}")


if __name__ == "__main__":
    main()
