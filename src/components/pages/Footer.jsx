import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 border-t border-gray-700 text-center">
      
      {/* © Year + Name + Role */}
      <p className="text-gray-400 mb-3">
        © {new Date().getFullYear()}{" "}
        <span className="text-teal-400 font-semibold">Nathira Farveen</span> — MERN Stack Developer
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

      {/* Built With */}
      <p className="text-gray-500 text-sm">
        Built with care using React, Tailwind CSS & Framer Motion
      </p>

    </footer>
  );
};

export default Footer;