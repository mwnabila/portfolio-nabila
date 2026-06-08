import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { techStack } from "../../data";

const TechStack = () => {
  return (
    <section id="techstack" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionTitle label="Skills" title="Tech Stack" subtitle="Technologies and tools I work with." />

        <div className="flex flex-col gap-12">
          {techStack.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.15,
              }}
            >
              {/* Category */}
              <p
                className="
                  font-body
                  text-xs
                  tracking-[0.2em]
                  uppercase
                  mb-5

                  text-yellow-600
                  dark:text-blue-400
                "
              >
                {group.category}
              </p>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.1 + itemIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      group

                      bg-white
                      dark:bg-[#0e0e0e]

                      border
                      border-gray-200
                      dark:border-[#1a1a1a]

                      rounded-2xl
                      p-6

                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-4

                      hover:border-yellow-400
                      dark:hover:border-blue-500

                      hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]
                      dark:hover:shadow-[0_10px_30px_rgba(77,141,255,0.15)]

                      transition-all
                      duration-300
                    "
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="
                        w-12
                        h-12
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span
                      className="
                        font-body
                        text-sm
                        text-primary
                        text-center

                        group-hover:text-yellow-600
                        dark:group-hover:text-blue-400

                        transition-colors
                        duration-300
                      "
                    >
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
