'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import experiences from '@/data/experiences.json';
import { cn } from '@/lib/utils';
import { ExternalLink, Calendar, Building2 } from 'lucide-react';

type ExperienceType = {
  logo: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
};

const ExperienceCard = ({ 
  experience, 
  index 
}: { 
  experience: ExperienceType; 
  index: number;
}) => {
  return (
    <motion.div
      className="relative pl-8 md:pl-12"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(229,77,77,0.5)]" />

      {/* Card */}
      <div
        className={cn(
          "relative group rounded-2xl overflow-hidden",
          "bg-background-secondary border border-border",
          "p-6 md:p-8",
          "transition-all duration-500",
          "hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(229,77,77,0.1)]"
        )}
      >
        {/* Spotlight effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at 100% 0%, rgba(229, 77, 77, 0.06), transparent 50%)'
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-wrap items-start gap-4 mb-6">
            {/* Company Logo */}
            <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-background-tertiary border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={56}
                height={56}
                className="object-contain w-full h-full p-1"
              />
            </div>

            {/* Company Info */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 mb-1">
                {experience.role}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-text-secondary text-sm">
                <span className="flex items-center gap-1.5">
                  <Building2 size={14} className="text-text-tertiary" />
                  {experience.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-text-tertiary" />
                  {experience.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-2.5 mb-6">
            {experience.description.map((point, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-3 text-text-secondary text-sm md:text-base leading-relaxed"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Certificate Link */}
          <a
            href="https://drive.google.com/file/d/1c_yIutHNSBou-UQ2EVqvwqq_Ma3nzZRV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
          >
            View Certificate
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Experiences = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px]" />
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
          <span className="text-label mb-4 block">EXPERIENCE</span>
          <h2 className="text-h1 mb-4">
            Professional{' '}
            <span className="font-script text-primary">Journey</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl">
            A timeline of my professional experience and the projects
            that have shaped my engineering skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.company} 
              experience={experience} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
