import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { navLinks, profile } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { MenuIcon, CloseIcon } from './icons.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(navLinks.map((link) => link.href.slice(1)))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-hairline bg-paper/90 backdrop-blur-md' : 'border-transparent bg-paper'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-[4.5rem] md:px-8"
      >
        <a
          href="#home"
          onClick={close}
          className="flex items-baseline font-heading text-lg font-black tracking-tight text-ink"
          aria-label="Go to home — Reem Bakker"
        >
          {profile.name.split(' ')[0][0]}
          {profile.name.split(' ')[1]?.[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-accent after:w-full'
                      : 'text-muted hover:text-ink after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-hairline bg-white/60 text-ink transition-colors hover:border-accent/40 hover:text-accent lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 bottom-0 top-16 z-[100] overflow-y-auto bg-paper md:top-[4.5rem]"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex min-h-full max-w-6xl flex-col px-6 pt-2 md:px-8"
            >
              <span aria-hidden="true" className="h-px bg-hairline" />
              {navLinks.map((link, index) => {
                const isActive = active === link.href.slice(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className={`flex items-baseline justify-between border-b border-hairline py-5 font-heading text-2xl font-bold tracking-tight transition-colors ${
                      isActive ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    {link.label}
                    <span className="text-xs font-semibold text-muted">0{index + 1}</span>
                  </a>
                )
              })}
              <div className="mt-auto pb-10 pt-8">
                <a
                  href="#contact"
                  onClick={close}
                  className="block rounded-md bg-ink px-5 py-4 text-center font-heading text-base font-semibold text-white transition-colors hover:bg-accent"
                >
                  Let’s talk
                </a>
              </div>
            </nav>
          </div>,
          document.body
        )}
    </header>
  )
}