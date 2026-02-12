// app/components/Hero/Aurora.tsx
'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { useTheme } from '@/app/ThemeProvider';

interface AuroraProps {
  className?: string;
}

export function Aurora({ className }: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.002;
      
      // Theme-aware background
      ctx.fillStyle = theme === 'dark' ? '#0A0A0A' : '#FAFAFA';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple gradients for aurora effect
      const opacity = theme === 'dark' ? 1 : 0.7;
      const gradients = [
        {
          x: canvas.width * (0.3 + Math.sin(time) * 0.1),
          y: canvas.height * (0.2 + Math.cos(time * 0.7) * 0.1),
          color: `rgba(229, 77, 77, ${0.15 * opacity})`,
          radius: canvas.width * 0.4,
        },
        {
          x: canvas.width * (0.7 + Math.cos(time * 0.8) * 0.1),
          y: canvas.height * (0.3 + Math.sin(time * 0.5) * 0.1),
          color: `rgba(139, 92, 246, ${0.08 * opacity})`,
          radius: canvas.width * 0.35,
        },
        {
          x: canvas.width * (0.5 + Math.sin(time * 0.6) * 0.15),
          y: canvas.height * (0.5 + Math.cos(time * 0.9) * 0.15),
          color: `rgba(255, 107, 107, ${0.1 * opacity})`,
          radius: canvas.width * 0.5,
        },
      ];

      gradients.forEach(({ x, y, color, radius }) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 -z-10', className)}
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

export default Aurora;
