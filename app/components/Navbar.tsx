'use client';
import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import { useTheme } from "../ThemeProvider";
import { motion } from "framer-motion"; // ✅ Add this

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "Experience", label: "Experience" },
  { id: "contact", label: "Contact Me" },
];

const Navbar = () => {
  const { theme } = useTheme(); // Removed toggleTheme since we don't need it anymore
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 120;
      const y = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const visibleSections: Record<string, number> = {};
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections[id] = entry.intersectionRatio;
          } else {
            delete visibleSections[id];
          }
        });

        const mostVisible = Object.entries(visibleSections).sort(
          (a, b) => b[1] - a[1]
        )[0];

        if (mostVisible && mostVisible[0] !== activeSection) {
          setActiveSection(mostVisible[0]);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }} // 👈 On load animation
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-10 apply-rounded right-6 z-50",
        "mx-auto flex flex-col items-end",
        "md:right-auto md:left-1/2 md:-translate-x-1/2",
        theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
      )}
    >
      {/* Mobile Menu Toggle Button */}
      <div className="flex items-center">
        {/* Hamburger Menu Toggle Button */}
        <button
          className={cn(
            "p-3 md:hidden rounded relative z-50",
            "shadow-md",
            theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
          )}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <div
            className={cn(
              "w-6 h-4 relative flex items-center justify-center",
              "transition-all duration-300 ease-in-out"
            )}
          >
            {/* Top bar */}
            <span
              className={cn(
                "absolute w-6 h-0.5 rounded",
                "transition-all duration-300 ease-in-out",
                theme === 'light' ? 'bg-gray-900' : 'bg-gray-100',
                {
                  "rotate-45 translate-y-0": isOpen,
                  "-translate-y-2": !isOpen,
                }
              )}
            />
            {/* Middle bar */}
            <span
              className={cn(
                "absolute w-6 h-0.5 rounded",
                "transition-all duration-300 ease-in-out",
                theme === 'light' ? 'bg-gray-900' : 'bg-gray-100',
                {
                  "opacity-0": isOpen,
                }
              )}
            />
            {/* Bottom bar */}
            <span
              className={cn(
                "absolute w-6 h-0.5 rounded",
                "transition-all duration-300 ease-in-out",
                theme === 'light' ? 'bg-gray-900' : 'bg-gray-100',
                {
                  "-rotate-45 translate-y-0": isOpen,
                  "translate-y-2": !isOpen,
                }
              )}
            />
          </div>
        </button>
      </div>

      {/* Nav Menu */}
      <div
        className={cn(
          "rounded-lg shadow-md",
          theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
        )}
      >
        <nav
          className={cn(
            "duration-300 rounded ease-in-out md:block p-2",
            {
              "fixed top-0 left-0 w-full h-screen flex items-center justify-center z-40":
                isOpen,
              "hidden md:block": !isOpen,
            },
            theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
          )}
        >
          <ul
            className={cn(
              "flex flex-col items-center gap-8 text-xl font-medium md:flex-row md:gap-8 md:text-lg",
              theme === 'light' ? 'text-gray-900' : 'text-gray-100'
            )}
          >
            {sections.map(({ id, label }) => (
              <li key={id}>
                <div
                  onClick={() => {
                    setActiveSection(id);
                    scrollToSection(id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "cursor-pointer rounded p-2 duration-300 ease-in-out",
                    {
                      "bg-indigo-700 text-white": activeSection === id,
                      [theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700']:
                        activeSection !== id,
                    }
                  )}
                >
                  {label}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
