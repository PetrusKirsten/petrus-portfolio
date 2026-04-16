export function ProfileSection() {
  return (
    <section className="border-b border-zinc-200 py-10 md:py-12 dark:border-zinc-800">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-sm tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-400">
            Profile
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            I work at the intersection of science, data, and software, combining scientific
            training, analytical thinking, and the development of real technical tools.
          </p>
        </div>

        <div>
          <p className="text-sm tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-400">
            Focus
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Data science, technical analysis, visualization, scientific applications, automation,
            and software built with structural clarity and rigor.
          </p>
        </div>

        <div>
          <p className="text-sm tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-400">
            Direction
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            I am building a professional path in technology grounded in analytical depth, technical
            quality, and meaningful real-world impact.
          </p>
        </div>
      </div>
    </section>
  )
}
