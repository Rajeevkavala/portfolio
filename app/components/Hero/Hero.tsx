'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useTheme } from '../../ThemeProvider';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Hero = () => {
  const { theme } = useTheme();

  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const buttonBg = theme === 'dark' ? 'bg-primary' : 'bg-primary';
  const buttonBgHover = theme === 'dark' ? 'hover:bg-primary' : 'hover:bg-primary';
  const buttonFocusRing = theme === 'dark' ? 'focus:ring-blue-500' : 'focus:ring-blue-400';

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 md:flex-row md:gap-12"
    >
      {/* Text Content */}
      <div className="z-10 flex w-full flex-col items-center gap-6 md:w-1/2 md:items-start md:gap-8">
        <h1
          className={`text-center text-3xl font-bold leading-tight tracking-tight md:text-left md:text-4xl lg:text-5xl xl:text-6xl ${textPrimary}`}
        >
          <span className="mr-2 inline-block animate-wave">👋</span>
          Hello, I&apos;m Rajeev Kavala
          <span className="mt-3 block highlight text-4xl w-fit md:mt-4 md:text-3xl lg:text-4xl xl:text-5xl">
            Full Stack Developer
          </span>
        </h1>
        <p
          className={`text-center text-base ${textSecondary} md:text-left md:text-lg lg:text-xl max-w-md`}
        >
          Passionate about crafting intelligent web solutions that bridge technology and real-world
          impact.
        </p>
        <div className="flex gap-4">
          <a
            href="/Rajeev_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 flex items-center gap-2 rounded-lg ${buttonBg} px-4 py-3 text-sm font-medium text-white transition-transform hover:scale-105 ${buttonBgHover} focus:outline-none focus:ring-2 ${buttonFocusRing} focus:ring-offset-2 md:text-base`}
            aria-label="View Rajeev Kavala's resume"
          >
            Resume
            <Image
              src="https://cdn.jsdelivr.net/npm/heroicons@2.0.13/24/outline/document-text.svg"
              alt=""
              width={16}
              height={16}
              className="inline-block"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Image Content */}
      <div className="relative mt-10 w-full md:mt-0 md:w-1/2">
        <Image
          src={theme === 'dark' ? '/profile_dark_purple.png' : '/profile_light_purple.png'}
          alt="Decorative background shape"
          width={400}
          height={460}
          className="absolute right-0 -z-10 h-[460px] w-[400px] hidden md:block pointer-events-none"
          priority={false}
          loading="lazy"
        />
        <Image
          src="/Rajeevkavala.png"
          alt="Portrait of Rajeev Kavala"
          width={380}
          height={440}
          className="relative z-10 mx-auto h-[440px] w-[380px] rounded-xl object-cover shadow-lg md:mr-4"
          priority={true}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
