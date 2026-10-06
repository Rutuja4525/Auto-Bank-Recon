import React, { useState } from 'react';
import { screenshotsGallery } from '../data/mockData';
import { Maximize2, X, CheckCircle2, FileImage, ShieldCheck } from 'lucide-react';

export default function ScreenshotsViewer() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="animate-fade-in">
      
      {/* Banner */}
      <div className="glass-panel" style={{ padding: '20px 28px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Actual Working Solution Screenshots</h2>
              <span className="badge badge-success">7 Production Screens</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Direct evidence from Screenshots.docx demonstrating live Yardi Voyager module execution.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Screenshots */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
        {screenshotsGallery.map((item) => (
          <div key={item.id} className="glass-card" style={{ padding: '18px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                Screenshot #{item.id}: {item.title}
              </h4>
              <button
                onClick={() => setActiveImage(item)}
                className="btn btn-secondary"
                style={{ padding: '6px 10px', fontSize: '0.75rem' }}
              >
                <Maximize2 size={14} /> Zoom
              </button>
            </div>

            {/* Thumbnail Image */}
            <div
              onClick={() => setActiveImage(item)}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                background: '#0f172a',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                transition: 'transform 0.2s ease'
              }}
            >
              <img
                src={item.file}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.4 }}>
              {item.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {item.keyPoints.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={13} color="var(--accent-emerald)" /> {pt}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Zoom View */}
      {activeImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div className="glass-panel" style={{ maxWidth: '1100px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '24px', position: 'relative' }}>
            <button
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px' }}>{activeImage.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '16px' }}>{activeImage.description}</p>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', background: '#000' }}>
              <img
                src={activeImage.file}
                alt={activeImage.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
