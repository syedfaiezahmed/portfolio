"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowLeft, FiShield, FiLock, FiAlertTriangle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CybersecurityBlog = () => {
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
          Cybersecurity
        </motion.span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Essential Cybersecurity Practices for Modern Applications
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
            Mar 12, 2025 · 7 min read
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
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1470&q=80"
            alt="Cybersecurity"
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
          In today's threat landscape, robust cybersecurity practices are non-negotiable for any modern application. Here are the essential security measures every developer should implement in 2025.
        </motion.p>

        {[
          {
            title: "1. Secure Authentication",
            content: "Implementing strong authentication is the first line of defense:",
            items: [
              "Multi-factor authentication (MFA) for all user accounts",
              "Passwordless authentication options (WebAuthn)",
              "Rate limiting for login attempts",
              "Secure session management with short expiration times"
            ],
            icon: <FiLock className="text-blue-400 text-2xl mb-2" />
          },
          {
            title: "2. Data Protection",
            content: "Protecting sensitive data should be a top priority:",
            items: [
              "Encryption at rest and in transit (TLS 1.3+)",
              "Proper key management with hardware security modules",
              "Data minimization - only collect what you need",
              "Regular data purging policies"
            ],
            icon: <FiShield className="text-purple-400 text-2xl mb-2" />
          },
          {
            title: "3. API Security",
            content: "With the rise of microservices, API security is critical:",
            items: [
              "Strict input validation and sanitization",
              "Rate limiting to prevent abuse",
              "Proper authentication for all endpoints",
              "Regular security testing of API endpoints"
            ],
            icon: <FiAlertTriangle className="text-yellow-400 text-2xl mb-2" />
          },
          {
            title: "4. Dependency Management",
            content: "Third-party vulnerabilities can compromise your entire system:",
            items: [
              "Regular dependency updates",
              "Automated vulnerability scanning",
              "Software bill of materials (SBOM)",
              "Isolation of critical components"
            ]
          },
          {
            title: "5. Incident Response",
            content: "Being prepared for security incidents is just as important as prevention:",
            items: [
              "Documented incident response plan",
              "Regular security drills",
              "Monitoring and alerting systems",
              "Forensic capabilities for investigation"
            ],
            quote: "It's not a matter of if you'll be attacked, but when. The difference between a minor incident and a major breach often comes down to preparation."
          }
        ].map((section, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              {section.icon && <span className="mr-2">{section.icon}</span>}
              {section.title}
            </h2>
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
          <h3 className="text-2xl font-bold text-white mb-3">Security Checklist</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Prevention</h4>
              <ul className="space-y-2">
                {[
                  "Regular security training for developers",
                  "Secure coding practices",
                  "Automated security testing in CI/CD",
                  "Infrastructure as Code security reviews"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 3 }}
                    className="flex items-start"
                  >
                    <span className="text-green-400 mr-2">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Monitoring</h4>
              <ul className="space-y-2">
                {[
                  "Real-time security monitoring",
                  "Anomaly detection systems",
                  "Regular security audits",
                  "Bug bounty programs"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 3 }}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-2">✓</span>
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

export default CybersecurityBlog;