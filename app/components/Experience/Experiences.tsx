'use client';
import React, { useEffect } from 'react';
import SectionContainer from '../Section/SectionContainer';
import SectionHeader from '../Section/SectionHeader';
import experiences from '@/data/experiences.json';
import Experience from './Experience';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ExperienceType = {
  logo: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
};

const ExperienceItem = ({ experience }: { experience: ExperienceType }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Experience
        logo={experience.logo}
        company={experience.company}
        role={experience.role}
        duration={experience.duration}
        description={experience.description}
      />
    </motion.div>
  );
};

const Experiences = () => {
  return (
    <SectionContainer id="Experience">
      <div className="section-contents mx-6 md:mx-[64px]">
        <SectionHeader plainText="💼 My prior" highlightedText="Work Experience" />
        <div className="lg-w-full grid grid-cols-1 lg:grid-cols-1 gap-10">
          {experiences.map((experience, id) => (
            <ExperienceItem key={id} experience={experience} />
          ))}
        </div>
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
        src="/projects_highlight_mobile.svg"
        alt="Background highlight decoration"
        width={321}
        height={530}
        className="absolute md:hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      />
    </SectionContainer>
  );
};

export default Experiences;
