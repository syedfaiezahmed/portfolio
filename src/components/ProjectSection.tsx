"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce using Next.js.",
      tags: ["Next.js", "Tailwind CSS", "Sanity"],
      imageUrl: "/images/e-commerce.jpg",
      githubUrl: "https://github.com/syedfaiezahmed/Hackathone-Market-Place-main",
      liveUrl: "https://hackathone-market-place-main.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Modern portfolio with animations and responsive design.",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      imageUrl: "/images/portfolio.jpg",
      githubUrl: "https://github.com/syedfaiezahmed/Portfolio",
    },
    {
      id: 3,
      title: "Ai-assistant",
      description: "Ai-assistant for searching.",
      tags: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/images/ai-assistant.jpg",
      liveUrl: "https://ai-assistant-lovat-eta.vercel.app/",
      githubUrl: "https://github.com/syedfaiezahmed/Ai-assistant",
    },
    {
      id: 4,
      title: "Website Design",
      description: "Productivity app with real-time updates.",
      tags: ["HTML", "CSS"],
      imageUrl: "/images/web-design.jpg",
      githubUrl: "https://github.com/syedfaiezahmed/Web-design",
      liveUrl: "https://web-design-zeta-one.vercel.app/",
    },
    {
      id: 5,
      title: "File Converter",
      description: "Excel file converter.",
      tags: ["Python", "Streamlit", "Pandas"],
      imageUrl: "/images/file-converter.jpg",
      githubUrl: "https://github.com/syedfaiezahmed/file-converter",
      liveUrl: "https://syedfaiezahmed-file-converter-file-converter-rwjusx.streamlit.app/",
    },
    {
      id: 6,
      title: "Unit Converter",
      description: "Unit converter.",
      tags: ["Python", "Streamlit", "Pandas"],
      imageUrl: "/images/unit-converter.jpg",
      githubUrl: "https://github.com/syedfaiezahmed/unit-cnverter",
      liveUrl: "https://syedfaiezahmed-unit-cnverter-unit-converter-gx0rla.streamlit.app/",
    },
  ];

  return (
    <section id="projects" className="py-8 md:py-12 lg:py-8 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-[#ADB7BE] max-w-2xl mx-auto">
            A collection of my recent works
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              className="group rounded-xl overflow-hidden border border-[#252525] bg-[#181818] hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id <= 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <p className="text-white text-sm md:text-base">
                      {project.description}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {project.title}
                </motion.h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs px-3 py-1 rounded-full bg-[#252525] text-[#ADB7BE]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-[#ADB7BE] hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-[#ADB7BE] hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.p 
            className="text-lg text-[#ADB7BE] mb-6"
            whileInView={{ opacity: [0.6, 1] }}
            transition={{ duration: 0.5 }}
          >
            Interested in working together?
          </motion.p>
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium hover:shadow-lg transition-all"
          >
            Contact Me
            <motion.span 
              className="ml-2"
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <Rocket className="w-5 h-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;