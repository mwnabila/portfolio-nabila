import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../data";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-bg/80 border-b border-border" : "bg-transparent"}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo / Brand name */}
        <a href="#home" className="font-display text-xl font-bold text-primary tracking-tight hover:text-accent transition-colors duration-300">
          Nabila.
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-body text-sm text-secondary hover:text-primary transition-colors duration-300 tracking-wide">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div className="md:hidden bg-surface border-t border-border px-6 py-4" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="font-body text-sm text-secondary hover:text-primary transition-colors duration-300" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
