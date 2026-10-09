import React, { useState } from 'react';
import { matchingRateReport } from '../data/mockData';

export default function MatchingRateDemo() {
  const [bankInput, setBankInput] = useState("");
  const [propertyInput, setPropertyInput] = useState("fivf3lp");
  const [dateFrom, setDateFrom] = useState(matchingRateReport.dateFrom);
  const [dateTo, setDateTo] = useState(matchingRateReport.dateTo);
  const [reportName, setReportName] = useState("Bank Reconciliation Matching Rate Report (brecs)");
  const [outputType, setOutputType] = useState("Screen");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMode, setFilterMode] = useState("all");

  const filteredRows = matchingRateReport.rows.filter(row => {
    const matchesSearch = row.description.toLowerCase().includes(searchTerm.toLowerCase()) || row.flowCode.toString().includes(searchTerm);
    if (filterMode === "perfect") return matchesSearch && row.rate === 100;
    if (filterMode === "partial") return matchesSearch && row.rate < 100;
    return matchesSearch;
  });

  const totalUnmatched = filteredRows.reduce((acc, r) => acc + r.unmatched, 0);
  const totalMatched = filteredRows.reduce((acc, r) => acc + r.matched, 0);
  const totalTxns = totalUnmatched + totalMatched;
  const overallRate = totalTxns > 0 ? ((totalMatched / totalTxns) * 100).toFixed(2) : "0.00";

  return (
    <div style={{ padding: '4px' }}>
      
      {/* Page Title */}
      <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#000000', marginBottom: '8px', borderBottom: '1px solid #000000', paddingBottom: '4px' }}>
        Bank Reconciliation Matching Rate Report
      </div>

      {/* Top Filter Controls (Yardi Parameter Panel) */}
      <div className="yardi-panel" style={{ background: '#f4f6f8', border: 'none', padding: '12px 10px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          
          {/* Left Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="yardi-link-label" style={{ width: '90px' }}>Bank</span>
              <input
                type="text"
                value={bankInput}
                onChange={(e) => setBankInput(e.target.value)}
                className="yardi-input"
                style={{ width: '150px' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="yardi-link-label" style={{ width: '90px' }}>Property</span>
              <input
                type="text"
                value={propertyInput}
                onChange={(e) => setPropertyInput(e.target.value)}
                className="yardi-input"
                style={{ width: '150px', fontWeight: 'bold' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="yardi-label" style={{ width: '90px' }}>Date From</span>
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <input
                  type="text"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="yardi-input yardi-input-active"
                  style={{ width: '100px' }}
                />
                <button className="yardi-calendar-btn">▦</button>
              </div>

              <span className="yardi-label" style={{ margin: '0 4px' }}>To</span>

              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <input
                  type="text"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="yardi-input yardi-input-active"
                  style={{ width: '100px' }}
                />
                <button className="yardi-calendar-btn">▦</button>
              </div>
            </div>
          </div>

          {/* Right Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '440px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="yardi-label" style={{ width: '100px', textAlign: 'right' }}>Report Name</span>
              <select
                value={reportName}
                onChange={(e) => setReportName(e.target.value)}
                className="yardi-select"
                style={{ width: '280px' }}
              >
                <option value="Bank Reconciliation Matching Rate Report (brecs)">Bank Reconciliation Matching Rate Report (brecs)</option>
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
                <input type="checkbox" />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="yardi-label" style={{ width: '100px', textAlign: 'right' }}>Merge Reports</span>
              <input type="checkbox" />

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '170px' }}>
                <span className="yardi-label" style={{ width: '90px' }}>Email Reports</span>
                <input type="checkbox" />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '10px', justifyContent: 'center' }}>
              <button className="yardi-btn" style={{ minWidth: '75px' }}><u>G</u>enerate</button>
              <button className="yardi-btn" style={{ minWidth: '75px' }}><u>C</u>lear</button>
              <button className="yardi-btn" style={{ minWidth: '75px' }}><u>H</u>elp</button>
              <button className="yardi-btn" style={{ minWidth: '75px', color: '#666' }} disabled>Preview</button>
            </div>
          </div>

        </div>
      </div>

      {/* Sheet1 Tab Navigation Bar */}
      <div className="yardi-sheet-tab-container">
        <div className="yardi-sheet-tab">Sheet1</div>
      </div>

      {/* Yardi Report Output Canvas */}
      <div className="yardi-report-canvas" style={{ borderTop: 'none', paddingTop: '20px' }}>
        
        {/* Report Title */}
        <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#000000', marginBottom: '4px' }}>
          Bank Reconciliation Matching Rate Report
        </div>

        {/* Subtitle Line */}
        <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#000000', marginBottom: '24px' }}>
          Date From: {dateFrom}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To: {dateTo}
        </div>

        {/* Interactive Filter Tools */}
        <div style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', fontSize: '11px' }}>
          <span style={{ fontWeight: 'bold' }}>Filter View:</span>
          <input
            type="text"
            placeholder="Search description or flow code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="yardi-input"
            style={{ width: '220px' }}
          />
          <button onClick={() => setFilterMode('all')} className="yardi-btn" style={{ background: filterMode === 'all' ? '#d4e6f1' : undefined }}>
            All Items ({matchingRateReport.rows.length})
          </button>
          <button onClick={() => setFilterMode('perfect')} className="yardi-btn" style={{ background: filterMode === 'perfect' ? '#d4e6f1' : undefined }}>
            100% Cleared
          </button>
          <button onClick={() => setFilterMode('partial')} className="yardi-btn" style={{ background: filterMode === 'partial' ? '#d4e6f1' : undefined }}>
            Requires Review
          </button>
        </div>

        {/* Data Grid Table (Exact Match to image2.png) */}
        <div className="yardi-table-container">
          <table className="yardi-table" style={{ border: 'none' }}>
            <thead>
              <tr style={{ background: 'transparent' }}>
                <th style={{ background: 'transparent', border: 'none', color: '#000000', fontSize: '12px', fontWeight: 'bold', padding: '6px 8px', width: '110px' }}>
                  Flow Code
                </th>
                <th style={{ background: 'transparent', border: 'none', color: '#000000', fontSize: '12px', fontWeight: 'bold', padding: '6px 8px' }}>
                  Description
                </th>
                <th style={{ background: 'transparent', border: 'none', color: '#000000', fontSize: '12px', fontWeight: 'bold', padding: '6px 8px', textAlign: 'right', width: '130px' }}>
                  Unmatched Count
                </th>
                <th style={{ background: 'transparent', border: 'none', color: '#000000', fontSize: '12px', fontWeight: 'bold', padding: '6px 8px', textAlign: 'right', width: '120px' }}>
                  Matched Count
                </th>
                <th style={{ background: 'transparent', border: 'none', color: '#000000', fontSize: '12px', fontWeight: 'bold', padding: '6px 8px', textAlign: 'right', width: '140px' }}>
                  Matching Rate %
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr key={row.flowCode}>
                  <td style={{ border: 'none', fontSize: '12px', padding: '3px 8px' }}>
                    {row.flowCode}
                  </td>
                  <td style={{ border: 'none', fontSize: '12px', padding: '3px 8px' }}>
                    {row.description}
                  </td>
                  <td style={{ border: 'none', fontSize: '12px', textAlign: 'right', padding: '3px 8px' }}>
                    {row.unmatched}
                  </td>
                  <td style={{ border: 'none', fontSize: '12px', textAlign: 'right', padding: '3px 8px' }}>
                    {row.matched}
                  </td>
                  <td style={{ border: 'none', fontSize: '12px', textAlign: 'right', padding: '3px 8px' }}>
                    {row.rate.toFixed(2)}%
                  </td>
                </tr>
              ))}

              {/* Totals Row */}
              <tr style={{ borderTop: '1px solid #000000' }}>
                <td style={{ border: 'none', padding: '6px 8px' }}></td>
                <td style={{ border: 'none', fontSize: '12px', fontWeight: 'bold', textAlign: 'right', padding: '6px 8px' }}>
                  Totals
                </td>
                <td style={{ border: 'none', fontSize: '12px', fontWeight: 'bold', textAlign: 'right', padding: '6px 8px' }}>
                  {totalUnmatched}
                </td>
                <td style={{ border: 'none', fontSize: '12px', fontWeight: 'bold', textAlign: 'right', padding: '6px 8px' }}>
                  {totalMatched}
                </td>
                <td style={{ border: 'none', fontSize: '12px', fontWeight: 'bold', textAlign: 'right', padding: '6px 8px' }}>
                  {overallRate}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
