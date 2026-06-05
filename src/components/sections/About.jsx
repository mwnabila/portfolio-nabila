import { motion } from "framer-motion";
import Button from "../ui/Button";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Kiri: Label & Judul */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
            <p className="font-body text-accent text-xs tracking-[0.2em] uppercase mb-4">Who I Am</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              About
              <br />
              Me.
            </h2>

            {/* Garis dekoratif */}
            <div className="w-12 h-0.5 bg-accent mt-8" />
          </motion.div>

          {/* Kanan: Deskripsi */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col gap-6">
            <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
              Hi, I'm <span className="text-primary font-medium">Mawaddatul Nabila Rida</span>, a Fresh Graduate with an interest in Frontend Development and UI/UX Design.
            </p>

            <p className="font-body text-secondary text-base md:text-lg leading-relaxed">I enjoy building modern, responsive, and user-friendly websites while continuously learning new technologies and design practices.</p>

            <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
              Currently open to <span className="text-primary">internship and junior developer opportunities</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border mt-2">
              {[
                { number: "6+", label: "Projects" },
                { number: "3+", label: "Certificates" },
                { number: "1+", label: "Years Learning" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-3xl font-bold text-accent">{stat.number}</p>
                  <p className="font-body text-xs text-secondary mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <Button href="/cv/CV_Mawaddatul_Nabila_Rida.pdf" variant="outline" className="self-start w-full">
              View Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
