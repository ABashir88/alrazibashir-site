import Link from "next/link";
import { siteConfig } from "../config";

export function Contact() {
  const { email } = siteConfig;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl space-y-3">
          <h2
            id="contact-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500"
          >
            Contact
          </h2>
          <p className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
            If you&apos;re thinking about your next system, I&apos;d love to
            talk.
          </p>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            The best way to reach me is over email with a bit of context on
            your team, the problem, and any timelines.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
          <Link
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Email {email}
          </Link>
          <p className="text-xs text-neutral-500 sm:text-sm">
            I usually respond within a few days.
          </p>
        </div>
      </div>
    </section>
  );
}

