import React, { useState } from 'react';
import { fileLogsData } from '../data/mockData';
import { Server, CheckCircle2, RefreshCw, FileCode, ShieldCheck, HardDrive } from 'lucide-react';

export default function FileLogsDemo() {
  const [logs, setLogs] = useState(fileLogsData);
  const [selectedBank, setSelectedBank] = useState("all");

  const filteredLogs = logs.filter(l => {
    if (selectedBank === "all") return true;
    return l.bank.toLowerCase().includes(selectedBank.toLowerCase());
  });

  const totalRecords = logs.reduce((acc, l) => acc + l.records, 0);

  return (
    <div className="animate-fade-in">
      
      {/* Top Banner */}
      <div className="glass-panel" style={{ padding: '20px 28px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>BAI2 SFTP File Intake Audit Log</h2>
              <span className="badge badge-info">Screen Code: BA12FilesLog</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Automated intake monitoring across 12 connected bank SFTP endpoints.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <span className="badge badge-success" style={{ padding: '8px 14px' }}>
              <Server size={14} /> All 12 SFTP Feeds Active
            </span>
          </div>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Active Feeds</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px', color: 'var(--accent-cyan)' }}>12 Banks</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '4px' }}>JPMC, KeyBank, Truist, etc.</div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Line Records</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px', color: 'var(--accent-emerald)' }}>{totalRecords.toLocaleString()}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Parsed & Loaded into Yardi</div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Failed Files</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px', color: '#34d399' }}>0</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>100% Intake Reliability</div>
        </div>
      </div>

      {/* File Log Table */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>SFTP File Execution History</h3>
          <div>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-color)',
                color: '#ffffff',
                fontSize: '0.85rem'
              }}
            >
              <option value="all">All Banking Institutions</option>
              <option value="JPMorgan">JPMorgan Chase</option>
              <option value="KeyBank">KeyBank</option>
              <option value="Truist">Truist Bank</option>
              <option value="Pinnacle">Pinnacle Bank</option>
            </select>
          </div>
        </div>

        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Log ID</th>
                <th>Financial Institution</th>
                <th>SFTP BAI2 File Name</th>
                <th style={{ textAlign: 'center' }}>Record Count</th>
                <th>Download Timestamp</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((l) => (
                <tr key={l.id}>
                  <td className="font-mono" style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>{l.id}</td>
                  <td style={{ fontWeight: 600 }}>{l.bank}</td>
                  <td className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{l.fileName}</td>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>{l.records}</td>
                  <td style={{ fontSize: '0.825rem' }}>{l.date}</td>
                  <td>
                    <span className="badge badge-success">
                      <CheckCircle2 size={12} /> {l.status}
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
