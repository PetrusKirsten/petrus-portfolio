import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">

      <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
        Tech • Science • Creativity — <span className="text-primary">maker</span> vibes
        com toque <span className="text-secondary">acadêmico</span>.
      </h1>

      <p className="mt-4 text-lg text-muted max-w-2xl">
        Ph.D. em Física Aplicada à Medicina e Biologia (USP). Desenvolvedor focado em Web,
        Dados, Eletrônica e Arte Computacional.
      </p>

      <div className="mt-8 flex gap-4">
        <Link href="/projects" className="rounded-md border border-border px-4 py-2 hover:shadow-soft">
          Ver projetos
        </Link>
        <Link href="/writing" className="rounded-md border border-border px-4 py-2 hover:shadow-soft">
          Ler escritos
        </Link>
      </div>

    </section>
  );
}
