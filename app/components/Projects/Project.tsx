'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

// Type definition for Props
type Props = {
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
  };
  description: string;
  languageIcons: string[];
  featured?: boolean;
  index?: number;
  github?: string;
};

// Mapping for language names
const languageIconMap: Record<string, string> = {
  'react.svg': 'React',
  'react-original.svg': 'React',
  'node.svg': 'Node.js',
  'nodejs-original.svg': 'Node.js',
  'typescript.svg': 'TypeScript',
  'javascript.svg': 'JavaScript',
  'javascript-original.svg': 'JavaScript',
  'python.svg': 'Python',
  'nextjs-original-wordmark.svg': 'Next.js',
  'mongodb-original.svg': 'MongoDB',
  'firebase-plain.svg': 'Firebase',
  'spring-original.svg': 'Spring Boot',
  'html5-original.svg': 'HTML',
  'css3-original.svg': 'CSS',
  'Langchain.svg': 'LangChain',
  'gemini-color.svg': 'Gemini API',
  'razorpay.svg': 'Razorpay',
};

const getLanguageName = (iconUrl: string): string => {
  const filename = iconUrl.split('/').pop() || '';
  return languageIconMap[filename] || filename.replace('.svg', '').replace('.png', '').replace(/-/g, ' ');
};

const ProjectCard = ({ 
  thumbnail, 
  title, 
  link, 
  description, 
  languageIcons,
  featured = false,
  index = 0,
  github,
}: Props) => {
  if (featured) {
    return (
      <motion.div
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "bg-background-secondary border border-border",
          "transition-all duration-500",
          "hover:border-primary/50 hover:shadow-[0_8px_32px_rgba(229,77,77,0.15)]"
        )}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Image */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-background-tertiary">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
            {/* Label badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
                Featured Project
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between py-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {description}
              </p>

              {/* Tech Stack - Clean badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {languageIcons.map((icon, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background-tertiary border border-border"
                  >
                    <Image
                      src={icon}
                      alt={getLanguageName(icon)}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <span className="text-xs font-medium text-text-secondary">
                      {getLanguageName(icon)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer",
                  "bg-primary text-white font-medium text-sm",
                  "hover:bg-primary-hover transition-all duration-300",
                  "hover:shadow-[0_8px_30px_rgba(229,77,77,0.4)] hover:-translate-y-0.5"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Live Demo
                <ExternalLink size={16} />
              </motion.a>
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer",
                    "border border-border-hover text-text-primary font-medium text-sm",
                    "hover:border-primary hover:text-primary transition-all duration-300",
                    "hover:shadow-[0_8px_24px_rgba(229,77,77,0.15)] hover:-translate-y-0.5"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={16} />
                  Code
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Secondary project card
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl",
        "bg-background-secondary border border-border",
        "transition-all duration-500 h-full",
        "hover:border-primary/50 hover:shadow-[0_4px_24px_rgba(229,77,77,0.1)]",
        "hover:-translate-y-1"
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1
      }}
    >
      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(400px circle at 50% 0%, rgba(229, 77, 77, 0.08), transparent 50%)'
        }}
      />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-background-tertiary">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {languageIcons.slice(0, 4).map((icon, idx) => (
            <div 
              key={idx}
              className="w-6 h-6 rounded bg-background-tertiary p-1 border border-border"
            >
              <Image
                src={icon}
                alt={getLanguageName(icon)}
                width={16}
                height={16}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {languageIcons.length > 4 && (
            <span className="text-xs text-text-tertiary self-center">
              +{languageIcons.length - 4}
            </span>
          )}
        </div>

        {/* Link */}
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium cursor-pointer text-primary hover:text-primary-hover hover:gap-2 transition-all duration-300"
        >
          View Project
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;