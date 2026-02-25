import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tools: string[];
  image: string;
  accent: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "OMNIGO (All-in-One App)",
    description:
      "Create a unified app for daily needs (shopping, learning, utilities) with AI integration.",
    role: "Core Team Member (UI/UX & Coding)",
    tools: ["AI Integration", "Python", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accent: "#FFD100",
  },
  {
    id: "2",
    title: "UDo (Gen-Z Student App)",
    description:
      "An app to help students manage academics, mental health, and social life with AI-driven study plans.",
    role: "App Designer",
    tools: ["UI/UX", "AI Tools", "Mobile Design"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    accent: "#7C3AED",
  },
  {
    id: "3",
    title: "Reconnect (Green Community)",
    description:
      "Connect eco-conscious communities to promote sustainability and environmental awareness.",
    role: "UI/UX Designer",
    tools: ["HTML/CSS", "Java", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    accent: "#10B981",
  },
  {
    id: "4",
    title: "2Ewa (E-Waste to E-Art)",
    description:
      "Transform e-waste into art and reusable tech. Featured in college sustainability fairs.",
    role: "Project Lead",
    tools: ["Sustainability", "Design", "Innovation"],
    image: "https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?w=800&q=80",
    accent: "#F97316",
  },
  {
    id: "5",
    title: "Teen Literature Mentor",
    description:
      "Taught 15+ teens classic literature and creative writing over a 6-month program.",
    role: "Mentor & Teacher",
    tools: ["Literature", "Creative Writing", "Education"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    accent: "#EC4899",
  },
];

interface ProjectCardProps extends Project { }

const ProjectCard = ({ title, description, role, tools, image, accent }: ProjectCardProps) => (
  <motion.div
    whileHover={{ y: -6, boxShadow: `0 20px 40px ${accent}22` }}
    transition={{ duration: 0.25 }}
    className="rounded-2xl overflow-hidden bg-white border border-[#1A1D23]/8 h-full flex flex-col shadow-sm"
    style={{ borderTop: `4px solid ${accent}` }}
  >
    <div className="relative h-40 sm:h-44 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: `linear-gradient(to top, ${accent}, transparent)` }}
      />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-base sm:text-lg font-bold mb-2 text-[#1A1D23] leading-snug">{title}</h3>
      <p className="text-sm text-[#1A1D23]/60 mb-4 flex-grow leading-relaxed">{description}</p>
      <div className="mt-auto space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#1A1D23]/40">Role:</span>
          <span className="text-xs font-medium text-[#1A1D23]/75">{role}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: accent }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

interface ProjectGalleryProps {
  projects?: Project[];
}

const ProjectGallery = ({ projects = defaultProjects }: ProjectGalleryProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3;
  });

  useEffect(() => {
    const handleResize = () => {
      const next = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setProjectsPerPage(next);
      setCurrentPage(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prevPage = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <div className="w-full">
      {/* Nav row */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-sm text-[#1A1D23]/50">
          Showing {currentPage + 1} of {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            disabled={totalPages <= 1}
            className="w-9 h-9 rounded-full border border-[#1A1D23]/20 flex items-center justify-center hover:bg-[#FFD100] hover:border-[#FFD100] disabled:opacity-30 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextPage}
            disabled={totalPages <= 1}
            className="w-9 h-9 rounded-full border border-[#1A1D23]/20 flex items-center justify-center hover:bg-[#FFD100] hover:border-[#FFD100] disabled:opacity-30 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
        >
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            aria-label={`Page ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${currentPage === i
                ? "w-6 h-2.5 bg-[#FFD100]"
                : "w-2.5 h-2.5 bg-[#1A1D23]/25"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
