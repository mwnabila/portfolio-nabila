import { navLinks } from "../../data";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a href="#home" className="font-display text-lg font-bold text-primary hover:text-accent transition-colors duration-300">
            Nabila.
          </a>

          {/* Nav Links */}
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="font-body text-sm text-secondary hover:text-primary transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-secondary hover:text-accent transition-colors duration-300">
              GitHub
            </a>

            <span className="text-border">|</span>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-secondary hover:text-accent transition-colors duration-300">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-secondary/50 text-center mt-8">© {new Date().getFullYear()} Mawaddatul Nabila Rida. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
