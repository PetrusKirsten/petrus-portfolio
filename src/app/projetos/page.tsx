import { Suspense } from "react"
import { projects as allProjects } from "@/data/projects"
import ProjectsClient from "./projects-client"

export const metadata = {
  title: "Projetos",
  description: "Projetos em Data/ML, Visão Computacional, Eletrônica e Full‑stack.",
}

export default function ProjetosPage() {
  return (
    <section className="py-8 md:py-12">
      <h1 className="mb-2 text-3xl font-semibold">Projetos</h1>
      <p className="mb-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Seleção de trabalhos em ciência de dados, ML, visão computacional, eletrônica/automação e
        full‑stack.
      </p>

      <Suspense fallback={<div>Carregando…</div>}>
        {/* Passa dados estáticos pro client component (interativo) */}
        <ProjectsClient initialProjects={allProjects} />
      </Suspense>
    </section>
  )
}
