import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Linkedin, Github, Mail, Handshake } from "lucide-react"; // ✨ icons
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
        {/* 🌟 Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md fixed top-0 w-full z-50">
          <h1 className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition">
            Nathira Farveen 
          </h1>
          <ul className="flex gap-6 text-lg">
            <li><Link to="/" className="hover:text-teal-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400 transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-teal-400 transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400 transition">Contact</Link></li>
          </ul>
        </nav>

        {/* 🔄 Routes */}
        <main className="flex-grow pt-24 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* ⚡ Footer */}
        <footer className="bg-gray-800 py-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 mb-3">
            © {new Date().getFullYear()} <span className="text-teal-400 font-semibold">Nathira Farveen</span> — MERN Stack Developer
          </p>

          {/* 🌐 Social Icons */}
          <div className="flex justify-center gap-6 text-gray-400 mb-3">
            <a
              href="https://www.linkedin.com/in/nathira-farveen-325b88308/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/nathira99"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:nathirafarveen99@gmail.com"
              className="hover:text-teal-400 transition"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Built with care using React, Tailwind CSS & Framer Motion
          </p>
        </footer>
        {/* ✅ Toast notifications */}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </Router>
  );
}

export default App;
