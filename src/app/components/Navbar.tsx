"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Sips & Stuff", href: "#ss" },
  { label: "Gallery", href: "#gal" },
  { label: "Collaboration", href: "#collaboration" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  /* ===================== SCROLL SPY ===================== */
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let item of navItems) {
        const section = document.getElementById(item.href.slice(1));
        if (!section) continue;

        const { offsetTop, offsetHeight } = section;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(item.href);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  /* ===================== CLICK HANDLER ===================== */
  const handleClick = async (href: string) => {
    setMenuOpen(false);

    // Already on home → just scroll
    if (pathname === "/") {
      const section = document.getElementById(href.slice(1));
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Navigate to home + scroll
    router.push("/" + href);

    // Wait for navigation + DOM render
    setTimeout(() => {
      const section = document.getElementById(href.slice(1));
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 w-full flex justify-center z-50"
    >
      {/* ===================== DESKTOP ===================== */}
      <div className="hidden sm:flex">
        <div className="relative flex bg-black text-white rounded-full px-3 py-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="relative px-5 py-2 font-medium text-sm"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute inset-0 bg-white rounded-full"
                  />
                )}

                <span
                  className={`relative z-10 ${
                    isActive ? "text-black" : "text-white"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===================== MOBILE ===================== */}
      <div className="sm:hidden flex justify-between items-center w-full px-4">
        <div className="bg-black text-white rounded-md px-3 py-3 font-semibold text-sm">
          Meridian Cafe
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="p-2 rounded-md text-white bg-black"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="absolute top-16 right-4 w-11/12 bg-black text-white rounded-xl shadow-xl flex flex-col items-center py-4 space-y-2"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <button
                    key={item.label}
                    onClick={() => handleClick(item.href)}
                    className={`px-4 py-2 rounded-full w-full text-center font-medium text-sm transition-all ${
                      isActive
                        ? "bg-white text-black"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
