import React from 'react';
import { Monitor, FileText, Layers, Database, Sun, Moon } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  return (
    <header style={{ width: '100%', marginBottom: '16px' }}>
      
      {/* Yardi Voyager & LogiPrime Top Header Bar */}
      <div className="yardi-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#ffffff',
            padding: '3px 10px',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
          }}>
            <img 
              src="/logiprime-logo.png" 
              alt="LogiPrime Solutions" 
              style={{ height: '28px', width: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>
          <div className="yardi-logo-text">
            <span>Yardi Voyager®</span>
            <span className="yardi-logo-tag">AUTOMATED BANK RECONCILIATION</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '11px' }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
              padding: '3px 10px',
              fontSize: '11px',
              cursor: 'pointer',
              borderRadius: '3px',
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
