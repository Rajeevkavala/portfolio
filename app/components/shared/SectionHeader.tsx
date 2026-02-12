// app/components/shared/SectionHeader.tsx
'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeUpVariants, viewportSettings } from '@/lib/animations';

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  animate?: boolean;
}

export function SectionHeader({
  label,
  title,
  titleAccent,
  description,
  className,
  align = 'center',
  animate = true,
}: SectionHeaderProps) {
  const Wrapper = animate ? motion.div : 'div';
  const motionProps = animate ? {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewportSettings,
    variants: fadeUpVariants
  } : {};

  return (
    <Wrapper
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
      {...motionProps}
    >
      {label && (
        <span className="text-label mb-4 block">
          {label}
        </span>
      )}
      
      <h2 className="text-h1 text-text-primary">
        {title}
        {titleAccent && (
          <>
            {' '}
            <span className="font-script text-primary">
              {titleAccent}
            </span>
          </>
        )}
      </h2>
      
      {description && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </Wrapper>
  );
}

export default SectionHeader;
