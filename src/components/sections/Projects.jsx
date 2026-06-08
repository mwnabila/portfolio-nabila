import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data";

const filters = ["All", "Web", "UI/UX"];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="
        group
        relative
        bg-white
        dark:bg-[#0e0e0e]
        border
        border-gray-200
        dark:border-[#1a1a1a]
        rounded-2xl
        overflow-hidden
        cursor-pointer
        hover:border-yellow-400
        dark:hover:border-blue-500
        hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]
        dark:hover:shadow-[0_10px_30px_rgba(77,141,255,0.15)]
        transition-all
        duration-300
      "
    >
      {/* Thumbnail */}
      <div className="overflow-hidden h-52 md:h-60">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-yellow-600
            dark:text-blue-400
            mb-2
          "
        >
          {project.category}
        </p>

        {/* Title */}
        <h3
          className="
            font-display
            text-xl
            font-semibold
            text-primary
            mb-5
            group-hover:text-yellow-500
            dark:group-hover:text-blue-400
            transition-colors
            duration-300
          "
        >
          {project.title}
        </h3>

        {/* Button */}
        <a
          href={project.link || "#"}
          target={project.link ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="
            flex
            w-fit
            items-center
            gap-2
            text-sm

            border

            border-yellow-500
            dark:border-blue-500

            text-yellow-600
            dark:text-blue-400

            px-4
            py-2

            rounded-full

            hover:bg-yellow-500
            hover:text-white

            dark:hover:bg-blue-500
            dark:hover:text-white

            transition-all
            duration-300

            mx-auto
          "
        >
          {project.category === "UI/UX" ? "View Figma" : "View Project"}
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionTitle label="My Work" title="Featured Projects" subtitle="A selection of projects I've built and designed." />

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-body text-sm px-5 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-yellow-500 text-white border-yellow-500 dark:bg-blue-500 dark:border-blue-500"
                  : "bg-transparent text-secondary border-border hover:border-yellow-400 dark:hover:border-blue-400 hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
