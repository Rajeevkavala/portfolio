'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import skillsdata from '@/data/skills.json';
import { cn } from '@/lib/utils';

// Categorize skills
const categorizeSkills = (skills: typeof skillsdata) => {
  const categories: Record<string, typeof skills> = {
    'Frontend': [],
    'Backend': [],
    'Database': [],
    'Tools & Others': [],
  };

  const frontendNames = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript'];
  const backendNames = ['Node.js', 'Express.js', 'Spring Boot', 'Python', 'Java', 'FastAPI'];
  const databaseNames = ['MongoDB', 'Firebase', 'PostgreSQL', 'MySQL', 'Redis'];

  skills.forEach(skill => {
    if (frontendNames.includes(skill.name)) {
      categories['Frontend'].push(skill);
    } else if (backendNames.includes(skill.name)) {
      categories['Backend'].push(skill);
    } else if (databaseNames.includes(skill.name)) {
      categories['Database'].push(skill);
    } else {
      categories['Tools & Others'].push(skill);
    }
  });

  return categories;
};

const SkillPill = ({ 
  name, 
  icon, 
  index 
}: { 
  name: string; 
  icon: string; 
  index: number;
}) => {
  return (
    <motion.div
      className={cn(
        "group flex items-center gap-2.5 px-4 py-2.5 rounded-full",
        "bg-background-secondary border border-border",
        "hover:border-primary/50 hover:bg-primary/5",
        "transition-all duration-300 cursor-default"
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 4px 20px rgba(229, 77, 77, 0.1)'
      }}
    >
      <div className="w-5 h-5 flex-shrink-0">
        <Image
          src={icon}
          alt={name}
          width={20}
          height={20}
          className="object-contain w-full h-full"
        />
      </div>
      <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const categorizedSkills = categorizeSkills(skillsdata);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-background-secondary">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
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
          <span className="text-label mb-4 block">TECHNICAL SKILLS</span>
          <h2 className="text-h1 mb-4">
            Core{' '}
            <span className="font-script text-primary">Technologies</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl">
            Technologies I use to build scalable applications and deliver
            production-ready solutions.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(categorizedSkills).map(([category, skills], catIndex) => (
            skills.length > 0 && (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <SkillPill
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
