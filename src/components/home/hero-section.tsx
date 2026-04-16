import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-hero rounded-2xl px-8 py-10 shadow-sm md:px-12 md:py-14 md:shadow-md">
      <div className="max-w-4xl">
        <p className="text-sm tracking-[0.18em] text-zinc-600 uppercase dark:text-zinc-300">
          Science + Data + Software
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
          Physicist, researcher, and developer building data-oriented technical solutions.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-200">
          Ph.D. candidate in Applied Physics, Data Science undergraduate, and developer focused on
          analysis, visualization, software, and technically grounded systems.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="btn btn-primary">
            View projects
          </Link>

          <Link href="/cv" className="btn btn-outline">
            CV & background
          </Link>

          <Link href="/contact" className="btn btn-outline">
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
