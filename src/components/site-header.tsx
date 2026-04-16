"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="header-surface sticky top-0 z-50 border-b border-zinc-200/70 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
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
                    ? "text-primary-500 dark:text-primary-400 font-semibold"
                    : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
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
        <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3">
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
