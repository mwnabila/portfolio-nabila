// Button.jsx — Komponen tombol reusable
// Kenapa dipisah? Karena kita pakai tombol di banyak section.
// Kalau mau ubah style tombol, cukup ubah di sini saja.

import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", href, onClick, className = "" }) => {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent/80 hover:shadow-[0_0_20px_rgba(77,141,255,0.3)]",

    outline: "border border-border text-primary hover:border-accent hover:text-accent bg-transparent",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.endsWith(".pdf");

    return (
      <motion.a href={href} className={combinedStyles} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={combinedStyles} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      {children}
    </motion.button>
  );
};

export default Button;
