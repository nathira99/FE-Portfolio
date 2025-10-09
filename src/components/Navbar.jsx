import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* 🔹 Logo with Profile Icon */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-teal-400 hover:text-teal-300 transition"
        >
          <span>Nathira Farveen</span>
        </Link>

        {/* 🔹 Menu Links */}
        <div className="flex gap-6">
          {["Home", "About", "Projects", "Contact"].map((page) => (
            <NavLink
              key={page}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-teal-400 transition ${
                  isActive ? "text-teal-400" : "text-gray-300"
                }`
              }
            >
              {page}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
