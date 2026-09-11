import { education } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { GraduationIcon } from './icons.jsx'

export default function Education() {
  return (
    <section id="education" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeader eyebrow={education.eyebrow} title={education.title} />

        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-hairline bg-white p-7 shadow-soft md:p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <GraduationIcon />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {education.degree}
              </h3>
              <p className="mt-3 text-sm font-medium text-ink/70 md:text-base">
                {education.institution}
                <span aria-hidden="true" className="mx-2 text-hairline">·</span>
                <span className="font-normal text-muted">{education.location}</span>
              </p>

              <dl className="mt-8 grid gap-4 border-t border-hairline pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted">Graduated</dt>
                  <dd className="mt-1.5 font-heading text-base font-semibold text-ink">{education.graduated}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted">GPA</dt>
                  <dd className="mt-1.5 font-heading text-base font-semibold text-ink">{education.gpa}</dd>
                </div>
              </dl>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <aside className="flex h-full flex-col rounded-2xl border border-hairline bg-white p-7 md:p-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                {education.secondary.label}
              </h4>
              <ul className="mt-6 space-y-6">
                {education.secondary.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm leading-relaxed text-ink/80">{item.name}</p>
                    <p className="mt-1 font-heading text-xl font-bold tracking-tight text-ink">{item.score}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}