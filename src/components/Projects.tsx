import Link from "next/link";
import { siteConfig } from "../config";

const hrefFromKey = (key: keyof typeof siteConfig.social) =>
  siteConfig.social[key];

export function Projects() {
  const { sections, projects } = siteConfig;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl space-y-3">
          <h2
            id="projects-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500"
          >
            {sections.projects.eyebrow}
          </h2>
          <p className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl">
            {sections.projects.title}
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col justify-between gap-3 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5 sm:p-5"
            >
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-neutral-900">
                  {project.name}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  {project.description}
                </p>
              </div>
              <div>
                <Link
                  href={hrefFromKey(project.hrefKey)}
                  className="inline-flex text-xs font-semibold text-neutral-900 underline-offset-4 hover:underline sm:text-sm"
                >
                  {project.ctaLabel ?? sections.projects.visitLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

