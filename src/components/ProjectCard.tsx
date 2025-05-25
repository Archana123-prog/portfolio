import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  role: string;
  tools: string[];
}

const ProjectCard = ({
  image = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  title = "OMNIGO (All-in-One App)",
  description = "Create a unified app for daily needs with AI integration.",
  role = "Core Team Member (UI/UX & Coding)",
  tools = ["AI Integration", "Python", "MongoDB"],
}: ProjectCardProps) => {
  return (
    <Card className="w-full overflow-hidden bg-white h-full">
      <div className="relative h-[200px] sm:h-[220px] md:h-[250px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-[#1A1D23]">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="mb-2">
          <span className="text-sm font-medium text-gray-700">Role:</span>
          <span className="ml-2 text-sm text-gray-600">{role}</span>
        </div>

        <div>
          <span className="text-sm font-medium text-gray-700">Tools:</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-[#F3E7D2] text-[#1A1D23] hover:bg-[#FFD100]"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <button className="group flex items-center text-sm font-medium text-[#1A1D23] hover:text-[#FFD100]">
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
