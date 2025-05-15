'use client';
import React, { useRef } from 'react';
import skillsdata from '@/data/skills.json';
import SectionContainer from '../Section/SectionContainer';
import SectionHeader from '../Section/SectionHeader';
import Skill from './Skill';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const displayedSkills = isMobile ? skillsdata.slice(0, 5) : skillsdata;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <SectionContainer id="skills">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-4 sm:mx-8 md:mx-16 lg:mx-28"
      >
        <SectionHeader plainText="💻 This is my" highlightedText="Tech Stack" />
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            w-full
            card
            px-4
            sm:px-6
            py-4
            sm:py-6
            background
            rounded-xl
            shadow-lg
            flex
            flex-wrap
            justify-center
            items-center
            gap-3
            sm:gap-4
            md:gap-6
          "
        >
          {displayedSkills.map((skill, id) => (
            <motion.div
              key={id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Skill name={skill.name} icon={skill.icon} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Background Images */}
      <Image
        src="/tech_stack_grid_dark.svg"
        alt="Tech Stack Grid"
        width={569}
        height={373}
        className="hidden dark:md:block -z-10 absolute -left-[135px] -top-[39px]"
      />
      <Image
        src="/tech_stack_grid_dark.svg"
        alt="Tech Stack Grid"
        width={569}
        height={373}
        className="hidden dark:md:hidden md:block -z-10 absolute -left-[125px] -top-[39px]"
      />
    </SectionContainer>
  );
};

export default Skills;
