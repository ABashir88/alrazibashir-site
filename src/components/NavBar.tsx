import Link from "next/link";
import { siteConfig } from "../config";

export function NavBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full bg-neutral-900 text-xs font-semibold text-white flex items-center justify-center">
            AR
          </span>
          <span className="text-sm font-medium text-neutral-900">
            {siteConfig.name}
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm text-neutral-600 sm:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.resumeUrl}
            className="inline-flex items-center rounded-full border border-neutral-900 px-3 py-1.5 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Resume
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:hidden">
          <Link
            href={siteConfig.resumeUrl}
            className="inline-flex items-center rounded-full border border-neutral-900 px-3 py-1.5 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}

