import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, ArrowRight, ShieldCheck, Clock, Layers, TrendingUp, BarChart3, Building2, Zap } from 'lucide-react';
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>

          {/* Highlight ROI Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(16, 185, 129, 0.15))',
            border: '1px solid var(--accent-cyan-glow)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
                <ShieldCheck size={18} /> Financial Advantage
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '4px', color: 'var(--text-main)' }}>
                One-Time Development Investment — Zero Lifetime Subscription Costs
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Unlike costly SaaS tools charging recurring per-seat fees, this solution is built natively inside your Yardi Voyager instance. Pay once, own forever.
              </p>
            </div>
            <div className="badge badge-success" style={{ padding: '10px 18px', fontSize: '0.9rem' }}>
              100% Capital Efficient
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {/* Core Objective Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '10px', background: 'rgba(6, 182, 212, 0.15)', borderRadius: '10px', color: 'var(--accent-cyan)' }}>
                  <Zap size={24} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Finance Team Productivity</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Transition accounting staff from tedious, line-by-line manual bank statement matching to a streamlined, <strong style={{ color: 'var(--text-main)' }}>exception-based review model</strong>.
              </p>
              <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: 0, listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem' }}>
                  <CheckCircle size={16} color="var(--accent-emerald)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>Saves an estimated <strong>15 to 120+ accounting hours monthly</strong> (scales directly with bank count, active accounts & transaction volume)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                  <CheckCircle size={16} color="var(--accent-emerald)" /> Daily automated electronic statement feeds from all bank partners
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                  <CheckCircle size={16} color="var(--accent-emerald)" /> Auto-clears checks, EFTs, ACH, wires & tenant lockbox deposits
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                  <CheckCircle size={16} color="var(--accent-emerald)" /> Accelerated financial close & audit-ready transaction history
                </li>
              </ul>
            </div>

            {/* Production Metrics Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '10px', color: 'var(--accent-emerald)' }}>
                  <BarChart3 size={24} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Key Performance & Savings Metrics</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
                <div style={{ background: 'var(--inner-card-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800 }} className="gradient-text">90%+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Auto-Clear Rate</div>
                </div>
                <div style={{ background: 'var(--inner-card-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>~15–120+ Hrs</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Saved / Months (Varies by Volume)*</div>
                </div>
                <div style={{ background: 'var(--inner-card-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)' }}>Zero</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Recurring Software Fee</div>
                </div>
                <div style={{ background: 'var(--inner-card-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-amber)' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Yardi Native Solution</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Advantages Grid */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ padding: '10px', background: 'rgba(6, 182, 212, 0.15)', borderRadius: '10px', color: 'var(--accent-cyan)' }}>
                <CheckCircle size={24} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Key Solution Advantages</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {keyAdvantages.map((adv, idx) => (
                <div key={idx} style={{ background: 'var(--inner-card-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                    <CheckCircle size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                    {adv.title}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {adv.desc}
                  </p>
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
        <div style={{ marginTop: '24px' }}>
          {/* Visual Operations Pipeline */}
          <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '20px' }}>
              End-to-End Financial Reconciliation Process
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', alignItems: 'center' }}>

              <div style={{ background: 'var(--inner-card-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <Building2 size={28} color="var(--accent-cyan)" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-main)' }}>1. Bank Partner Intake</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Daily electronic feeds from JPMorgan, Wells Fargo, Bank of America, etc.</div>
              </div>

              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--accent-cyan)', textAlign: 'center' }}>
                <ArrowRight size={20} style={{ margin: '0 auto' }} />
              </div>

              <div style={{ background: 'var(--inner-card-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <ShieldCheck size={28} color="var(--accent-amber)" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-main)' }}>2. Data Validation</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Standardized statement normalization</div>
              </div>

              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--accent-cyan)', textAlign: 'center' }}>
                <ArrowRight size={20} style={{ margin: '0 auto' }} />
              </div>

              <div style={{ background: 'var(--inner-card-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <Layers size={28} color="var(--accent-purple)" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-main)' }}>3. Yardi Voyager Intake</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Direct ingestion into Voyager Cash Module</div>
              </div>

              <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--accent-cyan)', textAlign: 'center' }}>
                <ArrowRight size={20} style={{ margin: '0 auto' }} />
              </div>

              <div style={{ background: 'var(--inner-card-bg)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <TrendingUp size={28} color="var(--accent-emerald)" style={{ margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-main)' }}>4. Rules Auto-Clearing</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>91%+ clearance rate</div>
              </div>

            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '20px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--accent-cyan)' }}>
                Multi-Bank Compatibility Out-of-the-Box
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                The solution is based on industry-standard bank formats: <strong style={{ color: 'var(--text-main)' }}>BI2</strong>, <strong style={{ color: 'var(--text-main)' }}>CAMT 53</strong>, and <strong style={{ color: 'var(--text-main)' }}>MT 940</strong>. Banks supporting these formats should work seamlessly with the solution (including JPMorgan, Wells Fargo, Bank of America, Citizens Bank, East West Bank, Northern Trust, Santander, BNY Mellon, Key Bank, Citi, UMB, First Citizens, Western Alliance, BMO, etc.).
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--accent-emerald)' }}>
                Automated Journal Entries
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Automatically creates and posts journal entries for recurring monthly bank fees and credit interest income directly to pre-configured general ledger accounts.
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '24px' }}>
          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
              1. Exact Reference Match
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Matches items on check number, exact payment reference, or wire reference ID.
            </p>
            <div className="badge badge-success">Precision Match</div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
              2. Lockbox & Tenant ACH Matching
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Parses bank customer reference strings and tenant IDs to automatically match lockbox deposits against open tenant receivables.
            </p>
            <div className="badge badge-info">Tenant Lockbox Automation</div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
              3. Automated GL Fee Booking
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Auto-books monthly account service charges and interest income directly to designated GL cash accounts with full audit logs.
            </p>
            <div className="badge badge-purple">Zero Manual Entry</div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
              4. Multi-Rule & Fuzzy Logic Engine
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Employs multi-level criteria and intelligent fuzzy matching logic to clear complex or partial reference statement lines.
            </p>
            <div className="badge badge-success">Fuzzy Matching Engine</div>
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
                <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>{item.title}</h5>
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
              Explore Interactive Demo <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
