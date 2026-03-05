import { siteConfig } from "../config";

export function Wins() {
  const { sections, wins } = siteConfig;

  return (
    <section
      id="wins"
      aria-labelledby="wins-heading"
      className="border-b border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl space-y-3">
          <h2
            id="wins-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500"
          >
            {sections.wins.eyebrow}
          </h2>
          <p className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
            {sections.wins.title}
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-3">
          {wins.map((win) => (
            <article
              key={win.title}
              className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5 sm:p-5"
            >
              <h3 className="text-sm font-semibold text-neutral-900">
                {win.title}
              </h3>
              <p className="text-xs font-medium text-neutral-600 sm:text-xs">
                {win.role}
              </p>
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                {win.summary}
              </p>
              <p className="text-xs font-medium text-neutral-800 sm:text-xs">
                Outcome:{" "}
                <span className="font-normal text-neutral-700">
                  {win.outcome}
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

