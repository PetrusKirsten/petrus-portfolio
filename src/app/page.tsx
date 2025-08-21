import Link from "next/link"

export default function HomePage() {
  return (
    <section className="py-20 md:py-24">
      <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
        Físico Médico → Data/ML Engineer & Full‑stack
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
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
  )
}
