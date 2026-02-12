'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const contactMethods = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'rajeevkavala37@gmail.com',
    href: 'mailto:rajeevkavala37@gmail.com',
    copyable: true,
  },
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    value: '@RajeevKavala',
    href: 'https://github.com/RajeevKavala',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Rajeev Kavala',
    href: 'https://www.linkedin.com/in/rajeev-kavala-807212239/',
  },
];

const ContactCard = ({
  method,
  index,
}: {
  method: typeof contactMethods[0];
  index: number;
}) => {
  const [copied, setCopied] = useState(false);
  const Icon = method.icon;

  const handleCopy = async () => {
    if (method.copyable) {
      await navigator.clipboard.writeText(method.value);
      setCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl",
        "bg-background-secondary border border-border",
        "p-6 h-full",
        "transition-all duration-500",
        "hover:border-primary/40 hover:shadow-[0_4px_24px_rgba(229,77,77,0.1)]"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Spotlight */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(300px circle at 50% 0%, rgba(229, 77, 77, 0.08), transparent 50%)'
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={cn(
            "relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden group/icon",
            "bg-primary/10 text-primary",
            "transition-all duration-300"
          )}>
            <span className="absolute inset-0 bg-primary scale-0 transition-transform duration-300 ease-out group-hover:scale-100 rounded-xl" />
            <Icon size={22} className="relative z-10 transition-colors duration-300 group-hover:text-white" />
          </div>
          
          {method.copyable ? (
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg cursor-pointer text-text-tertiary hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
            </button>
          ) : (
            <a
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg cursor-pointer text-text-tertiary hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>

        <h3 className="text-sm font-medium text-text-tertiary mb-1">{method.label}</h3>
        <p className="text-text-primary font-medium">{method.value}</p>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section id="contact" className="relative py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8">
          {/* Section Header */}
          <motion.div
            className="mb-16 md:mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-label mb-4 block">GET IN TOUCH</span>
            <h2 className="text-h1 mb-4">
              Let&apos;s{' '}
              <span className="font-script text-primary">Connect</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Feel free to reach out through any of these channels.
              I&apos;m always open to discussing opportunities and projects.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {contactMethods.map((method, index) => (
              <ContactCard key={method.id} method={method} index={index} />
            ))}
          </div>

          {/* Location Note */}
          <motion.div
            className="flex items-center justify-center gap-2 text-text-tertiary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <MapPin size={16} />
            <span className="text-sm">Based in India • Available worldwide</span>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Logo/Name */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-heading font-bold text-text-primary">
                Rajeev<span className="text-primary">.</span>
              </span>
            </div>

            {/* Center - Copyright */}
            <p className="text-text-tertiary text-sm">
              © {currentYear} Rajeev Kavala. All rights reserved.
            </p>

            {/* Right - Social Links */}
            <div className="flex items-center gap-3">
              {contactMethods.filter(m => m.id !== 'email').map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.id}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg cursor-pointer text-text-tertiary hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                    aria-label={method.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
