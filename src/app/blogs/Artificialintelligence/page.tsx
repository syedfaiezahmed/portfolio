"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ArtificialIntelligenceBlog = () => {
  const router = useRouter();

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20"
    >
      <motion.button
        onClick={() => router.back()}
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center text-blue-400 hover:text-purple-400 mb-8 transition-colors"
      >
        <FiArrowLeft className="mr-2" />
        Back to Articles
      </motion.button>

      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full mb-4"
        >
          Artificial Intelligence
        </motion.span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Artificial Intelligence in Modern Applications
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm text-[#ADB7BE]">
          <motion.div 
            whileHover={{ x: 3 }}
            className="flex items-center"
          >
            <FiUser className="mr-1.5 text-purple-400" />
            Syed Faiez Ahmed
          </motion.div>
          <motion.div 
            whileHover={{ x: 3 }}
            className="flex items-center"
          >
            <FiClock className="mr-1.5 text-blue-400" />
            Mar 5, 2025 · 10 min read
          </motion.div>
        </div>
      </motion.header>

      <div className="prose prose-invert max-w-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto rounded-lg mb-8 overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1385&q=80"
            alt="AI Neural Network"
            width={1385}
            height={800}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lead"
        >
          Artificial Intelligence has evolved from a novel technology to a core component of modern applications, transforming how we interact with software and solve complex problems. Here's how AI is reshaping application development in 2025.
        </motion.p>

        {[
          {
            title: "1. AI-Powered User Experiences",
            content: "Modern applications leverage AI to create adaptive interfaces that respond to user behavior:",
            items: [
              "Dynamic UI generation based on user skill level",
              "Predictive navigation that anticipates user needs",
              "Real-time content personalization",
              "Voice and gesture-controlled interfaces"
            ],
            caseStudy: {
              title: "Case Study: E-Commerce Personalization",
              content: "An online retailer implemented AI-powered recommendations and saw a 42% increase in conversion rates and 35% higher average order value compared to traditional recommendation systems."
            }
          },
          {
            title: "2. AI in Development Workflows",
            content: "Developers are integrating AI throughout their workflows:",
            gridItems: [
              { 
                title: "Code Generation", 
                content: "AI assistants that write boilerplate code and suggest implementations" 
              },
              { 
                title: "Automated Testing", 
                content: "Self-healing test scripts that adapt to UI changes" 
              },
              { 
                title: "Debugging", 
                content: "AI that analyzes stack traces and suggests fixes" 
              },
              { 
                title: "Documentation", 
                content: "Automatic API documentation generation from code" 
              }
            ]
          },
          {
            title: "3. Ethical Considerations",
            content: "As AI becomes more pervasive, ethical implementation is crucial:",
            items: [
              "Transparency about AI usage",
              "Bias detection and mitigation",
              "User control over AI features",
              "Data privacy protections"
            ]
          },
          {
            title: "4. Emerging AI Technologies",
            content: "Cutting-edge AI applications gaining traction:",
            tableData: [
              { tech: "Generative AI", app: "Content creation, design", impact: "High" },
              { tech: "Reinforcement Learning", app: "Robotics, gaming", impact: "Medium" },
              { tech: "Federated Learning", app: "Privacy-preserving AI", impact: "Growing" },
              { tech: "Neuro-symbolic AI", app: "Complex reasoning", impact: "Emerging" }
            ]
          },
          {
            title: "5. Getting Started with AI Integration",
            content: "Practical steps for developers:",
            items: [
              "Start with pre-trained models (GPT, DALL-E, etc.)",
              "Use AI-as-a-service platforms for quick integration",
              "Focus on specific pain points rather than 'adding AI everywhere'",
              "Implement continuous monitoring for model drift"
            ],
            quote: "The most successful AI implementations enhance human capabilities rather than replace them. In 2025, we're seeing AI become the invisible co-developer in every application stack."
          }
        ].map((section, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
            <p className="mb-4">{section.content}</p>
            
            {section.items && (
              <ul className="space-y-2 mb-6">
                {section.items.map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 3 }}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {section.caseStudy && (
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#181818] p-6 rounded-lg border border-[#252525] my-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{section.caseStudy.title}</h3>
                <p>{section.caseStudy.content}</p>
              </motion.div>
            )}

            {section.gridItems && (
              <div className="grid md:grid-cols-2 gap-6 my-6">
                {section.gridItems.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-[#181818] p-6 rounded-xl border border-[#252525] hover:border-blue-500/30 transition-all"
                  >
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-[#ADB7BE]">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {section.tableData && (
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="my-6 overflow-x-auto"
              >
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[#252525]">
                      <th className="text-left py-3 px-4 text-white font-semibold">Technology</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Application</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.tableData.map((row, i) => (
                      <motion.tr 
                        key={i}
                        whileHover={{ backgroundColor: "rgba(37, 37, 37, 0.5)" }}
                        className="border-b border-[#252525]"
                      >
                        <td className="py-3 px-4 text-white">{row.tech}</td>
                        <td className="py-3 px-4 text-[#ADB7BE]">{row.app}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            row.impact === 'High' ? 'bg-green-900 text-green-300' :
                            row.impact === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                            'bg-blue-900 text-blue-300'
                          }`}>
                            {row.impact}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {section.quote && (
              <motion.blockquote
                whileHover={{ scale: 1.01 }}
                className="border-l-4 border-purple-500 pl-4 my-8 italic text-lg"
              >
                "{section.quote}"
              </motion.blockquote>
            )}
          </motion.section>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Key Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Opportunities</h4>
              <ul className="space-y-2">
                {[
                  "Enhanced user personalization",
                  "Developer productivity gains",
                  "New categories of applications"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 3 }}
                    className="flex items-start"
                  >
                    <span className="text-green-400 mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Challenges</h4>
              <ul className="space-y-2">
                {[
                  "Ethical implementation",
                  "Computational costs",
                  "Explainability requirements"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 3 }}
                    className="flex items-start"
                  >
                    <span className="text-red-400 mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ArtificialIntelligenceBlog;