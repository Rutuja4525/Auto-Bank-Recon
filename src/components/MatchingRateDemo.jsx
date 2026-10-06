import React, { useState } from 'react';
import { matchingRateReport } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Search, Filter, TrendingUp, CheckCircle, AlertTriangle, Layers } from 'lucide-react';

export default function MatchingRateDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMode, setFilterMode] = useState("all");

  const filteredRows = matchingRateReport.rows.filter(row => {
    const matchesSearch = row.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          row.flowCode.toString().includes(searchTerm);
    if (filterMode === "perfect") return matchesSearch && row.rate === 100;
    if (filterMode === "partial") return matchesSearch && row.rate < 100;
    return matchesSearch;
  });

  const getRateBadge = (rate) => {
    if (rate === 100) return <span className="badge badge-success">100.00%</span>;
    if (rate >= 75) return <span className="badge badge-info">{rate.toFixed(2)}%</span>;
    if (rate > 0) return <span className="badge badge-warning">{rate.toFixed(2)}%</span>;
    return <span className="badge badge-danger">0.00%</span>;
  };

  return (
    <div className="animate-fade-in">
      
      {/* Top Header */}
      <div className="glass-panel" style={{ padding: '20px 28px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Matching Rate Analytics</h2>
              <span className="badge badge-info">Screen Code: brec_mrr</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Period: {matchingRateReport.dateFrom} to {matchingRateReport.dateTo} | Property: {matchingRateReport.property}
            </p>
          </div>
          <div>
            <span className="badge badge-success" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              Overall Auto-Clearing: {matchingRateReport.overallRate}%
            </span>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <TrendingUp size={16} color="var(--accent-cyan)" /> Overall Matching Rate
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '8px' }} className="gradient-text">
            {matchingRateReport.overallRate}%
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>
            High-velocity automated clearance
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <CheckCircle size={16} color="var(--accent-emerald)" /> Total Matched Items
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-emerald)', marginTop: '8px' }}>
            {matchingRateReport.totalMatched}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Cleared automatically without human touch
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <AlertTriangle size={16} color="var(--accent-amber)" /> Unmatched Exceptions
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-amber)', marginTop: '8px' }}>
            {matchingRateReport.totalUnmatched}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Exception-based review pool
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <Layers size={16} color="var(--accent-purple)" /> Total Statement Activity
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginTop: '8px' }}>
            {matchingRateReport.rows.reduce((acc, r) => acc + r.matched + r.unmatched, 0)}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Total BAI2 bank transactions processed
          </div>
        </div>
      </div>

      {/* Visual Chart Panel */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>
          Matching Rate % by BAI2 Transaction Flow Code
        </h3>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={matchingRateReport.rows} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <XAxis dataKey="flowCode" stroke="var(--text-muted)" fontSize={12} tickLine={false} />
              <YAxis stroke="var(--text-muted)" fontSize={12} domain={[0, 100]} unit="%" />
              <Tooltip
                contentStyle={{ background: '#1f2937', border: '1px solid var(--border-color)', borderRadius: '8px', color: '#fff' }}
                formatter={(val) => [`${val}%`, 'Matching Rate']}
                labelFormatter={(label) => `Flow Code: ${label}`}
              />
              <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                {matchingRateReport.rows.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.rate === 100 ? '#10b981' : entry.rate >= 75 ? '#06b6d4' : '#f59e0b'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detail Data Table */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search flow code or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '8px 12px 8px 36px',
                  borderRadius: '8px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-color)',
                  color: '#ffffff',
                  fontSize: '0.85rem'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => setFilterMode('all')} className={`btn ${filterMode === 'all' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              All ({matchingRateReport.rows.length})
            </button>
            <button onClick={() => setFilterMode('perfect')} className={`btn ${filterMode === 'perfect' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              100% Matched
            </button>
            <button onClick={() => setFilterMode('partial')} className={`btn ${filterMode === 'partial' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              Requires Review
            </button>
          </div>
        </div>

        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Flow Code</th>
                <th>Transaction Description</th>
                <th style={{ textAlign: 'center' }}>Unmatched Count</th>
                <th style={{ textAlign: 'center' }}>Matched Count</th>
                <th style={{ textAlign: 'center' }}>Total Activity</th>
                <th style={{ textAlign: 'right' }}>Matching Rate %</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr key={row.flowCode}>
                  <td className="font-mono" style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>
                    {row.flowCode}
                  </td>
                  <td style={{ fontWeight: 600 }}>{row.description}</td>
                  <td style={{ textAlign: 'center', color: row.unmatched > 0 ? 'var(--accent-amber)' : 'var(--text-muted)' }}>
                    {row.unmatched}
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                    {row.matched}
                  </td>
                  <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                    {row.matched + row.unmatched}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    {getRateBadge(row.rate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
