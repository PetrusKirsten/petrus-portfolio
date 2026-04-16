import Link from "next/link"

export function ContactSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="rounded-3xl border border-zinc-200 p-8 md:p-10 dark:border-zinc-800">
        <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
          Contact
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Let&apos;s talk.</h2>

        <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-700 dark:text-zinc-300">
          I&apos;m open to opportunities, collaborations, and conversations around technology, data,
          software, and technically meaningful projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
          <Link href="/projects" className="btn btn-outline">
            View work
          </Link>
        </div>
      </div>
    </section>
  )
}
