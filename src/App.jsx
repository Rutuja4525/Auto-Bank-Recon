import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PresentationDeck from './components/PresentationDeck';
import LauncherDemo from './components/LauncherDemo';
import MatchingRateDemo from './components/MatchingRateDemo';
import TransactionListDemo from './components/TransactionListDemo';
import FileLogsDemo from './components/FileLogsDemo';

export default function App() {
  const [activeTab, setActiveTab] = useState('presentation');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [darkMode]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Container */}
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '0 20px 40px' }}>
        
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Active Tab View */}
        <main style={{ flex: 1 }}>
          {activeTab === 'presentation' && (
            <PresentationDeck onNavigateToDemo={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'launcher' && (
            <LauncherDemo />
          )}

          {activeTab === 'matching' && (
            <MatchingRateDemo />
          )}

          {activeTab === 'transactions' && (
            <TransactionListDemo />
          )}

          {activeTab === 'filelogs' && (
            <FileLogsDemo />
          )}
        </main>

        {/* Footer */}
        <footer style={{
          marginTop: '60px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            Yardi Voyager Auto Bank Reconciliation Module &copy; 2026 | Technical Reference & Solution Demo
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>BAI2 / CAMT53 / MT940 Compliant</span>
            <span>Yardi Voyager Integration</span>
          </div>
        </footer>

      </div>

    </div>
  );
}
