'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  gradient?: boolean;
}

export const Marquee = ({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = 'normal',
  gradient = true,
}: MarqueeProps) => {
  const speedMap = {
    slow: '60s',
    normal: '40s',
    fast: '20s',
  };

  return (
    <div
      className={cn(
        'relative flex w-full overflow-hidden',
        gradient && '[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className
      )}
    >
      <div
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-8',
          'animate-marquee',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          reverse && 'direction-reverse'
        )}
        style={{
          animationDuration: speedMap[speed],
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-8',
          'animate-marquee',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          reverse && 'direction-reverse'
        )}
        style={{
          animationDuration: speedMap[speed],
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
