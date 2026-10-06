import React from 'react';
import { ShieldCheck, Monitor, FileText, CheckCircle2, Moon, Sun, Layers } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  return (
    <header className="glass-panel" style={{ borderRadius: '0 0 16px 16px', borderTop: 'none', padding: '16px 28px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>

        {/* Logo & Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(6, 182, 212, 0.35)'
          }}>
            <ShieldCheck size={26} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                Yardi <span className="gradient-text">Auto Bank Recon</span>
              </h1>
              <span className="badge badge-success">
                <CheckCircle2 size={12} /> ENTERPRISE DEMO
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              Client Solution Demo & Solution Architecture
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(15, 23, 42, 0.5)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <button
            onClick={() => setActiveTab('presentation')}
            className={`btn ${activeTab === 'presentation' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 14px', fontSize: '0.825rem' }}
          >
            <FileText size={16} /> Pitch & Overview
          </button>

          <button
            onClick={() => setActiveTab('launcher')}
            className={`btn ${activeTab === 'launcher' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 14px', fontSize: '0.825rem' }}
          >
            <Monitor size={16} /> Interactive Launcher
          </button>

          <button
            onClick={() => setActiveTab('matching')}
            className={`btn ${activeTab === 'matching' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 14px', fontSize: '0.825rem' }}
          >
            <Layers size={16} /> Matching Analytics
          </button>

          <button
            onClick={() => setActiveTab('transactions')}
            className={`btn ${activeTab === 'transactions' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 14px', fontSize: '0.825rem' }}
          >
            Ledger & Clearing
          </button>

          <button
            onClick={() => setActiveTab('filelogs')}
            className={`btn ${activeTab === 'filelogs' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 14px', fontSize: '0.825rem' }}
          >
            SFTP File Logs
          </button>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-secondary"
            title="Toggle Light/Dark Theme"
            style={{ padding: '10px' }}
          >
            {darkMode ? <Sun size={18} color="#fbbf24" /> : <Moon size={18} color="#6366f1" />}
          </button>
        </div>

      </div>
    </header>
  );
}
