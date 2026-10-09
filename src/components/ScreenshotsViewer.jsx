import React, { useState } from 'react';
import { screenshotsGallery } from '../data/mockData';

export default function ScreenshotsViewer() {
  const [activeImage, setActiveImage] = useState(null);

  // Map to local extracted images
  const localImageMap = {
    1: "/extracted_screenshots/word/media/image1.png",
    2: "/extracted_screenshots/word/media/image2.png",
    3: "/extracted_screenshots/word/media/image3.png",
    4: "/extracted_screenshots/word/media/image4.png",
    5: "/extracted_screenshots/word/media/image5.png",
    6: "/extracted_screenshots/word/media/image6.png",
    7: "/extracted_screenshots/word/media/image7.png",
  };

  return (
    <div style={{ padding: '4px' }}>
      
      {/* Sheet Tab */}
      <div className="yardi-sheet-tab-container" style={{ marginTop: '0', paddingLeft: '20px' }}>
        <div className="yardi-sheet-tab" style={{ fontWeight: 'bold' }}>Yardi Voyager Reference Screenshots</div>
      </div>

      <div className="yardi-report-canvas">
        <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#000000', marginBottom: '4px' }}>
          Yardi Voyager Module Reference Screenshots
        </div>
        <div style={{ fontSize: '11px', color: '#555555', marginBottom: '16px' }}>
          These are the 7 original Yardi Voyager screenshots sent by management to verify 100% layout and visual fidelity.
        </div>

        {/* Screenshots Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {screenshotsGallery.map((item) => {
            const imgSrc = localImageMap[item.id] || item.file;
            return (
              <div key={item.id} className="yardi-panel" style={{ background: '#ffffff', border: '1px solid #b8c4d0', padding: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#004b87' }}>
                    Screenshot #{item.id}: {item.title}
                  </div>
                  <button
                    onClick={() => setActiveImage({ ...item, imgSrc })}
                    className="yardi-btn"
                    style={{ fontSize: '10px', padding: '2px 8px' }}
                  >
                    View Fullscreen
                  </button>
                </div>

                <div
                  onClick={() => setActiveImage({ ...item, imgSrc })}
                  style={{
                    border: '1px solid #c0c0c0',
                    cursor: 'pointer',
                    background: '#f9f9f9',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginBottom: '8px'
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>

                <div style={{ fontSize: '11px', color: '#444', lineHeight: 1.3 }}>
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal View */}
      {activeImage && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{ background: '#ffffff', border: '2px solid #003366', maxWidth: '1100px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '16px', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid #003366', paddingBottom: '6px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#003366' }}>
                Yardi Reference Screenshot #{activeImage.id}: {activeImage.title}
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="yardi-btn"
                style={{ fontWeight: 'bold', padding: '2px 10px' }}
              >
                Close ✖
              </button>
            </div>

            <div style={{ border: '1px solid #a0a0a0', background: '#ffffff' }}>
              <img
                src={activeImage.imgSrc}
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
