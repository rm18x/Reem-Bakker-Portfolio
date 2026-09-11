import { whatIDo } from '../data/content.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { AnalyzeIcon, CreateIcon, DefineIcon, ValidateIcon } from './icons.jsx'

const icons = {
  analyze: AnalyzeIcon,
  define: DefineIcon,
  validate: ValidateIcon,
  create: CreateIcon,
}

export default function WhatIDo() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeader eyebrow={whatIDo.eyebrow} title={whatIDo.title} />

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
          {whatIDo.items.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={index * 100}>
                <article className="group flex h-full flex-col rounded-2xl border border-hairline bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift md:p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon />
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>
<p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                      {item.description}
                    </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}