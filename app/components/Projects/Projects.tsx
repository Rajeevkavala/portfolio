"use client";
import React, { useRef } from 'react';
import SectionContainer from '../Section/SectionContainer';
import SectionHeader from '../Section/SectionHeader';
import projects from "@/data/projects.json";
import Project from './Project';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// Animation variants for SectionHeader
const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Animation variants for Project items
const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: i * 0.2, // Staggered delay based on index
    },
  }),
};

const Projects = () => {
  // Ref for SectionHeader
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  // Ref for Projects grid
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, margin: '-100px' });

  return (
    <SectionContainer id="projects">
      <div className="section-contents mx-6 md:mx-[64px]">
        {/* Animated SectionHeader */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={headerVariants}
        >
          <SectionHeader
            plainText="😎 Some of my"
            highlightedText="my Best Works"
          />
        </motion.div>

        {/* Animated Projects Grid */}
        <motion.div
          ref={projectsRef}
          className="lg-w-full grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {projects.map((project, id) => (
            <motion.div
              key={id}
              initial="hidden"
              animate={projectsInView ? 'visible' : 'hidden'}
              variants={projectVariants}
              custom={id} // Pass index for staggered animation
            >
              <Project
                thumbnail={project.thumbnail}
                title={project.title}
                link={project.link}
                description={project.description}
                languageIcons={project.languageIcons}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop highlight image */}
      <Image
        src="/projects_highlight.svg"
        alt="Background highlight decoration"
        width={558}
        height={558}
        className="absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"
      />
      {/* Mobile highlight image */}
      <Image
        src="/highlight_mobile.svg"
        alt="Background highlight decoration"
        width={321}
        height={530}
        className="absolute md:hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      />
    </SectionContainer>
  );
};

export default Projects;