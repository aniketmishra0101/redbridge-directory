import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        
        <div className="footer-top-grid">
          
          <div className="footer-brand-col">
            <div className="footer-logo-card">
              <img 
                src={siteConfig.assets.logo} 
                alt="Redbridge Chamber of Commerce — Think globally, ACT locally" 
                className="footer-logo-img" 
                width={137} 
                height={58} 
              />
            </div>
            <p className="footer-chamber-desc">
              Redbridge Directory is an official local business initiative backed by the Redbridge Chamber of Commerce (RCC) to support local enterprise and strengthen commercial connections across the borough.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Directory</h4>
            <ul className="footer-links-list">
              <li><a href="#benefits" className="footer-link">Benefits of Joining</a></li>
              <li><a href="#membership" className="footer-link">Membership Tiers</a></li>
              <li><a href="#register" className="footer-link">Register Business Listing</a></li>
              <li><a href="#contact" className="footer-link">Talk to Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Chamber Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href={siteConfig.links.rccMain} target="_blank" rel="noopener noreferrer" className="footer-link">
                  RCC Website
                </a>
              </li>
              <li>
                <a href={siteConfig.links.rccMembership} target="_blank" rel="noopener noreferrer" className="footer-link">
                  RCC Membership Portal
                </a>
              </li>
              <li>
                <a href={siteConfig.links.rccContact} target="_blank" rel="noopener noreferrer" className="footer-link">
                  Contact RCC
                </a>
              </li>
              <li>
                <a href={siteConfig.links.privacyPolicy} target="_blank" rel="noopener noreferrer" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-eligibility-text">
            For businesses based in or connected to Redbridge. We’ll use your details to arrange your listing and Associate membership. See our{' '}
            <a href={siteConfig.links.privacyPolicy} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>.
          </p>
          <p className="footer-copyright">
            &copy; {currentYear} Redbridge Directory. Backed by the Redbridge Chamber of Commerce. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
