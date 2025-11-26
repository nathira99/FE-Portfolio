// import { motion } from "framer-motion";
// import { Linkedin, Github, Mail } from "lucide-react";

// const projects = [
//   {
//     title: "Income & Expense Tracker",
//     description:
//       "A responsive web app built with HTML, TailwindCSS, and JavaScript that helps users manage their income and expenses with full CRUD operations and Local Storage support.",
//     tech: ["HTML", "TailwindCSS", "JavaScript"],
//     link: "https://incomeexpensecalci.netlify.app/",
//     github: "https://github.com/nathira99/FSD-Task4",
//   },
//   {
//     title: "Memory Flip Game",
//     description:
//       "A fun and interactive memory card game built using JavaScript — test your memory by flipping and matching pairs of cards!",
//     tech: ["HTML", "CSS", "JavaScript"],
//     link: "https://simpleflipgame.netlify.app/",
//     github: "https://github.com/nathira99/FSD-Task3",
//   },
//   {
//     title: "Recipe App (MERN Stack)",
//     description:
//       "A complete CRUD application using MongoDB, Express, React, and Node.js. Users can create, view, update, and delete recipes with authentication and Postman API docs.",
//     tech: ["MongoDB", "Express.js", "React", "Node.js"],
//     link: "https://be-recipeapp.onrender.com/recipes",
//     github: "https://github.com/nathira99/BE-RecipeApp.git",
//   },
//   {
//   title: "Ask My Identity - Landing Page",
//   description:
//     "A responsive landing page for the Ask My Identity project, built using HTML and Tailwind CSS. Highlights project features, technologies used, and provides links to the live site and GitHub repository.",
//   tech: ["HTML", "Tailwind CSS"],
//   link: "https://askmyidentitytask.netlify.app/", 
//   github: "https://github.com/nathira99/FSD-Task2", 
// },

// ];

// const Projects = () => {
//   return (
//     <section className="page-container text-center mb-10">
//       {/* 🌟 Section Header */}
//       <motion.h1
//         className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-8"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         My <span className="text-white">Projects</span>
//       </motion.h1>

//       <motion.p
//         className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         Here are some of my featured works showcasing creativity, clean code, and full-stack development.
//       </motion.p>

//       {/* 🧩 Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/30 transition transform hover:-translate-y-2"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.8 }}
//             whileHover={{ scale: 1.03 }}
//           >
//             {/* 🖼 Title */}
//             <h2 className="text-2xl font-bold text-teal-400 mb-3">{project.title}</h2>

//             {/* 📝 Description */}
//             <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

//             {/* 🧠 Tech Stack */}
//             <div className="flex flex-wrap justify-center gap-2 mb-4">
//               {project.tech.map((t, i) => (
//                 <span
//                   key={i}
//                   className="text-xs bg-gray-700 text-teal-300 px-3 py-1 rounded-full"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>

//             {/* 🔗 Links */}
//             <div className="flex justify-center gap-6 mt-4">
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-teal-400 hover:text-teal-300 font-semibold transition"
//               >
//                 🌐 Live Demo
//               </a>
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-gray-400 hover:text-gray-200 transition"
//               >
//                 <span className="text-teal-400 hover:text-teal-300"><Github size={24} /> </span>
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
