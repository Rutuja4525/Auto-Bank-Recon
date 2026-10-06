import React, { useState } from 'react';
import { transactionsData } from '../data/mockData';
import { Search, Filter, CheckCircle2, XCircle, Play, Sparkles } from 'lucide-react';

export default function TransactionListDemo() {
  const [txns, setTxns] = useState(transactionsData);
  const [filterCleared, setFilterCleared] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [clearedNotify, setClearedNotify] = useState(null);

  const handleClearTransaction = (id) => {
    setTxns(prev => prev.map(t => t.id === id ? { ...t, cleared: true } : t));
    const target = txns.find(t => t.id === id);
    setClearedNotify(`Transaction #${id} (${target?.type}) cleared successfully!`);
    setTimeout(() => setClearedNotify(null), 3000);
  };

  const filteredTxns = txns.filter(t => {
    const matchesSearch = t.bankRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.custRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.id.includes(searchTerm) ||
                          t.type.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterCleared === "cleared") return matchesSearch && t.cleared;
    if (filterCleared === "uncleared") return matchesSearch && !t.cleared;
    return matchesSearch;
  });

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <div className="animate-fade-in">
      
      {/* Top Banner */}
      <div className="glass-panel" style={{ padding: '20px 28px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>List Bank Transactions Ledger</h2>
              <span className="badge badge-purple">Screen Code: ShowBAI2Txns</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Bank: <strong style={{ color: '#fff' }}>f2c08727 KUSH-KUSH, LP LOCKBOX</strong> | Date: 09/01/2026 - 09/30/2026
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <span className="badge badge-info" style={{ padding: '8px 14px' }}>
              Showing {filteredTxns.length} Transactions
            </span>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="glass-card" style={{ padding: '16px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search reference, Txn ID, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '8px 12px 8px 36px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-color)',
                color: '#ffffff',
                fontSize: '0.85rem',
                minWidth: '260px'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <button onClick={() => setFilterCleared('all')} className={`btn ${filterCleared === 'all' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              All
            </button>
            <button onClick={() => setFilterCleared('uncleared')} className={`btn ${filterCleared === 'uncleared' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              Uncleared Only
            </button>
            <button onClick={() => setFilterCleared('cleared')} className={`btn ${filterCleared === 'cleared' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              Cleared Only
            </button>
          </div>
        </div>

        {clearedNotify && (
          <div className="badge badge-success" style={{ animation: 'fadeIn 0.2s ease' }}>
            <Sparkles size={14} /> {clearedNotify}
          </div>
        )}
      </div>

      {/* Main Ledger Table */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Txn ID</th>
                <th>Bank Date</th>
                <th>Flow</th>
                <th>Transaction Type</th>
                <th style={{ textAlign: 'right' }}>Amount</th>
                <th>DB/CR</th>
                <th>Bank Reference</th>
                <th>Customer Ref</th>
                <th>Cleared</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTxns.map((t) => (
                <tr key={t.id}>
                  <td className="font-mono" style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>
                    {t.id}
                  </td>
                  <td>{t.date}</td>
                  <td className="font-mono" style={{ color: 'var(--text-muted)' }}>{t.flowCode}</td>
                  <td style={{ fontWeight: 600 }}>{t.type}</td>
                  <td className="font-mono" style={{ textAlign: 'right', fontWeight: 700, color: t.typeClass === 'CR' ? '#34d399' : '#f87171' }}>
                    {formatCurrency(t.amount)}
                  </td>
                  <td>
                    <span className={`badge ${t.typeClass === 'CR' ? 'badge-success' : 'badge-danger'}`}>
                      {t.typeClass}
                    </span>
                  </td>
                  <td className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.bankRef}</td>
                  <td className="font-mono" style={{ fontSize: '0.8rem' }}>{t.custRef}</td>
                  <td>
                    {t.cleared ? (
                      <span className="badge badge-success"><CheckCircle2 size={12} /> Y (Cleared)</span>
                    ) : (
                      <span className="badge badge-warning"><XCircle size={12} /> N (Pending)</span>
                    )}
                  </td>
                  <td>
                    {!t.cleared && (
                      <button
                        onClick={() => handleClearTransaction(t.id)}
                        className="btn btn-outline"
                        style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                      >
                        Auto-Clear
                      </button>
                    )}
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
