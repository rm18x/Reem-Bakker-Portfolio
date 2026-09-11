import { footer } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-neutral-200 py-9">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center md:px-8">
        <p className="font-heading text-base font-bold tracking-tight text-ink">{footer.name}</p>
        <p className="text-sm text-muted">{footer.tagline}</p>
        <p className="mt-4 text-xs text-muted/70">
          © {new Date().getFullYear()} {footer.name}
        </p>
      </div>
    </footer>
  )
}