"use client";
import { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";

// Navigation configuration
const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
] as const;

// Type definitions
type NavItem = {
  name: string;
  href: `#${string}`;
};

// Styling constants
const LINK_STYLES = {
  base: "rounded-full px-4 py-1 transition-all text-sm",
  inactive: "text-white/50 hover:bg-white/40 hover:text-white/80",
  active: "bg-gradient-to-b from-white/40 to-[#2F2D2D]/20",
  mobile: {
    base: "-mx-3 block rounded-lg px-3 py-4 text-xl font-medium leading-7 transition-all w-full",
    inactive: "text-white/70 hover:bg-white/10",
    active: "bg-white/10 text-white",
  },
};

// Animation configuration
const SPRING_CONFIG = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.5,
};

export default function Navbar() {
  // State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMounted, setIsMounted] = useState(false);

  // Handle scroll behavior and section detection
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      updateActiveSection();
    };

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const item of NAV_ITEMS) {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling to sections with error handling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    } else {
      console.error(`Section not found: ${sectionId}`);
    }
  };

  // Handle server-side rendering
  if (!isMounted || typeof window === 'undefined') {
    return <div className="h-16 bg-transparent" />;
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="flex items-center justify-between p-3 lg:px-6 max-w-[1440px] mx-auto">
        {/* Logo with error handling */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={SPRING_CONFIG}
          className="flex items-center lg:order-2 lg:pl-[60px]"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="focus:outline-none"
            aria-label="Home"
          >
            <Image
              src="/images/logo.png"
              alt="Website Logo"
              width={80}
              height={80}
              className="h-10 w-auto lg:h-14"
              priority
              onError={(e) => {
                console.error("Failed to load logo");
                e.currentTarget.src = "/placeholder-logo.png";
              }}
            />
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={SPRING_CONFIG}
          className="flex lg:hidden"
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            aria-label="Open menu"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-700 px-4 py-1 text-white lg:items-center lg:gap-x-8"
        >
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(sectionId)}
                className={clsx(
                  LINK_STYLES.base,
                  activeSection === sectionId ? LINK_STYLES.active : LINK_STYLES.inactive
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={SPRING_CONFIG}
                aria-current={activeSection === sectionId ? "page" : undefined}
              >
                {item.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Mobile Menu with proper Transition structure */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative h-full w-full bg-black/40 backdrop-blur-lg px-6 py-6 sm:max-w-sm">
                  <div className="flex items-center justify-between">
                    <motion.button
                      onClick={() => scrollToSection("home")}
                      className="focus:outline-none"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={SPRING_CONFIG}
                      aria-label="Home"
                    >
                      <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={60}
                        height={60}
                        className="h-12 w-auto"
                        onError={(e) => {
                          console.error("Failed to load mobile logo");
                          e.currentTarget.src = "/placeholder-logo.png";
                        }}
                      />
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-md p-2.5 text-white"
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={SPRING_CONFIG}
                      aria-label="Close menu"
                    >
                      <XMarkIcon className="h-7 w-7" />
                    </motion.button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6 text-center">
                        {NAV_ITEMS.map((item, index) => {
                          const sectionId = item.href.substring(1);
                          return (
                            <motion.button
                              key={item.name}
                              onClick={() => scrollToSection(sectionId)}
                              className={clsx(
                                LINK_STYLES.mobile.base,
                                activeSection === sectionId
                                  ? LINK_STYLES.mobile.active
                                  : LINK_STYLES.mobile.inactive
                              )}
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.07,
                                ...SPRING_CONFIG,
                              }}
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              aria-current={activeSection === sectionId ? "page" : undefined}
                            >
                              {item.name}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </nav>
    </motion.header>
  );
}