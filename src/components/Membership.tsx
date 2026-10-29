import React from 'react';

export const Membership: React.FC = () => {
  return (
    <section className="section-membership" id="membership" aria-labelledby="membership-heading">
      <div className="container">
        
        <div className="section-header">
          <span className="eyebrow">Membership Tiers</span>
          <h2 id="membership-heading">Get More With Full Membership</h2>
          <p className="lead">
            For greater visibility and access, choose Founder membership or above.
          </p>
        </div>

        <div className="membership-grid">
          
          {/* Free Listing Block */}
          <div className="membership-card membership-card-free">
            <div>
              <span className="membership-tag tag-navy">FREE BUSINESS LISTING</span>
              <div className="membership-card-header">
                <h3 className="membership-card-title">Free Business Listing</h3>
                <p>Register today to secure your free business listing when the directory launches.</p>
              </div>

              <ul className="membership-features-list">
                <li className="membership-feature-item">
                  <svg className="membership-check-icon check-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Standard listing entry in the new Redbridge Directory upon launch</span>
                </li>
                <li className="membership-feature-item">
                  <svg className="membership-check-icon check-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>FREE Associate membership</strong> of the Redbridge Chamber of Commerce</span>
                </li>
                <li className="membership-feature-item">
                  <svg className="membership-check-icon check-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Access to our exclusive <strong>RCC WhatsApp community</strong> to connect directly with other local businesses</span>
                </li>
              </ul>
            </div>

            <div className="membership-note-box">
              <p>Available to all businesses based in or connected to the London Borough of Redbridge with zero cost.</p>
            </div>
          </div>

          {/* Enhanced Founder Membership Block */}
          <div className="membership-card membership-card-founder">
            <div>
              <span className="membership-tag tag-orange">FOUNDER MEMBERSHIP OR ABOVE</span>
              <div className="membership-card-header">
                <h3 className="membership-card-title">Enhanced Listing &amp; Full Access</h3>
                <p>Maximized visibility and full involvement across the Chamber network.</p>
              </div>

              <ul className="membership-features-list">
                <li className="membership-feature-item">
                  <svg className="membership-check-icon check-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>You’ll receive an enhanced directory listing featuring your website link, business summary, contact details, LinkedIn profile, and customer enquiry form—giving potential clients more ways to discover and contact you.</span>
                </li>
                <li className="membership-feature-item">
                  <svg className="membership-check-icon check-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Plus, unlock wider RCC benefits, including opportunities to speak and exhibit, specialist subgroups, and member promotion.</span>
                </li>
              </ul>
            </div>

            <div className="membership-note-box">
              <p>Want the enhanced listing and full membership benefits? Simply let us know when you register.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
