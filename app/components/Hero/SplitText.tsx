// app/components/Hero/SplitText.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  staggerDelay?: number;
  type?: 'chars' | 'words';
}

export function SplitText({ 
  text, 
  className,
  charClassName,
  delay = 0,
  staggerDelay = 0.03,
  type = 'chars'
}: SplitTextProps) {
  const items = type === 'chars' ? text.split('') : text.split(' ');
  
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      className={cn('inline-block', className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          className={cn('inline-block', charClassName)}
          variants={itemVariants}
          style={{ 
            transformOrigin: 'bottom',
            display: type === 'words' ? 'inline-block' : 'inline',
            marginRight: type === 'words' ? '0.25em' : undefined,
          }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default SplitText;
