import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { certificates } from "../../data";

const CertCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      className="
        group

        bg-white
        dark:bg-[#0e0e0e]

        border
        border-gray-200
        dark:border-[#1a1a1a]

        rounded-2xl
        overflow-hidden

        hover:border-yellow-400
        dark:hover:border-blue-500

        hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]
        dark:hover:shadow-[0_10px_30px_rgba(77,141,255,0.15)]

        transition-all
        duration-300
      "
    >
      {/* Certificate Image */}
      <div className="overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="
            w-full
            h-52
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        {/* Issuer */}
        <p
          className="
            font-body
            text-xs
            tracking-widest
            uppercase
            mb-2

            text-yellow-600
            dark:text-blue-400
          "
        >
          {cert.issuer}
        </p>

        {/* Date */}
        <p className="font-body text-xs text-secondary mb-4">{cert.date}</p>

        {/* Title */}
        <h3
          className="
            font-display
            text-xl
            font-semibold
            text-primary
            mb-3

            group-hover:text-yellow-500
            dark:group-hover:text-blue-400

            transition-colors
            duration-300
          "
        >
          {cert.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-secondary leading-relaxed">{cert.description}</p>

        {/* Bottom Accent Line */}
        <div
          className="
            w-0
            h-0.5
            mt-6

            bg-yellow-500
            dark:bg-blue-500

            group-hover:w-full
            transition-all
            duration-500
          "
        />
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="
        py-24
        md:py-32

        bg-white/40
        dark:bg-[#0e0e0e]/30

        transition-colors
        duration-500
      "
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionTitle label="Credentials" title="Certificates & Achievements" subtitle="Continuous learning through structured courses and programs." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
