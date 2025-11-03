import React from 'react';
import { clsx } from 'clsx';
import { Flame, TrendingUp } from 'lucide-react';

interface NarrativeChipProps {
  name: string;
  momentumScore: number;
  variant?: 'default' | 'hot';
  size?: 'sm' | 'md';
  onClick?: () => void;
}

export const NarrativeChip: React.FC<NarrativeChipProps> = ({
  name,
  momentumScore,
  variant,
  size = 'md',
  onClick
}) => {
  const isHot = variant === 'hot' || momentumScore >= 80;

  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all duration-250',
        {
          'bg-momentum-hot/20 text-momentum-hot border border-momentum-hot/30 hover:bg-momentum-hot/30': isHot,
          'bg-muted text-text-muted border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30': !isHot,
          'px-2 py-0.5 text-xs': size === 'sm'
        }
      )}
    >
      {isHot ? <Flame className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
      <span>{name}</span>
      <span className="font-mono text-xs opacity-80">
        {momentumScore}
      </span>
    </button>
  );
};