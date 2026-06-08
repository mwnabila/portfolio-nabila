import { motion } from "framer-motion";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        py-24
        md:py-40

        bg-white/40
        dark:bg-[#0e0e0e]/30

        transition-colors
        duration-500
      "
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Label */}
        <motion.p
          className="
            font-body
            text-xs
            tracking-[0.25em]
            uppercase
            mb-6

            text-yellow-600
            dark:text-blue-400
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="
            font-display
            font-extrabold

            text-5xl
            md:text-7xl
            lg:text-8xl

            text-primary

            leading-none
            tracking-tight

            mb-8
          "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          READY TO BUILD
          <br />
          <span className="text-yellow-500 dark:text-blue-400">SOMETHING GREAT?</span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          className="
            font-body
            text-secondary

            text-sm
            md:text-lg

            max-w-2xl
            mx-auto

            leading-relaxed

            mb-12
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Let's turn ideas into meaningful digital experiences through clean design, intuitive user experiences, and modern web development.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            items-center
            justify-center
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button href="mailto:mawaddatulnabilaridaa@gmail.com" variant="primary">
            Email Me
          </Button>

          <Button href="https://github.com/mwddtl" variant="outline">
            GitHub
          </Button>

          <Button href="https://www.linkedin.com/in/nabilarida/" variant="outline">
            LinkedIn
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
