import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/80 border-b border-border">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-wide">
          <span className="text-primary">petrus</span><span className="text-secondary">.dev</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
