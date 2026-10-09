import React, { useState } from 'react';
import { fileLogsData, supportedBankList } from '../data/mockData';

export default function FileLogsDemo() {
  const [dateFrom, setDateFrom] = useState("09/01/2026");
  const [dateTo, setDateTo] = useState("09/30/2026");
  const [destination, setDestination] = useState("Screen");
  const [selectedBank, setSelectedBank] = useState("all");

  const [logs, setLogs] = useState(fileLogsData);

  const filteredLogs = logs.filter(l => {
    if (selectedBank === "all") return true;
    return l.bank.toLowerCase().includes(selectedBank.toLowerCase());
  });

  return (
    <div style={{ padding: '4px' }}>
      
      {/* Sheet Tab */}
      <div className="yardi-sheet-tab-container" style={{ marginTop: '0', paddingLeft: '20px' }}>
        <div className="yardi-sheet-tab" style={{ fontWeight: 'bold' }}>BAI2 Files Log</div>
      </div>

      {/* Yardi Form Parameter Box (Matching image5.png) */}
      <div className="yardi-panel" style={{ background: '#dcdcdc', border: '1px solid #a0a0a0', padding: '16px 20px', marginBottom: '16px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '650px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="yardi-label" style={{ width: '140px' }}>Download Date</span>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <input
                type="text"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="yardi-input yardi-input-active"
                style={{ width: '110px' }}
              />
              <button className="yardi-calendar-btn">▦</button>
            </div>

            <span style={{ fontSize: '12px', margin: '0 8px' }}>-to-</span>

            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <input
                type="text"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="yardi-input yardi-input-active"
                style={{ width: '110px' }}
              />
              <button className="yardi-calendar-btn">▦</button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="yardi-label" style={{ width: '140px' }}>Destination</span>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="yardi-select"
              style={{ width: '300px' }}
            >
              <option value="Screen">Screen</option>
              <option value="Excel">Excel</option>
              <option value="PDF">PDF</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px', paddingLeft: '152px' }}>
            <button className="yardi-btn" style={{ minWidth: '75px', color: '#666' }} disabled>Advanced</button>
            <button className="yardi-btn" style={{ minWidth: '85px' }}>Submit</button>
            <button className="yardi-btn" style={{ minWidth: '85px' }}><u>C</u>lear</button>
            <button className="yardi-btn" style={{ minWidth: '85px' }}>Help</button>
          </div>

          {/* Metadata Footer */}
          <div style={{ marginTop: '20px', fontSize: '11px', color: '#333333' }}>
            File or Code: rs_sql_fnx_BAI2FilesLog.txt<br />
            Version: 01.21.2019 by <span style={{ color: '#0066cc', textDecoration: 'underline', cursor: 'pointer' }}>Fenix Consulting</span>
          </div>

        </div>

      </div>

      {/* Yardi Report Output Canvas (Matching image6.png) */}
      <div className="yardi-report-canvas">
        
        <div className="yardi-report-header-row">
          <div>
            <div className="yardi-report-title">BAI2 Files Log</div>
            <div className="yardi-report-subtitle">
              Download Date={dateFrom}-{dateTo}
            </div>
          </div>

          {/* Export Buttons */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <button className="yardi-btn" style={{ padding: '2px 16px', fontSize: '11px' }}>Excel</button>
            <button className="yardi-btn" style={{ padding: '2px 16px', fontSize: '11px' }}>PDF</button>
          </div>
        </div>

        {/* Bank Filter Select */}
        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Filter Banking Partner:</span>
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="yardi-select"
            style={{ width: '220px' }}
          >
            <option value="all">All Financial Institutions</option>
            {supportedBankList.map(bank => (
              <option key={bank} value={bank}>{bank}</option>
            ))}
          </select>
        </div>

        {/* Audit Log Table (Exact layout of image6.png) */}
        <div className="yardi-table-container">
          <table className="yardi-table">
            <thead>
              <tr>
                <th>File name</th>
                <th style={{ width: '90px' }}># Records</th>
                <th>Download timestamp</th>
                <th>Conversion timestamp</th>
                <th>Import into Yardi timestamp</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((l) => (
                <tr key={l.id}>
                  <td style={{ fontFamily: 'monospace', fontSize: '11px' }}>{l.fileName}</td>
                  <td>{l.records}</td>
                  <td>{l.date.replace(' AM', ':51 AM').replace(' PM', ':51 PM')}</td>
                  <td>{l.date.replace(' AM', ':25 AM').replace(' PM', ':25 PM')}</td>
                  <td>{l.date.replace(' AM', ':33 AM').replace(' PM', ':33 PM')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
