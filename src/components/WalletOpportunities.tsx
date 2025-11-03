import React from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { mockWalletHoldings, mockOpportunities } from '../data/mockData';
import { RiskBadge } from './RiskBadge';
import { ActionButton } from './ActionButton';
import { Wallet, TrendingUp, Vote, AlertTriangle, ExternalLink } from 'lucide-react';

export const WalletOpportunities: React.FC = () => {
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center mb-8">
          <Wallet className="w-16 h-16 text-text-muted mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Connect Your Wallet
          </h3>
          <p className="text-text-muted">
            Connect your Base wallet to see personalized DeFi opportunities based on your holdings
          </p>
        </div>
        <ConnectButton />
      </div>
    );
  }

  const getOpportunityIcon = (type: string) => {
    switch (type) {
      case 'yield': return <TrendingUp className="w-5 h-5" />;
      case 'governance': return <Vote className="w-5 h-5" />;
      case 'risk_alert': return <AlertTriangle className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getOpportunityColor = (type: string) => {
    switch (type) {
      case 'yield': return 'text-accent';
      case 'governance': return 'text-primary';
      case 'risk_alert': return 'text-risk-medium';
      default: return 'text-text-muted';
    }
  };

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Wallet className="w-5 h-5 text-primary" />
          Portfolio Holdings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockWalletHoldings.map((holding, index) => (
            <div key={index} className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{holding.symbol}</span>
                <span className="text-sm text-text-muted">{holding.protocolName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">
                  {holding.balance.toLocaleString()}
                </span>
                <span className="text-sm text-accent">
                  ${holding.value.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="font-medium text-text-muted">Total Portfolio Value</span>
            <span className="text-xl font-bold text-foreground">
              ${mockWalletHoldings.reduce((sum, holding) => sum + holding.value, 0).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Personalized Opportunities */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Opportunities for Your Portfolio
        </h3>
        <div className="space-y-4">
          {mockOpportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted ${getOpportunityColor(opportunity.type)}`}>
                    {getOpportunityIcon(opportunity.type)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{opportunity.title}</h4>
                    <p className="text-sm text-text-muted">{opportunity.protocol}</p>
                  </div>
                </div>
                <RiskBadge score={opportunity.riskScore} size="sm" />
              </div>
              
              <p className="text-text-muted mb-4">{opportunity.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {opportunity.apy && (
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-text-muted">APY:</span>
                      <span className="font-semibold text-accent">{opportunity.apy}%</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-text-muted">Relevant tokens:</span>
                    <span className="text-sm font-medium text-foreground">
                      {opportunity.relevantTokens.join(', ')}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <ActionButton size="sm" variant="secondary">
                    Learn More
                  </ActionButton>
                  <ActionButton size="sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Explore
                  </ActionButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};