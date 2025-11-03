import { DigestItem, Protocol, Narrative, WalletHolding, Opportunity } from '../types';

export const mockDigestItems: DigestItem[] = [
  {
    id: '1',
    title: 'Morpho Blue Launches on Base',
    summary: 'Morpho protocol expands to Base L2 with enhanced capital efficiency and 15% USDC yields',
    source: 'On-chain',
    category: 'protocol_update',
    timestamp: '2024-01-15T08:00:00Z',
    upvotes: 24,
    isPremium: false
  },
  {
    id: '2',
    title: 'RWA Narrative Momentum Spike',
    summary: 'Real World Assets sector sees 200% increase in mentions after BlackRock tokenization announcement',
    source: 'Twitter',
    category: 'narrative_shift',
    timestamp: '2024-01-15T07:30:00Z',
    upvotes: 18,
    isPremium: false
  },
  {
    id: '3',
    title: 'EigenLayer AVS Opportunity',
    summary: 'New actively validated service launches with 25% APY for ETH restaking',
    source: 'Discord',
    category: 'yield_opportunity',
    timestamp: '2024-01-15T07:00:00Z',
    upvotes: 31,
    isPremium: true
  },
  {
    id: '4',
    title: 'Aave V3 Risk Parameter Updates',
    summary: 'Protocol adjusts LTV ratios across 8 assets following market volatility analysis',
    source: 'On-chain',
    category: 'protocol_update',
    timestamp: '2024-01-15T06:30:00Z',
    upvotes: 12,
    isPremium: true
  },
  {
    id: '5',
    title: 'Pendle Yield Surge',
    summary: 'PT-weETH yields spike to 35% APY as Ethereum staking demand increases',
    source: 'On-chain',
    category: 'yield_opportunity',
    timestamp: '2024-01-15T06:00:00Z',
    upvotes: 28,
    isPremium: true
  }
];

export const mockProtocols: Protocol[] = [
  {
    id: 'morpho',
    name: 'Morpho',
    logo: '🔷',
    riskScore: 85,
    auditStatus: ['Trail of Bits', 'Spearbit'],
    tvl: 2400000000,
    exploitHistory: [],
    teamDoxxed: true,
    lastUpdated: '2024-01-15T00:00:00Z'
  },
  {
    id: 'aave',
    name: 'Aave',
    logo: '👻',
    riskScore: 92,
    auditStatus: ['Consensys Diligence', 'OpenZeppelin', 'PeckShield'],
    tvl: 12000000000,
    exploitHistory: [],
    teamDoxxed: true,
    lastUpdated: '2024-01-15T00:00:00Z'
  },
  {
    id: 'eigenlayer',
    name: 'EigenLayer',
    logo: '🔺',
    riskScore: 78,
    auditStatus: ['Sigma Prime', 'ChainSecurity'],
    tvl: 8500000000,
    exploitHistory: [],
    teamDoxxed: true,
    lastUpdated: '2024-01-15T00:00:00Z'
  },
  {
    id: 'pendle',
    name: 'Pendle',
    logo: '🍐',
    riskScore: 81,
    auditStatus: ['Ackee Blockchain', 'Dedaub'],
    tvl: 1800000000,
    exploitHistory: [],
    teamDoxxed: true,
    lastUpdated: '2024-01-15T00:00:00Z'
  }
];

export const mockNarratives: Narrative[] = [
  {
    id: 'rwa',
    name: 'Real World Assets',
    momentumScore: 95,
    twitterMentions: 2847,
    discordActivity: 156,
    onChainTVL: 4200000000,
    lastUpdated: '2024-01-15T00:00:00Z'
  },
  {
    id: 'restaking',
    name: 'Restaking',
    momentumScore: 87,
    twitterMentions: 1923,
    discordActivity: 203,
    onChainTVL: 8500000000,
    lastUpdated: '2024-01-15T00:00:00Z'
  },
  {
    id: 'perps',
    name: 'Perpetuals',
    momentumScore: 72,
    twitterMentions: 1456,
    discordActivity: 98,
    onChainTVL: 2100000000,
    lastUpdated: '2024-01-15T00:00:00Z'
  },
  {
    id: 'yield',
    name: 'Yield Farming',
    momentumScore: 68,
    twitterMentions: 892,
    discordActivity: 124,
    onChainTVL: 6700000000,
    lastUpdated: '2024-01-15T00:00:00Z'
  }
];

export const mockWalletHoldings: WalletHolding[] = [
  {
    tokenAddress: '0xA0b86a33E6441c7f4d5c9E5d8e0e2F5F0E5c5D5e',
    protocolName: 'USDC',
    balance: 5000,
    symbol: 'USDC',
    value: 5000
  },
  {
    tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    protocolName: 'Ethereum',
    balance: 2.5,
    symbol: 'ETH',
    value: 6250
  },
  {
    tokenAddress: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
    protocolName: 'Aave',
    balance: 15,
    symbol: 'AAVE',
    value: 1950
  }
];

export const mockOpportunities: Opportunity[] = [
  {
    id: '1',
    protocol: 'Morpho',
    type: 'yield',
    title: 'High-Yield USDC Farm',
    description: 'New 15% APY USDC lending pool on Morpho Blue',
    apy: 15.2,
    riskScore: 85,
    relevantTokens: ['USDC']
  },
  {
    id: '2',
    protocol: 'EigenLayer',
    type: 'yield',
    title: 'ETH Restaking Opportunity',
    description: 'Earn 25% APY through liquid restaking with new AVS',
    apy: 25.4,
    riskScore: 78,
    relevantTokens: ['ETH']
  },
  {
    id: '3',
    protocol: 'Aave',
    type: 'governance',
    title: 'AAVE Governance Proposal',
    description: 'Vote on new risk parameters for V3 deployment',
    riskScore: 92,
    relevantTokens: ['AAVE']
  }
];