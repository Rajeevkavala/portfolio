// components/TopBackground.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // ✅ Framer Motion for animations
import { useTheme } from "../../ThemeProvider";

// Icon data
const icons = [
  {
    src: '/rocket_icon.svg',
    alt: 'rocket icon',
    className: 'top-[-100px] left-[55%] md:top-25 md:left-[-100]',
    visible: 'block',
  },
  {
    src: '/bracket_icon.svg',
    alt: 'bracket icon',
    className: 'top-[200px] left-2 md:top-85 md:left-105',
    visible: 'block',
  },
  {
    src: '/github_icon.svg',
    alt: 'github icon',
    className: 'top-[230px] left-[90%] md:top-[570px] md:left-[700px]',
    visible: 'block',
  },
  {
    src: '/electricity_icon.svg',
    alt: 'electricity icon',
    className: 'top-[540px] left-[50%]',
    visible: 'hidden md:block',
  },
  {
    src: '/merge_icon.svg',
    alt: 'merge icon',
    className: 'top-[158px] left-[70%]',
    visible: 'hidden md:block',
  },
  {
    src: '/stack_icon.svg',
    alt: 'stack icon',
    className: 'top-[150px] right-[-5%]',
    visible: 'hidden lg:block',
  },
];

const TopBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="pb-20">
      {/* Icon container */}
      <div className="absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 z-10">
        <div className="w-full h-full relative">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className={`absolute ${icon.visible} ${icon.className}`}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={23}
                height={23}
                className="pointer-events-none select-none"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: Conditional rendering */}
      {theme === 'dark' ? (
        <>
          <Image
            src="/top_highlight.svg"
            alt="top highlight dark mode"
            width={809}
            height={877}
            className="absolute top-[-515px] hidden md:block"
          />
          <div
            className="absolute top-0 w-full h-[795px] bg-[url('/top_bg_dark.svg')] bg-repeat-x bg-auto hidden md:block"
          />
        </>
      ) : (
        <div
          className="absolute top-0 w-full h-[795px] bg-[url('/top_bg_light.svg')] bg-repeat-x bg-auto hidden md:block"
        />
      )}

      {/* Mobile: Conditional rendering */}
      {theme === 'dark' ? (
        <>
          <Image
            src="/top_highlight_mobile.svg"
            alt="top highlight dark mode for mobile"
            width={429}
            height={465}
            className="absolute top-[-229px] block md:hidden"
          />
          <div
            className="absolute top-0 w-full h-[608px] bg-[url('/top_bg_mobile_dark.svg')] bg-repeat-x bg-auto block md:hidden"
          />
        </>
      ) : (
        <div
          className="absolute top-0 w-full h-[600px] bg-[url('/top_bg_mobile_light.svg')] bg-repeat-x bg-auto block md:hidden"
        />
      )}
    </div>
  );
};

export default TopBackground;
