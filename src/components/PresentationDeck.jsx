import React, { useState } from 'react';
import { solutionOverview, implementationRoadmap, keyAdvantages } from '../data/mockData';

export default function PresentationDeck({ onNavigateToDemo }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "overview",
      tag: "FINANCE LEADERSHIP BRIEFING",
      title: "Yardi Automated Bank Reconciliation Solution",
      subtitle: "Transforming accounting team productivity with daily automated clearing and a 100% one-time investment model.",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>

          {/* Highlight Banner */}
          <div style={{
            background: '#eef6fc',
            border: '1px solid #7f9db9',
            padding: '12px 16px',
            borderRadius: '2px'
          }}>
            <div style={{ fontWeight: 'bold', color: '#004b87', fontSize: '13px', marginBottom: '2px' }}>
              Financial Advantage: One-Time Development Investment — Zero Lifetime Subscription Costs
            </div>
            <div style={{ fontSize: '11px', color: '#333' }}>
              Unlike costly SaaS tools charging recurring per-seat fees, this solution is built natively inside your Yardi Voyager instance. Pay once, own forever.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            
            {/* Core Objective Panel */}
            <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0' }}>
              <div className="yardi-panel-title">Finance Team Productivity Gain</div>
              <p style={{ color: '#333333', fontSize: '12px', lineHeight: 1.5, marginBottom: '10px' }}>
                Transition accounting staff from tedious, line-by-line manual bank statement matching to a streamlined, <strong>exception-based review model</strong>.
              </p>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: '#222' }}>
                <li>Saves an estimated <strong>15 to 120+ accounting hours monthly</strong> (scales directly with bank count, active accounts & volume)</li>
                <li>Daily automated electronic statement feeds from all bank partners</li>
                <li>Auto-clears checks, EFTs, ACH, wires & tenant lockbox deposits</li>
                <li>Accelerated financial close & audit-ready transaction history</li>
              </ul>
            </div>

            {/* Key Metrics Panel */}
            <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0' }}>
              <div className="yardi-panel-title">Key Performance & Savings Metrics</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '8px' }}>
                <div style={{ background: '#f5f7fa', padding: '10px', border: '1px solid #d0d0d0', textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#004b87' }}>90%+</div>
                  <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', marginTop: '2px' }}>Auto-Clear Rate</div>
                </div>

                <div style={{ background: '#f5f7fa', padding: '10px', border: '1px solid #d0d0d0', textAlign: 'center' }}>
                  <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#0066cc' }}>~15–120+ Hrs</div>
                  <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', marginTop: '2px' }}>Saved / Month (Varies by Volume)*</div>
                </div>

                <div style={{ background: '#f5f7fa', padding: '10px', border: '1px solid #d0d0d0', textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#000' }}>Zero</div>
                  <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', marginTop: '2px' }}>Recurring SaaS Fee</div>
                </div>

                <div style={{ background: '#f5f7fa', padding: '10px', border: '1px solid #d0d0d0', textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#0055aa' }}>100%</div>
                  <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', marginTop: '2px' }}>Yardi Voyager Native</div>
                </div>
              </div>
            </div>

          </div>

          {/* Key Advantages Grid */}
          <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0' }}>
            <div className="yardi-panel-title">Key Solution Advantages</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
              {keyAdvantages.map((adv, idx) => (
                <div key={idx} style={{ background: '#f9fbfd', padding: '10px', border: '1px solid #e0e6ed', borderRadius: '2px' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#003366', marginBottom: '4px' }}>
                    ✔ {adv.title}
                  </div>
                  <div style={{ fontSize: '11px', color: '#555555', lineHeight: 1.4 }}>
                    {adv.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )
    },
    {
      id: "architecture",
      tag: "FINANCE WORKFLOW & ARCHITECTURE",
      title: "Seamless Daily Automated Accounting Flow",
      subtitle: "Direct bank-to-Yardi synchronization with zero manual data file uploads.",
      content: (
        <div style={{ marginTop: '16px' }}>
          
          <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0', marginBottom: '16px' }}>
            <div className="yardi-panel-title">End-to-End Financial Reconciliation Process</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', alignItems: 'center' }}>

              <div style={{ background: '#f5f7fa', padding: '12px', border: '1px solid #d0d0d0', textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#004b87' }}>1. Bank Partner Intake</div>
                <div style={{ fontSize: '10px', color: '#555', marginTop: '4px' }}>Daily electronic feeds from JPMorgan, Wells Fargo, Bank of America, etc.</div>
              </div>

              <div style={{ fontSize: '14px', color: '#004b87', textAlign: 'center', fontWeight: 'bold' }}>➔</div>

              <div style={{ background: '#f5f7fa', padding: '12px', border: '1px solid #d0d0d0', textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#004b87' }}>2. Data Validation</div>
                <div style={{ fontSize: '10px', color: '#555', marginTop: '4px' }}>Standardized statement normalization</div>
              </div>

              <div style={{ fontSize: '14px', color: '#004b87', textAlign: 'center', fontWeight: 'bold' }}>➔</div>

              <div style={{ background: '#f5f7fa', padding: '12px', border: '1px solid #d0d0d0', textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#004b87' }}>3. Yardi Voyager Intake</div>
                <div style={{ fontSize: '10px', color: '#555', marginTop: '4px' }}>Direct ingestion into Voyager Cash Module</div>
              </div>

              <div style={{ fontSize: '14px', color: '#004b87', textAlign: 'center', fontWeight: 'bold' }}>➔</div>

              <div style={{ background: '#f5f7fa', padding: '12px', border: '1px solid #d0d0d0', textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#004b87' }}>4. Rules Auto-Clearing</div>
                <div style={{ fontSize: '10px', color: '#555', marginTop: '4px' }}>91%+ clearance rate</div>
              </div>

            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0' }}>
              <div className="yardi-panel-title">Multi-Bank Compatibility Out-of-the-Box</div>
              <p style={{ fontSize: '11px', color: '#333333', lineHeight: 1.5 }}>
                The solution is based on industry-standard bank formats: <strong>BAI2</strong>, <strong>CAMT 53</strong>, and <strong>MT 940</strong>. Banks supporting these formats should work seamlessly with the solution (including JPMorgan, Wells Fargo, Bank of America, Citizens Bank, East West Bank, Northern Trust, Santander, BNY Mellon, Key Bank, Citi, UMB, First Citizens, Western Alliance, BMO, etc.).
              </p>
            </div>

            <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0' }}>
              <div className="yardi-panel-title">Automated Journal Entries</div>
              <p style={{ fontSize: '11px', color: '#333333', lineHeight: 1.5 }}>
                Automatically creates and posts journal entries for recurring monthly bank fees and credit interest income directly to pre-configured general ledger accounts with complete audit logging.
              </p>
            </div>
          </div>

        </div>
      )
    },
    {
      id: "matching_engine",
      tag: "MATCHING RULES & CONTROLS",
      title: "Multi-Level Intelligent Matching Engine",
      subtitle: "Configurable matching criteria leveraging bank transaction codes, reference numbers, customer memo text, and exact amounts.",
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '16px' }}>
          
          <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0' }}>
            <div className="yardi-panel-title">1. Exact Reference Match</div>
            <p style={{ fontSize: '11px', color: '#555', marginBottom: '8px' }}>
              Matches items on check number, exact payment reference, or wire reference ID.
            </p>
            <span style={{ background: '#d4edda', color: '#155724', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>Precision Match</span>
          </div>

          <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0' }}>
            <div className="yardi-panel-title">2. Lockbox & Tenant ACH Matching</div>
            <p style={{ fontSize: '11px', color: '#555', marginBottom: '8px' }}>
              Parses bank customer reference strings and tenant IDs to automatically match lockbox deposits against open tenant receivables.
            </p>
            <span style={{ background: '#cce5ff', color: '#004085', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>Tenant Automation</span>
          </div>

          <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0' }}>
            <div className="yardi-panel-title">3. Automated GL Fee Booking</div>
            <p style={{ fontSize: '11px', color: '#555', marginBottom: '8px' }}>
              Auto-books monthly account service charges and interest income directly to designated GL cash accounts.
            </p>
            <span style={{ background: '#e2e3e5', color: '#383d41', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>Zero Manual Entry</span>
          </div>

          <div className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0' }}>
            <div className="yardi-panel-title">4. Multi-Rule & Fuzzy Logic Engine</div>
            <p style={{ fontSize: '11px', color: '#555', marginBottom: '8px' }}>
              Employs multi-level criteria and intelligent fuzzy matching logic to clear complex statement lines.
            </p>
            <span style={{ background: '#d4edda', color: '#155724', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>Fuzzy Match Engine</span>
          </div>

        </div>
      )
    },
    {
      id: "roadmap",
      tag: "FINANCE ROLLOUT ROADMAP",
      title: "Standard 3-Step Client Onboarding Plan",
      subtitle: "A proven, structured deployment plan that brings your bank reconciliation live in 3 weeks.",
      content: (
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {implementationRoadmap.map((item) => (
            <div key={item.step} className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0', padding: '12px 16px', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <div style={{
                width: '28px',
                height: '28px',
                background: '#004b87',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '13px',
                borderRadius: '2px'
              }}>
                {item.step}
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#000' }}>{item.title}</div>
                <div style={{ fontSize: '11px', color: '#555' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  const current = slides[currentSlide];

  return (
    <div style={{ padding: '4px' }}>
      
      {/* Top Banner Tab */}
      <div className="yardi-sheet-tab-container" style={{ marginTop: '0', paddingLeft: '20px' }}>
        <div className="yardi-sheet-tab" style={{ fontWeight: 'bold' }}>{current.tag}</div>
      </div>

      {/* Main Yardi Report Canvas */}
      <div className="yardi-report-canvas">
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000000' }}>
            {current.title}
          </div>
          <div style={{ fontSize: '11px', color: '#555', fontWeight: 'bold' }}>
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>

        <div style={{ fontSize: '12px', color: '#444444', marginBottom: '16px' }}>
          {current.subtitle}
        </div>

        {/* Slide Body */}
        {current.content}

        {/* Slide Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', paddingTop: '12px', borderTop: '1px solid #d0d0d0' }}>
          <button
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className="yardi-btn"
            style={{ opacity: currentSlide === 0 ? 0.5 : 1, cursor: currentSlide === 0 ? 'not-allowed' : 'pointer' }}
          >
            ◄ Previous Slide
          </button>

          <div style={{ display: 'flex', gap: '6px' }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: idx === currentSlide ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '2px',
                  background: idx === currentSlide ? '#004b87' : '#cccccc',
                  border: 'none',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>

          {currentSlide < slides.length - 1 ? (
            <button
              onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
              className="yardi-btn"
            >
              Next Slide ►
            </button>
          ) : (
            <button
              onClick={() => onNavigateToDemo('launcher')}
              className="yardi-btn"
              style={{ fontWeight: 'bold', background: '#d4e6f1' }}
            >
              Launch Interactive Yardi Demo ►
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
