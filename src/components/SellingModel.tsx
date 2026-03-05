import { siteConfig } from "../config";

export function SellingModel() {
  const { sections, sellingModel } = siteConfig as typeof siteConfig & {
    sellingModel: { title: string; description: string }[];
  };

  return (
    <section
      id="selling-model"
      aria-labelledby="selling-model-heading"
      className="border-b border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl space-y-3">
          <h2
            id="selling-model-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500"
          >
            {sections.sellingModel.eyebrow}
          </h2>
          <p className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
            {sections.sellingModel.title}
          </p>
          {sections.sellingModel.body && (
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              {sections.sellingModel.body}
            </p>
          )}
        </div>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-3">
          {sellingModel.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5 sm:p-5"
            >
              <h3 className="text-sm font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

