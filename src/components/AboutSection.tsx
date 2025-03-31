"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const skills = [
    {
      category: "Development",
      items: ["HTML", "CSS", "TypescriptScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Design",
      items: ["Figma", "Adobe Photoshop", "Illustrator", "Canva", "UI/UX"],
    },
    {
      category: "Marketing",
      items: ["Google Analytics", "Meta Business", "SEO", "Content Creation"],
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-[#ADB7BE] max-w-2xl mx-auto">
            Learn more about my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-1 mr-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/aboutpic.jpg"
                  alt="Profile picture"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 border-2 border-white/30 rounded-2xl backdrop-blur-sm" />
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#ADB7BE] mb-8"
            >
              I'm a{" "}
              <span className="text-blue-400 font-medium">Frontend Developer</span>,{" "}
              <span className="text-purple-400 font-medium">Graphic Designer</span>, and{" "}
              <span className="text-pink-400 font-medium">Digital Marketer</span> passionate about crafting impactful digital experiences.
            </motion.p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                  }}
                  className="p-6 bg-[#181818] rounded-xl border border-[#252525] hover:border-blue-500/30 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs px-3 py-1 rounded-full bg-[#252525] text-[#ADB7BE]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <motion.p 
                className="text-lg text-[#ADB7BE] mb-6"
                whileInView={{ opacity: [0.6, 1] }}
                transition={{ duration: 0.5 }}
              >
                Let's collaborate to create something extraordinary!
              </motion.p>
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium hover:shadow-lg transition-all"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Collaborating
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;