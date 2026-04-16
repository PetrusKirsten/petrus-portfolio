import { Suspense } from "react"
import { projects as allProjects } from "@/data/projects"
import ProjectsClient from "./projects-client"

export const metadata = {
  title: "Projects",
  description:
    "Featured work, scientific projects, coursework, and ongoing explorations across data, software, and scientific computing.",
}

export default function ProjectsPage() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Projects</h1>

        <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
          A curated portfolio spanning real applications, scientific and research work, coursework,
          and evolving technical explorations.
        </p>
      </div>

      <div className="mt-10">
        <Suspense fallback={<div>Loading…</div>}>
          <ProjectsClient initialProjects={allProjects} />
        </Suspense>
      </div>
    </section>
  )
}
