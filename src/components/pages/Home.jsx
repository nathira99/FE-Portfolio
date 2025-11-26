import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Handshake, LinkedinIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // 📨 Contact Form Submit
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://be-portfolio-w61v.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("✅ Message sent successfully!");
        reset();
      } else {
        alert(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠ Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const projects = [
    {
      title: "Real-Time Chat Application",
      description:
        "A full-stack real-time chat app using MERN and Socket.io with online user tracking, unread messages, JWT authentication, and seamless live messaging.",
      tech: [
        "React",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Express",
        "Tailwind CSS",
      ],
      link: "https://chatapp90.netlify.app/",
      github: "https://github.com/nathira99/ChatApp.git",
    },
    {
      title: "Income & Expense Tracker",
      description:
        "A responsive web app built with HTML, TailwindCSS, and JavaScript that helps users manage income and expenses with full CRUD operations and Local Storage support.",
      tech: ["HTML", "TailwindCSS", "JavaScript"],
      link: "https://incomeexpensecalci.netlify.app/",
      github: "https://github.com/nathira99/FSD-Task4",
    },
    {
      title: "Memory Flip Game",
      description:
        "A fun and interactive memory card game built using JavaScript — test your memory by flipping and matching pairs of cards!",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://simpleflipgame.netlify.app/",
      github: "https://github.com/nathira99/FSD-Task3",
    },
    {
      title: "Recipe App (MERN)",
      description:
        "Full-stack CRUD application using MongoDB, Express, React, and Node.js. Users can create, view, update and delete recipes with authentication.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://themealsapp.netlify.app/",
      github: "https://github.com/nathira99/foodmakingapp.git",
    },
    {
      title: "Add-to-Cart Product Store",
      description:
        "A mini e-commerce project built using React and React Router. Users can browse products, view details, and manage a shopping cart with real-time updates.",
      tech: ["React", "React Router", "JavaScript", "Tailwind CSS"],
      link: "https://addtocart-router.netlify.app/",
      github: "https://github.com/nathira99/AddToCart-Router.git",
    },
    {
      title: "Ask My Identity - Landing Page",
      description:
        "A responsive landing page for the Ask My Identity project, built using HTML and Tailwind CSS. Highlights project features and provides live and GitHub links.",
      tech: ["HTML", "TailwindCSS"],
      link: "https://askmyidentitytask.netlify.app/",
      github: "https://github.com/nathira99/FSD-Task2",
    },
  ];

  return (
    <div className="pt-20">
      {/* 🔹 HERO SECTION */}
      <section
        id="home"
        className="scroll-mt-20 min-h-[90vh] flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-teal-400"
        >
          MERN Stack Developer
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl text-gray-300 mt-4"
        >
          Hi, I’m{" "}
          <span className="text-white font-semibold">Nathira Farveen</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 max-w-2xl mt-6 leading-relaxed"
        >
          I build modern, responsive web applications using React, Node.js,
          Express, and MongoDB. Focused on UI design, animation, and
          performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4 mt-8"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-teal-400 text-white hover:bg-teal-400 hover:text-gray-900 transition py-3 px-6 rounded-xl"
          >
            Contact Me
          </button>
        </motion.div>
      </section>

      {/* 🧠 ABOUT SECTION */}
      <section
        id="about"
        className="scroll-mt-20 min-h-screen px-6 py-20 text-center"
      >
        <motion.h1
          className="text-4xl font-bold text-teal-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I’m{" "}
          <span className="text-teal-300 font-semibold">Nathira Farveen</span>,
          a passionate{" "}
          <span className="text-teal-300">MERN Stack Developer</span> who loves
          turning ideas into interactive web apps. I believe in writing clean,
          maintainable, and performance-optimized code.
        </motion.p>

        <motion.div
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "TailwindCSS",
            "Git & GitHub",
            "Mongoose",
            "Socket.io",
            "Postman",
            "Responsive UI Design",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 py-3 px-5 rounded-xl text-center shadow-md hover:shadow-teal-500/30 transition"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🧩 PROJECTS SECTION */}
      <section
        id="projects"
        className="scroll-mt-20 min-h-screen px-6 py-20 text-center bg-gray-800"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-white">Projects</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Featured works that highlight creativity, clean code, and modern
          full-stack design.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/30 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              <h2 className="text-2xl font-bold text-teal-400 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 text-teal-300 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-6 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-semibold transition"
                >
                  🌐 Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition"
                >
                  <Github size={22} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📩 CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-20 min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-3 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s{" "}
          <span className="text-teal-400 inline-flex items-center gap-1">
            Connect! <Handshake size={28} />
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-center max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have an idea, opportunity, or just want to say hi? I’d love to hear
          from you!
        </motion.p>

        <motion.div
          className="w-full max-w-md backdrop-blur-md bg-white/10 p-8 rounded-3xl shadow-xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-xl bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-500" : "focus:ring-teal-400"
                } transition-all`}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full px-4 py-3 rounded-xl bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-teal-400"
                } transition-all`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className={`w-full px-4 py-3 rounded-xl bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.message ? "focus:ring-red-500" : "focus:ring-teal-400"
                } transition-all`}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

      </section>
    </div>
  );
};

export default Home;
