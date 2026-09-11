import { contact, profile } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { MailIcon, LinkedInIcon, GitHubIcon } from './icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {contact.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold tracking-tight text-white transition-colors duration-200 hover:bg-accent"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/70 px-7 py-3.5 text-sm font-semibold tracking-tight text-ink transition-all duration-200 hover:border-accent/40 hover:text-accent hover:shadow-soft"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/70 px-7 py-3.5 text-sm font-semibold tracking-tight text-ink transition-all duration-200 hover:border-accent/40 hover:text-accent hover:shadow-soft"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}