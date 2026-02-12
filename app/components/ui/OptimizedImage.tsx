'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fadeIn?: boolean;
  blurPlaceholder?: boolean;
  showSkeleton?: boolean;
}

/**
 * Optimized image component with lazy loading, fade-in animation,
 * and loading skeleton
 */
export function OptimizedImage({
  src,
  alt,
  className,
  fadeIn = true,
  blurPlaceholder = true,
  showSkeleton = true,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = imgRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden', className)}>
      {/* Skeleton placeholder */}
      {showSkeleton && !isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-inherit" />
      )}

      {/* Image */}
      {isInView && (
        <motion.div
          initial={fadeIn ? { opacity: 0 } : false}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            className={cn(
              'object-cover transition-all duration-300',
              !isLoaded && 'blur-sm'
            )}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            placeholder={blurPlaceholder ? 'blur' : 'empty'}
            {...props}
          />
        </motion.div>
      )}
    </div>
  );
}

/**
 * Background image with parallax effect
 */
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className,
  children,
}: ParallaxImageProps) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      setOffset(scrolled * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
    >
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${-offset}px)` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * Avatar image with fallback
 */
interface AvatarImageProps {
  src?: string;
  alt: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function AvatarImage({
  src,
  alt,
  fallback,
  size = 'md',
  className,
}: AvatarImageProps) {
  const [error, setError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const initials = fallback || alt.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden bg-muted flex items-center justify-center',
        sizeClasses[size],
        className
      )}
    >
      {src && !error ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-muted-foreground font-medium">
          {initials}
        </span>
      )}
    </div>
  );
}

export default OptimizedImage;
