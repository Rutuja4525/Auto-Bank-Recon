import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, ArrowRight, ShieldCheck, Cpu, Database, Server, RefreshCw, BarChart3, FileSpreadsheet, Clock, Zap } from 'lucide-react';
import { solutionOverview, implementationRoadmap } from '../data/mockData';

export default function PresentationDeck({ onNavigateToDemo }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "overview",
      tag: "EXECUTIVE BRIEFING",
      title: "Yardi Automated Bank Reconciliation Solution",
      subtitle: "Eliminating manual clearing, accelerating financial close, and providing 100% visibility into daily cash activity.",
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '24px' }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ padding: '10px', background: 'rgba(6, 182, 212, 0.15)', borderRadius: '10px', color: 'var(--accent-cyan)' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>The Core Objective</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Transition accounting teams from painstaking line-by-line manual statement reconciliation to a streamlined, <strong style={{ color: '#ffffff' }}>exception-based review model</strong> directly within Yardi Voyager.
            </p>
            <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                <CheckCircle size={16} color="var(--accent-emerald)" /> Daily automated SFTP bank file intake (BAI2, MT940, CAMT53)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                <CheckCircle size={16} color="var(--accent-emerald)" /> Configurable matching engine operating on custom SQL rules
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                <CheckCircle size={16} color="var(--accent-emerald)" /> Automated clearing for checks, EFTs, ACH, wires & lockbox deposits
              </li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '10px', color: 'var(--accent-emerald)' }}>
                <BarChart3 size={24} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Proven Production Metrics</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800 }} className="gradient-text">88.61%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Auto-Clear Rate</div>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>12+ Banks</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Supported Out-of-Box</div>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>467 / 527</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Transactions Cleared</div>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-amber)' }}>Zero</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Separate SaaS Apps</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "architecture",
      tag: "TECHNICAL ARCHITECTURE",
      title: "Seamless Yardi Voyager Native Data Flow",
      subtitle: "No third-party SaaS data silos. Extends Yardi using native package structures, tasks, and custom ASPX launcher reports.",
      content: (
        <div style={{ marginTop: '24px' }}>
          {/* Visual Architecture Pipeline */}
          <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '20px' }}>
              End-to-End System Integration Flow
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', alignItems: 'center' }}>
              
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <Server size={28} color="var(--accent-cyan)" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>1. SFTP Retrieval</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Banks / Kyriba SFTP</div>
              </div>

              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--accent-cyan)', textAlign: 'center' }}>
                <ArrowRight size={20} style={{ margin: '0 auto' }} />
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <FileSpreadsheet size={28} color="var(--accent-amber)" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>2. Validation & Format</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>BAI2, CAMT53, MT940</div>
              </div>

              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--accent-cyan)', textAlign: 'center' }}>
                <ArrowRight size={20} style={{ margin: '0 auto' }} />
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <Database size={28} color="var(--accent-purple)" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>3. Yardi Task Intake</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>ImportBAI & Foreign DB</div>
              </div>

              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--accent-cyan)', textAlign: 'center' }}>
                <ArrowRight size={20} style={{ margin: '0 auto' }} />
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <Cpu size={28} color="var(--accent-emerald)" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>4. Matching Engine</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Advanced Rules Engine</div>
              </div>

            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '20px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--accent-cyan)' }}>
                Yardi Native Stack Components
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '18px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                <li><strong>Task Runner:</strong> Scheduled Yardi AppTask DLL execution</li>
                <li><strong>Custom Reports:</strong> Custom ASPX launcher & matching rate scripts</li>
                <li><strong>File Server:</strong> Standardized folder structure (`\Interfaces\Bank\BAI2`)</li>
                <li><strong>Database Groups:</strong> Custom foreign tables (`BAI2`, `BAI2LOG`, `BAI2JE`)</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: '20px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--accent-emerald)' }}>
                Multi-Bank Compatibility
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Field-tested with top financial institutions: JPMorgan Chase, KeyBank, Citizens, Truist, Capital One, Pinnacle, Western Alliance, PNC, Synovus, US Bank, Bank of Hawaii, and Renasant Bank.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "matching_engine",
      tag: "MATCHING INTELLIGENCE",
      title: "Multi-Level Automated Transaction Clearing",
      subtitle: "Configurable matching criteria leveraging bank transaction codes, reference numbers, customer memo text, and exact amounts.",
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '24px' }}>
          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
              1. Exact Match Rules
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Matches items with 100% certainty on check number, exact payment reference, or wire reference ID.
            </p>
            <div className="badge badge-success">100% Match Precision</div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
              2. Lockbox & ACH Remittance Matching
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Parses BAI2 customer reference strings (`CUST REF=000028008450582`) and tenant IDs to match lockbox deposits automatically.
            </p>
            <div className="badge badge-info">Lockbox Automation</div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
              3. Journal Entry Generation
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Automatically posts recurring daily bank fees and interest income journal entries directly to pre-configured GL accounts.
            </p>
            <div className="badge badge-purple">Zero Manual Entry</div>
          </div>
        </div>
      )
    },
    {
      id: "roadmap",
      tag: "IMPLEMENTATION ROADMAP",
      title: "Standard 10-Step Client Onboarding Plan",
      subtitle: "A proven, repeatable deployment model that brings new client banks live in weeks.",
      content: (
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', maxHeight: '420px', overflowY: 'auto', paddingRight: '6px' }}>
          {implementationRoadmap.map((item) => (
            <div key={item.step} className="glass-card" style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.9rem',
                flexShrink: 0
              }}>
                {item.step}
              </div>
              <div>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>{item.title}</h5>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  const current = slides[currentSlide];

  return (
    <div className="animate-fade-in">
      
      {/* Slide Header Control */}
      <div className="glass-panel" style={{ padding: '24px 32px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span className="badge badge-info">{current.tag}</span>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>
          {current.title}
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '850px' }}>
          {current.subtitle}
        </p>

        {/* Main Slide Content */}
        {current.content}

        {/* Slide Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
          <button
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className="btn btn-secondary"
            style={{ opacity: currentSlide === 0 ? 0.5 : 1, cursor: currentSlide === 0 ? 'not-allowed' : 'pointer' }}
          >
            <ChevronLeft size={18} /> Previous Slide
          </button>

          <div style={{ display: 'flex', gap: '8px' }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: idx === currentSlide ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentSlide ? 'var(--accent-cyan)' : 'var(--bg-card-hover)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              />
            ))}
          </div>

          {currentSlide < slides.length - 1 ? (
            <button
              onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
              className="btn btn-primary"
            >
              Next Slide <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={() => onNavigateToDemo('launcher')}
              className="btn btn-primary"
              style={{ background: 'linear-gradient(135deg, var(--accent-emerald), #059669)' }}
            >
              Launch Live Solution Demo <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
