import { profile } from '../data/content.js'
import { LinkedInIcon, GitHubIcon, DownloadIcon, ArrowRightIcon, ChevronDownIcon } from './icons.jsx'

function IconButton({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent"
    >
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-14 pt-10 md:pb-16 md:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl font-heading text-xl font-semibold leading-snug tracking-tight text-ink/90 md:text-2xl">
            {profile.headline}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent"
            >
              View My Work
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="CV-Reem-Bakker .pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
            <IconButton href={profile.linkedin} label="LinkedIn profile">
              <LinkedInIcon className="h-4 w-4" />
            </IconButton>
            <IconButton href={profile.github} label="GitHub profile">
              <GitHubIcon className="h-4 w-4" />
            </IconButton>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-2xl border border-hairline bg-white p-7 shadow-soft md:p-8">
            <dl className="space-y-6">
              {profile.infoPanel.map((row) => (
                <div key={row.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                    {row.label}
                  </dt>
                  <dd className="mt-1.5 font-heading text-base font-semibold text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to Experience section"
        className="group absolute inset-x-0 bottom-6 mx-auto flex w-fit flex-col items-center gap-1 text-muted transition-colors hover:text-accent"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}