// app/components/layout/Section.tsx
'use client';

import { cn } from '@/lib/utils';
import { Container } from './Container';
import { motion } from 'framer-motion';
import { fadeUpVariants, viewportSettings } from '@/lib/animations';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'secondary' | 'tertiary' | 'gradient';
  compact?: boolean;
  noContainer?: boolean;
  animate?: boolean;
}

const backgroundClasses = {
  default: 'bg-background',
  secondary: 'bg-background-secondary',
  tertiary: 'bg-background-tertiary',
  gradient: 'hero-gradient',
};

export function Section({ 
  id,
  children, 
  className,
  background = 'default',
  compact = false,
  noContainer = false,
  animate = true
}: SectionProps) {
  const Wrapper = animate ? motion.section : 'section';
  const motionProps = animate ? {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewportSettings,
    variants: fadeUpVariants
  } : {};

  return (
    <Wrapper
      id={id}
      className={cn(
        compact ? 'py-12 md:py-20' : 'py-20 md:py-32',
        backgroundClasses[background],
        className
      )}
      {...motionProps}
    >
      {noContainer ? children : <Container>{children}</Container>}
    </Wrapper>
  );
}

export default Section;
