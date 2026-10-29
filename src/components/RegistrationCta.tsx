import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const RegistrationCta: React.FC = () => {
  return (
    <section className="section-register" id="register" aria-labelledby="register-heading">
      <div className="container container-narrow">
        
        <div className="register-card">
          <span className="register-card-badge">Official RCC Registration</span>
          
          <h2 id="register-heading" className="register-title">
            Put Your Business on the Map
          </h2>
          
          <p className="register-body">
            Enter your details to get started.
          </p>

          <p className="register-supporting">
            Register your interest in joining the Redbridge Directory. You’ll need to provide your company name, email address and contact number.
          </p>

          <div className="register-action-box">
            <a 
              href={siteConfig.registration.url} 
              className="btn btn-primary btn-lg btn-register-main" 
              data-track-event="business_registration_cta_click" 
              target={siteConfig.registration.target}
              rel="noopener"
            >
              <span>REGISTER MY FREE BUSINESS LISTING</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <div className="register-reassurance">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Takes 60 seconds on the official RCC Membership portal</span>
            </div>
          </div>

          <div className="register-enhanced-callout">
            Want the enhanced listing and full membership benefits? Let us know when you register.
          </div>

          <p className="register-eligibility">
            For businesses based in or connected to Redbridge. We’ll use your details to arrange your listing and Associate membership. See our{' '}
            <a href={siteConfig.links.privacyPolicy} style={{ color: 'var(--color-orange)', textDecoration: 'underline' }}>
              Privacy Policy
            </a>.
          </p>

        </div>

      </div>
    </section>
  );
};
