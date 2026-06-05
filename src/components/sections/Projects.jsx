import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data";

// Filter tabs
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
      className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer
                 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(77,141,255,0.1)] transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden h-52 md:h-60">
        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Category */}
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">{project.category}</p>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-primary mb-5 group-hover:text-accent transition-colors duration-300">{project.title}</h3>

        {/* Button */}
        <a
          href={project.link || "#"}
          target={project.link ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 text-sm text-primary border border-border px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-all duration-300 mx-auto"
        >
          {project.category === "UI/UX" ? "View Figma" : "View Project"}
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter project berdasarkan tab yang aktif
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionTitle label="My Work" title="Featured Projects" subtitle="A selection of projects I've built and designed." />

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-body text-sm px-5 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter ? "bg-accent text-white border-accent" : "bg-transparent text-secondary border-border hover:border-accent/50 hover:text-primary"
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
