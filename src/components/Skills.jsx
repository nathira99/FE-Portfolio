export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-2">
          Skills
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          Technologies and capabilities I use to design, build, and deploy
          full-stack web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Frontend */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
            <h3 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
              Frontend
            </h3>
            <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>Tailwind CSS</li>
              <li>Responsive UI Development</li>
              <li>Component-Based Architecture</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
            <h3 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
              Backend
            </h3>
            <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST API Design</li>
              <li>JWT Authentication</li>
              <li>Role-Based Access Control (RBAC)</li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
            <h3 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
              Database
            </h3>
            <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Schema Design</li>
              <li>CRUD Operations</li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
            <h3 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
              Tools & Platforms
            </h3>
            <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Socket.io</li>
              <li>Render</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}