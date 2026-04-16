"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="bg- inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-50 dark:border-zinc-600/60 dark:bg-zinc-800/80 dark:text-zinc-50 dark:hover:bg-zinc-700/80"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="ml-2 hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  )
}
