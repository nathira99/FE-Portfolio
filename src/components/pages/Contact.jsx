import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Github, Linkedin, Mail, FileDown, Handshake } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // 🚀 Handle form submission
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // ✅ Use your deployed backend URL
      const response = await fetch("https://be-portfolio-w61v.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        reset();
      } else {
        alert(result.error || "❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-8">
      {/* 🌟 Header */}
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
        Have an idea, opportunity, or just want to say hi? I’d love to hear from you!
        Let’s collaborate and bring ideas to life.
      </motion.p>

      {/* 📬 Contact Form */}
      <motion.div
        className="w-full max-w-md backdrop-blur-md bg-white/10 p-8 rounded-3xl shadow-xl border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full px-4 py-3 rounded-xl bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-500" : "focus:ring-teal-400"
              } transition-all`}
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Name must be at least 2 characters" },
              })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
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
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className={`w-full px-4 py-3 rounded-xl bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                errors.message ? "focus:ring-red-500" : "focus:ring-teal-400"
              } transition-all`}
              {...register("message", {
                required: "Message is required",
                minLength: { value: 10, message: "Message must be at least 10 characters" },
              })}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
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

      {/* 💌 Direct Email */}
      <motion.p
        className="mt-6 text-gray-400 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Prefer email? Reach me at{" "}
        <a
          href="mailto:nathirafarveen99@gmail.com"
          className="text-teal-400 hover:text-teal-300 underline"
        >
          E-Mail
        </a>
      </motion.p>
    </section>
  );
};

export default Contact;
