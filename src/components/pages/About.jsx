// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section className="page-container">
//       {/* 🌟 Title */}
//       <motion.h1
//         className="text-4xl font-bold text-teal-400 mb-6"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         About Me
//       </motion.h1>

//       {/* 🧠 Intro */}
//       <motion.p
//         className="about-text"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         I’m <span className="text-teal-300 font-semibold">Nathira Farveen</span>, 
//         a dedicated <span className="text-teal-300">MERN Stack Developer</span> 
//         with a passion for creating dynamic and user-friendly web applications.
//         I love turning ideas into reality using clean code and modern technologies.
//       </motion.p>

//       {/* 🧩 Skills Section */}
//       <motion.div
//         className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//       >
//         {[
//           "MongoDB",
//           "Express.js",
//           "React.js",
//           "Node.js",
//           "JavaScript (ES6+)",
//           "HTML5",
//           "CSS3 / TailwindCSS",
//           "Git & GitHub",
//         ].map((skill, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.1 }}
//             className="bg-gray-800 py-3 px-5 rounded-xl text-center shadow-md hover:shadow-teal-500/30 transition"
//           >
//             {skill}
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* 💬 Closing Line */}
//       <motion.p
//         className="mt-10 mb-10 text-gray-400 text-center place-self-center max-w-2xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.9 }}
//       >
//         I’m always eager to collaborate on innovative projects and learn new tools
//         that push my skills forward. Let’s build something amazing together!
//       </motion.p>
//     </section>
//   );
// };

// export default About;
