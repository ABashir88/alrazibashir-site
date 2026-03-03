import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../config";

export function Hero() {
  const { hero, email } = siteConfig;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-neutral-200 bg-white"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-12 pt-10 sm:px-6 sm:pt-16 sm:pb-16 lg:px-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
          >
            {hero.headline}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            {hero.subheadline}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {hero.secondaryCta.label}
            </Link>
            {hero.tertiaryCta && (
              <Link
                href={hero.tertiaryCta.href}
                className="inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold text-neutral-600 underline-offset-4 hover:underline sm:text-sm"
              >
                {hero.tertiaryCta.label}
              </Link>
            )}
          </div>
          <p className="text-xs text-neutral-500">
            Or reach me directly at{" "}
            <a
              href={`mailto:${email}`}
              className="font-medium text-neutral-900 underline-offset-4 hover:underline"
            >
              {email}
            </a>
            .
          </p>
        </div>
        <div className="flex justify-start lg:justify-end">
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
            <Image
              src="/alrazi-headshot.jpg"
              alt="Alrazi Bashir"
              fill
              sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 160px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

