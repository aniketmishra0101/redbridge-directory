/**
 * Redbridge Directory — Analytics & CTA Interaction Tracker
 * 
 * Complies with brief Section 17:
 * - business_registration_cta_click
 * - powerlist_nomination_cta_click
 * - header_cta_click
 * - No PII collected or sent
 * - Works with standard GTM/GA4 dataLayer or console debugging
 */

(function () {
  'use strict';

  const AnalyticsTracker = {
    trackEvent(eventName, payload = {}) {
      // Clean payload: ensure no PII is ever passed
      const safePayload = {
        event: eventName,
        timestamp: new Date().toISOString(),
        cta_text: payload.cta_text || '',
        destination: payload.destination || '',
        location: payload.location || window.location.pathname
      };

      // Push to GTM dataLayer if present
      if (typeof window.dataLayer !== 'undefined' && Array.isArray(window.dataLayer)) {
        window.dataLayer.push(safePayload);
      }

      // Push to gtag if present
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, safePayload);
      }

      // Developer log in development mode
      if (window.siteConfig && window.siteConfig.analytics && window.siteConfig.analytics.enabled) {
        console.log('[Analytics Event Tracked]', eventName, safePayload);
      }
    },

    init() {
      // Attach event listeners to all tracked CTAs
      document.querySelectorAll('[data-track-event]').forEach(el => {
        el.addEventListener('click', (e) => {
          const eventName = el.getAttribute('data-track-event');
          const ctaText = el.textContent ? el.textContent.trim() : '';
          const destination = el.getAttribute('href') || '';
          
          AnalyticsTracker.trackEvent(eventName, {
            cta_text: ctaText,
            destination: destination
          });
        });
      });
    }
  };

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      AnalyticsTracker.init();
    });
  }

  window.AnalyticsTracker = AnalyticsTracker;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnalyticsTracker;
  }
})();
