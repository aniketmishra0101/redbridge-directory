import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const { contact } = siteConfig;

  return (
    <section className="section-contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        
        <div className="contact-card-main">
          <span className="eyebrow">Get In Touch</span>
          <h2 id="contact-heading" style={{ marginBottom: '0.85rem', color: 'var(--color-navy)' }}>
            Talk to us
          </h2>
          
          <p className="lead" style={{ maxWidth: '680px', margin: '0 auto 1rem auto' }}>
            Do you have a question about membership, an event, or the Chamber itself? Then please get in touch.
          </p>

          <div className="contact-channels-grid">
            
            {/* Channel 1: Phone */}
            <a 
              href={contact.phoneHref} 
              className="contact-channel-card" 
              data-track-event="contact_phone_click" 
              aria-label={`Call Redbridge Chamber of Commerce at ${contact.phone}`}
            >
              <div className="contact-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="contact-channel-label">Call Us</span>
              <span className="contact-channel-value">{contact.phone}</span>
              <span className="contact-channel-action">
                <span>Call directly</span>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>

            {/* Channel 2: Email (Plain text, no mailto link) */}
            <div 
              className="contact-channel-card contact-channel-static" 
              aria-label={`Email Redbridge Chamber of Commerce at ${contact.email}`}
            >
              <div className="contact-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span className="contact-channel-label">Email Us</span>
              <span className="contact-channel-value" style={{ userSelect: 'all' }}>{contact.email}</span>
            </div>

            {/* Channel 3: Contact Page */}
            <a 
              href={contact.pageUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-channel-card" 
              data-track-event="contact_page_click" 
              aria-label="Visit official RCC contact page"
            >
              <div className="contact-icon-box" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
              <span className="contact-channel-label">Online Enquiry</span>
              <span className="contact-channel-value">Visit Contact Page</span>
              <span className="contact-channel-action">
                <span>Open contact page</span>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </a>

          </div>

          <div className="contact-direct-summary">
            Do you have a question about membership, an event, or the Chamber itself? Then please get in touch. Call us on{' '}
            <a href={contact.phoneHref}>{contact.phone}</a>, email{' '}
            <span style={{ fontWeight: 600 }}>{contact.email}</span>, or visit our{' '}
            <a href={contact.pageUrl} target="_blank" rel="noopener noreferrer">contact page</a>.
          </div>

        </div>

      </div>
    </section>
  );
};
