'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, PartyPopper, Sparkles, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SuccessAnimationProps {
  title?: string;
  message?: string;
  variant?: 'check' | 'celebration' | 'sparkle';
  className?: string;
  onComplete?: () => void;
}

export function SuccessAnimation({
  title = 'Success!',
  message = 'Operation completed successfully.',
  variant = 'check',
  className,
  onComplete,
}: SuccessAnimationProps) {
  const iconVariants = {
    check: CheckCircle2,
    celebration: PartyPopper,
    sparkle: Sparkles,
  };

  const Icon = iconVariants[variant];

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.05,
    angle: (i * 30) * (Math.PI / 180),
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => onComplete?.()}
      className={cn(
        'flex flex-col items-center justify-center py-12 text-center relative',
        className
      )}
    >
      {/* Particle burst */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(({ id, delay, angle }) => (
          <motion.div
            key={id}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0,
              opacity: 1,
            }}
            animate={{ 
              x: Math.cos(angle) * 100,
              y: Math.sin(angle) * 100,
              scale: [0, 1, 0.5],
              opacity: [1, 1, 0],
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3 + delay,
              ease: 'easeOut',
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
          </motion.div>
        ))}
      </div>

      {/* Main icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: 'spring', 
          stiffness: 200, 
          damping: 12,
          delay: 0.1 
        }}
        className="relative"
      >
        {/* Glow effect */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.5, 1.2],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 rounded-full bg-green-500 blur-xl"
        />
        
        {/* Circle background */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center relative"
        >
          {/* Checkmark animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
          >
            <Icon className="w-12 h-12 text-green-500" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Text content */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold mt-6 mb-2"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-muted-foreground max-w-sm"
      >
        {message}
      </motion.p>

      {/* Confetti-like dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: '50%',
              y: '50%',
              scale: 0,
            }}
            animate={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: [0, 1, 0],
            }}
            transition={{ 
              duration: 1.5,
              delay: 0.5 + Math.random() * 0.5,
              ease: 'easeOut',
            }}
            className={cn(
              'absolute w-2 h-2 rounded-full',
              i % 3 === 0 ? 'bg-green-500' : i % 3 === 1 ? 'bg-primary' : 'bg-yellow-500'
            )}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Inline success indicator (small)
export function SuccessIndicator({ 
  show, 
  className 
}: { 
  show: boolean; 
  className?: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: show ? 1 : 0, 
        opacity: show ? 1 : 0 
      }}
      className={cn('inline-flex', className)}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3 }}
      >
        <CheckCircle2 className="w-5 h-5 text-green-500" />
      </motion.div>
    </motion.div>
  );
}

// Progress success (for multi-step processes)
interface ProgressSuccessProps {
  steps: { label: string; completed: boolean }[];
  className?: string;
}

export function ProgressSuccess({ steps, className }: ProgressSuccessProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: step.completed ? 1 : 0.8 }}
            className={cn(
              'w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium',
              step.completed 
                ? 'bg-green-500 text-white' 
                : 'bg-muted text-muted-foreground'
            )}
          >
            {step.completed ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              index + 1
            )}
          </motion.div>
          <span className={cn(
            step.completed ? 'text-foreground' : 'text-muted-foreground'
          )}>
            {step.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default SuccessAnimation;
