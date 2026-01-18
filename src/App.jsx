import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 transition-colors">

      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

