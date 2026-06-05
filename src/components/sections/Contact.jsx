import { motion } from "framer-motion";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.p className="font-body text-accent text-xs tracking-[0.25em] uppercase mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Get In Touch
        </motion.p>

        {/* Big Headline */}
        <motion.h2
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-primary leading-none tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          LET'S WORK
          <br />
          <span className="text-accent">TOGETHER</span>
        </motion.h2>

        {/* Email */}
        <motion.a
          href="mailto:mawaddatulnabilaridaa@email.com"
          className="font-body text-secondary text-sm md:text-base hover:text-accent transition-colors duration-300 block mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          mawaddatulnabilaridaa@gmail.com
        </motion.a>

        {/* Action Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 items-center justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Button href="mailto:mawaddatulnabilaridaa@email.com" variant="primary">
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
