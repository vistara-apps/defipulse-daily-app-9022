import React, { useState } from 'react';
import { DigestItem } from '../types';
import { clsx } from 'clsx';
import { Heart, Share2, Lock, TrendingUp, MessageCircle, Activity } from 'lucide-react';

interface DigestCardProps {
  item: DigestItem;
  variant?: 'free' | 'premium' | 'shared';
  onUpvote?: (id: string) => void;
  onShare?: (id: string) => void;
  onUnlock?: () => void;
}

export const DigestCard: React.FC<DigestCardProps> = ({
  item,
  variant = 'free',
  onUpvote,
  onShare,
  onUnlock
}) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [localUpvotes, setLocalUpvotes] = useState(item.upvotes);

  const handleUpvote = () => {
    if (!isUpvoted) {
      setIsUpvoted(true);
      setLocalUpvotes(prev => prev + 1);
      onUpvote?.(item.id);
    }
  };

  const handleShare = () => {
    onShare?.(item.id);
  };

  const getSourceIcon = () => {
    switch (item.source) {
      case 'Twitter': return <MessageCircle className="w-4 h-4" />;
      case 'Discord': return <Activity className="w-4 h-4" />;
      case 'On-chain': return <TrendingUp className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getCategoryColor = () => {
    switch (item.category) {
      case 'protocol_update': return 'text-red-500';
      case 'narrative_shift': return 'text-red-500';
      case 'yield_opportunity': return 'text-red-500';
      default: return 'text-text-muted';
    }
  };

  const isBlurred = item.isPremium && variant === 'free';

  return (
    <div className={clsx(
      'relative bg-card border border-border rounded-lg p-4 card-glow transition-all duration-250',
      'hover:border-red-600 hover:shadow-glow',
      {
        'opacity-60': isBlurred,
        'max-w-sm': variant === 'shared'
      }
    )}>
      {isBlurred && (
        <div className="absolute inset-0 backdrop-blur-sm bg-card/50 rounded-lg flex items-center justify-center z-10">
          <button
            onClick={onUnlock}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            <Lock className="w-4 h-4" />
            Unlock Premium ($0.50)
          </button>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-text-muted">{getSourceIcon()}</span>
          <span className="text-sm text-text-muted">{item.source}</span>
          <span className={clsx('text-sm font-medium', getCategoryColor())}>
            {item.category.replace('_', ' ')}
          </span>
        </div>
        {item.isPremium && (
          <div className="flex items-center gap-1 bg-red-500/20 text-red-500 px-2 py-1 rounded-full text-xs">
            <Lock className="w-3 h-3" />
            Premium
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2 text-foreground">
        {item.title}
      </h3>
      
      <p className={clsx(
        'text-text-muted mb-4 leading-relaxed',
        { 'blur-sm': isBlurred }
      )}>
        {item.summary}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={handleUpvote}
            className={clsx(
              'flex items-center gap-1 px-3 py-1 rounded-full transition-colors text-sm',
              {
                'bg-red-500/20 text-red-500': isUpvoted,
                'bg-muted text-text-muted hover:bg-red-500/10 hover:text-red-500': !isUpvoted
              }
            )}
            disabled={isBlurred}
          >
            <Heart className={clsx('w-4 h-4', { 'fill-current': isUpvoted })} />
            {localUpvotes}
          </button>
          
          <button
            onClick={handleShare}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-text-muted hover:bg-red-500/10 hover:text-red-500 transition-colors text-sm"
            disabled={isBlurred}
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
        
        <span className="text-xs text-text-muted">
          {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};