import Link from "next/link"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-600 dark:text-zinc-300">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {year} Petrus Kirsten. All rights reserved.</p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/PetrusKirsten"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/petrus-kirsten"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
