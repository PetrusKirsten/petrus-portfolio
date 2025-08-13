import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/80 border-b border-border">
      <div className="page-container h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-wide">
          <span className="text-primary">petrus</span><span className="text-secondary">.dev</span>
        </Link>
        <nav className="flex items-center gap-5">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/writing">Writing</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
