import Link from "next/link"

import { FeaturedProjects } from "@/components/featured-projects"
import { projects } from "@/data/projects"

export default function HomePage() {
  const featured = (
    projects.some((p) => p.featured)
      ? projects.filter((p) => p.featured)
      : [...projects].sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
  ).slice(0, 3)

  return (
    <>
      <section className="bg-hero rounded-3xl py-24 md:py-28">
        <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">
          <span className="from-primary-600 dark:from-primary-400 bg-gradient-to-b to-zinc-800 bg-clip-text text-transparent dark:to-zinc-200">
            Físico Médico → Data/ML Engineer & Full‑stack
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
          Doutorando em Física Aplicada (USP + CentraleSupélec). Experiência em Python, C++, MATLAB,
          eletrônica/automação, visão computacional e ciência de dados. Portfólio com projetos, CV e
          certificados.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projetos" className="btn btn-primary">
            Ver Projetos
          </Link>
          <Link href="/cv" className="btn btn-outline">
            CV &amp; Certificados
          </Link>
          <Link href="/contato" className="btn btn-outline">
            Contato
          </Link>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Projetos em destaque</h2>
          <Link
            href="/projetos"
            className="text-primary-600 dark:text-primary-400 text-sm underline-offset-2 hover:underline"
          >
            Ver todos →
          </Link>
        </div>
        <FeaturedProjects items={featured} />
      </section>
    </>
  )
}
