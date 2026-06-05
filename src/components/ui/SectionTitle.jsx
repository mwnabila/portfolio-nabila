// SectionTitle.jsx — Judul section yang konsisten di seluruh halaman
// Kenapa reusable? Supaya semua section punya style heading yang sama.

import { motion } from "framer-motion";

const SectionTitle = ({ label, title, subtitle }) => {
  return (
    <motion.div className="mb-12 md:mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
      {/* Label kecil di atas judul */}
      {label && <p className="text-accent text-xs font-body font-medium tracking-[0.2em] uppercase mb-3">{label}</p>}

      {/* Judul utama */}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">{title}</h2>

      {/* Subtitle opsional */}
      {subtitle && <p className="text-secondary font-body text-base md:text-lg mt-4 max-w-xl">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionTitle;
