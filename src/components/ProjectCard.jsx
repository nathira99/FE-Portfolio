export default function ProjectCard({ project }) {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm ${project.featured ? "md:col-span-2 ring-1 ring-violet-500/30" : ""}`}
    >
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

      <p className="text-zinc-500 mb-4">{project.subtitle}</p>

      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
        {project.description}
      </p>

      <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1 mb-6">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 mb-6 text-sm">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-violet-400 border border-zinc-300 dark:border-zinc-700 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-6 text-sm font-medium">
        {project.live && (
          <a
            href={project.live}
            className="hover:text-violet-500"
            target="_blank"
          >
            Live
          </a>
        )}
        {project.frontend && (
          <a
            href={project.frontend}
            className="hover:text-violet-500"
            target="_blank"
          >
            Frontend
          </a>
        )}
        {project.source && (
          <a
            href={project.source}
            className="hover:text-violet-500"
            target="_blank"
          >
            Source
          </a>
        )}
        {project.backend && (
          <a
            href={project.backend}
            className="hover:text-violet-500"
            target="_blank"
          >
            Backend
          </a>
        )}
      </div>
    </div>
  );
}
