import Link from "next/link"

import { HeroSection } from "@/components/home/hero-section"
import { ProfileSection } from "@/components/home/profile-section"
import { ResearchSection } from "@/components/home/research-section"
import { CvSection } from "@/components/home/cv-section"
import { ContactSection } from "@/components/home/contact-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { projects } from "@/data/projects"

export default function HomePage() {
  const featured = projects.filter((p) => p.category === "featured").slice(0, 3)

  return (
    <>
      <HeroSection />
      <ProfileSection />

      <section className="py-10 md:py-14">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
              Selected work
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Featured projects</h2>
          </div>

          <Link
            href="/projects"
            className="text-primary-600 dark:text-primary-400 text-sm underline-offset-2 hover:underline"
          >
            View all →
          </Link>
        </div>

        <FeaturedProjects items={featured} />
      </section>

      <ResearchSection />
      <CvSection />
      <ContactSection />
    </>
  )
}
