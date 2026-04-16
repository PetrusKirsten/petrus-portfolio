import Link from "next/link"

export function ResearchSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
            Research
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Scientific training as technical depth
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-700 dark:text-zinc-300">
            My academic path is not separate from the rest of my portfolio — it shapes how I analyze
            problems, interpret data, structure experiments, and build solutions with more rigor and
            depth.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Highlights</p>

          <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            <li>Ph.D. candidate in Applied Physics to Medicine and Biology</li>
            <li>Experience with analysis, modeling, and technical interpretation</li>
            <li>Strong foundation for data, visualization, and scientific software</li>
          </ul>

          <Link
            href="/about"
            className="text-primary-600 dark:text-primary-400 mt-5 inline-block text-sm underline-offset-2 hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </section>
  )
}
