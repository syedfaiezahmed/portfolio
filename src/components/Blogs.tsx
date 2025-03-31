"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowRight, FiBookmark } from "react-icons/fi";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogPost> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  imageUrl,
}) => {
  const [imgError, setImgError] = useState(false);

  const getCategoryPath = (category: string): string => {
    const categoryMap: Record<string, string> = {
      "Web Development": "Webdevelopmentblog",
      "Digital Marketing": "Digitalmarketing",
      "Graphic Designing": "Graphicdesigning",
      "Artificial Intelligence": "Artificialintelligence",
      "Cybersecurity": "Cybersecurity",
      "Cloud Computing": "Cloudcomputing"
    };
    return `/blogs/${categoryMap[category]}`;
  };

  const blogPath = getCategoryPath(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -8,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      }}
      className="group bg-[#181818] rounded-xl overflow-hidden border border-[#252525] hover:border-blue-500/30 transition-all duration-300"
    >
      <a href={blogPath} className="block">
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          {imgError ? (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">Image not available</span>
            </div>
          ) : (
            <motion.img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
              loading="lazy"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
            />
          )}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-3 right-3 p-2 bg-[#252525] rounded-full hover:bg-[#333333] transition-colors shadow-sm"
            onClick={(e) => e.preventDefault()}
          >
            <FiBookmark className="text-slate-200 hover:text-purple-400" />
          </motion.button>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full"
            >
              {category}
            </motion.span>
            <span className="text-xs text-[#ADB7BE]">{date.split(",")[0]}</span>
          </div>

          <motion.h3
            className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
            whileHover={{ x: 3 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-[#ADB7BE] mb-4 line-clamp-2 text-sm"
            whileHover={{ opacity: 0.9 }}
          >
            {excerpt}
          </motion.p>

          <div className="flex justify-between items-center">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#ADB7BE]">
              <motion.div className="flex items-center" whileHover={{ x: 3 }}>
                <FiClock className="mr-1.5 text-blue-400" />
                {readTime}
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 3 }}>
                <FiUser className="mr-1.5 text-purple-400" />
                {author}
              </motion.div>
            </div>

            <div className="flex items-center text-sm font-medium text-blue-400 hover:text-purple-400 transition-colors">
              Read More{" "}
              <motion.span
                className="ml-1.5"
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <FiArrowRight />
              </motion.span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const BlogSection = () => {
  const [showAll, setShowAll] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Modern Web Development in 2025",
      excerpt: "Explore the cutting-edge technologies shaping the future of web development.",
      date: "May 15, 2025",
      readTime: "8 min read",
      author: "Syed Faiez Ahmed",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    },
    {
      id: 2,
      title: "Digital Marketing Strategies That Convert",
      excerpt: "Learn the most effective digital marketing techniques for today's competitive landscape.",
      date: "April 28, 2025",
      readTime: "6 min read",
      author: "Syed Faiez Ahmed",
      category: "Digital Marketing",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Graphic Design Principles for Developers",
      excerpt: "Essential design concepts every developer should know to create visually appealing interfaces.",
      date: "June 18, 2025",
      readTime: "5 min read",
      author: "Syed Faiez Ahmed",
      category: "Graphic Designing",
      imageUrl: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 4,
      title: "Artificial Intelligence in Modern Applications",
      excerpt: "How artificial intelligence is transforming software development and user experiences.",
      date: "July 5, 2025",
      readTime: "10 min read",
      author: "Syed Faiez Ahmed",
      category: "Artificial Intelligence",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1385&q=80",
    },
    {
      id: 5,
      title: "Essential Cybersecurity Practices",
      excerpt: "Protect your applications with these fundamental cybersecurity measures.",
      date: "August 12, 2025",
      readTime: "7 min read",
      author: "Digisparkify Team",
      category: "Cybersecurity",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 6,
      title: "Cloud Computing Explained",
      excerpt: "Understanding cloud services and how they can benefit your development workflow.",
      date: "September 3, 2025",
      readTime: "9 min read",
      author: "Syed Faiez Ahmed",
      category: "Cloud Computing",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    },
  ];

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="pt-6 pb-8 md:pb-10 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-[#ADB7BE] max-w-2xl mx-auto">
            Discover expert articles from our team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium hover:shadow-lg transition-all"
          >
            {showAll ? "Show Less" : "View All Articles"}
            <motion.span
              className="ml-2"
              animate={{
                x: showAll ? 0 : [0, 3, 0],
                rotate: showAll ? 180 : 0,
              }}
              transition={{
                repeat: showAll ? 0 : Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <FiArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;