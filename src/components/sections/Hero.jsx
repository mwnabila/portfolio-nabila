import { motion } from "framer-motion";
import Button from "../ui/Button";

// Variasi animasi untuk stagger (animasi bergantian)
// Stagger artinya setiap elemen muncul satu per satu, bukan bersamaan
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jeda 0.15 detik antar elemen
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <motion.div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center" variants={containerVariants} initial="hidden" animate="visible">
        {/* Headline */}
        <motion.h1 variants={itemVariants} className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-primary mb-10">
          I'M NABILA,
          <br />
          <span className="text-accent">FRONTEND DEVELOPER</span>
          <br />& UI/UX ENTHUSIAST
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button href="#projects" variant="primary">
            View Portfolio
          </Button>

          <Button href="#contact" variant="outline">
            Hire Me
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="hidden md:flex items-center justify-center gap-3 mt-16 text-secondary">
          <div className="w-8 h-px bg-border" />
          <span className="font-body text-xs tracking-widest uppercase">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
