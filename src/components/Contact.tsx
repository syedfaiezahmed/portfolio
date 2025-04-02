"use client";
import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); // Clear error when user types
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-6 pb-10 md:pb-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#ADB7BE] max-w-xs md:max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-3 p-4 md:p-6 bg-[#181818] rounded-lg md:rounded-xl border border-[#252525] hover:border-purple-500/30 transition-colors"
            >
              <div className="p-2 md:p-3 bg-gradient-to-r from-blue-600 to-purple-700 rounded-md md:rounded-lg">
                <FiMail className="text-white text-lg md:text-xl" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold text-white mb-1">Email</h3>
                <a
                  href="mailto:syedfaiezahmed@gmail.com"
                  className="text-xs md:text-sm text-[#ADB7BE] hover:text-blue-400 transition-colors break-all"
                >
                  syedfaiezahmed@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-3 p-4 md:p-6 bg-[#181818] rounded-lg md:rounded-xl border border-[#252525] hover:border-blue-500/30 transition-colors"
            >
              <div className="p-2 md:p-3 bg-gradient-to-r from-purple-600 to-blue-700 rounded-md md:rounded-lg">
                <FiMapPin className="text-white text-lg md:text-xl" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold text-white mb-1">
                  Location
                </h3>
                <p className="text-xs md:text-sm text-[#ADB7BE]">Karachi, Pakistan</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-3 p-4 md:p-6 bg-[#181818] rounded-lg md:rounded-xl border border-[#252525] hover:border-purple-500/30 transition-colors"
            >
              <div className="p-2 md:p-3 bg-gradient-to-r from-blue-600 to-purple-700 rounded-md md:rounded-lg">
                <FiPhone className="text-white text-lg md:text-xl" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold text-white mb-1">Phone</h3>
                <a
                  href="tel:+923340396523"
                  className="text-xs md:text-sm text-[#ADB7BE] hover:text-blue-400 transition-colors"
                >
                  +92 3340396523
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-5 md:p-8 bg-[#181818] rounded-lg md:rounded-xl border border-[#252525]"
          >
            {submitSuccess ? (
              <div className="text-center py-6 md:py-8">
                <div className="mx-auto flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-green-500/20 mb-3 md:mb-4">
                  <FiSend className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                  Message Sent!
                </h3>
                <p className="text-xs md:text-sm text-[#ADB7BE] mb-4 md:mb-6">
                  Thank you for reaching out. I'll respond to you soon.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-md md:rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {error && (
                  <div className="p-3 text-sm text-red-400 bg-red-900/20 rounded-md border border-red-800">
                  {error}
                  </div>
                )}

                <div>
                  <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-medium text-[#ADB7BE] mb-1"
                  >
                  Your Name
                  </label>
                  <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400 text-sm md:text-base" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#252525] border border-[#333333] text-white text-xs md:text-sm rounded-md md:rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 md:pl-10 p-2 md:p-2.5"
                    placeholder="John Doe"
                  />
                  </div>
                </div>

                <div>
                  <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-medium text-[#ADB7BE] mb-1"
                  >
                  Your Email
                  </label>
                  <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400 text-sm md:text-base" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#252525] border border-[#333333] text-white text-xs md:text-sm rounded-md md:rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 md:pl-10 p-2 md:p-2.5"
                    placeholder="john@example.com"
                  />
                  </div>
                </div>

                <div>
                  <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-medium text-[#ADB7BE] mb-1"
                  >
                  Your Message
                  </label>
                  <div className="relative">
                  <div className="absolute top-2.5 left-3">
                    <FiMessageSquare className="text-gray-400 text-sm md:text-base" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                      className="bg-[#252525] border border-[#333333] text-white text-xs md:text-sm rounded-md md:rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 md:pl-10 p-2 md:p-2.5"
                      placeholder="Let's talk about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium rounded-md md:rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 md:h-5 md:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiArrowRight className="ml-1 md:ml-2 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}