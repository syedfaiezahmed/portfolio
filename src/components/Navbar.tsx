"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";

interface NavItem {
  name: string;
  href: `#${string}`;
}

const inActiveStyle = "text-white/50 hover:bg-white/40 hover:text-white/80";
const activeStyle = "bg-gradient-to-b from-white/40 to-[#2F2D2D]/20";
const linkStyles = "rounded-full px-4 py-1 transition-all text-sm";

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

interface SpringTransition {
  type: "spring";
  stiffness?: number;
  damping?: number;
  mass?: number;
  delay?: number;
  duration?: number;
}

const defaultSpring: SpringTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.5,
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 100;
      for (const item of NAV_ITEMS) {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
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

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  if (!isMounted) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-sm">
        <nav className="flex items-center justify-between p-3 lg:px-6 max-w-[1440px] mx-auto">
          <div className="flex items-center lg:order-2 lg:pl-[70px]">
            <button
              onClick={() => scrollToSection("home")}
              className="focus:outline-none"
              aria-label="Home"
            >
              <Image
                src="/images/Faiezlogo.png"
                alt="Logo"
                width={80}
                height={80}
                className="h-10 w-auto lg:h-14"
                priority
              />
            </button>
          </div>
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-700 px-4 py-1 text-white lg:items-center lg:gap-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={clsx(linkStyles, {
                  [activeStyle]: activeSection === item.href.substring(1),
                  [inActiveStyle]: activeSection !== item.href.substring(1),
                })}
                aria-current={
                  activeSection === item.href.substring(1) ? "page" : undefined
                }
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled
          ? "bg-black/50 backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="flex items-center justify-between p-3 lg:px-6 max-w-[1440px] mx-auto">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={defaultSpring}
          className="flex items-center lg:order-2 lg:pl-[60px]"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="focus:outline-none"
            aria-label="Home"
          >
            <Image
              src="/images/Faiezlogo.png"
              alt="Logo"
              width={80}
              height={80}
              className="h-10 w-auto lg:h-14"
              priority
            />
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={defaultSpring}
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

        {/* Desktop Navigation Links */}
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
                className={clsx(linkStyles, {
                  [activeStyle]: activeSection === sectionId,
                  [inActiveStyle]: activeSection !== sectionId,
                })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={defaultSpring}
                aria-current={activeSection === sectionId ? "page" : undefined}
              >
                {item.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
              as={motion.div}
              static
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px]"
              />

              {/* Mobile Menu Panel */}
              <DialogPanel
                as={motion.div}
                initial={{ x: "100%", scale: 0.95 }}
                animate={{ x: 0, scale: 1 }}
                exit={{ x: "100%" }}
                transition={true}
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/40 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
              >
                <div className="flex items-center justify-between">
                  <motion.button
                    onClick={() => scrollToSection("home")}
                    className="focus:outline-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={defaultSpring}
                    aria-label="Home"
                  >
                    <Image
                      src="/images/Faiezlogo.png"
                      alt="Logo"
                      width={60}
                      height={60}
                      className="h-12 w-auto"
                    />
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-white"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={defaultSpring}
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
                              "-mx-3 block rounded-lg px-3 py-4 text-xl font-medium leading-7 text-white transition-all hover:bg-white/10 w-full",
                              {
                                "bg-white/10": activeSection === sectionId,
                                "text-white/70": activeSection !== sectionId,
                              }
                            )}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.07,
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            aria-current={
                              activeSection === sectionId ? "page" : undefined
                            }
                          >
                            {item.name}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}