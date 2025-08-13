export default function WritingPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">

      <h2 className="text-2xl md:text-3xl font-semibold">Writing</h2>

      <p className="mt-2 text-muted">Notas, tutoriais e reflexões.</p>

      <p className="mt-6">Em breve: listagem automática de posts em MDX.</p>
      
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* conteúdo MDX aqui */}
      </article>

    </section>
  );
}