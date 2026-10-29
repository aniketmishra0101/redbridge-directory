import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const Powerlist: React.FC = () => {
  return (
    <section className="section-powerlist" id="powerlist" aria-labelledby="powerlist-heading">
      <div className="container container-narrow">
        
        <div className="powerlist-card">
          <div className="powerlist-inner">
            
            <div className="powerlist-badge">
              <span>REDBRIDGE POWERLIST • SEPARATE INITIATIVE</span>
            </div>

            <h2 id="powerlist-heading" className="powerlist-title">
              Know Someone Making a Difference in Redbridge?
            </h2>

            <div className="powerlist-copy">
              <p>
                The <span className="powerlist-highlight">Redbridge Powerlist</span> is an annual, unranked selection of {siteConfig.powerlist.totalHonourees} influential people who live or work in Redbridge.
              </p>
              <p>
                It celebrates influence demonstrated through business achievement, community impact, leadership and public service.
              </p>
              <p className="powerlist-highlight">
                Self-nominations are welcome.
              </p>
            </div>

            <div className="powerlist-cta-box">
              <a 
                href={siteConfig.powerlist.nominationUrl} 
                className="btn btn-powerlist" 
                data-track-event="powerlist_nomination_cta_click" 
                target={siteConfig.powerlist.target} 
                rel={siteConfig.powerlist.rel}
              >
                <span>NOMINATE SOMEONE FOR THE REDBRIDGE POWERLIST</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <p className="powerlist-disclaimer">
                Opens the official Redbridge Powerlist nomination form in a new window.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
