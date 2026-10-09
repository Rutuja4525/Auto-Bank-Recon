import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PresentationDeck from './components/PresentationDeck';
import LauncherDemo from './components/LauncherDemo';
import MatchingRateDemo from './components/MatchingRateDemo';
import TransactionListDemo from './components/TransactionListDemo';
import FileLogsDemo from './components/FileLogsDemo';

export default function App() {
  const [activeTab, setActiveTab] = useState('presentation');
  const [darkMode, setDarkMode] = useState(false); // Default to Yardi Voyager Native Light Theme

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode-override');
    } else {
      document.body.classList.remove('dark-mode-override');
    }
  }, [darkMode]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Container */}
      <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 16px 30px', flex: 1 }}>
        
        {/* Active Tab View */}
        <main>
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

        {/* Yardi Footer Bar */}
        <footer style={{
          marginTop: '40px',
          paddingTop: '12px',
          borderTop: '1px solid #c0c0c0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: '#555555',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            Yardi Voyager® Auto Bank Reconciliation System &copy; 2026 | Enterprise Financial Solution
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Native Yardi Voyager® Architecture</span>
          </div>
        </footer>

      </div>

    </div>
  );
}
