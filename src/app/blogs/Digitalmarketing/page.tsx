"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DigitalMarketingBlog = () => {
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
          Digital Marketing
        </motion.span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Digital Marketing Strategies That Convert in 2025
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
            Jan 28, 2025 · 6 min read
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Digital Marketing Analytics"
            width={1470}
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
          In today's hyper-competitive digital landscape, businesses need cutting-edge marketing strategies that deliver measurable results. Here are the most effective techniques that are driving conversions in 2025.
        </motion.p>

        {[
          {
            title: "1. Hyper-Personalization with AI",
            content: "Modern AI tools analyze user behavior in real-time to deliver personalized experiences across all touchpoints. Key implementations include:",
            items: [
              "Dynamic content personalization based on user journey",
              "Predictive product recommendations",
              "Behavior-triggered email sequences",
              "Personalized pricing strategies"
            ],
            caseStudy: {
              title: "Case Study: E-commerce Personalization",
              content: "An online retailer implemented AI-powered recommendations and saw a 37% increase in average order value and 28% higher conversion rates compared to their traditional approach."
            }
          },
          {
            title: "2. Voice Search Optimization",
            content: "With over 60% of searches now voice-based, optimizing for natural language queries is essential:",
            items: [
              "Focus on question-based content (Who, What, Where, When, Why, How)",
              "Optimize for local search with 'near me' phrases",
              "Create FAQ pages targeting conversational queries",
              "Use schema markup to enhance voice search visibility"
            ]
          },
          {
            title: "3. Interactive Content",
            content: "Interactive elements see 3x higher engagement than static content:",
            interactiveTypes: [
              {
                title: "Quizzes",
                content: "'Which product is right for you?' style quizzes that recommend solutions"
              },
              {
                title: "Calculators",
                content: "ROI calculators, savings estimators, and other value-driven tools"
              }
            ]
          },
          {
            title: "4. Privacy-First Marketing",
            content: "With stricter data regulations, successful marketers are building trust through:",
            items: [
              "Transparent data collection policies",
              "Value-exchange models (offer content in return for data)",
              "First-party data strategies",
              "Contextual targeting instead of behavioral tracking"
            ]
          },
          {
            title: "5. Emerging Opportunities",
            content: "Forward-thinking marketers are exploring:",
            items: [
              "Augmented Reality product experiences",
              "Conversational commerce through messaging apps",
              "Predictive customer service",
              "Blockchain-based loyalty programs"
            ],
            quote: "The most successful 2025 marketing strategies combine AI-powered personalization with genuine value delivery. Customers now expect relevant experiences that respect their privacy while solving their problems."
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

            {section.interactiveTypes && (
              <div className="grid md:grid-cols-2 gap-6 my-6">
                {section.interactiveTypes.map((type, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-[#181818] p-4 rounded-lg border border-[#252525] hover:border-blue-500/30 transition-all"
                  >
                    <h4 className="font-semibold text-white mb-2">{type.title}</h4>
                    <p className="text-sm text-[#ADB7BE]">{type.content}</p>
                  </motion.div>
                ))}
              </div>
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
          <ol className="space-y-3">
            {[
              "Leverage AI for personalization at scale while maintaining human oversight",
              "Optimize for voice search and visual search to capture emerging traffic",
              "Build trust through transparent data practices and value-first content"
            ].map((item, i) => (
              <motion.li 
                key={i}
                whileHover={{ x: 3 }}
                className="flex items-start"
              >
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  {i + 1}
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default DigitalMarketingBlog;