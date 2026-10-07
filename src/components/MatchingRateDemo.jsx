import React, { useState } from 'react';
import { matchingRateReport } from '../data/mockData';
import { Search, Filter, TrendingUp, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

export default function MatchingRateDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMode, setFilterMode] = useState("all");

  const filteredRows = matchingRateReport.rows.filter(row => {
    const matchesSearch = row.description.toLowerCase().includes(searchTerm.toLowerCase());
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
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Automated Matching Analytics</h2>
              <span className="badge badge-info">Finance Analytics</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Reconciliation Period: {matchingRateReport.dateFrom} to {matchingRateReport.dateTo} | Entity: {matchingRateReport.property}
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
            <TrendingUp size={16} color="var(--accent-cyan)" /> Overall Match Rate
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '8px' }} className="gradient-text">
            {matchingRateReport.overallRate}%
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>
            Automated daily clearance precision
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <CheckCircle size={16} color="var(--accent-emerald)" /> Auto-Cleared Items
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-emerald)', marginTop: '8px' }}>
            {matchingRateReport.totalMatched}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Cleared automatically with 0 human effort
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <AlertTriangle size={16} color="var(--accent-amber)" /> Exception Review Pool
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-amber)', marginTop: '8px' }}>
            {matchingRateReport.totalUnmatched}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Items queued for accounting review
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <Clock size={16} color="var(--accent-purple)" /> Monthly Productivity Gain
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '8px' }}>
            85+ Hrs
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>
            Accounting labor hours saved monthly
          </div>
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
                placeholder="Search transaction description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '8px 12px 8px 36px',
                  borderRadius: '8px',
                  background: 'var(--input-bg)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--input-color)',
                  fontSize: '0.85rem'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => setFilterMode('all')} className={`btn ${filterMode === 'all' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              All Categories ({matchingRateReport.rows.length})
            </button>
            <button onClick={() => setFilterMode('perfect')} className={`btn ${filterMode === 'perfect' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              100% Auto-Cleared
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
                <th>Transaction Description</th>
                <th style={{ textAlign: 'center' }}>Unmatched (Review)</th>
                <th style={{ textAlign: 'center' }}>Matched (Cleared)</th>
                <th style={{ textAlign: 'center' }}>Total Transactions</th>
                <th style={{ textAlign: 'right' }}>Matching Rate %</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 600, color: 'var(--text-main)' }}>{row.description}</td>
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
