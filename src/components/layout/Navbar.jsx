import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../data";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? `
            backdrop-blur-xl

            bg-white/80
            dark:bg-[#050505]/80

            border-b
            border-gray-200
            dark:border-[#1a1a1a]
          `
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="
            font-display
            text-xl
            font-bold
            text-primary
            tracking-tight

            hover:text-yellow-500
            dark:hover:text-blue-400

            transition-colors
            duration-300
          "
        >
          Nabila.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
                    font-body
                    text-sm
                    text-secondary
                    tracking-wide

                    hover:text-yellow-600
                    dark:hover:text-blue-400

                    transition-colors
                    duration-300
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />

          <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />

          <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="
            md:hidden

            bg-white
            dark:bg-[#0e0e0e]

            border-t
            border-gray-200
            dark:border-[#1a1a1a]

            px-6
            py-4
          "
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    font-body
                    text-sm
                    text-secondary

                    hover:text-yellow-600
                    dark:hover:text-blue-400

                    transition-colors
                    duration-300
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
