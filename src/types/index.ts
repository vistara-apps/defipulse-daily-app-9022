export interface User {
  fid: string;
  walletAddress?: string;
  premiumStatus: boolean;
  trackedNarratives: string[];
  bookmarkedProtocols: string[];
  preferences: {
    riskTolerance: 'low' | 'medium' | 'high';
    favoriteNarratives: string[];
  };
  referralCredits: number;
}

export interface DigestItem {
  id: string;
  title: string;
  summary: string;
  source: 'Twitter' | 'Discord' | 'On-chain';
  category: 'protocol_update' | 'narrative_shift' | 'yield_opportunity';
  timestamp: string;
  upvotes: number;
  isPremium: boolean;
}

export interface Protocol {
  id: string;
  name: string;
  logo: string;
  riskScore: number;
  auditStatus: string[];
  tvl: number;
  exploitHistory: any[];
  teamDoxxed: boolean;
  lastUpdated: string;
}

export interface Narrative {
  id: string;
  name: string;
  momentumScore: number;
  twitterMentions: number;
  discordActivity: number;
  onChainTVL: number;
  lastUpdated: string;
}

export interface WalletHolding {
  tokenAddress: string;
  protocolName: string;
  balance: number;
  symbol: string;
  value: number;
}

export interface Opportunity {
  id: string;
  protocol: string;
  type: 'yield' | 'governance' | 'risk_alert';
  title: string;
  description: string;
  apy?: number;
  riskScore: number;
  relevantTokens: string[];
}