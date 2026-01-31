import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Name + Role */}
        <div>
          <a href="/">
          <p className="text-lg font-semibold text-violet-700 dark:text-violet-400 mb-2">
            Nathira Farveen
          </p>
          </a>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Full Stack MERN Developer — building reliable, secure, and scalable
            web applications.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-3">
            Explore
          </p>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <a href="#projects" className="hover:text-violet-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-violet-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="hover:text-violet-400 transition"
              >
                Certifications
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-violet-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact / Social */}
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-3">
            Connect
          </p>

          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/nathira99"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-violet-400 transition"
            >
              <Github size={16} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nathira-farveen"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-violet-400 transition"
            >
              <Linkedin size={16} /> LinkedIn
            </a>


              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nathirafarveen99@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-violet-400 transition"
              >
                <Mail size={16} />
                nathirafarveen99@gmail.com
              </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 py-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Nathira Farveen. Built with React &
        Tailwind CSS.
      </div>
    </footer>
  );
}
