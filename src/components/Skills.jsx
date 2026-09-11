import { skills } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeader eyebrow="Capabilities" title="Skills" />

        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-hairline bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift md:p-8">
                <h3 className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-ink">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
                  {group.category}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-sm font-medium text-ink/80 transition-colors duration-200 hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
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