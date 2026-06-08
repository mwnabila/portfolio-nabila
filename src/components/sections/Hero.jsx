import { motion } from "framer-motion";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-1/3
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[600px]
            h-[600px]
            rounded-full
            blur-[120px]
            bg-yellow-300/20
            dark:bg-blue-500/10
            transition-all
            duration-700
          "
        />
      </div>

      <motion.div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center" variants={containerVariants} initial="hidden" animate="visible">
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="
            font-display
            font-extrabold
            text-4xl
            md:text-6xl
            lg:text-7xl
            leading-[0.95]
            tracking-tight
            text-gray-900
            dark:text-white
            mb-10
          "
        >
          I'M NABILA,
          <br />
          <span
            className="
              text-yellow-500
              dark:text-blue-500
              transition-colors
              duration-500
            "
          >
            FRONTEND DEVELOPER
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">& UI/UX ENTHUSIAST</span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button href="#contact" variant="primary">
            Get In Touch
          </Button>

          <Button href="/cv/CV_FrontEnd Dev_Nabila.pdf" variant="outline">
            View Resume
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="
            hidden
            md:flex
            items-center
            justify-center
            gap-3
            mt-16
            text-gray-600
            dark:text-gray-400
          "
        >
          <div className="w-8 h-px bg-gray-400 dark:bg-gray-600" />

          <span className="font-body text-xs tracking-widest uppercase">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
