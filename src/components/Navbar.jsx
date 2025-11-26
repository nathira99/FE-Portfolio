import { useState } from "react";
import { UserRound, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900 text-gray-100 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-teal-400">
          <UserRound className="w-6 h-6" />
          Nathira Farveen
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-teal-400" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Items */}
        <div
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent px-6 md:px-0 py-6 md:py-0 transition-all ${
            open ? "flex" : "hidden"
          }`}
        >
          {["home", "about", "projects", "contact"].map((section) => (
            <button
              key={section}
              className="text-lg font-medium text-gray-300 hover:text-teal-400 transition"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
