"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/cv", label: "CV & Certificados" },
  { href: "/contato", label: "Contato" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          Petrus Kirsten
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => {
            const isActive = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-brand-600 font-semibold"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="rounded-xl border px-3 py-2 text-sm md:hidden"
            onClick={() => document.getElementById("mobile-nav")?.classList.toggle("hidden")}
          >
            Menu
          </button>
        </div>
      </div>
      <div id="mobile-nav" className="hidden border-t bg-white md:hidden dark:bg-zinc-950">
        <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
