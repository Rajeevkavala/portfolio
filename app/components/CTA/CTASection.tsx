'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from '../ui/Marquee';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const keywords = [
  'SCALABLE',
  'MAINTAINABLE',
  'EFFICIENT',
  'CLEAN CODE',
  'PERFORMANCE',
  'RELIABLE',
  'TESTED',
  'DOCUMENTED',
];

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Keywords Marquee */}
      <div className="relative mb-16 py-6 border-y border-border/50">
        <Marquee speed="slow" pauseOnHover gradient={false}>
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="flex items-center gap-3 text-text-secondary text-sm md:text-base font-medium tracking-wider"
            >
              <Sparkles size={14} className="text-primary" />
              {keyword}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Main CTA Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary mb-6">
            Open to Software
            <br />
            <span className="font-script text-primary">Engineering Opportunities</span>
          </h2>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-10">
            Available for internships, entry-level roles, and technical projects.
            Let&apos;s discuss how I can contribute to your team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#contact"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-full",
                "bg-primary text-white font-medium text-lg",
                "hover:bg-primary-hover transition-all duration-300",
                "hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(229,77,77,0.35)]"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="mailto:rajeevkavala@gmail.com"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-full",
                "border border-border-hover text-text-primary font-medium text-lg",
                "hover:border-primary hover:text-primary transition-all duration-300"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Marquee */}
      <div className="relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 opacity-90" />
        <div className="relative py-4">
          <Marquee speed="normal" gradient={false}>
            {['OPEN FOR OPPORTUNITIES', '•', 'SOFTWARE ENGINEER', '•', 'SEEKING SDE ROLES', '•'].map((text, i) => (
              <span
                key={i}
                className="text-white font-medium text-sm md:text-base tracking-wider"
              >
                {text}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
