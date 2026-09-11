import Reveal from './Reveal.jsx'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{description}</p>}
    </Reveal>
  )
}