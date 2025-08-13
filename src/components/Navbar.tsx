import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/80 border-b border-border">

      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">

        <Link href="/" className="font-mono text-sm tracking-wide">
          <span className="text-primary">petrus</span><span className="text-secondary">.dev</span>
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <Link href="/projects" className="relative group">
            Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
          </Link>

          {/* <Link href="/writing">Writing</Link> */}
          <Link href="/writing" className="relative group">
            Writing
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
          </Link>

          {/* <Link href="/about">About</Link> */}
          <Link href="/about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
          </Link>

          {/* <Link href="/contact">Contact</Link> */}
          <Link href="/contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
          </Link>

          <ThemeToggle />
        </nav>

      </div>
    </header>
  );
}
