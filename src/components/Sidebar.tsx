import React from 'react';
import { clsx } from 'clsx';
import { 
  Home, 
  TrendingUp, 
  Shield, 
  Wallet, 
  Bell,
  Settings,
  Star
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  toggleDarkMode: () => void;
}

const navigation = [
  { id: 'digest', name: 'Daily Digest', icon: Home },
  { id: 'narratives', name: 'Narratives', icon: TrendingUp },
  { id: 'protocols', name: 'Risk Scores', icon: Shield },
  { id: 'wallet', name: 'My Wallet', icon: Wallet },
  { id: 'bookmarks', name: 'Bookmarks', icon: Star },
  { id: 'notifications', name: 'Alerts', icon: Bell },
  { id: 'settings', name: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, toggleDarkMode }) => {
  return (
    <div className="w-64 bg-surface border-r border-border h-full p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          DeFiPulse Daily
        </h1>
        <p className="text-sm text-text-muted mt-1">5-minute intelligence</p>
      </div>

      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={clsx(
                'w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors',
                {
                  'bg-primary/20 text-primary': activeSection === item.id,
                  'text-text-muted hover:text-foreground hover:bg-muted': activeSection !== item.id
                }
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>
      <button onClick={toggleDarkMode} className="mt-4 text-foreground">
        Toggle Dark Mode
      </button>
    </div>
  );
};