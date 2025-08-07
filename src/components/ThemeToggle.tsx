"use client"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const next = theme === "dark" ? "light" : "dark"

  return (
    <button
      onClick={() => setTheme(next)}
      className="rounded-md border border-border px-3 py-1 text-sm hover:shadow-soft transition"
      aria-label="Toggle theme"
      title={`Switch to ${next} mode`}
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}
