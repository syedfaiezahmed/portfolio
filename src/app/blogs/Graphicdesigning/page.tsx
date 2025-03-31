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

const GraphicDesignPrinciples = () => {
  const router = useRouter();

  const blogPost: BlogPost = {
    title: "Graphic Design Principles for Developers",
    category: "Graphic Design",
    author: "Syed Faiez Ahmed",
    date: "June 18, 2025",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    content: {
      introduction: "While developers focus on functionality, understanding basic design principles can transform your interfaces from merely usable to truly exceptional. These fundamental concepts will help you collaborate better with designers and create more polished applications.",
      sections: [
        {
          title: "1. The Rule of Thirds",
          content: "This classic composition technique divides your canvas into a 3×3 grid. Placing key elements at the intersection points creates more engaging layouts.",
          listItems: [
            "Align important UI elements at grid intersections",
            "Place call-to-action buttons at power points",
            "Use negative space effectively in your layouts"
          ]
        },
        {
          title: "2. Color Theory Basics",
          content: "Understanding color relationships will help you create more harmonious interfaces without relying on default color palettes.",
          listItems: [
            "Use complementary colors for contrast",
            "Analogous colors for harmony",
            "60-30-10 rule for color distribution",
            "Ensure proper color contrast for accessibility"
          ]
        },
        {
          title: "3. Typography Hierarchy",
          content: "Effective typography guides users through your content and establishes visual importance.",
          listItems: [
            "Limit to 2-3 font families maximum",
            "Establish clear heading levels (h1-h6)",
            "Use font weights strategically (regular, medium, bold)",
            "Maintain consistent line heights and spacing"
          ]
        },
        {
          title: "4. Visual Consistency",
          content: "Consistency reduces cognitive load and makes your applications feel more professional.",
          listItems: [
            "Create and follow a design system",
            "Standardize button styles and sizes",
            "Maintain consistent spacing (8px grid recommended)",
            "Use uniform corner radii for UI elements"
          ]
        },
        {
          title: "5. White Space is Your Friend",
          content: "Proper use of negative space improves readability and focuses user attention.",
          listItems: [
            "Increase padding for important elements",
            "Group related items with proximity",
            "Avoid crowding interface elements",
            "Let content breathe for better scannability"
          ]
        }
      ],
      quote: {
        text: "Good design is obvious. Great design is transparent.",
        author: "Joe Sparano"
      },
      conclusion: "While you don't need to become a full-fledged designer, these fundamental principles will help you create better interfaces and communicate more effectively with design teams. Start by implementing one principle at a time, and soon you'll see noticeable improvements in your application's visual appeal and usability."
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
            {blogPost.content.quote.author && (
              <footer className="mt-2 text-sm not-italic">— {blogPost.content.quote.author}</footer>
            )}
          </motion.blockquote>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Key Takeaways</h3>
          <p>{blogPost.content.conclusion}</p>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default GraphicDesignPrinciples;