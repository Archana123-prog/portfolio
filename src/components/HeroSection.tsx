import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";

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
  // Stable particle data (no random recalculation on re-render)
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53 + 10) % 90,
        size: (i % 5) + 3,
        delay: (i * 0.4) % 5,
        duration: 4 + (i % 4),
      })),
    []
  );

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#1A1D23] overflow-hidden flex items-center"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,209,0,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(243,231,210,0.07)_0%,_transparent_60%)]" />

      {/* Animated particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle bg-[#FFD100]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: 0.25,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Grid line overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left content */}
          <motion.div
            className="w-full lg:w-1/2 text-white text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD100]/15 border border-[#FFD100]/30 text-[#FFD100] text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFD100] animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
              <span className="shimmer-text">{title}</span>
            </h1>

            <h2 className="text-base sm:text-lg md:text-xl font-light mb-4 text-white/70 leading-relaxed">
              {subtitle}
            </h2>

            <p className="text-base sm:text-lg italic mb-6 text-[#FFD100]/90 font-medium">
              "{tagline}"
            </p>

            <div className="flex items-center gap-2 mb-8 justify-center lg:justify-start">
              <MapPin className="text-[#FFD100]" size={16} />
              <span className="text-sm text-white/60">{location}</span>
            </div>

            {/* Focus pills */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
              {designFocus.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-4 py-1.5 rounded-full border border-white/20 text-sm text-white/80 bg-white/5 hover:border-[#FFD100]/50 hover:text-[#FFD100] transition-colors cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFD100] text-[#1A1D23] font-bold text-sm hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/25"
              >
                View Projects
                <ArrowRight size={16} className="cta-arrow" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white text-sm font-medium hover:border-[#FFD100]/60 hover:text-[#FFD100] transition-colors"
              >
                Let's Connect
              </motion.a>
            </div>
          </motion.div>

          {/* Right content — portrait */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-[#FFD100]/20 blur-2xl scale-110" />

              {/* Dashed ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#FFD100]/40 animate-spin" style={{ animationDuration: "20s" }} />

              {/* Portrait */}
              <div className="glow-portrait w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#FFD100] relative z-10 bg-gradient-to-b from-[#2A2D33] to-[#1A1D23]">
                <img
                  src="https://i.postimg.cc/mPBVr24r/image.png"
                  alt="Archana Kumari"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -right-2 sm:-right-6 top-6 bg-[#FFD100] text-[#1A1D23] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20"
              >
                🎨 UI/UX
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-2 sm:-left-6 bottom-10 bg-[#F3E7D2] text-[#1A1D23] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20"
              >
                🤖 AI & Code
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
