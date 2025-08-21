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
    <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-1 items-center gap-3">
        <input
          type="search"
          placeholder="Buscar por título, tech, descrição…"
          value={state.q}
          onChange={(e) => setState({ ...state, q: e.target.value })}
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm ring-0 transition-shadow outline-none focus:shadow-[0_0_0_3px_rgba(99,102,241,0.25)] md:max-w-md dark:border-zinc-800 dark:bg-zinc-900"
        />
        <select
          value={state.sort}
          onChange={(e) => setState({ ...state, sort: e.target.value as ToolbarState["sort"] })}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-zinc-800 dark:bg-zinc-900"
          aria-label="Ordenar"
        >
          <option value="recente">Mais recentes</option>
          <option value="antigo">Mais antigos</option>
          <option value="titulo">Título (A‑Z)</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2">
        {ALL_TAGS.map((t) => {
          const active = state.tags.includes(t.key)
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => toggleTag(t.key)}
              className={`rounded-full border px-2 py-1 text-xs transition-colors ${
                active
                  ? "border-brand-600 bg-brand-50 text-brand-700 dark:border-brand-600 dark:bg-brand-600/20 dark:text-brand-200"
                  : "border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
              }`}
              aria-pressed={active}
            >
              {t.label}
            </button>
          )
        })}
        {state.tags.length > 0 && (
          <button
            className="rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-700 underline-offset-2 hover:bg-zinc-50 hover:underline dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
            onClick={() => setState({ ...state, tags: [] })}
          >
            Limpar
          </button>
        )}
      </div>
    </div>
  )
}
