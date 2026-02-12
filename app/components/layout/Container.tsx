// app/components/layout/Container.tsx
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

export function Container({ 
  children, 
  className,
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component className={cn(
      'w-full max-w-[1400px] mx-auto px-6 md:px-8',
      className
    )}>
      {children}
    </Component>
  );
}

export default Container;
