"use client"

import Image from "next/image"
import Link from "next/link"

import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
      {/* <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"> */}
      {project.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      )}

      <div className="flex flex-col gap-3 p-4">
        <header className="flex items-start justify-between gap-3">
          <h3 className="text-lg leading-tight font-semibold tracking-tight">
            {project.title}
            {project.year && (
              <span className="ml-2 align-middle text-sm font-normal text-zinc-500 dark:text-zinc-400">
                • {project.year}
              </span>
            )}
          </h3>
        </header>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.shortDescription}</p>
        {project.highlights && project.highlights.length > 0 && (
          <ul className="list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="bg-brand-50 text-brand-600 dark:border-brand-600/30 dark:bg-brand-600/15 dark:text-brand-200 rounded-full border border-transparent px-2 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <footer className="mt-1 flex flex-wrap gap-3">
          {project.links?.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-brand-600 dark:text-brand-500 text-sm underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </Link>
          ))}
        </footer>
      </div>
    </article>
  )
}
