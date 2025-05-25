import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectGallery from "./ProjectGallery";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1A1D23] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F3E7D2] text-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Introduction
              </h2>
              <p className="text-lg mb-6">
                Hi, I'm Archana – a passionate BCA student at Vishveshwarya
                Group of Institutions, blending technical expertise in AI,
                coding, and design with a love for teaching and sustainability.
                Currently shaping the future through collaborative tech projects
                and empowering teens through literature.
              </p>
              <div className="p-4 border-l-4 border-[#FFD100] bg-white/50 italic">
                <p className="text-lg">
                  "Turning ideas into impact—one line of code, one design, and
                  one lesson at a time."
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4 mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute -z-10 w-48 h-48 bg-[#FFD100] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
                  alt="Tablet sketching"
                  className="rounded-lg relative z-10 w-full max-w-xs mx-auto"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                alt="AI visualization"
                className="rounded-lg w-full max-w-xs mx-auto mt-4 md:mt-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background & Goals Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#1A1D23] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Skills & Expertise
              </h2>
              <p className="text-lg mb-6">
                My technical and creative toolkit spans multiple domains,
                allowing me to approach problems from different angles.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Technical & Creative Toolkit:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>AI & Coding: Prompt Engineering, Python, C, HTML/CSS</li>
                  <li>
                    Design & Media: Graphics Design (Canva), Video/Photo
                    Editing, UI/UX Basics
                  </li>
                  <li>Productivity: Excel, Word, PowerPoint (Advanced)</li>
                  <li>
                    Soft Skills: Content Writing, Teaching, Problem-Solving,
                    Team Collaboration
                  </li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
                alt="Digital design interface"
                className="rounded-lg w-full max-w-md"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hobbies & Passions
              </h2>
              <p className="text-lg mb-6">
                Beyond my technical pursuits, I nurture several creative and
                wellness-focused interests.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FFD100] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1A1D23]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <p className="text-lg">🎨 Painting & Drawing</p>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FFD100] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1A1D23]"
                  >
                    <path d="M12 20v-6"></path>
                    <path d="M18 20V10"></path>
                    <path d="M6 20v-3"></path>
                    <path d="M18 4h.01"></path>
                    <path d="M6 4h.01"></path>
                    <path d="M12 4h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M6 10h.01"></path>
                    <path d="M18 14h.01"></path>
                  </svg>
                </div>
                <p className="text-lg">🧘 Yoga Expert</p>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FFD100] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1A1D23]"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <p className="text-lg">📚 Teaching Literature</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD100] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1A1D23]"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <p className="text-lg">
                  🎶 Dancing to Bollywood Beats & Singing
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F3E7D2] text-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Project Overview
            </h2>
            <ProjectGallery />
          </motion.div>
        </div>
      </section>

      {/* Teaching & Social Impact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#1A1D23] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Teaching & Social Impact
              </h2>
              <p className="text-lg mb-6">
                As a Teen Literature Mentor, I've spent 6 months teaching 15+
                teens classic literature and creative writing, helping them
                discover their own voices and perspectives.
              </p>
              <Card className="bg-[#F3E7D2]/10 border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFD100] flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#1A1D23]"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    </div>
                    <p className="text-lg">
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
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Volunteer Vision
              </h2>
              <p className="text-lg mb-6">
                I aim to use technology and art to uplift underprivileged
                communities, with a goal to launch free coding workshops for
                rural students by 2025.
              </p>
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?w=800&q=80"
                alt="Students learning together"
                className="rounded-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F3E7D2] text-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Current Focus
              </h2>
              <p className="text-lg mb-6">
                I'm currently focused on deepening my expertise in several key
                areas:
              </p>
              <ul className="list-disc pl-5 space-y-3 mb-6">
                <li className="text-lg">
                  AI Mastery: Deep diving into generative AI tools and ethics.
                </li>
                <li className="text-lg">
                  UI/UX Design: Perfecting user-centric app interfaces.
                </li>
                <li className="text-lg">
                  Team Projects: Scaling OMNIGO and Reconnect prototypes.
                </li>
              </ul>
              <p className="text-lg italic">
                "The only limit to our realization of tomorrow will be our
                doubts of today." – Franklin D. Roosevelt
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -z-10 w-64 h-64 bg-[#FFD100] rounded-full top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2"></div>
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
                  alt="AI visualization"
                  className="rounded-lg relative z-10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#1A1D23] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Personal Touch
            </h2>
            <p className="text-lg mb-12 text-center max-w-3xl mx-auto italic">
              "I believe in the power of clarity—whether it's debugging code,
              designing a logo, or explaining Shakespeare. Every problem has a
              solution; you just need to see it from the right angle."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Card className="bg-[#F3E7D2]/10 border-none overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
                    alt="Art gallery"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">🖌️ Art Gallery</h3>
                    <p>
                      A collection of my paintings and drawings that express my
                      creative vision and artistic style.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#F3E7D2]/10 border-none overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80"
                    alt="Books collection"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      📖 Book Recommendations
                    </h3>
                    <p>
                      My favorite literature picks for teens, from classics to
                      contemporary works that inspire and educate.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#F3E7D2]/10 border-none overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                    alt="Yoga practice"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">🧘 Yoga Tips</h3>
                    <p>
                      Mindfulness practices and yoga poses that help maintain
                      balance in a busy tech-focused life.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F3E7D2] text-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Connect!
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Have an idea to change the world? Let's brainstorm over chai ☕!
            </p>

            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-[#FFD100] bg-gradient-to-b from-[#1A1D23] to-[#2A2D33]">
              <img
                src="https://i.postimg.cc/mPBVr24r/image.png"
                alt="Archana Kumari"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full mb-8">
              <a
                href="mailto:archanakumari3801@gmail.com"
                className="flex items-center gap-2 hover:text-[#FFD100] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>archanakumari3801@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/archana-kumari-601306328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FFD100] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Archana123-prog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FFD100] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/hay_aarav/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FFD100] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="text-lg font-medium">
                Let's create something amazing together
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog & Extras Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Blog & Resources
            </h2>
            <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
              Thoughts, tutorials, and insights on technology, design, and
              teaching.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1677442135136-760c813028c0?w=800&q=80"
                    alt="AI blog post"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      The Future of AI in Education
                    </h3>
                    <p className="text-gray-600 mb-4">
                      How generative AI tools are transforming the way we teach
                      and learn.
                    </p>
                    <p className="text-sm text-gray-500">
                      Posted on August 15, 2023
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=800&q=80"
                    alt="UI/UX blog post"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      5 UI/UX Tips for Student Projects
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Simple design principles that can elevate your college
                      assignments.
                    </p>
                    <p className="text-sm text-gray-500">
                      Posted on July 22, 2023
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <a
                href="#"
                className="px-6 py-3 bg-[#1A1D23] text-white rounded-md hover:bg-[#FFD100] hover:text-[#1A1D23] transition-colors"
              >
                View All Posts
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-[#1A1D23] text-white">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>© 2023 Archana Kumari. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/in/archana-kumari-601306328"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD100] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/Archana123-prog"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD100] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hay_aarav/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD100] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-400">
            <p>
              "Technology is nothing. What's important is that you have faith in
              people, that they're basically good and smart, and if you give
              them tools, they'll do wonderful things with them." – Steve Jobs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
