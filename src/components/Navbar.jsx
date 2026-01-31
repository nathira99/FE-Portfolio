import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between">
        <a href="/">
          <span className="font-semibold text-xl">
            Nathira{" "}
            <span className="text-violet-700 dark:text-violet-400">
              Farveen
            </span>
          </span>
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-violet-400 max-md:hidden">
            Projects
          </a>
          <a href="#skills" className="hover:text-violet-400 max-md:hidden">
            Skills
          </a>
          <a
            href="#certifications"
            className="hover:text-violet-400 max-md:hidden"
          >
            Certifications
          </a>
          <a href="#contact" className="hover:text-violet-400 max-md:hidden">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
