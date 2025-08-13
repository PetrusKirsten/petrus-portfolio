"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita diferença entre SSR e cliente
  useEffect(() => setMounted(true), []);

  // Enquanto não montou no cliente, mostra um botão neutro (mesmo HTML no SSR/CSR)
  if (!mounted) {
    return (
      <button
        className="rounded-md border border-border px-3 py-1 text-sm hover:shadow-soft transition"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        Theme
      </button>
    );
  }

  const next = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(next)}
      className="rounded-md border border-border px-3 py-1 text-sm hover:shadow-soft transition"
      aria-label="Toggle theme"
      title={`Switch to ${next} mode`}
    >
      {resolvedTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
