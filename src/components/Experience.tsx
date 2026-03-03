import { siteConfig } from "../config";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl space-y-3">
          <h2
            id="experience-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500"
          >
            Experience
          </h2>
          <p className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
            Shipping and owning systems where revenue is on the line.
          </p>
        </div>
        <div className="mt-8 space-y-6 sm:mt-10">
          {siteConfig.experience.map((role) => (
            <article
              key={role.company}
              className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-5"
            >
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-neutral-900">
                  {role.title}
                </h3>
                <p className="text-sm text-neutral-700">{role.company}</p>
                <p className="text-xs text-neutral-500">
                  {role.period} · {role.location}
                </p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-neutral-600 sm:mt-0 sm:text-sm">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

