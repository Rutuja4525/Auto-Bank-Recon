import React, { useState } from 'react';
import { bankAccountsData } from '../data/mockData';
import { CheckCircle2 } from 'lucide-react';

export default function LauncherDemo() {
  const [selectedProperty, setSelectedProperty] = useState("PRP-1004 - Metro Plaza Commercial Portfolio");
  const [cutoffDate, setCutoffDate] = useState("2026-09-30");
  const [accounts, setAccounts] = useState(bankAccountsData);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  const totalBalance = accounts.reduce((acc, a) => acc + a.bankBalance, 0);

  return (
    <div className="animate-fade-in">
      
      {/* Top Banner & Screen Info */}
      <div className="glass-panel" style={{ padding: '20px 28px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Bank Reconciliation Launcher</h2>
              <span className="badge badge-purple">Yardi Voyager Control</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Multi-bank launcher module auto-populating statement balances directly from electronic bank feeds into Yardi.
            </p>
          </div>
        </div>
      </div>

      {/* Launcher Parameters (Yardi Control Panel Style) */}
      <div className="glass-card" style={{ padding: '20px', marginBottom: '24px' }}>
        <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
          Reconciliation Parameters (Yardi Voyager Module)
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
              Property / Portfolio Entity
            </label>
            <select
              value={selectedProperty}
              onChange={(e) => setSelectedProperty(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'var(--input-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--input-color)',
                fontSize: '0.875rem',
                fontFamily: 'inherit'
              }}
            >
              <option value="PRP-1004 - Metro Plaza Commercial Portfolio">PRP-1004 - Metro Plaza Commercial Portfolio</option>
              <option value="PRP-2008 - Vanguard Industrial Park">PRP-2008 - Vanguard Industrial Park</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
              Reconciliation Cutoff Date
            </label>
            <input
              type="date"
              value={cutoffDate}
              onChange={(e) => setCutoffDate(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'var(--input-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--input-color)',
                fontSize: '0.875rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
              Report Output Format
            </label>
            <select
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'var(--input-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--input-color)',
                fontSize: '0.875rem',
                fontFamily: 'inherit'
              }}
            >
              <option>Interactive Screen Grid</option>
              <option>PDF Reconciliation Package</option>
              <option>Excel Executive Summary (.xlsx)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Account Balances Table */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Connected Bank Accounts & Auto-Populated Balances</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Balances retrieved daily via electronic statement feeds</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Bank Balance</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{formatCurrency(totalBalance)}</div>
          </div>
        </div>

        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Bank Code</th>
                <th>Account Name</th>
                <th>Acct Number</th>
                <th>Currency</th>
                <th>Yardi GL Account</th>
                <th>GL Description</th>
                <th style={{ textAlign: 'right' }}>Bank Balance (USD)</th>
                <th>Reconciled Status</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((acct) => (
                <tr key={acct.code}>
                  <td>
                    <span className="font-mono" style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>{acct.code}</span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{acct.accountName}</td>
                  <td className="font-mono" style={{ color: 'var(--text-muted)' }}>{acct.acctNumber}</td>
                  <td><span className="badge badge-info">{acct.currency}</span></td>
                  <td className="font-mono" style={{ fontWeight: 600 }}>{acct.glAccount}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>{acct.glDescription}</td>
                  <td className="font-mono" style={{ textAlign: 'right', fontWeight: 700, fontSize: '0.95rem' }}>
                    {formatCurrency(acct.bankBalance)}
                  </td>
                  <td>
                    <span className="badge badge-success">
                      <CheckCircle2 size={12} /> {acct.status}
                    </span>
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
