import React from 'react';
import { Countdown } from './Countdown';

export const Hero: React.FC = () => {
  return (
    <section className="section-hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="eyebrow eyebrow-badge">
                <span className="countdown-pulsing-dot" aria-hidden="true"></span>
                RED BRIDGE DIRECTORY
              </span>
            </div>

            <h1 id="hero-heading" className="hero-title">
              Your Business. Your Borough. Get Found.
            </h1>

            <p className="hero-subtitle">
              The Redbridge Directory is coming and your business should be part of it.
            </p>

            <div className="hero-body-copy">
              <p>
                Help local customers discover your business through a new directory backed by the Redbridge Chamber of Commerce.
              </p>
              <p>
                A listing can support your local SEO and strengthen your online credibility, making your company easier to discover.
              </p>
            </div>

            <div className="hero-cta-group">
              <a href="#register" className="btn btn-primary btn-lg" data-track-event="hero_cta_click">
                <span>GET LISTED FOR FREE</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <Countdown />
          </div>

          <div className="hero-media-wrapper">
            <img 
              src="/assets/images/hero-hub.jpg" 
              alt="Redbridge Directory Borough-Wide Hub connecting business magazine, local events, expos, and East London exposure" 
              className="hero-illustration" 
              width={440} 
              height={660} 
              loading="eager" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};
