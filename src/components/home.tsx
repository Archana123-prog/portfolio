import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectGallery from "./ProjectGallery";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

/* ─── Animated Skill Bar ─────────────────────────────────── */
interface SkillBarProps {
  label: string;
  pct: number;
  color?: string;
}
const SkillBar = ({ label, pct, color = "#FFD100" }: SkillBarProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white/80">{label}</span>
        <span className="text-sm font-bold" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

/* ─── Hobby Card ──────────────────────────────────────────── */
interface HobbyCardProps {
  emoji: string;
  label: string;
}
const HobbyCard = ({ emoji, label }: HobbyCardProps) => (
  <motion.div
    whileHover={{ scale: 1.07, y: -4 }}
    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD100]/40 transition-colors cursor-default"
  >
    <div className="w-10 h-10 rounded-full bg-[#FFD100] flex items-center justify-center text-xl flex-shrink-0">
      {emoji}
    </div>
    <p className="text-white/85 font-medium text-sm">{label}</p>
  </motion.div>
);

/* ─── Section Header ─────────────────────────────────────── */
const SectionHeader = ({
  title,
  subtitle,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
}) => (
  <div className="mb-10 sm:mb-14 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 ${dark ? "text-[#1A1D23]" : "text-white"}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={`text-base sm:text-lg max-w-2xl mx-auto ${dark ? "text-[#1A1D23]/65" : "text-white/55"}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="mt-4 h-1 w-16 rounded-full bg-[#FFD100] mx-auto"
    />
  </div>
);

/* ─── Main Home Component ────────────────────────────────── */
const Home = () => {
  return (
    <div className="min-h-screen bg-[#1A1D23] text-white">
      {/* Hero */}
      <HeroSection />

      {/* ── About / Introduction ── */}
      <section id="about" className="py-16 sm:py-24 px-4 md:px-8 lg:px-16 bg-[#F3E7D2] text-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="About Me" dark />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          >
            {/* Text */}
            <div className="w-full lg:w-1/2">
              <p className="text-base sm:text-lg mb-6 leading-relaxed text-[#1A1D23]/80">
                Hi, I'm <strong>Archana</strong> – a passionate BCA student at
                Vishveshwarya Group of Institutions, blending technical expertise
                in AI, coding, and design with a love for teaching and
                sustainability. Currently shaping the future through collaborative
                tech projects and empowering teens through literature.
              </p>
              <motion.div
                whileHover={{ x: 4 }}
                className="p-4 sm:p-5 border-l-4 border-[#FFD100] bg-white/60 rounded-r-xl italic shadow-sm"
              >
                <p className="text-base sm:text-lg font-medium text-[#1A1D23]/85">
                  "Turning ideas into impact—one line of code, one design, and
                  one lesson at a time."
                </p>
              </motion.div>
            </div>

            {/* Images */}
            <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative hover-lift">
                <div className="absolute -z-10 w-40 h-40 sm:w-48 sm:h-48 bg-[#FFD100] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
                  alt="Tablet sketching"
                  className="rounded-2xl relative z-10 w-full max-w-xs mx-auto shadow-xl"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                alt="AI visualization"
                className="rounded-2xl w-full max-w-xs mx-auto shadow-xl hover-lift"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills & Hobbies ── */}
      <section id="skills" className="py-16 sm:py-24 px-4 md:px-8 lg:px-16 bg-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Skills & Passions"
            subtitle="My technical and creative toolkit spans multiple domains."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Skill Bars */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6 text-[#FFD100]">Technical & Creative Toolkit</h3>
              <SkillBar label="AI & Prompt Engineering" pct={88} />
              <SkillBar label="Python" pct={78} />
              <SkillBar label="HTML / CSS" pct={85} />
              <SkillBar label="UI/UX Design (Canva & Figma)" pct={80} />
              <SkillBar label="Video / Photo Editing" pct={75} color="#F3E7D2" />
              <SkillBar label="Excel / Word / PowerPoint" pct={90} color="#F3E7D2" />

              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
                  alt="Digital design interface"
                  className="rounded-2xl w-full shadow-xl hover-lift"
                />
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6 text-[#FFD100]">Hobbies & Passions</h3>
              <p className="text-white/60 mb-6 text-sm">
                Beyond my technical pursuits, I nurture several creative and wellness-focused interests.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <HobbyCard emoji="🎨" label="Painting & Drawing" />
                <HobbyCard emoji="🧘" label="Yoga Expert" />
                <HobbyCard emoji="📚" label="Teaching Literature" />
                <HobbyCard emoji="🎶" label="Bollywood Dance & Singing" />
                <HobbyCard emoji="🌱" label="Sustainability" />
                <HobbyCard emoji="💡" label="Tech Innovation" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-16 sm:py-24 px-4 md:px-8 lg:px-16 bg-[#F3E7D2] text-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Project Overview" dark subtitle="A snapshot of what I've been building." />
          <ProjectGallery />
        </div>
      </section>

      {/* ── Teaching & Social Impact ── */}
      <section className="py-16 sm:py-24 px-4 md:px-8 lg:px-16 bg-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Teaching & Social Impact" subtitle="Using knowledge as a tool for change." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base sm:text-lg mb-6 text-white/75 leading-relaxed">
                As a Teen Literature Mentor, I've spent 6 months teaching 15+
                teens classic literature and creative writing, helping them
                discover their own voices and perspectives.
              </p>
              <Card className="bg-white/5 border border-white/10 rounded-2xl">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#FFD100] flex items-center justify-center flex-shrink-0 text-xl">
                      🌙
                    </div>
                    <p className="text-base sm:text-lg italic text-white/80">
                      "Education is not the filling of a pail, but the lighting
                      of a fire." – W.B. Yeats
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-5 text-[#FFD100]">Volunteer Vision</h3>
              <p className="text-base sm:text-lg mb-6 text-white/75 leading-relaxed">
                I aim to use technology and art to uplift underprivileged
                communities, with a goal to launch free coding workshops for
                rural students by 2025.
              </p>
              <div className="hover-lift rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?w=800&q=80"
                  alt="Students learning together"
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Current Focus ── */}
      <section className="py-16 sm:py-24 px-4 md:px-8 lg:px-16 bg-[#F3E7D2] text-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10 lg:gap-16"
          >
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">Current Focus</h2>
              <p className="text-base sm:text-lg mb-5 text-[#1A1D23]/70">
                I'm currently focused on deepening my expertise in several key areas:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  { icon: "🤖", text: "AI Mastery: Deep diving into generative AI tools and ethics." },
                  { icon: "🎨", text: "UI/UX Design: Perfecting user-centric app interfaces." },
                  { icon: "🚀", text: "Team Projects: Scaling OMNIGO and Reconnect prototypes." },
                ].map((item) => (
                  <li key={item.icon} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <span className="text-base text-[#1A1D23]/80">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base italic text-[#1A1D23]/60">
                "The only limit to our realization of tomorrow will be our doubts of today." – Franklin D. Roosevelt
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative hover-lift">
                <div className="absolute -z-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#FFD100] rounded-full top-1/2 right-0 translate-x-1/4 -translate-y-1/2 opacity-30" />
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
                  alt="AI visualization"
                  className="rounded-2xl relative z-10 w-full shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Personal Touch ── */}
      <section className="py-16 sm:py-24 px-4 md:px-8 lg:px-16 bg-[#1A1D23] text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Personal Touch"
            subtitle={`"I believe in the power of clarity—whether it's debugging code, designing a logo, or explaining Shakespeare."`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
                title: "🖌️ Art Gallery",
                text: "A collection of my paintings and drawings that express my creative vision and artistic style.",
              },
              {
                img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
                title: "📖 Book Recommendations",
                text: "My favourite literature picks for teens, from classics to contemporary works that inspire.",
              },
              {
                img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
                title: "🧘 Yoga Tips",
                text: "Mindfulness practices and yoga poses that help maintain balance in a busy tech-focused life.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#FFD100]/40 hover:shadow-xl hover:shadow-[#FFD100]/10 transition-all duration-300"
              >
                <img src={card.img} alt={card.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog & Resources ── */}
      <section className="py-16 sm:py-24 px-4 md:px-8 lg:px-16 bg-[#F3E7D2] text-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Blog & Resources"
            subtitle="Thoughts, tutorials, and insights on technology, design, and teaching."
            dark
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
            {[
              {
                img: "https://images.unsplash.com/photo-1677442135136-760c813028c0?w=800&q=80",
                title: "The Future of AI in Education",
                desc: "How generative AI tools are transforming the way we teach and learn.",
                date: "August 15, 2023",
                tag: "AI",
              },
              {
                img: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=800&q=80",
                title: "5 UI/UX Tips for Student Projects",
                desc: "Simple design principles that can elevate your college assignments.",
                date: "July 22, 2023",
                tag: "Design",
              },
            ].map((post) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl border border-[#1A1D23]/8 transition-all duration-300 group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFD100]/20 text-[#1A1D23] text-xs font-semibold mb-3">
                    {post.tag}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-[#1A1D23]/60 text-sm mb-4">{post.desc}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#1A1D23]/40">{post.date}</p>
                    <span className="text-sm font-semibold text-[#1A1D23] group-hover:text-[#FFD100] transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 bg-[#1A1D23] text-white rounded-full font-semibold hover:bg-[#FFD100] hover:text-[#1A1D23] transition-colors shadow-lg"
            >
              View All Posts
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-16 sm:py-24 px-4 md:px-8 lg:px-16 bg-[#1A1D23] text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Let's Connect!"
            subtitle="Have an idea to change the world? Let's brainstorm over chai ☕!"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* Portrait */}
            <div className="glow-portrait w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-8 border-4 border-[#FFD100] bg-gradient-to-b from-[#1A1D23] to-[#2A2D33]">
              <img
                src="https://i.postimg.cc/mPBVr24r/image.png"
                alt="Archana Kumari"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg w-full mb-10">
              {[
                { href: "mailto:archanakumari3801@gmail.com", label: "Email", icon: "✉️", color: "#ff4444" },
                { href: "https://www.linkedin.com/in/archana-kumari-601306328", label: "LinkedIn", icon: "💼", color: "#0a66c2" },
                { href: "https://github.com/Archana123-prog", label: "GitHub", icon: "🐙", color: "#fff" },
                { href: "https://www.instagram.com/hay_archana/", label: "Instagram", icon: "📸", color: "#e1306c" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.07, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFD100]/40 hover:bg-white/10 transition-all text-sm font-medium"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-white/70">{link.label}</span>
                </motion.a>
              ))}
            </div>

            <p className="text-white/40 text-sm">© 2025 Archana Kumari. All rights reserved.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 lg:px-16 bg-[#111316] text-white border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">© 2025 Archana Kumari. All rights reserved.</p>
            <div className="flex gap-4">
              {[
                { href: "https://www.linkedin.com/in/archana-kumari-601306328", label: "LinkedIn" },
                { href: "https://github.com/Archana123-prog", label: "GitHub" },
                { href: "https://www.instagram.com/hay_archana/", label: "Instagram" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-[#FFD100] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/25 italic">
            "Technology is nothing. What's important is that you have faith in people." – Steve Jobs
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
