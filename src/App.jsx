import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PresentationDeck from './components/PresentationDeck';
import LauncherDemo from './components/LauncherDemo';
import MatchingRateDemo from './components/MatchingRateDemo';
import TransactionListDemo from './components/TransactionListDemo';
import FileLogsDemo from './components/FileLogsDemo';
import ScreenshotsViewer from './components/ScreenshotsViewer';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('presentation');
  const [darkMode, setDarkMode] = useState(true);
  const [simulationToast, setSimulationToast] = useState(null);

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [darkMode]);

  const runGlobalSimulation = () => {
    setSimulationToast("Simulating scheduled BAI2 SFTP download & auto-clearing execution...");
    setTimeout(() => {
      setSimulationToast("Processed 12 bank feeds! 467 items cleared with 88.61% matching rate.");
    }, 1500);
    setTimeout(() => {
      setSimulationToast(null);
    }, 4500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Container */}
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '0 20px 40px' }}>
        
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onRunSimulation={runGlobalSimulation}
        />

        {/* Global Toast */}
        {simulationToast && (
          <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
            color: '#ffffff',
            padding: '14px 20px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 600,
            fontSize: '0.9rem',
            animation: 'fadeIn 0.3s ease'
          }}>
            <Sparkles size={18} /> {simulationToast}
          </div>
        )}

        {/* Active Tab View */}
        <main style={{ flex: 1 }}>
          {activeTab === 'presentation' && (
            <PresentationDeck onNavigateToDemo={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'launcher' && (
            <LauncherDemo onRunSimulation={runGlobalSimulation} />
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

          {activeTab === 'screenshots' && (
            <ScreenshotsViewer />
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
            Yardi Voyager Auto Bank Reconciliation Module &copy; 2026 | Technical Reference & Client Solution Demo
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>BAI2 / CAMT53 / MT940 Compliant</span>
            <span>Fenix Group & Yardi Integration</span>
          </div>
        </footer>

      </div>

    </div>
  );
}
