// app/components/Hero/BlurText.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function BlurText({ text, className, delay = 0 }: BlurTextProps) {
  const words = text.split(' ');

  return (
    <motion.span className={cn('inline', className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-[0.25em]"
          initial={{ 
            opacity: 0, 
            filter: 'blur(10px)',
            y: 10
          }}
          animate={{ 
            opacity: 1, 
            filter: 'blur(0px)',
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default BlurText;
