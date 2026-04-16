"use client"

import { useMemo } from "react"

import { ALL_TAGS, type Project, type ProjectTag } from "@/data/projects"

export type ToolbarState = {
  q: string
  tags: ProjectTag[]
  sort: "recent" | "oldest" | "title"
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
      case "recent":
        filtered = filtered.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
        break
      case "oldest":
        filtered = filtered.sort((a, b) => (a.year ?? 0) - (b.year ?? 0))
        break
      case "title":
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
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            type="search"
            placeholder="Search by title, tech, or description…"
            value={state.q}
            onChange={(e) => setState({ ...state, q: e.target.value })}
            className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm ring-0 transition-shadow outline-none focus:shadow-[0_0_0_3px_rgba(99,102,241,0.25)] md:max-w-md dark:border-zinc-800 dark:bg-zinc-900"
          />

          <select
            value={state.sort}
            onChange={(e) => setState({ ...state, sort: e.target.value as ToolbarState["sort"] })}
            className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-zinc-800 dark:bg-zinc-900"
            aria-label="Sort projects"
          >
            <option value="recent">Most recent</option>
            <option value="oldest">Oldest</option>
            <option value="title">Title (A–Z)</option>
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
                className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                  active
                    ? "border-primary-600 bg-primary-50 text-primary-700 dark:border-primary-600 dark:bg-primary-600/20 dark:text-primary-200"
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
              className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-700 underline-offset-2 hover:bg-zinc-50 hover:underline dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
              onClick={() => setState({ ...state, tags: [] })}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
