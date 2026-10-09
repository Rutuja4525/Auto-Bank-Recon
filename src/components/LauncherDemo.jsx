import React, { useState } from 'react';
import { bankAccountsData } from '../data/mockData';

export default function LauncherDemo() {
  const [propertyCode, setPropertyCode] = useState("fivf3lp");
  const [cutoffDate, setCutoffDate] = useState("09/30/2026");
  const [reportName, setReportName] = useState("Bank Reconciliation Launcher (brecs)");
  const [outputType, setOutputType] = useState("Screen");
  
  // Checkbox states
  const [attachReports, setAttachReports] = useState(false);
  const [mergeReports, setMergeReports] = useState(false);
  const [emailReports, setEmailReports] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [holdEmails, setHoldEmails] = useState(false);
  const [showOnPortal, setShowOnPortal] = useState(false);

  const [accounts, setAccounts] = useState([
    { bank: 'f3cit', accountName: 'Citizens Fund III', acctNum: '24969664', bankName: '', gl: '11001250', currency: '', glDesc: 'Cash - Money Market', balance: 421647.61 },
    { bank: 'f3jpmzba', accountName: 'JPM ZBA - Fund III', acctNum: '851380599', bankName: '', gl: '11001850', currency: '', glDesc: 'Cash - Fund Level JPM', balance: 309873.53 },
    { bank: 'f3keyzba', accountName: 'KeyBank ZBA Fund III', acctNum: '359681705372', bankName: '', gl: '11001860', currency: '', glDesc: 'Cash - KeyBank ZBA', balance: 609435.31 },
    { bank: 'fivf3lp', accountName: 'Faropoint Indus Value Fund III', acctNum: '359681663720', bankName: 'KeyBank NA', gl: '11001350', currency: '', glDesc: 'Cash - Fund/Feeder Level Operating (Equity Account)', balance: 703812.88 },
  ]);

  return (
    <div style={{ padding: '4px' }}>
      
      {/* Page Title */}
      <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#000000', marginBottom: '8px', borderBottom: '1px solid #000000', paddingBottom: '4px' }}>
        Bank Reconciliation Launcher
      </div>

      {/* Launcher Parameters Form */}
      <div className="yardi-panel" style={{ background: '#f4f6f8', border: 'none', padding: '12px 10px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          
          {/* Left Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '260px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="yardi-link-label" style={{ width: '100px' }}>Property</span>
              <input
                type="text"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="yardi-input yardi-input-active"
                style={{ width: '140px', fontWeight: 'bold' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="yardi-label" style={{ width: '100px' }}>GL Cutoff date</span>
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <input
                  type="text"
                  value={cutoffDate}
                  onChange={(e) => setCutoffDate(e.target.value)}
                  className="yardi-input yardi-input-active"
                  style={{ width: '120px' }}
                />
                <button className="yardi-calendar-btn" title="Select date">▦</button>
              </div>
            </div>
          </div>

          {/* Right Inputs & Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '460px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="yardi-label" style={{ width: '100px', textAlign: 'right' }}>Report Name</span>
              <select
                value={reportName}
                onChange={(e) => setReportName(e.target.value)}
                className="yardi-select"
                style={{ width: '280px' }}
              >
                <option value="Bank Reconciliation Launcher (brecs)">Bank Reconciliation Launcher (brecs)</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="yardi-label" style={{ width: '100px', textAlign: 'right' }}>Output Type</span>
              <select
                value={outputType}
                onChange={(e) => setOutputType(e.target.value)}
                className="yardi-select"
                style={{ width: '90px' }}
              >
                <option value="Screen">Screen</option>
                <option value="Excel">Excel</option>
                <option value="PDF">PDF</option>
              </select>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '30px' }}>
                <span className="yardi-label" style={{ width: '90px' }}>Attach Reports</span>
                <input type="checkbox" checked={attachReports} onChange={(e) => setAttachReports(e.target.checked)} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="yardi-label" style={{ width: '100px', textAlign: 'right' }}>Merge Reports</span>
              <input type="checkbox" checked={mergeReports} onChange={(e) => setMergeReports(e.target.checked)} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '170px' }}>
                <span className="yardi-label" style={{ width: '90px' }}>Email Reports</span>
                <input type="checkbox" checked={emailReports} onChange={(e) => setEmailReports(e.target.checked)} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="yardi-label" style={{ width: '100px', textAlign: 'right' }}>Show Grid</span>
              <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="yardi-label" style={{ width: '100px', textAlign: 'right' }}>Hold Emails</span>
              <input type="checkbox" checked={holdEmails} onChange={(e) => setHoldEmails(e.target.checked)} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '170px' }}>
                <span className="yardi-label" style={{ width: '90px' }}>Show on Portal</span>
                <input type="checkbox" checked={showOnPortal} onChange={(e) => setShowOnPortal(e.target.checked)} />
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px', justifyContent: 'center' }}>
              <button className="yardi-btn" style={{ minWidth: '75px' }}><u>G</u>enerate</button>
              <button className="yardi-btn" style={{ minWidth: '75px' }}><u>C</u>lear</button>
              <button className="yardi-btn" style={{ minWidth: '75px' }}><u>H</u>elp</button>
              <button className="yardi-btn" style={{ minWidth: '75px', color: '#666' }} disabled>Preview</button>
            </div>

          </div>

        </div>
      </div>

      {/* Account Grid Table */}
      <div className="yardi-table-container" style={{ marginTop: '30px' }}>
        <table className="yardi-table">
          <thead>
            <tr>
              <th style={{ width: '80px' }}>Bank</th>
              <th>Account Name</th>
              <th>Acct #</th>
              <th>Bank Name</th>
              <th>GL</th>
              <th>Currency</th>
              <th>GL Description</th>
              <th style={{ textAlign: 'right' }}>Bank Balance</th>
              <th style={{ width: '40px' }}></th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acct) => (
              <tr key={acct.bank}>
                <td>
                  <span className="yardi-table-link">{acct.bank}</span>
                </td>
                <td>{acct.accountName}</td>
                <td>{acct.acctNum}</td>
                <td>{acct.bankName}</td>
                <td>{acct.gl}</td>
                <td>{acct.currency}</td>
                <td>{acct.glDesc}</td>
                <td style={{ textAlign: 'right', fontFamily: 'monospace' }}>
                  {acct.balance.toFixed(6)}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
