import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Aurora */}
        <div
          className="
          aurora
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[1200px]
          h-[1200px]
          rounded-full
          blur-[220px]
          opacity-40
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-violet-500
        "
        />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
