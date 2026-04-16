import Link from "next/link"

import { publications, researchOverview, scientificAnalysisProjects } from "@/data/research"

function publicationTypeLabel(type: string) {
  switch (type) {
    case "article":
      return "Article"
    case "conference":
      return "Conference"
    case "abstract":
      return "Abstract"
    case "poster":
      return "Poster"
    case "report":
      return "Report"
    default:
      return type
  }
}

export const metadata = {
  title: "Research",
  description:
    "Scientific work, publications, and computational analysis across physics, data, and technical research workflows.",
}

export default function ResearchPage() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
          Research
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">{researchOverview.title}</h1>

        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          {researchOverview.intro}
        </p>

        <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          {researchOverview.bridge}
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-14">
        <section className="flex flex-col gap-5">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
              Publications
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Articles, conference works, and scientific output
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              A selected view of formal scientific production, including papers, conference
              contributions, abstracts, and related outputs.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {publications.map((item) => (
              <article
                key={`${item.title}-${item.year}`}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                        {publicationTypeLabel(item.type)}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.year}</span>
                      {item.venue ? (
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          • {item.venue}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                      {item.summary}
                    </p>
                  </div>

                  {item.link ? (
                    <div className="shrink-0">
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary-600 dark:text-primary-400 text-sm underline-offset-2 hover:underline"
                      >
                        View publication
                      </Link>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
              Computational analysis
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Programming as part of scientific work
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Beyond formal publications, a significant part of my scientific work involves building
              small computational workflows for data processing, plotting, automation, and technical
              interpretation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {scientificAnalysisProjects.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {item.summary}
                </p>

                {item.notes && item.notes.length > 0 ? (
                  <ul className="mt-4 list-inside list-disc text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {item.link ? (
                  <div className="mt-4">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-600 dark:text-primary-400 text-sm underline-offset-2 hover:underline"
                    >
                      View repository
                    </Link>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 p-8 md:p-10 dark:border-zinc-800">
          <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
            Research direction
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Science, analysis, and software in the same workflow
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
            My scientific work and technical development are deeply connected. Research gives me
            rigor, while programming helps me structure, analyze, visualize, and communicate results
            more effectively.
          </p>
        </section>
      </div>
    </section>
  )
}
