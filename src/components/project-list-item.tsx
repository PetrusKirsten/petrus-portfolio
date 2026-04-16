import Link from "next/link"

import type { Project } from "@/data/projects"

type ProjectListItemProps = {
  project: Project
}

export function ProjectListItem({ project }: ProjectListItemProps) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <h3 className="text-base font-semibold tracking-tight md:text-lg">{project.title}</h3>

          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {project.shortDescription}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-3 list-inside list-disc text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {project.highlights.slice(0, 2).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex shrink-0 flex-wrap gap-3">
            {project.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-primary-600 dark:text-primary-400 text-sm underline-offset-2 hover:underline"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
