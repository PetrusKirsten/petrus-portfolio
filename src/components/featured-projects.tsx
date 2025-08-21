import { Project } from "@/data/projects"
import { ProjectCard } from "./project-card"

export function FeaturedProjects({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}
