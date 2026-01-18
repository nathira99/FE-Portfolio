import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between">
        <span className="font-semibold text-xl">Nathira Farveen</span>
        <div className="flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-violet-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-violet-400">
            Skills
          </a>
          <a href="#certifications" className="hover:text-violet-400">
            Certifications
          </a>
          <a href="#contact" className="hover:text-violet-400">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
