import React from 'react';
import { Protocol } from '../types';
import { RiskBadge } from './RiskBadge';
import { clsx } from 'clsx';
import { Star, ExternalLink } from 'lucide-react';

interface ProtocolListItemProps {
  protocol: Protocol;
  variant?: 'default' | 'bookmarked';
  onBookmark?: (id: string) => void;
  isBookmarked?: boolean;
}

export const ProtocolListItem: React.FC<ProtocolListItemProps> = ({
  protocol,
  variant = 'default',
  onBookmark,
  isBookmarked = false
}) => {
  const formatTVL = (tvl: number) => {
    if (tvl >= 1e9) return `$${(tvl / 1e9).toFixed(1)}B`;
    if (tvl >= 1e6) return `$${(tvl / 1e6).toFixed(1)}M`;
    return `$${tvl.toLocaleString()}`;
  };

  return (
    <div className={clsx(
      'flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-250',
      {
        'ring-2 ring-accent/20': variant === 'bookmarked' || isBookmarked
      }
    )}>
      <div className="flex items-center gap-3">
        <div className="text-2xl">{protocol.logo}</div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">{protocol.name}</h3>
            {(variant === 'bookmarked' || isBookmarked) && (
              <Star className="w-4 h-4 text-accent fill-current" />
            )}
          </div>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-sm text-text-muted">TVL: {formatTVL(protocol.tvl)}</span>
            <span className="text-sm text-text-muted">
              {protocol.auditStatus.length} audit{protocol.auditStatus.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <RiskBadge score={protocol.riskScore} size="sm" />
        <div className="flex items-center gap-2">
          <button
            onClick={() => onBookmark?.(protocol.id)}
            className={clsx(
              'p-2 rounded-full transition-colors',
              {
                'text-accent hover:bg-accent/10': isBookmarked,
                'text-text-muted hover:bg-muted hover:text-accent': !isBookmarked
              }
            )}
          >
            <Star className={clsx('w-4 h-4', { 'fill-current': isBookmarked })} />
          </button>
          <button className="p-2 rounded-full text-text-muted hover:bg-muted hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};