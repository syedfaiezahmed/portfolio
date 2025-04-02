"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BlogPost {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  imageUrl: string;
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string | React.ReactNode;
      listItems?: string[];
    }>;
    quote?: {
      text: string;
      author?: string;
    };
    conclusion: string;
  };
}

const WebDevelopmentBlog = () => {
  const router = useRouter();

  const blogPost: BlogPost = {
    title: "Modern Web Development in 2025",
    category: "Web Development",
    author: "Syed Faiez Ahmed",
    date: "Feb 18, 2025",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    content: {
      introduction: "The web development landscape continues to evolve at a breakneck pace. As we move through 2025, several key technologies are defining modern web development and changing how we build for the web.",
      sections: [
        {
          title: "WebAssembly (Wasm) Goes Mainstream",
          content: "WebAssembly has matured significantly, allowing near-native performance in the browser. Developers are now building complex applications like video editors, 3D modeling tools, and even full-fledged design suites that run entirely in the browser.",
          listItems: [
            "CPU-intensive computations",
            "Real-time data processing",
            "Game development",
            "Media editing applications"
          ]
        },
        {
          title: "AI-Integrated Development",
          content: "AI co-pilots have become standard in developer workflows. Tools like GitHub Copilot X now understand entire codebases and can generate complex components with minimal prompting.",
          listItems: [
            "Context-aware code completion",
            "Automated documentation generation",
            "Intelligent bug detection"
          ]
        },
        {
          title: "Edge Computing Dominance",
          content: "With the expansion of edge networks, developers are building applications that leverage distributed computing power.",
          listItems: [
            "Reduced latency for global users",
            "Improved reliability through distributed systems",
            "Better privacy controls with local data processing",
            "Reduced bandwidth costs"
          ]
        },
        {
          title: "The Rise of Web Components",
          content: "Framework-agnostic Web Components have gained widespread adoption, allowing for truly reusable UI elements across different tech stacks.",
          listItems: [
            "Better cross-framework compatibility",
            "Improved performance through native browser support",
            "Easier maintenance of design systems"
          ]
        }
      ],
      quote: {
        text: "The future belongs to developers who can blend performance, AI augmentation, and seamless user experiences. In 2025, the bar for what constitutes a 'good' web application has been raised significantly."
      },
      conclusion: "As we look toward the rest of 2025 and beyond, web developers should focus on mastering these emerging technologies while maintaining strong fundamentals in accessibility, performance, and user experience. The most successful developers will be those who can adapt to these changes while keeping the end user's needs at the forefront."
    }
  };

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
        aria-label="Go back to articles list"
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
          {blogPost.category}
        </motion.span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {blogPost.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm text-[#ADB7BE]">
          <motion.div 
            whileHover={{ x: 3 }}
            className="flex items-center"
          >
            <FiUser className="mr-1.5 text-purple-400" />
            {blogPost.author}
          </motion.div>
          <motion.div 
            whileHover={{ x: 3 }}
            className="flex items-center"
          >
            <FiClock className="mr-1.5 text-blue-400" />
            {blogPost.date} · {blogPost.readTime} min Read
          </motion.div>
        </div>
      </motion.header>

      <div className="prose prose-invert max-w-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-8"
        >
          <Image
            src={blogPost.imageUrl}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lead"
        >
          {blogPost.content.introduction}
        </motion.p>

        {blogPost.content.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
            <p className="mb-4">{section.content}</p>
            
            {section.listItems && (
              <ul className="space-y-2 mb-6">
                {section.listItems.map((item, i) => (
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
          </motion.section>
        ))}

        {blogPost.content.quote && (
          <motion.blockquote
            whileHover={{ scale: 1.01 }}
            className="border-l-4 border-purple-500 pl-4 my-8 italic text-lg"
          >
            "{blogPost.content.quote.text}"
          </motion.blockquote>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Looking Ahead</h3>
          <p>{blogPost.content.conclusion}</p>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default WebDevelopmentBlog;