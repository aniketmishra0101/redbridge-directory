import React from 'react';

export const Benefits: React.FC = () => {
  return (
    <section className="section-benefits" id="benefits" aria-labelledby="benefits-heading">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">Why Join The Directory</span>
          <h2 id="benefits-heading">Get Listed. Get Discovered. Get Connected.</h2>
          <p>
            Three key advantages designed to give businesses based in or connected to Redbridge the visibility and community they deserve.
          </p>
        </div>

        <div className="benefits-grid">
          
          <article className="benefit-card">
            <div className="benefit-icon-box" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Help Local Customers Find You</h3>
            <p>
              Help people looking for businesses in Redbridge discover your company through a dedicated local directory.
            </p>
          </article>

          <article className="benefit-card">
            <div className="benefit-icon-box" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3>Strengthen Your Online Presence</h3>
            <p>
              A directory listing can support your local SEO and strengthen your online credibility, making your company easier to discover.
            </p>
          </article>

          <article className="benefit-card">
            <div className="benefit-icon-box" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Connect With the Local Business Community</h3>
            <p>
              As an added bonus, you’ll receive FREE Associate membership of the Chamber, including access to our RCC WhatsApp community to connect with other local businesses.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};
