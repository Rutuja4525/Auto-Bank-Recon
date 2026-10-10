import React, { useState } from 'react';
import { transactionsData } from '../data/mockData';

export default function TransactionListDemo() {
  const [bankCodeInput, setBankCodeInput] = useState("f2co8727");
  const [bankNameLabel, setBankNameLabel] = useState("");
  const [propertyInput, setPropertyInput] = useState("");
  const [dateFrom, setDateFrom] = useState("09/01/2026");
  const [dateTo, setDateTo] = useState("09/30/2026");
  const [txnTypeInput, setTxnTypeInput] = useState("");
  const [showOnlyUncleared, setShowOnlyUncleared] = useState("No");
  const [destination, setDestination] = useState("Screen");
  
  const [txns, setTxns] = useState(transactionsData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTxns = txns.filter(t => {
    const matchesSearch = t.bankRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.custRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.id.includes(searchTerm) ||
                          t.type.toLowerCase().includes(searchTerm.toLowerCase());
    if (showOnlyUncleared === "Yes") return matchesSearch && !t.cleared;
    return matchesSearch;
  });

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);
  };

  return (
    <div style={{ padding: '4px' }}>
      
      {/* Top Sheet Tab */}
      <div className="yardi-sheet-tab-container" style={{ marginTop: '0', paddingLeft: '20px' }}>
        <div className="yardi-sheet-tab" style={{ fontWeight: 'bold' }}>List Bank Transactions</div>
      </div>

      {/* Yardi Form Parameter Box (Matching image3.png) */}
      <div className="yardi-panel" style={{ background: '#dcdcdc', border: '1px solid #a0a0a0', padding: '16px 20px', marginBottom: '16px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '650px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="yardi-link-label" style={{ width: '160px' }}>Bank</span>
            <input
              type="text"
              value={bankCodeInput}
              onChange={(e) => setBankCodeInput(e.target.value)}
              className="yardi-input"
              style={{ width: '160px' }}
            />
            <span style={{ fontSize: '12px', color: '#000000' }}>{bankNameLabel}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="yardi-link-label" style={{ width: '160px' }}>Property</span>
            <input
              type="text"
              value={propertyInput}
              onChange={(e) => setPropertyInput(e.target.value)}
              className="yardi-input"
              style={{ width: '160px' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="yardi-label" style={{ width: '160px' }}>Date</span>
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
            <span className="yardi-link-label" style={{ width: '160px' }}>Transaction Type</span>
            <input
              type="text"
              value={txnTypeInput}
              onChange={(e) => setTxnTypeInput(e.target.value)}
              className="yardi-input"
              style={{ width: '160px' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="yardi-label" style={{ width: '160px' }}>Show only un-cleared items?</span>
            <select
              value={showOnlyUncleared}
              onChange={(e) => setShowOnlyUncleared(e.target.value)}
              className="yardi-select"
              style={{ width: '60px' }}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="yardi-label" style={{ width: '160px' }}>Destination</span>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="yardi-select"
              style={{ width: '320px' }}
            >
              <option value="Screen">Screen</option>
              <option value="Excel">Excel</option>
              <option value="PDF">PDF</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px', paddingLeft: '172px' }}>
            <button className="yardi-btn" style={{ minWidth: '75px', color: '#666' }} disabled>Advanced</button>
            <button className="yardi-btn" style={{ minWidth: '85px' }}>Submit</button>
            <button className="yardi-btn" style={{ minWidth: '85px' }}><u>C</u>lear</button>
            <button className="yardi-btn" style={{ minWidth: '85px' }}>Help</button>
          </div>

          {/* Metadata Footer */}
          <div style={{ marginTop: '20px', fontSize: '11px', color: '#333333' }}>
            File or Code: rs_sql_cc_ShowBAI2Txns.txt<br />
            Version: 11/14/2025
          </div>

        </div>

      </div>

      {/* Yardi Report Output Canvas (Matching image4.png) */}
      <div className="yardi-report-canvas">
        
        <div className="yardi-report-header-row">
          <div>
            <div className="yardi-report-title">List Bank Transactions</div>
            <div className="yardi-report-subtitle">
              Bank={bankCodeInput} AND Date={dateFrom}-{dateTo} AND Show only un-cleared items?={showOnlyUncleared}
            </div>
          </div>

          {/* Export Action Buttons */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <button className="yardi-btn" style={{ padding: '2px 16px', fontSize: '11px' }}>Excel</button>
            <button className="yardi-btn" style={{ padding: '2px 16px', fontSize: '11px' }}>PDF</button>
          </div>
        </div>

        {/* Quick Filter Bar */}
        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Quick Search:</span>
          <input
            type="text"
            placeholder="Search reference, Txn ID, or remarks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="yardi-input"
            style={{ width: '260px' }}
          />
        </div>

        {/* Transactions Table (Exact layout of image4.png) */}
        <div className="yardi-table-container">
          <table className="yardi-table">
            <thead>
              <tr>
                <th>Bank Code</th>
                <th>Bank Acct Name</th>
                <th>Bank Txn Date</th>
                <th>Txn ID</th>
                <th>Flow Code</th>
                <th>Transaction Type</th>
                <th style={{ textAlign: 'right' }}>Amount</th>
                <th>DB/CR</th>
                <th>Bank Ref</th>
                <th>Customer Ref</th>
                <th>Cleared</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {filteredTxns.map((t) => (
                <tr key={t.id}>
                  <td>
                    <span className="yardi-table-link">{t.bankCode}</span>
                  </td>
                  <td>{t.bankAcctName}</td>
                  <td>{t.date}</td>
                  <td>{t.id.replace('TXN-', '')}</td>
                  <td>{t.flowCode}</td>
                  <td>{t.type}</td>
                  <td style={{ textAlign: 'right', fontFamily: 'monospace' }}>
                    {formatCurrency(t.amount)}
                  </td>
                  <td>{t.typeClass}</td>
                  <td style={{ fontFamily: 'monospace' }}>{t.bankRef}</td>
                  <td>{t.custRef}</td>
                  <td style={{ textAlign: 'center' }}>{t.cleared ? 'Y' : ''}</td>
                  <td style={{ fontSize: '10px', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {t.remarks}
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
