"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowLeft, FiServer, FiDatabase, FiCloud } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CloudComputingBlog = () => {
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
          Cloud Computing
        </motion.span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Cloud Computing Explained: 2025 Perspective
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
            Apr 2, 2025 · 9 min read
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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            alt="Cloud Computing Infrastructure"
            width={1472}
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
          Cloud computing has become the backbone of modern application development. This guide explains cloud services and how they can optimize your development workflow in 2025.
        </motion.p>

        {[
          {
            title: "1. Cloud Service Models",
            models: [
              { 
                icon: <FiServer className="text-blue-400 text-2xl mb-2" />,
                title: "Infrastructure as a Service (IaaS)",
                content: "Virtualized computing resources over the internet",
                examples: ["AWS EC2", "Azure VMs", "Google Compute Engine"]
              },
              { 
                icon: <FiDatabase className="text-purple-400 text-2xl mb-2" />,
                title: "Platform as a Service (PaaS)",
                content: "Development platforms without infrastructure management",
                examples: ["Heroku", "AWS Elastic Beanstalk", "Google App Engine"]
              },
              { 
                icon: <FiCloud className="text-green-400 text-2xl mb-2" />,
                title: "Software as a Service (SaaS)",
                content: "Ready-to-use software applications",
                examples: ["Salesforce", "Google Workspace", "Dropbox"]
              }
            ]
          },
          {
            title: "2. Key Cloud Benefits",
            benefits: [
              {
                title: "Cost Efficiency",
                content: "Pay-as-you-go model eliminates upfront hardware costs",
                emoji: "💰"
              },
              {
                title: "Scalability",
                content: "Instantly scale resources up or down based on demand",
                emoji: "📈"
              },
              {
                title: "Reliability",
                content: "Built-in redundancy and failover mechanisms",
                emoji: "🔒"
              },
              {
                title: "Global Reach",
                content: "Deploy applications closer to users worldwide",
                emoji: "🌍"
              }
            ]
          },
          {
            title: "3. Serverless Architectures",
            content: "The serverless model has evolved significantly in 2025:",
            items: [
              "Event-driven execution - Code runs in response to events",
              "Automatic scaling - No capacity planning needed",
              "Micro-billing - Pay per millisecond of execution",
              "Reduced operational overhead - No server management"
            ],
            useCases: [
              "API backends",
              "Data processing",
              "Chatbots",
              "IoT data ingestion",
              "Scheduled tasks",
              "File processing"
            ]
          },
          {
            title: "4. Hybrid Cloud Solutions",
            content: "Many enterprises now combine cloud and on-premises resources:",
            tableData: [
              { 
                approach: "Cloud Bursting", 
                benefits: "Handle spikes in demand", 
                considerations: "Data transfer costs" 
              },
              { 
                approach: "Data Locality", 
                benefits: "Compliance with regulations", 
                considerations: "Synchronization complexity" 
              },
              { 
                approach: "Legacy Integration", 
                benefits: "Modernize gradually", 
                considerations: "Network latency" 
              }
            ]
          },
          {
            title: "5. Cost Optimization Strategies",
            content: "Cloud costs can spiral without proper management:",
            strategies: [
              "Right-size resources (don't over-provision)",
              "Use spot instances for non-critical workloads",
              "Implement auto-scaling policies",
              "Schedule non-production environments",
              "Analyze and optimize data transfer costs",
              "Leverage reserved instances for stable workloads"
            ],
            quote: "The cloud is now the default, not an option. But smart architecture is key to controlling costs while maximizing the benefits of scalability and flexibility."
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
            
            {section.content && <p className="mb-4">{section.content}</p>}
            
            {section.models && (
              <div className="grid md:grid-cols-3 gap-6 my-6">
                {section.models.map((model, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-[#181818] p-6 rounded-lg border border-[#252525] hover:border-blue-500/30 transition-all"
                  >
                    <div className="flex flex-col items-center text-center mb-4">
                      {model.icon}
                      <h3 className="text-lg font-semibold text-white mt-2">{model.title}</h3>
                    </div>
                    <p className="text-sm text-[#ADB7BE] mb-3">{model.content}</p>
                    <div className="mt-3">
                      <h4 className="text-xs font-semibold text-white mb-1">Examples:</h4>
                      <ul className="space-y-1 text-xs text-[#ADB7BE]">
                        {model.examples.map((example, j) => (
                          <motion.li 
                            key={j}
                            whileHover={{ x: 3 }}
                            className="flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                            {example}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {section.benefits && (
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#181818] p-6 rounded-lg border border-[#252525] my-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {section.benefits.map((benefit, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start"
                    >
                      <span className="text-2xl mr-3">{benefit.emoji}</span>
                      <div>
                        <h3 className="font-semibold text-white">{benefit.title}</h3>
                        <p className="text-sm text-[#ADB7BE]">{benefit.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

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

            {section.useCases && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="my-6 p-6 bg-blue-900/10 rounded-lg border border-blue-500/30"
              >
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <FiCloud className="text-blue-400 mr-2" />
                  Serverless Use Cases
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.useCases.map((useCase, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 3 }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>{useCase}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {section.tableData && (
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="my-6 overflow-x-auto"
              >
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[#252525]">
                      <th className="text-left py-3 px-4 text-white font-semibold">Approach</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Benefits</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Considerations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.tableData.map((row, i) => (
                      <motion.tr 
                        key={i}
                        whileHover={{ backgroundColor: "rgba(37, 37, 37, 0.5)" }}
                        className="border-b border-[#252525]"
                      >
                        <td className="py-3 px-4 text-white">{row.approach}</td>
                        <td className="py-3 px-4 text-[#ADB7BE]">{row.benefits}</td>
                        <td className="py-3 px-4 text-[#ADB7BE]">{row.considerations}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {section.strategies && (
              <ol className="my-4 space-y-3">
                {section.strategies.map((strategy, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 3 }}
                    className="flex items-start"
                  >
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{strategy}</span>
                  </motion.li>
                ))}
              </ol>
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
          <h3 className="text-2xl font-bold text-white mb-3">Getting Started with Cloud</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">For New Projects</h4>
              <ul className="space-y-2">
                {[
                  "Start with serverless offerings",
                  "Use infrastructure-as-code (Terraform, CDK)",
                  "Implement CI/CD pipelines early"
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
              <h4 className="font-semibold text-white mb-2">For Migrations</h4>
              <ul className="space-y-2">
                {[
                  "Assess application cloud readiness",
                  "Consider lift-and-shift vs. refactor",
                  "Plan for data migration strategy"
                ].map((item, i) => (
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
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default CloudComputingBlog;