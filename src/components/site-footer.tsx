"use client"

import Link from "next/link"

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {year} Seu Nome — Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/seuusuario"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </Link>
            <Link href="/rss.xml" className="hover:underline">
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
