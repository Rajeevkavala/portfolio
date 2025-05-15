'use client';

import cn from 'classnames';
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import contactInfo from '@/data/contactInfo.json'; // Adjust path as needed
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ContactSection = () => {
  const currentYear = new Date().getFullYear();

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
    <motion.section
      ref={ref}
      id="contact"
      className={cn(
        'py-12 px-6 bg-[#fffff] dark:bg-[#171717] card-shadow rounded-lg',
      )}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Text Content */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            WANT ME ON YOUR TEAM? ✨
          </h2>
          <p className="text-lg md:text-xl">LET’S MAKE IT HAPPEN ✨</p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href={
                contactInfo.contacts.find((c) => c.id === 'github')?.href ||
                'https://github.com/RajeevKavala'
              }
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={
                contactInfo.contacts.find((c) => c.id === 'twitter')?.href ||
                'https://x.com/RajeevKava28901'
              }
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-300 transition-colors duration-300"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href={
                contactInfo.contacts.find((c) => c.id === 'linkedin')?.href ||
                'https://twitter.com/yourusername'
              }
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right: Get in Touch Button */}
        <a
          href={
            contactInfo.contacts.find((c) => c.id === 'email')?.href ||
            'mailto:rajeevkavala37@gmail.com'
          }
          className={cn(
            'flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-md',
            'bg-primary  hover:bg-[#512effb0]',
            'transition-colors duration-300'
          )}
        >
          LET’S GET IN TOUCH
          <FaEnvelope className="w-5 h-5" />
        </a>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg">© Rajeev Kavala {currentYear}</p>
      </div>
    </motion.section>
  );
};

export default ContactSection;
