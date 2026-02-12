'use client';

import React, { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeProvider";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// Theme Toggle Component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Show placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        className={cn(
          "relative w-10 h-10 rounded-full flex items-center justify-center",
          "bg-background-tertiary border border-border shadow-sm"
        )}
      />
    );
  }
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer group",
        "bg-background-tertiary border border-border",
        "hover:border-primary/50 hover:bg-primary/5 hover:scale-105",
        "transition-all duration-300",
        "shadow-sm hover:shadow-md hover:shadow-primary/10"
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Moon size={18} className="text-text-secondary group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sun size={18} className="text-primary transition-colors duration-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const y = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  }, []);

  // Intersection observer for active section
  useEffect(() => {
    const sectionElements = navLinks
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
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "py-3" 
            : "py-4"
        )}
      >
        <div className={cn(
          "max-w-[1400px] mx-auto px-6 md:px-8 transition-all duration-500",
          scrolled
            ? "bg-background-secondary/95 backdrop-blur-xl border border-border rounded-2xl shadow-lg shadow-primary/5"
            : "bg-transparent"
        )}>
          <div className="h-[60px] flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="#home"
              className="relative group font-heading text-2xl font-bold cursor-pointer transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <span className="relative z-10 bg-gradient-to-r from-text-primary to-text-primary group-hover:from-primary group-hover:to-primary-hover bg-clip-text transition-all duration-300">
                RAJEEV
              </span>
              <span className="inline-block ml-0.5 text-primary group-hover:scale-125 transition-transform duration-300">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium cursor-pointer rounded-full transition-all duration-300",
                    activeSection === link.id 
                      ? "text-text-primary bg-primary/10" 
                      : "text-text-secondary hover:text-text-primary hover:bg-background-tertiary"
                  )}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 border border-primary/30 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Side: Theme Toggle + CTA */}
            <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className={cn(
                "relative px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer",
                "border border-primary text-primary",
                "overflow-hidden group",
                "transition-all duration-300",
                "hover:border-primary hover:shadow-[0_8px_30px_rgba(229,77,77,0.3)] hover:-translate-y-0.5"
              )}
            >
              <span className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-full" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Let&apos;s Talk
              </span>
            </button>
          </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-lg cursor-pointer transition-all duration-300",
                "text-text-primary hover:text-primary hover:bg-primary/5",
                "border border-transparent hover:border-primary/30"
              )}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
            
            <nav className="relative flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "relative px-8 py-3 text-2xl font-heading font-semibold cursor-pointer rounded-full transition-all duration-300",
                    activeSection === link.id 
                      ? "text-primary bg-primary/10 border border-primary/30" 
                      : "text-text-secondary hover:text-text-primary hover:bg-background-secondary"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "relative mt-8 px-10 py-4 rounded-full text-lg font-medium cursor-pointer overflow-hidden group",
                  "bg-primary text-white border-2 border-primary",
                  "transition-all duration-300",
                  "hover:shadow-[0_8px_30px_rgba(229,77,77,0.4)] hover:-translate-y-0.5 hover:scale-105"
                )}
              >
                <span className="absolute inset-0 bg-primary-hover scale-0 transition-transform duration-300 ease-out group-hover:scale-100 rounded-full" />
                <span className="relative z-10">Let&apos;s Talk</span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
