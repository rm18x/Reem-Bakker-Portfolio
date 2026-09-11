import { credentials } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { AwardIcon } from './icons.jsx'

export default function Credentials() {
  return (
    <section id="credentials" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeader eyebrow={credentials.eyebrow} title={credentials.title} />

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
          {credentials.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-hairline bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift md:p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <AwardIcon />
                </span>
                <h3 className="mt-6 font-heading text-lg font-bold leading-snug tracking-tight text-ink">
                  {item.title}
                </h3>
<p className="mt-4 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                    {item.description}
                  </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}