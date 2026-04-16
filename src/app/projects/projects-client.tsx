"use client"

import { useMemo, useState } from "react"

import { Project, ProjectCategory, CATEGORY_LABELS } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import {
  ProjectsToolbar,
  useFilteredProjects,
  type ToolbarState,
} from "@/components/projects-toolbar"

const categoryOrder: ProjectCategory[] = ["featured", "research", "coursework", "experimental"]

export default function ProjectsClient({ initialProjects }: { initialProjects: Project[] }) {
  const [state, setState] = useState<ToolbarState>({ q: "", tags: [], sort: "recent" })

  const filtered = useFilteredProjects(initialProjects, state)
  const total = initialProjects.length
  const count = filtered.length

  const grouped = useMemo(() => {
    return categoryOrder
      .map((category) => ({
        category,
        items: filtered.filter((project) => project.category === category),
      }))
      .filter((group) => group.items.length > 0)
  }, [filtered])

  return (
    <div className="flex flex-col gap-4">
      <ProjectsToolbar state={state} setState={setState} />

      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        Showing <strong>{count}</strong> of {total} project{total !== 1 ? "s" : ""}
      </div>

      {count === 0 ? (
        <p className="rounded-xl border p-6 text-sm text-zinc-600 dark:text-zinc-400">
          No projects found with these filters. Try clearing tags or adjusting your search.
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          {grouped.map(({ category, items }) => (
            <section key={category} className="flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {CATEGORY_LABELS[category]}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
