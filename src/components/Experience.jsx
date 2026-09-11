import { experience } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeader eyebrow="Career" title="Experience" />

        <div className="relative mt-10 border-l border-hairline pl-8 ml-3 md:mt-12 md:pl-12 md:ml-4">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 60} className="relative last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full md:-left-12 ${
                  index === 0 ? 'bg-accent ring-4 ring-accent/15' : 'border border-accent/40 bg-paper'
                }`}
              />
              <article className="pb-10 last:pb-0 md:pb-12">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  {item.period && (
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                      {item.period}
                    </p>
                  )}
                  {index === 0 && (
                    <span className="rounded-full border border-accent/20 bg-accent-soft/60 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-heading text-xl font-bold tracking-tight text-ink md:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-ink/70 md:text-base">
                  {item.company}
                  <span aria-hidden="true" className="mx-2 text-hairline">·</span>
                  <span className="font-normal text-muted">{item.location}</span>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3 text-sm leading-relaxed text-ink/80 md:text-[0.9375rem]">
                      <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}