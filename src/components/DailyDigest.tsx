import React, { useState } from 'react';
import { DigestCard } from './DigestCard';
import { ActionButton } from './ActionButton';
import { mockDigestItems } from '../data/mockData';
import { usePaymentContext } from '../hooks/usePaymentContext';
import { Lock, TrendingUp, Clock } from 'lucide-react';

export const DailyDigest: React.FC = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [isPaymentPending, setIsPaymentPending] = useState(false);
  const { createSession } = usePaymentContext();

  const handleUnlockPremium = async () => {
    try {
      setIsPaymentPending(true);
      await createSession();
      setIsPremium(true);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsPaymentPending(false);
    }
  };

  const handleUpvote = (id: string) => {
    console.log('Upvoted digest item:', id);
    // In a real app, this would update the backend
  };

  const handleShare = (id: string) => {
    console.log('Shared digest item:', id);
    // In a real app, this would share to Farcaster
    alert('Shared to your Farcaster feed!');
  };

  const freeItems = mockDigestItems.filter(item => !item.isPremium);
  const premiumItems = mockDigestItems.filter(item => item.isPremium);

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-text-muted text-sm">Market Sentiment</p>
              <p className="font-bold text-lg text-accent">Bullish</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-text-muted text-sm">Read Time</p>
              <p className="font-bold text-lg text-foreground">5 min</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-momentum-hot/20 rounded-lg">
              <Lock className="w-5 h-5 text-momentum-hot" />
            </div>
            <div>
              <p className="text-text-muted text-sm">Premium Status</p>
              <p className="font-bold text-lg text-foreground">
                {isPremium ? 'Unlocked' : 'Locked'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Unlock Banner */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Unlock Full Digest
              </h3>
              <p className="text-text-muted">
                Get access to all {premiumItems.length} premium insights, risk alerts, and yield opportunities for just $0.50
              </p>
            </div>
            <ActionButton
              onClick={handleUnlockPremium}
              disabled={isPaymentPending}
              className="whitespace-nowrap"
            >
              {isPaymentPending ? 'Processing...' : 'Unlock Premium'}
            </ActionButton>
          </div>
        </div>
      )}

      {/* Free Digest Items */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Today's Highlights (Free)
        </h3>
        <div className="space-y-4">
          {freeItems.map((item) => (
            <DigestCard
              key={item.id}
              item={item}
              variant="premium"
              onUpvote={handleUpvote}
              onShare={handleShare}
            />
          ))}
        </div>
      </div>

      {/* Premium Digest Items */}
      {premiumItems.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            Premium Insights
            <Lock className="w-4 h-4 text-primary" />
          </h3>
          <div className="space-y-4">
            {premiumItems.map((item) => (
              <DigestCard
                key={item.id}
                item={item}
                variant={isPremium ? 'premium' : 'free'}
                onUpvote={handleUpvote}
                onShare={handleShare}
                onUnlock={handleUnlockPremium}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};