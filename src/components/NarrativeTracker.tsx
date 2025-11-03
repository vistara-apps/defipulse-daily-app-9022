import React from 'react';
import { NarrativeChip } from './NarrativeChip';
import { mockNarratives } from '../data/mockData';
import { TrendingUp, Activity } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export const NarrativeTracker: React.FC = () => {
  const sortedNarratives = [...mockNarratives].sort((a, b) => b.momentumScore - a.momentumScore);

  const chartData = mockNarratives.map(narrative => ({
    name: narrative.name.split(' ')[0], // Shorten names for chart
    momentum: narrative.momentumScore,
    mentions: narrative.twitterMentions
  }));

  return (
    <div className="space-y-6">
      {/* Momentum Chart */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Narrative Momentum Trends
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 12%, 16%)" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(0, 0%, 60%)"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(0, 0%, 60%)"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(240, 12%, 12%)',
                  border: '1px solid hsl(240, 12%, 16%)',
                  borderRadius: '8px',
                  color: 'hsl(0, 0%, 95%)'
                }}
              />
              <Bar 
                dataKey="momentum" 
                fill="hsl(260, 95%, 65%)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Narrative Leaderboard */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-accent" />
          Trending Narratives
        </h3>
        <div className="space-y-4">
          {sortedNarratives.map((narrative, index) => (
            <div
              key={narrative.id}
              className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-text-muted">
                  #{index + 1}
                </div>
                <div>
                  <NarrativeChip
                    name={narrative.name}
                    momentumScore={narrative.momentumScore}
                    variant={narrative.momentumScore >= 80 ? 'hot' : 'default'}
                  />
                  <div className="flex items-center gap-4 mt-2 text-sm text-text-muted">
                    <span>{narrative.twitterMentions.toLocaleString()} mentions</span>
                    <span>{narrative.discordActivity} Discord msgs/day</span>
                    <span>${(narrative.onChainTVL / 1e9).toFixed(1)}B TVL</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">
                  {narrative.momentumScore}
                </div>
                <div className="text-sm text-text-muted">
                  momentum
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};