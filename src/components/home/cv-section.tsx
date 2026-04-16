import Link from "next/link"

export function CvSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mb-6">
        <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
          Credentials
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          Education, strengths, and background
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h3 className="text-base font-semibold">Education</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            <li>Ph.D. candidate in Applied Physics to Medicine and Biology</li>
            <li>B.Sc. in Physics</li>
            <li>Data Science undergraduate</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h3 className="text-base font-semibold">Strengths</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            <li>Data analysis and visualization</li>
            <li>Scientific computing and automation</li>
            <li>Full-stack development and technical tools</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h3 className="text-base font-semibold">CV</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            Access a more structured view of my academic background, certifications, and
            professional profile.
          </p>

          <Link
            href="/cv"
            className="text-primary-600 dark:text-primary-400 mt-5 inline-block text-sm underline-offset-2 hover:underline"
          >
            Open CV →
          </Link>
        </div>
      </div>
    </section>
  )
}
