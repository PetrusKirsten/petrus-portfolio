import Link from "next/link";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Section>
      <div className="page-container">
        
        <h1 className="text-4xl md:text-6xl text-primary">Agora vai! 💚💜</h1>
        <p className="text-muted">Texto em “muted” deve aparecer acinzentado.</p>
        <div className="h-10 border border-border mt-4" />

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Tech • Science • Creativity — <span className="text-primary">maker</span> vibes
          com toque <span className="text-secondary">acadêmico</span>.
        </h1>

        <p className="mt-4 text-lg text-muted max-w-2xl">
          Ph.D. em Física Aplicada à Medicina e Biologia (USP). Desenvolvedor focado em Web,
          Dados, Eletrônica e Arte Computacional.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/projects" className="btn btn-primary">Ver projetos</Link>
          <Link href="/writing" className="btn btn-ghost">Ler escritos</Link>
        </div>
        
      </div>
    </Section>
  );
}
