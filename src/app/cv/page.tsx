import Image from "next/image"
import Link from "next/link"
import { cvData } from "@/data/cv"

export const metadata = {
  title: "CV",
  description:
    "Education, skills, certifications, and professional background across science, data, and software.",
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function CompactTrainingItem({
  item,
}: {
  item: {
    name: string
    issuer: string
    year?: number
    link?: string
    badgeImage?: string
  }
}) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          {item.badgeImage ? (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src={item.badgeImage}
                alt={item.name}
                fill
                className="object-contain p-2"
                sizes="48px"
              />
            </div>
          ) : null}

          <div>
            <h3 className="text-base font-semibold tracking-tight">{item.name}</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {item.issuer}
              {item.year ? ` • ${item.year}` : ""}
            </p>
          </div>
        </div>

        {item.link ? (
          <Link
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-primary-600 dark:text-primary-400 text-sm underline-offset-2 hover:underline"
          >
            View certificate
          </Link>
        ) : null}
      </div>
    </article>
  )
}

export default function CvPage() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">CV</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Education, skills, and technical background
        </h1>

        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          {cvData.summary}
        </p>

        {cvData.cvDownloadLink ? (
          <div className="mt-6">
            <Link
              href={cvData.cvDownloadLink}
              target="_blank"
              rel="noreferrer"
              className="text-primary-600 dark:text-primary-400 text-sm underline-offset-2 hover:underline"
            >
              Download CV →
            </Link>
          </div>
        ) : null}
      </div>

      <div className="mt-14 flex flex-col gap-14">
        <section className="flex flex-col gap-5">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
              Education
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Academic formation</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {cvData.education.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-start gap-3">
                  {item.badgeImage ? (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                      <Image
                        src={item.badgeImage}
                        alt={item.institution}
                        fill
                        className="object-contain p-0"
                        sizes="48px"
                      />
                    </div>
                  ) : null}

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>

                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {item.details}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
              Skills
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Technical toolkit</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SkillGroup title="Languages" items={cvData.technicalSkills.languages} />
            <SkillGroup title="Frameworks" items={cvData.technicalSkills.frameworks} />
            <SkillGroup title="Data & science" items={cvData.technicalSkills.dataAndScience} />
            <SkillGroup title="Tools" items={cvData.technicalSkills.tools} />
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
              Certifications
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Featured training and bootcamps
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Larger and more structured training programs that represent sustained technical study.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {cvData.featuredCertifications.map((item) => (
              <article
                key={`${item.name}-${item.issuer}`}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    {item.badgeImage ? (
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                        <Image
                          src={item.badgeImage}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                          sizes="56px"
                        />
                      </div>
                    ) : null}

                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>

                      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                        {item.issuer}
                        {item.year ? ` • ${item.year}` : ""}
                        {item.hours ? ` • ${item.hours}` : ""}
                      </p>
                    </div>
                  </div>

                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-600 dark:text-primary-400 text-sm underline-offset-2 hover:underline"
                    >
                      View certificate
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
              Additional training
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Selected courses and focused study
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Complementary coursework that supports my development in backend, databases, testing,
              and data-oriented workflows.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {cvData.additionalTraining.map((item) => (
              <CompactTrainingItem key={`${item.name}-${item.issuer}`} item={item} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 p-8 md:p-10 dark:border-zinc-800">
          <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
            Scientific background
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Research as technical foundation
          </h2>

          <ul className="mt-6 list-inside list-disc space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {cvData.selectedBackground.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
