import React from 'react';
import { Monitor, FileText, Layers, Database, Sun, Moon } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  return (
    <header style={{ width: '100%', marginBottom: '16px' }}>
      
      {/* Yardi Voyager Top Navy Header Bar */}
      <div className="yardi-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="yardi-logo-text">
            <span>Yardi Voyager®</span>
            <span className="yardi-logo-tag">AUTOMATED BANK RECONCILIATION</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '11px' }}>
          <span>User: <strong>Accounting Admin (fivf3lp)</strong></span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span>Entity: <strong>Metro Plaza Portfolio (PRP-1004)</strong></span>
          <span style={{ opacity: 0.6 }}>|</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
              padding: '2px 8px',
              fontSize: '11px',
              cursor: 'pointer',
              borderRadius: '2px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title="Toggle theme"
          >
            {darkMode ? <Sun size={12} /> : <Moon size={12} />} Theme
          </button>
        </div>
      </div>

      {/* Yardi Voyager Main Navigation Tabs Bar */}
      <nav className="yardi-nav-bar">
        <button
          onClick={() => setActiveTab('presentation')}
          className={`yardi-nav-tab ${activeTab === 'presentation' ? 'active' : ''}`}
        >
          <FileText size={13} /> Executive Overview & ROI
        </button>

        <button
          onClick={() => setActiveTab('launcher')}
          className={`yardi-nav-tab ${activeTab === 'launcher' ? 'active' : ''}`}
        >
          <Monitor size={13} /> Bank Reconciliation Launcher (brecs)
        </button>

        <button
          onClick={() => setActiveTab('matching')}
          className={`yardi-nav-tab ${activeTab === 'matching' ? 'active' : ''}`}
        >
          <Layers size={13} /> Matching Rate Report
        </button>

        <button
          onClick={() => setActiveTab('transactions')}
          className={`yardi-nav-tab ${activeTab === 'transactions' ? 'active' : ''}`}
        >
          <Database size={13} /> List Bank Transactions
        </button>

        <button
          onClick={() => setActiveTab('filelogs')}
          className={`yardi-nav-tab ${activeTab === 'filelogs' ? 'active' : ''}`}
        >
          <Database size={13} /> BAI2 Files Log
        </button>
      </nav>

    </header>
  );
}
