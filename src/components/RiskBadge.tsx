import React from 'react';
import { clsx } from 'clsx';
import { Shield, AlertTriangle, AlertCircle } from 'lucide-react';

interface RiskBadgeProps {
  score: number;
  variant?: 'low' | 'medium' | 'high';
  showScore?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({
  score,
  variant,
  showScore = true,
  size = 'md'
}) => {
  const getRiskVariant = (score: number) => {
    if (score >= 80) return 'low';
    if (score >= 60) return 'medium';
    return 'high';
  };

  const actualVariant = variant || getRiskVariant(score);

  const getIcon = () => {
    switch (actualVariant) {
      case 'low': return <Shield className={clsx('w-4 h-4', { 'w-3 h-3': size === 'sm', 'w-5 h-5': size === 'lg' })} />;
      case 'medium': return <AlertTriangle className={clsx('w-4 h-4', { 'w-3 h-3': size === 'sm', 'w-5 h-5': size === 'lg' })} />;
      case 'high': return <AlertCircle className={clsx('w-4 h-4', { 'w-3 h-3': size === 'sm', 'w-5 h-5': size === 'lg' })} />;
    }
  };

  const getColors = () => {
    switch (actualVariant) {
      case 'low': return 'bg-risk-low/20 text-risk-low border-risk-low/30';
      case 'medium': return 'bg-risk-medium/20 text-risk-medium border-risk-medium/30';
      case 'high': return 'bg-risk-high/20 text-risk-high border-risk-high/30';
    }
  };

  const getLabel = () => {
    switch (actualVariant) {
      case 'low': return 'Low Risk';
      case 'medium': return 'Medium Risk';
      case 'high': return 'High Risk';
    }
  };

  return (
    <div className={clsx(
      'inline-flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium',
      getColors(),
      {
        'px-1.5 py-0.5 text-xs': size === 'sm',
        'px-3 py-1.5 text-sm': size === 'lg'
      }
    )}>
      {getIcon()}
      <span>{getLabel()}</span>
      {showScore && <span className="font-mono">({score})</span>}
    </div>
  );
};