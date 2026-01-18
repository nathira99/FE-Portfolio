import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold tracking-tight mb-2">
        My Projects
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 mb-12">
        Real-world applications I’ve built
      </p>

      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}