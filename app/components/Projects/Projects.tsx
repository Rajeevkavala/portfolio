'use client';

import React from 'react';
import { motion } from 'framer-motion';
import projects from '@/data/projects.json';
import ProjectCard from './Project';

const Projects = () => {
  // First project is featured, rest are secondary
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-label mb-4 block">SELECTED WORK</span>
          <h2 className="text-h1 mb-4">
            Selected Engineering{' '}
            <span className="font-script text-primary">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl">
            A focused set of projects demonstrating problem-solving,
            system design, and real-world engineering trade-offs.
          </p>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-12">
          <ProjectCard
            thumbnail={featuredProject.thumbnail}
            title={featuredProject.title}
            link={featuredProject.link}
            description={featuredProject.description}
            languageIcons={featuredProject.languageIcons}
            featured
          />
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              thumbnail={project.thumbnail}
              title={project.title}
              link={project.link}
              description={project.description}
              languageIcons={project.languageIcons}
              index={index}
            />
          ))}
        </div>

        {/* View All Projects Link (optional) */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/Rajeevkavala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-300"
          >
            <span>View all projects on GitHub</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;