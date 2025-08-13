import SectionTitle from "@/components/SectionTitle";
import ProjectCard  from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">

      <SectionTitle>Projects</SectionTitle>
      <p className="mt-2 text-muted">Web • Data • IoT • Art • Research</p>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
      
    </section>
  );
}
