import React, { useState } from 'react';
import { FrameShell } from './components/FrameShell';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DailyDigest } from './components/DailyDigest';
import { NarrativeTracker } from './components/NarrativeTracker';
import { ProtocolRiskScores } from './components/ProtocolRiskScores';
import { WalletOpportunities } from './components/WalletOpportunities';

function App() {
  const [activeSection, setActiveSection] = useState('digest');

  const renderContent = () => {
    switch (activeSection) {
      case 'digest':
        return <DailyDigest />;
      case 'narratives':
        return <NarrativeTracker />;
      case 'protocols':
        return <ProtocolRiskScores />;
      case 'wallet':
        return <WalletOpportunities />;
      case 'bookmarks':
        return (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-foreground mb-2">Bookmarked Protocols</h3>
            <p className="text-text-muted">Your saved protocols will appear here</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-foreground mb-2">Notification Center</h3>
            <p className="text-text-muted">Configure your alert preferences</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-foreground mb-2">Settings</h3>
            <p className="text-text-muted">Customize your DeFiPulse experience</p>
          </div>
        );
      default:
        return <DailyDigest />;
    }
  };

  return (
    <FrameShell>
      <div className="flex h-screen overflow-hidden">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header activeSection={activeSection} />
          
          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-4xl mx-auto">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </FrameShell>
  );
}

export default App;