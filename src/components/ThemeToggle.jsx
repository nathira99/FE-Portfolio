import { LucideSun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-zinc-400 hover:text-violet-400 transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? 
    <LucideSun className="w-6 h-6 text-yellow-200" /> :
    <Moon className="w-6 h-6 text-slate-900" />
  }
    </button>
  );
}