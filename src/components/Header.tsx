import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const getSectionTitle = (section: string) => {
    switch (section) {
      case 'digest': return 'Daily Digest';
      case 'narratives': return 'Narrative Momentum';
      case 'protocols': return 'Protocol Risk Scores';
      case 'wallet': return 'Wallet Opportunities';
      case 'bookmarks': return 'Bookmarked Protocols';
      case 'notifications': return 'Notification Center';
      case 'settings': return 'Settings';
      default: return 'DeFiPulse Daily';
    }
  };

  return (
    <header className="bg-surface border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {getSectionTitle(activeSection)}
          </h2>
          <p className="text-text-muted mt-1">
            {activeSection === 'digest' && "Today's curated DeFi insights"}
            {activeSection === 'narratives' && "Track trending DeFi themes"}
            {activeSection === 'protocols' && "Protocol safety at a glance"}
            {activeSection === 'wallet' && "Personalized opportunities"}
            {activeSection === 'bookmarks' && "Your saved protocols"}
            {activeSection === 'notifications' && "Your alert preferences"}
            {activeSection === 'settings' && "Customize your experience"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 text-text-muted absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search protocols..."
              className="pl-10 pr-4 py-2 bg-card border border-border rounded-md text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
            />
          </div>
          
          <button className="p-2 text-text-muted hover:text-foreground hover:bg-muted rounded-md transition-colors relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
          </button>
          
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};