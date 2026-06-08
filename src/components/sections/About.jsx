import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
            <p
              className="
                font-body
                text-xs
                tracking-[0.2em]
                uppercase
                mb-4

                text-yellow-600
                dark:text-blue-400
              "
            >
              Who I Am
            </p>

            <h2
              className="
                font-display
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                text-primary
                leading-tight
              "
            >
              About
              <br />
              Me.
            </h2>

            <div
              className="
                w-12
                h-0.5
                mt-8

                bg-yellow-500
                dark:bg-blue-500
              "
            />
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col gap-6">
            <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
              Hi, I'm <span className="text-primary font-semibold">Mawaddatul Nabila Rida</span>, a Frontend Developer and UI/UX Enthusiast passionate about building responsive, user-friendly, and visually engaging web experiences.
            </p>

            <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
              I enjoy transforming ideas into digital products using modern technologies such as React, Tailwind CSS, and JavaScript while focusing on clean design, accessibility, and usability.
            </p>

            <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
              Currently seeking internship and junior frontend developer opportunities where I can contribute, grow professionally, and gain real-world development experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border mt-2">
              {[
                { number: "6+", label: "Projects" },
                { number: "3+", label: "Certificates" },
                { number: "1+", label: "Years Learning" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="
                      font-display
                      text-2xl
                      md:text-3xl
                      font-bold

                      text-yellow-500
                      dark:text-blue-400
                    "
                  >
                    {stat.number}
                  </p>

                  <p className="font-body text-xs text-secondary mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
