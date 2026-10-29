import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#" className="brand-link" aria-label="Redbridge Chamber of Commerce — Redbridge Directory Home">
            <img 
              src={siteConfig.assets.logo} 
              alt="Redbridge Chamber of Commerce — Think globally, ACT locally" 
              className="brand-logo-img" 
              width={137} 
              height={58} 
            />
            <div className="brand-divider" aria-hidden="true"></div>
            <div className="brand-initiative-wrapper">
              <span className="brand-initiative-title">DIRECTORY</span>
              <span className="brand-initiative-sub">RCC Pre-Launch</span>
            </div>
          </a>

          <nav className="main-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li><a href="#benefits" className="nav-link">Benefits</a></li>
              <li><a href="#membership" className="nav-link">Membership</a></li>
              <li><a href="#powerlist" className="nav-link">Redbridge Powerlist</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a 
              href="#register" 
              className="btn btn-primary" 
              data-track-event="header_cta_click"
              aria-label="Scroll to registration section to get listed for free"
            >
              GET LISTED FOR FREE
            </a>

            <button 
              type="button" 
              className="mobile-nav-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen} 
              aria-controls="mobile-menu-drawer" 
              aria-label="Toggle navigation menu"
            >
              <svg className="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-open' : ''}`} id="mobile-menu-drawer" aria-hidden={!mobileMenuOpen}>
        <ul className="mobile-nav-list">
          <li><a href="#benefits" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Benefits</a></li>
          <li><a href="#membership" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Membership</a></li>
          <li><a href="#powerlist" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Redbridge Powerlist</a></li>
        </ul>
        <a 
          href="#register" 
          className="btn btn-primary" 
          onClick={() => setMobileMenuOpen(false)}
          data-track-event="header_cta_click" 
          style={{ width: '100%' }}
        >
          GET LISTED FOR FREE
        </a>
      </div>
    </header>
  );
};
