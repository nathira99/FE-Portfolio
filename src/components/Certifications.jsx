export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">
          Certifications
        </h2>

        <div className="max-w-3xl border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-xl p-6">
          <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">
            Full Stack Development – GUVI & HCL
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-2">
            Focus on REST APIs, backend architecture, and real-time systems.
          </p>

          <p className="text-sm text-zinc-500 mb-4">
            2025
          </p>

          <a  
            href="https://drive.google.com/file/d/1UsrHOOUWm9nYBDmM1uQDpunUjwjJLqKi/preview"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-700 dark:text-zinc-300 hover:border-violet-400 hover:text-violet-600 transition"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}