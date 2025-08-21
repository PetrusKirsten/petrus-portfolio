"use client"

import { useMemo } from "react"
import { ALL_TAGS, type Project, type ProjectTag } from "@/data/projects"

export type ToolbarState = {
  q: string
  tags: ProjectTag[]
  sort: "recente" | "antigo" | "titulo"
}

export function useFilteredProjects(projects: Project[], state: ToolbarState) {
  return useMemo(() => {
    const term = state.q.trim().toLowerCase()

    let filtered = projects.filter((p) => {
      const matchesQ =
        term.length === 0 ||
        p.title.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        p.tech.join(" ").toLowerCase().includes(term)

      const matchesTags = state.tags.length === 0 || state.tags.every((t) => p.tags.includes(t))

      return matchesQ && matchesTags
    })

    switch (state.sort) {
      case "recente":
        filtered = filtered.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
        break
      case "antigo":
        filtered = filtered.sort((a, b) => (a.year ?? 0) - (b.year ?? 0))
        break
      case "titulo":
        filtered = filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return filtered
  }, [projects, state])
}

export function ProjectsToolbar({
  state,
  setState,
}: {
  state: ToolbarState
  setState: (s: ToolbarState) => void
}) {
  const toggleTag = (tag: ProjectTag) => {
    setState({
      ...state,
      tags: state.tags.includes(tag) ? state.tags.filter((t) => t !== tag) : [...state.tags, tag],
    })
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl border bg-white p-4 md:flex-row md:items-center md:justify-between dark:bg-zinc-950">
      <div className="flex flex-1 items-center gap-3">
        <input
          type="search"
          placeholder="Buscar por título, tech, descrição…"
          value={state.q}
          onChange={(e) => setState({ ...state, q: e.target.value })}
          className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 md:max-w-md dark:bg-zinc-900"
        />
        <select
          value={state.sort}
          onChange={(e) => setState({ ...state, sort: e.target.value as ToolbarState["sort"] })}
          className="rounded-xl border px-3 py-2 text-sm dark:bg-zinc-900"
          aria-label="Ordenar"
        >
          <option value="recente">Mais recentes</option>
          <option value="antigo">Mais antigos</option>
          <option value="titulo">Título (A‑Z)</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2">
        {ALL_TAGS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => toggleTag(t.key)}
            className={`rounded-full border px-2 py-1 text-xs ${
              state.tags.includes(t.key)
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-700 dark:text-zinc-200"
            }`}
            aria-pressed={state.tags.includes(t.key)}
          >
            {t.label}
          </button>
        ))}
        {state.tags.length > 0 && (
          <button
            className="rounded-full border px-2 py-1 text-xs text-zinc-700 underline-offset-2 hover:underline dark:text-zinc-200"
            onClick={() => setState({ ...state, tags: [] })}
          >
            Limpar
          </button>
        )}
      </div>
    </div>
  )
}
