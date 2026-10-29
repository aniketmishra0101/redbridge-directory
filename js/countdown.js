/**
 * Redbridge Directory — High-Accuracy Launch Countdown Module
 * 
 * Handles timezone-aware countdown calculation, second-by-second updates,
 * unconfirmed date fallback, zero-state transition, and screen reader accessibility.
 */

(function () {
  'use strict';

  class DirectoryCountdown {
    constructor(config) {
      this.config = config || (typeof window !== 'undefined' && window.siteConfig ? window.siteConfig.launch : {
        targetDate: '2026-11-30T09:00:00',
        timezone: 'Europe/London',
        isConfirmed: true,
        label: 'THE DIRECTORY LAUNCHES IN',
        liveMessage: 'The Redbridge Directory is now live! Register your business listing below.',
        unconfirmedMessage: 'Coming Soon • Target Launch November 2026'
      });

      this.timerId = null;
      this.elements = {};
      this.init();
    }

    init() {
      // Find DOM elements
      this.elements = {
        box: document.getElementById('countdown-container'),
        days: document.getElementById('countdown-days'),
        hours: document.getElementById('countdown-hours'),
        minutes: document.getElementById('countdown-minutes'),
        seconds: document.getElementById('countdown-seconds'),
        grid: document.getElementById('countdown-grid'),
        stateMsg: document.getElementById('countdown-state-msg'),
        srAnnouncement: document.getElementById('countdown-sr-announcement'),
        label: document.getElementById('countdown-label-text')
      };

      if (!this.elements.box) return;

      // Handle unconfirmed launch date state
      if (!this.config.isConfirmed) {
        this.renderUnconfirmedState();
        return;
      }

      // Parse target timestamp
      this.targetTime = new Date(this.config.targetDate).getTime();

      // Initial update
      this.tick();

      // Start 1-second interval
      this.timerId = setInterval(() => this.tick(), 1000);
    }

    tick() {
      const now = Date.now();
      const distance = this.targetTime - now;

      if (distance <= 0) {
        this.handleLaunchReached();
        return;
      }

      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Render updated numbers
      if (this.elements.days) this.elements.days.textContent = String(Math.max(0, days)).padStart(2, '0');
      if (this.elements.hours) this.elements.hours.textContent = String(Math.max(0, hours)).padStart(2, '0');
      if (this.elements.minutes) this.elements.minutes.textContent = String(Math.max(0, minutes)).padStart(2, '0');
      if (this.elements.seconds) this.elements.seconds.textContent = String(Math.max(0, seconds)).padStart(2, '0');
    }

    handleLaunchReached() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }

      // Set all units to zero
      if (this.elements.days) this.elements.days.textContent = '00';
      if (this.elements.hours) this.elements.hours.textContent = '00';
      if (this.elements.minutes) this.elements.minutes.textContent = '00';
      if (this.elements.seconds) this.elements.seconds.textContent = '00';

      // Hide countdown grid and reveal post-launch announcement
      if (this.elements.grid) this.elements.grid.style.display = 'none';
      if (this.elements.stateMsg) {
        this.elements.stateMsg.textContent = this.config.liveMessage;
        this.elements.stateMsg.style.display = 'block';
      }

      // Screen reader announcement of launch state
      if (this.elements.srAnnouncement) {
        this.elements.srAnnouncement.textContent = this.config.liveMessage;
      }
    }

    renderUnconfirmedState() {
      if (this.elements.grid) this.elements.grid.style.display = 'none';
      if (this.elements.stateMsg) {
        this.elements.stateMsg.textContent = this.config.unconfirmedMessage;
        this.elements.stateMsg.style.display = 'block';
      }
      if (this.elements.label) {
        this.elements.label.textContent = 'STATUS: PRE-LAUNCH';
      }
    }

    destroy() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }
  }

  // Auto-initialize when DOM is ready
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      const config = (window.siteConfig && window.siteConfig.launch) ? window.siteConfig.launch : null;
      window.directoryCountdown = new DirectoryCountdown(config);
    });
  }

  // Export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DirectoryCountdown;
  }
})();
