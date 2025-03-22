"use client"; // Mark this as a Client Component

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"; // Import the Image component

const inActiveStyle = "text-white/50 hover:bg-white/40 hover:text-white/80";
const activeStyle = "bg-gradient-to-b from-white/40 to-[#2F2D2D]/20";
const linkStyles = "rounded-full px-4 py-1 transition-all text-sm";

interface NavItem {
  name: string;
  href: string;
  isActive?: boolean;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [navMenu, setNavMenu] = useState<NavItem[]>([
    { name: "Home", href: "/", isActive: pathname === "/" },
    { name: "About", href: "/#about", isActive: pathname === "/#about" },
    { name: "Videos", href: "/#videos", isActive: pathname === "/#videos" },
    { name: "Projects", href: "/#projects", isActive: pathname === "/#projects" },
    { name: "Blog", href: "/posts", isActive: pathname === "/posts" },
  ]);

  // Update the active state of nav items when the pathname changes
  useEffect(() => {
    setNavMenu((prevNavMenu) =>
      prevNavMenu.map((item) => ({
        ...item,
        isActive: item.href === pathname,
      }))
    );
  }, [pathname]);

  return (
    <div className="mx-auto max-w-[1440px]">
      {/* Make the header fixed */}
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Navbar with logo on the left for small/medium screens and right for large screens */}
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-3 lg:px-6 backdrop-blur-sm" // Adjusted padding and flex alignment
        >
          {/* Logo on the left for small/medium screens, right for large screens */}
          <div className="flex items-center lg:order-2 lg:pl-[60px]">
            {" "}
            {/* Move logo to the right on large screens */}
            <Link href="/">
              <Image
                src="/images/Faiezlogo.png" // Replace with your logo path
                alt="Logo"
                width={80} // Increased width
                height={80} // Increased height
                className="h-10 w-auto lg:h-14" // Responsive size
              />
            </Link>
          </div>

          {/* Mobile Menu Button (Aligned to the right for small/medium screens) */}
          <div className="flex lg:hidden lg:order-1">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-7 w-7 text-white" />
            </button>
          </div>

          {/* Centered Navigation Links (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-700 px-4 py-1 text-white lg:flex lg:items-center lg:gap-x-8 lg:order-1">
            {" "}
            {/* Ensure links are centered on large screens */}
            {navMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(linkStyles, {
                  [activeStyle]: item.isActive,
                  [inActiveStyle]: !item.isActive,
                })}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu (Dialog) */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-default px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="relative z-50">
              <div className="flex items-center justify-between">
                {/* Logo in mobile menu */}
                <Link href="/">
                  <Image
                    src="/images/Faiezlogo.png" // Replace with your logo path
                    alt="Logo"
                    width={60} // Increased width
                    height={60} // Increased height
                    className="h-12 w-auto" // Increased size
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-7 w-7 text-white"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 text-center">
                    {navMenu.map((item) => (
                      <Link
                        key={item.name + 1}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-xl font-normal leading-7 text-white transition-all hover:bg-gray-50/20"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}