import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Web • Data • IoT • Art • Research">

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
      
    </Section>
  );
}
