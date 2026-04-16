export default function CvPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl">
        <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">CV</p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Education, skills, and trajectory
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="text-lg font-semibold">Education</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              <li>Ph.D. candidate in Applied Physics to Medicine and Biology</li>
              <li>B.Sc. in Physics</li>
              <li>Data Science undergraduate</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="text-lg font-semibold">Skills</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              <li>Data analysis</li>
              <li>Visualization</li>
              <li>Scientific software</li>
              <li>Python, TypeScript, Next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
