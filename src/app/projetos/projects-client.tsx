"use client"

import { useMemo, useState } from "react"

import { Project } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import {
  ProjectsToolbar,
  useFilteredProjects,
  type ToolbarState,
} from "@/components/projects-toolbar"

export default function ProjectsClient({ initialProjects }: { initialProjects: Project[] }) {
  const [state, setState] = useState<ToolbarState>({ q: "", tags: [], sort: "recente" })

  const filtered = useFilteredProjects(initialProjects, state)
  const total = initialProjects.length
  const count = filtered.length

  // Agrupar por ano (opcional, deixa a listagem mais organizada)
  const groups = useMemo(() => {
    const map = new Map<number | "sem-ano", Project[]>()
    for (const p of filtered) {
      const key = p.year ?? ("sem-ano" as const)
      map.set(key, [...(map.get(key) ?? []), p])
    }
    // ordenar chaves (anos desc, sem-ano no fim)
    const ordered = Array.from(map.entries()).sort((a, b) => {
      if (a[0] === "sem-ano") return 1
      if (b[0] === "sem-ano") return -1
      return (b[0] as number) - (a[0] as number)
    })
    return ordered
  }, [filtered])

  return (
    <div className="flex flex-col gap-4">
      <ProjectsToolbar state={state} setState={setState} />
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        Mostrando <strong>{count}</strong> de {total} projeto{total !== 1 ? "s" : ""}
      </div>

      {count === 0 ? (
        <p className="rounded-xl border p-6 text-sm text-zinc-600 dark:text-zinc-400">
          Nenhum projeto encontrado com esses filtros. Tenta limpar as tags ou ajustar a busca.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {groups.map(([year, items]) => (
            <section key={String(year)} className="flex flex-col gap-4">
              {year !== "sem-ano" && <h2 className="text-xl font-semibold">{year}</h2>}
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
