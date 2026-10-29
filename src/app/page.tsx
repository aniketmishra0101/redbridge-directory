import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Membership } from '../components/Membership';
import { RegistrationCta } from '../components/RegistrationCta';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function RedbridgeDirectoryPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Benefits />
        <Membership />
        <RegistrationCta />
        <Contact />
      </main>
      <Footer />
      <aside className="mobile-sticky-cta" id="mobile-sticky-cta" aria-label="Quick Action">
        <a href="#register" className="btn btn-primary" data-track-event="header_cta_click">
          <span>GET LISTED FOR FREE</span>
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </aside>
    </>
  );
}
