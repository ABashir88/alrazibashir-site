import Link from "next/link";
import { siteConfig } from "../config";

export function Contact() {
  const { email, sections } = siteConfig;

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
            {sections.contact.eyebrow}
          </h2>
          <p className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
            {sections.contact.title}
          </p>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            {sections.contact.body}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
          <Link
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {sections.contact.ctaPrefix} {email}
          </Link>
          <p className="text-xs text-neutral-500 sm:text-sm">
            {sections.contact.responseNote}
          </p>
        </div>
      </div>
    </section>
  );
}

