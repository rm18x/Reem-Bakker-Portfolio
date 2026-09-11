import { statement } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Statement() {
  return (
    <section id="statement" className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">{statement.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {statement.title}
          </h2>
          <div aria-hidden="true" className="mx-auto mt-6 h-px w-16 bg-accent/40" />
          <p className="mt-6 font-heading text-xl font-medium leading-relaxed text-ink/85 md:text-2xl">
            {statement.body}
          </p>
        </Reveal>
      </div>
    </section>
  )
}