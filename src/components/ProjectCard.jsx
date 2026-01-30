export default function ProjectCard({ project }) {
  const isFeatured = project.featured;

  return (
    <div
      className={`
        bg-white dark:bg-zinc-900
        border border-zinc-300 dark:border-zinc-800
        rounded-3xl p-8
        ${isFeatured ? "md:col-span-2 ring-1 ring-violet-500/30" : ""}
      `}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* IMAGE — 1/3 */}
        <div className="md:col-span-1">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-64 object-cover rounded-xl border border-zinc-200 dark:border-zinc-800"
          />
        </div>

        {/* CONTENT — 2/3 */}
        <div className="md:col-span-2 mx-10">
          <h3 className="text-xl font-semibold mb-1">
            {project.title}
          </h3>

          <p className="text-zinc-500 mb-4">
            {project.subtitle}
          </p>

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
                className="border border-zinc-300 dark:border-zinc-700 px-3 py-1 rounded-full text-zinc-700 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6 text-sm font-medium">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="hover:text-violet-400 transition"
              >
                Live
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noreferrer"
                className="hover:text-violet-400 transition"
              >
                Source
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}