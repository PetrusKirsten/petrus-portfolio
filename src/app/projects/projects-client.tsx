"use client"

import { useMemo, useState } from "react"

import { Project, ProjectCategory } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { ProjectListItem } from "@/components/project-list-item"
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
    return categoryOrder.reduce<Record<ProjectCategory, Project[]>>(
      (acc, category) => {
        acc[category] = filtered.filter((project) => project.category === category)
        return acc
      },
      {
        featured: [],
        research: [],
        coursework: [],
        experimental: [],
      },
    )
  }, [filtered])

  return (
    <div className="flex flex-col gap-6">
      <ProjectsToolbar state={state} setState={setState} />

      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        Showing <strong>{count}</strong> of {total} projects
      </div>

      {count === 0 ? (
        <p className="rounded-xl border p-6 text-sm text-zinc-600 dark:text-zinc-400">
          No projects found with these filters. Try clearing tags or adjusting your search.
        </p>
      ) : (
        <div className="flex flex-col gap-14">
          {grouped.featured.length > 0 && (
            <section className="flex flex-col gap-5">
              <div className="max-w-3xl">
                <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
                  Main portfolio
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Featured Projects</h2>
                <p className="mt-3 text-base leading-8 text-zinc-600 dark:text-zinc-400">
                  The main body of my portfolio — projects that best represent how I work across
                  software, data, and scientific computing.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {grouped.featured.map((p) => (
                  <ProjectCard key={p.id} project={p} variant="featured" />
                ))}
              </div>
            </section>
          )}

          {grouped.research.length > 0 && (
            <section className="flex flex-col gap-5">
              <div className="max-w-3xl">
                <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
                  Technical depth
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Scientific / Research Work
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  Research-oriented projects that strengthen my profile through technical rigor,
                  analytical depth, and applied scientific workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {grouped.research.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </section>
          )}

          {grouped.coursework.length > 0 && (
            <section className="flex flex-col gap-5">
              <div className="max-w-3xl">
                <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
                  Learning path
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Coursework / Practice
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  Selected repositories from structured study and technical practice. These support
                  my development, but are not presented as the core of the portfolio.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {grouped.coursework.map((p) => (
                  <ProjectListItem key={p.id} project={p} />
                ))}
              </div>
            </section>
          )}

          {grouped.experimental.length > 0 && (
            <section className="flex flex-col gap-5">
              <div className="max-w-3xl">
                <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
                  In progress
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Experimental / Ongoing
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  Exploratory directions and evolving ideas that may grow into stronger technical or
                  research-driven projects over time.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {grouped.experimental.map((p) => (
                  <ProjectListItem key={p.id} project={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  )
}
