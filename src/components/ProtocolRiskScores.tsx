import React, { useState } from 'react';
import { ProtocolListItem } from './ProtocolListItem';
import { mockProtocols } from '../data/mockData';
import { Search, Filter } from 'lucide-react';

export const ProtocolRiskScores: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const [bookmarkedProtocols, setBookmarkedProtocols] = useState<string[]>(['aave', 'morpho']);

  const handleBookmark = (protocolId: string) => {
    setBookmarkedProtocols(prev => 
      prev.includes(protocolId)
        ? prev.filter(id => id !== protocolId)
        : [...prev, protocolId]
    );
  };

  const filteredProtocols = mockProtocols.filter(protocol => {
    const matchesSearch = protocol.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesRisk = true;
    if (riskFilter !== 'all') {
      if (riskFilter === 'low') matchesRisk = protocol.riskScore >= 80;
      else if (riskFilter === 'medium') matchesRisk = protocol.riskScore >= 60 && protocol.riskScore < 80;
      else if (riskFilter === 'high') matchesRisk = protocol.riskScore < 60;
    }
    
    return matchesSearch && matchesRisk;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-text-muted absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search protocols..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-text-muted" />
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value as any)}
            className="px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
          >
            <option value="all">All Risk Levels</option>
            <option value="low">Low Risk (80+)</option>
            <option value="medium">Medium Risk (60-79)</option>
            <option value="high">High Risk (<60)</option>
          </select>
        </div>
      </div>

      {/* Risk Score Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-risk-low rounded-full"></div>
            <div>
              <p className="text-text-muted text-sm">Low Risk Protocols</p>
              <p className="font-bold text-lg text-risk-low">
                {mockProtocols.filter(p => p.riskScore >= 80).length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-risk-medium rounded-full"></div>
            <div>
              <p className="text-text-muted text-sm">Medium Risk Protocols</p>
              <p className="font-bold text-lg text-risk-medium">
                {mockProtocols.filter(p => p.riskScore >= 60 && p.riskScore < 80).length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-risk-high rounded-full"></div>
            <div>
              <p className="text-text-muted text-sm">High Risk Protocols</p>
              <p className="font-bold text-lg text-risk-high">
                {mockProtocols.filter(p => p.riskScore < 60).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol List */}
      <div className="space-y-4">
        {filteredProtocols.map((protocol) => (
          <ProtocolListItem
            key={protocol.id}
            protocol={protocol}
            variant={bookmarkedProtocols.includes(protocol.id) ? 'bookmarked' : 'default'}
            onBookmark={handleBookmark}
            isBookmarked={bookmarkedProtocols.includes(protocol.id)}
          />
        ))}
      </div>

      {filteredProtocols.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-muted text-lg">No protocols found matching your criteria</p>
          <p className="text-text-muted mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};