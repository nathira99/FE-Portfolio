import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react"; 

const Home = () => {
  return (
    <section className="page-container flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      {/* 🌟 Animated Hero Text */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm{" "}
        <span className="text-teal-400">Nathira Farveen</span>
      </motion.h1>

      <motion.h2
        className="text-lg md:text-2xl text-gray-300 mt-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A Passionate <span className="text-teal-300">MERN Stack Developer</span>
      </motion.h2>

      {/* 💡 Short Intro */}
      <motion.p
        className="max-w-2xl text-gray-400 mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I build dynamic, scalable, and visually engaging web applications using MongoDB,
        Express.js, React, and Node.js. Focused on clean UI, optimized performance, and
        seamless user experiences that bring ideas to life.
      </motion.p>


      {/* 🚀 Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <Link
          to="/projects"
          className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-lg font-semibold transition shadow-md"
        >
          View My Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-teal-400 text-teal-300 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition font-semibold"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
