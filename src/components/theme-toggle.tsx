"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const current = theme === "system" ? systemTheme : theme
  const next = current === "dark" ? "light" : "dark"

  return (
    <button
      aria-label="Alternar tema"
      onClick={() => setTheme(next!)}
      className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      {current === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{current === "dark" ? "Claro" : "Escuro"}</span>
    </button>
  )
}
