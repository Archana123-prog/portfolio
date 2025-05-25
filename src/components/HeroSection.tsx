import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ChevronDown, MapPin } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  location?: string;
  designFocus?: string[];
}

const HeroSection = ({
  title = "Archana Kumari",
  subtitle = "BCA 2nd Year Student | Tech Innovator & Creative Problem-Solver",
  tagline = "Empowering the future with code, creativity, and compassion.",
  location = "Greater Noida, Uttar Pradesh",
  designFocus = ["AI & Coding", "Design & Media", "Teaching"],
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[700px] bg-[#1A1D23] overflow-hidden">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 8 + 2 + "px",
              height: Math.random() * 8 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-between relative z-10 py-8">
        {/* Left content */}
        <motion.div
          className="w-full lg:w-1/2 text-white pt-8 lg:pt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            {title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-4">
            {subtitle}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl italic mb-4 text-[#FFD100]">
            "{tagline}"
          </p>
          <div className="flex items-center mb-6">
            <MapPin className="text-[#FFD100] mr-2" size={18} />
            <span className="text-lg">{location}</span>
          </div>

          {/* Vector-style chart */}
          <div className="mb-8">
            <div className="h-1 w-32 bg-[#FFD100] mb-4"></div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-4 w-16 bg-[#FFD100] rounded-sm"></div>
              <div className="h-4 w-24 bg-[#F3E7D2] rounded-sm"></div>
              <div className="h-4 w-12 bg-[#FFD100] rounded-sm"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-24 bg-[#F3E7D2] rounded-sm"></div>
              <div className="h-4 w-16 bg-[#FFD100] rounded-sm"></div>
              <div className="h-4 w-8 bg-[#F3E7D2] rounded-sm"></div>
            </div>
          </div>

          {/* Design focus areas */}
          <div className="mb-12">
            <p className="text-lg mb-2">Design Focus:</p>
            <p className="text-xl font-medium">{designFocus.join(" | ")}</p>
          </div>

          {/* Call to action */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer group"
            whileHover={{ x: 5 }}
          >
            <span className="text-lg">Explore my work</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>

        {/* Right content - Portrait */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Yellow accent circle */}
            <div className="absolute -left-8 -bottom-8 w-64 h-64 rounded-full bg-[#FFD100] opacity-20"></div>

            {/* Portrait image */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#FFD100] relative z-10 bg-gradient-to-b from-[#1A1D23] to-[#2A2D33]">
              <img
                src="https://i.postimg.cc/mPBVr24r/image.png"
                alt="Archana Kumari"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-6 -top-6 w-12 h-12 rounded-full border-2 border-[#FFD100]"></div>
            <div className="absolute -left-4 top-1/2 w-8 h-8 rounded-full bg-[#F3E7D2]"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
