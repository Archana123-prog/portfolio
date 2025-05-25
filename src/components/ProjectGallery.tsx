import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tools: string[];
  image: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tools: string[];
  image: string;
}

// Inline ProjectCard component since there seems to be an issue with importing it
const ProjectCard = ({
  title,
  description,
  role,
  tools,
  image,
}: ProjectCardProps) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden h-full flex flex-col">
      <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="mt-auto">
          <div className="flex items-center mb-2">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Role:
            </span>
            <span className="ml-2 text-sm">{role}</span>
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Tools:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectGalleryProps {
  projects?: Project[];
  title?: string;
}

const ProjectGallery = ({
  projects = [
    {
      id: "1",
      title: "OMNIGO (All-in-One App)",
      description:
        "Create a unified app for daily needs (shopping, learning, utilities) with AI integration.",
      role: "Core Team Member (UI/UX & Coding)",
      tools: ["AI Integration", "Python", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      id: "2",
      title: "UDo (Gen-Z Student App)",
      description:
        "An app to help students manage academics, mental health, and social life with AI-driven study plans.",
      role: "App Designer",
      tools: ["UI/UX", "AI Tools", "Mobile Design"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    },
    {
      id: "3",
      title: "Reconnect (Green Community Platform)",
      description:
        "Connect eco-conscious communities to promote sustainability and environmental awareness.",
      role: "UI/UX Designer",
      tools: ["HTML/CSS", "Java", "UI/UX Design"],
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    },
    {
      id: "4",
      title: "2Ewa (E-Waste to E-Art)",
      description:
        "Transform e-waste into art and reusable tech. Featured in college sustainability fairs.",
      role: "Project Lead",
      tools: ["Sustainability", "Design", "Innovation"],
      image:
        "https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?w=800&q=80",
    },
    {
      id: "5",
      title: "Teen Literature Mentor",
      description:
        "Taught 15+ teens classic literature and creative writing over a 6-month program.",
      role: "Mentor & Teacher",
      tools: ["Literature", "Creative Writing", "Education"],
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    },
  ],
  title = "Project Overview",
}: ProjectGalleryProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3;
  });

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(
        window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3,
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage,
  );

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              disabled={totalPages <= 1}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous page</span>
            </Button>
            <span className="text-sm">
              {currentPage + 1} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              disabled={totalPages <= 1}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                role={project.role}
                tools={project.tools}
                image={project.image}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile pagination dots */}
        <div className="flex justify-center mt-8 md:hidden">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${currentPage === index ? "bg-primary" : "bg-gray-300"}`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
