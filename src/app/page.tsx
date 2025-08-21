import Link from "next/link"

import { FeaturedProjects } from "../components/featured-projects"
import { projects } from "@/data/projects"

export default function HomePage() {
  // pega 3 destaques: se tiverem featured=true usa, senão pega mais recentes
  const featured = (
    projects.some((p) => p.featured)
      ? projects.filter((p) => p.featured)
      : [...projects].sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
  ).slice(0, 3)

  return (
    <>
      <section className="py-24 md:py-28">
        <h1 className="max-w-3xl bg-gradient-to-b from-zinc-900 to-zinc-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl dark:from-zinc-100 dark:to-zinc-400">
          Físico Médico → Data/ML Engineer & Full‑stack
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Doutorando em Física Aplicada (USP + CentraleSupélec). Experiência em Python, C++, MATLAB,
          eletrônica/automação, visão computacional e ciência de dados. Portfólio com projetos, CV e
          certificados.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projetos"
            className="border-brand-600 bg-brand-600 rounded-xl border px-4 py-2 font-medium text-white hover:opacity-95"
          >
            Ver Projetos
          </Link>
          <Link
            href="/cv"
            className="rounded-xl border px-4 py-2 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            CV &amp; Certificados
          </Link>
          <Link
            href="/contato"
            className="rounded-xl border px-4 py-2 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Contato
          </Link>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Projetos em destaque</h2>
          <Link
            href="/projetos"
            className="text-brand-600 dark:text-brand-500 text-sm underline-offset-2 hover:underline"
          >
            Ver todos →
          </Link>
        </div>
        <FeaturedProjects items={featured} />
      </section>
    </>
  )
}
