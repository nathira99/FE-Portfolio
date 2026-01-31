import {
  Monitor,
  Server,
  Database,
  Wrench,
  Plug,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: Monitor,
      items: ["React", "JavaScript (ES6+)", "HTML5", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: Database,
      items: ["MongoDB", "Mongoose", "MySQL"],
    },
    {
      title: "Tools",
      icon: Wrench,
      items: ["Git & GitHub", "Postman", "Netlify", "Render"],
    },
    {
      title: "Integrations",
      icon: Plug,
      items: ["JWT Authentication", "Socket.io", "Cloudinary", "Razorpay"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-2">
          Skills
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          Technologies and tools I’ve used to build full-stack MERN applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className={`rounded-xl p-6 border
                  ${
                    group.highlight
                      ? "border-violet-300/60 dark:border-violet-500/30 bg-violet-50/40 dark:bg-zinc-900"
                      : "border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                  }`}
              >
                {/* Title with icon */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    size={20}
                    className="text-violet-500 dark:text-violet-400"
                  />
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {group.title}
                  </h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="
                        text-xs font-medium
                        px-3 py-1
                        rounded-full
                        border border-zinc-300 dark:border-zinc-700
                        text-zinc-700 dark:text-zinc-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}