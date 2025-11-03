import React from 'react';
import { clsx } from 'clsx';

interface FrameShellProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass';
  className?: string;
}

export const FrameShell: React.FC<FrameShellProps> = ({ 
  children, 
  variant = 'default', 
  className 
}) => {
  return (
    <div className={clsx(
      'min-h-screen w-full',
      {
        'bg-gradient-to-br from-background via-surface to-background': variant === 'default',
        'glass': variant === 'glass'
      },
      className
    )}>
      {children}
    </div>
  );
};