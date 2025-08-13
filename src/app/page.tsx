import Link from "next/link";
import Section from "@/components/Section";

export default function Home() {
  return (
    
    <section className="page-container section-pad">
      <h1 className="text-4xl md:text-6xl text-primary">agora vai? 💚💜</h1>
      <p className="text-muted mt-2">
        se isso estiver acinzentado, o Tailwind está rodando com tokens v4.
      </p>
      <div className="mt-4 h-12 border border-border hover:shadow-soft" />
      <div className="mt-4 bg-secondary/10 text-secondary rounded p-3">
        teste de bg/text com secondary
      </div>
      <div className="mt-4 bg-red-500 text-white rounded p-3">
        teste direto: bg-red-500 (classe padrão do Tailwind)
      </div>
    </section>
    // <Section>
    //   <div className="page-container">
        
    //     <h1 className="text-4xl md:text-6xl text-primary">Agora vai! 💚💜</h1>
    //     <p className="text-muted">Texto em “muted” deve aparecer acinzentado.</p>
    //     <div className="h-10 border border-border mt-4" />

    //     <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
    //       Tech • Science • Creativity — <span className="text-primary">maker</span> vibes
    //       com toque <span className="text-secondary">acadêmico</span>.
    //     </h1>

    //     <p className="mt-4 text-lg text-muted max-w-2xl">
    //       Ph.D. em Física Aplicada à Medicina e Biologia (USP). Desenvolvedor focado em Web,
    //       Dados, Eletrônica e Arte Computacional.
    //     </p>

    //     <div className="mt-8 flex gap-4">
    //       <Link href="/projects" className="btn btn-primary">Ver projetos</Link>
    //       <Link href="/writing" className="btn btn-ghost">Ler escritos</Link>
    //     </div>
        
    //   </div>
    // </Section>
  );
}
