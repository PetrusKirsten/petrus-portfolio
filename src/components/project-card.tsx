"use client"

import Image from "next/image"
import Link from "next/link"

import type { Project } from "@/data/projects"

const tagLabels: Record<string, string> = {
  data: "Data",
  ml: "ML",
  simulation: "Simulation",
  api: "API",
  dashboard: "Dashboard",
  "scientific-computing": "Scientific Computing",
  research: "Research",
  health: "Health",
  fullstack: "Full-stack",
  backend: "Backend",
  testing: "Testing",
  viz: "Visualization",
}

type ProjectCardProps = {
  project: Project
  variant?: "featured" | "default"
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isFeatured = variant === "featured"

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 ${
        isFeatured ? "p-6 md:p-7" : "p-5"
      }`}
    >
      {project.image && (
        <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-2xl">
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

      <div className="flex flex-col gap-3">
        <header>
          <h3
            className={`leading-tight font-semibold tracking-tight ${
              isFeatured ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
        </header>

        <p
          className={`text-zinc-600 dark:text-zinc-400 ${
            isFeatured ? "text-base leading-8" : "text-sm leading-7"
          }`}
        >
          {project.shortDescription}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul
            className={`list-inside list-disc text-zinc-600 dark:text-zinc-400 ${
              isFeatured ? "text-sm leading-7" : "text-sm leading-6"
            }`}
          >
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="bg-primary-50 text-primary-600 dark:border-primary-600/30 dark:bg-primary-600/15 dark:text-primary-200 rounded-full border border-transparent px-2.5 py-1 text-xs"
            >
              {tagLabels[t] ?? t}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <footer className="mt-2 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-primary-600 dark:text-primary-400 text-sm underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </Link>
            ))}
          </footer>
        )}
      </div>
    </article>
  )
}
