"use client";
import React from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-700 py-4 z-50 relative overflow-hidden">
      {/* Floating Circles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -bottom-10 w-40 h-40 rounded-full bg-white/5 blur-sm"></div>
        <div className="absolute -right-20 -top-10 w-40 h-40 rounded-full bg-white/5 blur-sm"></div>
        <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-white/10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 rounded-full bg-white/15"></div>
        <div className="absolute top-10 right-20 w-2 h-2 rounded-full bg-white/30"></div>
        <div className="absolute bottom-8 left-32 w-3 h-3 rounded-full bg-white/20"></div>
      </div>

      {/* White decorative elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-full pointer-events-none">
        <div className="absolute top-2 left-10 w-2 h-2 rounded-full bg-white/20"></div>
        <div className="absolute bottom-3 right-20 w-3 h-3 rounded-full bg-white/30"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-white/25"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between text-white">
          {/* Left Section - Copyright */}
          <div className="text-sm font-light shrink-0 mb-2 sm:mb-0">
            © 2025 Syed Faiez Ahmed
          </div>

          {/* Divider Line for Small Screens */}
          <div className="h-px w-full bg-white/30 my-2 sm:hidden"></div>

          {/* Stretched Lines with Icons */}
          <div className="flex flex-col sm:flex-row items-center flex-1 px-4 min-w-0">
            {/* Left Line */}
            <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent mb-2 sm:mb-0 sm:mr-2 relative">
              <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-white/30"></div>
            </div>

            {/* Icons Container */}
            <div className="flex gap-4 sm:gap-6 shrink-0 text-sm font-light mb-2 sm:mb-0">
              <a
                href="https://github.com/syedfaiezahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-white transition-colors relative"
              >
                <FiGithub className="w-4 h-4" />
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white/30"></span>
              </a>

              <a
                href="https://www.linkedin.com/in/syed-faiez-ahmed-b45612279/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-white transition-colors"
              >
                <FiLinkedin className="w-4 h-4" />
              </a><a
                href="https://www.instagram.com/syedfaiez._.ahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-white transition-colors"
              >
                <FiInstagram className="w-4 h-4" />
              </a><a
                href="https://www.facebook.com/profile.php?id=100090166166833"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-white transition-colors"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:syedfaiezahmed@gmail.com.com"
                className="p-2 text-white/70 hover:text-white transition-colors relative"
              >
                <FiMail className="w-4 h-4" />
                <span className="absolute -top-1 right-0 w-1.5 h-1.5 rounded-full bg-white/25"></span>
              </a>
            </div>

            {/* Right Line */}
            <div className="h-px flex-1 bg-gradient-to-l from-white/30 to-transparent mt-2 sm:mt-0 sm:ml-2 relative">
              <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-white/30"></div>
            </div>
          </div>

          {/* Divider Line for Small Screens */}
          <div className="h-px w-full bg-white/30 my-2 sm:hidden"></div>

          {/* Right Section - Tagline */}
          <div className="text-sm font-light text-white/80 sm:block shrink-0 relative hidden">
            CRAFTING DIGITAL EXPERIENCES
            <span className="absolute -bottom-1 right-0 w-3 h-3 rounded-full bg-white/20"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
