import React from 'react';
import { clsx } from 'clsx';

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center font-medium transition-all duration-250 rounded-md',
        {
          // Variants
          'bg-primary text-white hover:bg-primary/90 hover:shadow-glow': variant === 'primary',
          'border border-border text-foreground hover:border-primary/30 hover:text-primary': variant === 'secondary',
          'text-text-muted hover:text-foreground hover:bg-muted': variant === 'ghost',
          
          // Sizes
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
          
          // Disabled
          'opacity-50 cursor-not-allowed': disabled
        },
        className
      )}
    >
      {children}
    </button>
  );
};