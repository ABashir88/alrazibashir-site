import { siteConfig } from "../config";

export function ProofBar() {
  const { proofBar } = siteConfig;

  return (
    <section
      aria-label="Proof of work"
      className="border-b border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-medium uppercase tracking-[0.16em] text-neutral-500">
          {proofBar.label}
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm font-semibold text-neutral-800">
          {proofBar.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

