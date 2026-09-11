import { projects, profile } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { ArrowRightIcon, ArrowUpRightIcon } from './icons.jsx'

export default function Projects() {
  return (
    <section id="work" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeader eyebrow={projects.eyebrow} title={projects.title} description={projects.description} />

        <div className="mt-10 space-y-6 md:mt-12">
          {projects.items.map((project) => (
            <Reveal key={project.title}>
              <article className="grid gap-8 rounded-2xl border border-hairline bg-white p-7 transition-shadow duration-300 hover:shadow-lift md:grid-cols-[1.1fr_1fr] md:p-8">
                <div>
                  <p className="eyebrow">{project.type}</p>
                  <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>

                  {(project.role || (project.tools && project.tools.length > 0)) && (
                    <dl className="mt-6">
                      {project.role && (
                        <div className="flex items-baseline gap-6 border-t border-hairline py-3">
                          <dt className="w-16 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted">
                            Role
                          </dt>
                          <dd className="text-sm font-semibold text-ink">{project.role}</dd>
                        </div>
                      )}
                      {project.tools && project.tools.length > 0 && (
                        <div className="flex items-baseline gap-6 border-t border-hairline py-3">
                          <dt className="w-16 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted">
                            Tools
                          </dt>
                          <dd className="text-sm font-semibold text-ink">{project.tools.join(' · ')}</dd>
                        </div>
                      )}
                    </dl>
                  )}
                </div>

                <div className="flex flex-col justify-between gap-6 md:items-end">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-sm font-medium text-ink/80 transition-colors hover:border-accent/30 hover:text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex w-full flex-col gap-3 md:items-end">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                      >
                        View Live Website
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.caseStudy && (
                      <a
                        href={project.caseStudyUrl || '#'}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                      >
                        View case study
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.footnote && (
                      <p className="text-xs leading-relaxed text-muted md:text-right">
                        {project.footnote}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 flex justify-start">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            Explore my repositories on GitHub
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}