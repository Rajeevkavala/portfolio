'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BentoCard } from './BentoCard';
import { SplitText } from './SplitText';
import { CountUp } from './CountUp';
import { Aurora } from './Aurora';
import { Github, Linkedin, Mail, ArrowRight, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Rajeevkavala', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rajeevkavala/', label: 'LinkedIn' },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = 'rajeevkavala37@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <Aurora className="opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
            <BentoCard className="h-full p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="text-label mb-6 block">SOFTWARE ENGINEER</span>

                <h1 className="text-hero mb-2">
                  <SplitText text="RAJEEV" delay={0.3} staggerDelay={0.05} />
                </h1>

                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text-secondary mb-6">
                  KAVALA
                </h2>

                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg">
                  I build scalable, production-ready web applications and AI-driven systems
                  using modern JavaScript frameworks and backend technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-hover hover:-translate-y-0.5 transition-all"
                >
                  View Engineering Projects
                  <ArrowRight size={18} />
                </motion.a>

                <motion.a
                  href="/Rajeev_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-hover text-text-primary font-medium hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
                >
                  Download Resume
                </motion.a>
              </div>
            </BentoCard>
          </motion.div>

        {/* Avatar + Stats */}
        <motion.div variants={itemVariants}>
          <BentoCard className="h-full p-6 flex flex-col min-h-[240px]">

            {/* Top Spacer */}
            <div className="flex-1" />

            {/* Avatar (True Center) */}
            <div className="flex justify-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28">
                {/* Soft ring */}
                <div className="absolute inset-0 rounded-full ring-2 ring-primary/20" />
                <Image
                  src="/Rajeevkavala.png"
                  alt="Rajeev Kavala"
                  width={112}
                  height={112}
                  className="relative z-10 w-full h-full rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bottom Spacer */}
            <div className="flex-1" />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex justify-center gap-12 w-full mt-2"
            >
              <div className="text-center">
                <span className="block text-2xl font-semibold text-text-primary">
                  <CountUp end={6} suffix="+" />
                </span>
                <span className="block mt-1 text-[11px] text-text-tertiary tracking-wide">
                  Engineering<br />Projects
                </span>
              </div>

              <div className="text-center">
                <span className="block text-2xl font-semibold text-text-primary">
                  <CountUp end={2} suffix="+" />
                </span>
                <span className="block mt-1 text-[11px] text-text-tertiary tracking-wide">
                  Years<br />Building Products
                </span>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 mt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="p-2 rounded-full bg-background-tertiary text-text-secondary
                            hover:text-primary hover:bg-primary/10 hover:scale-110
                            transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

          </BentoCard>
        </motion.div>


          {/* CTA */}
          <motion.div variants={itemVariants}>
            <BentoCard className="h-full p-6 flex flex-col justify-between min-h-[200px]">
              <div>
                <span className="text-sm text-text-tertiary">Currently</span>
                <h3 className="text-lg font-bold text-text-primary mt-1">
                  Open to <span className="text-primary">Opportunities</span>
                </h3>
                <p className="text-xs text-text-tertiary mt-2">
                  Seeking SDE Intern / Entry-Level Software Engineer roles
                </p>
              </div>

              <button
                onClick={copyEmail}
                className="flex items-center justify-between w-full px-4 py-3 mt-4 bg-background-tertiary rounded-xl hover:ring-1 hover:ring-primary/30 transition-all"
              >
                <span className="flex items-center gap-2 text-sm truncate">
                  <Mail size={16} />
                  {email}
                </span>
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </BentoCard>
          </motion.div>

          {/* Focus */}
          <motion.div variants={itemVariants}>
            <BentoCard className="h-full p-6 min-h-[200px]">
              <span className="text-sm text-text-tertiary">Focus Area</span>

              <h3 className="text-lg font-bold text-text-primary mt-1 mb-4">
                Full-Stack Engineering with AI
              </h3>

              <ul className="space-y-2 text-xs text-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  End-to-end web applications
                </li>

                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  AI features (chat, PDF Q&A, automation)
                </li>

                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  Scalable frontend & backend systems
                </li>
              </ul>
            </BentoCard>
          </motion.div>


          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <BentoCard className="h-full p-6 min-h-[200px]">
              <span className="text-sm text-text-tertiary">Tech Stack</span>
              <div className="flex flex-wrap gap-2 mt-4">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-background-tertiary border border-border text-text-secondary hover:border-primary/50 hover:text-primary transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
