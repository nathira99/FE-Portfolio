export default function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 max-sm:px-2">
        <div className="
          bg-white dark:bg-transparent
          border border-zinc-300 dark:border-transparent
          rounded-3xl
          p-10 md:p-14
        ">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-900 dark:text-zinc-100">
              Full Stack MERN Developer
            </h1>

            <p className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-8">
              I build production-ready web applications with REST APIs,
              JWT authentication, role-based access control, and scalable
              backend architecture using the MERN stack.
            </p>

            <div className="flex gap-4 mb-10">
              <a
                href="#projects"
                className="bg-violet-500 hover:bg-violet-400 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                View Projects
              </a>

              <a
                href="https://drive.google.com/file/d/1UsrHOOUWm9nYBDmM1uQDpunUjwjJLqKi/preview"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700
                           font-medium text-zinc-800 dark:text-zinc-300
                           hover:border-violet-400 hover:text-violet-400 transition"
              >
                View Resume
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">3+</p>
                <p>Projects</p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">MERN</p>
                <p>Full Stack</p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  JWT & RBAC
                </p>
                <p>Authentication</p>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  Socket.io
                </p>
                <p>Real-Time Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}