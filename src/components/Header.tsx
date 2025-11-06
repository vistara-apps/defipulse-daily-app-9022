import React from 'react';
import { clsx } from 'clsx';

interface HeaderProps {
  activeSection: string;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, toggleDarkMode }) => {
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
          <h2 className="text-2xl font-bold text-foreground pixelated">
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
        <button onClick={toggleDarkMode} className="text-foreground">
          Toggle Dark Mode
        </button>
      </div>
    </header>
  );
};