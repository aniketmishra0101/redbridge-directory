/**
 * Redbridge Directory — Main Interaction Controller
 * 
 * Manages mobile navigation drawer, header scroll states,
 * smooth scrolling with sticky header offset, dynamic configuration bindings,
 * and mobile sticky CTA behavior.
 */

(function () {
  'use strict';

  function initApp() {
    const config = window.siteConfig || {};

    // 1. Dynamic Year Binding
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // 2. Dynamic Config URL Binding
    bindConfigUrls(config);

    // 3. Header Scroll Effect
    initHeaderScroll();

    // 4. Mobile Navigation Drawer
    initMobileNav();

    // 5. Accessible Smooth Scrolling
    initSmoothScrolling();

    // 6. Mobile Sticky CTA Visibility Handler
    initMobileStickyCta();
  }

  function bindConfigUrls(config) {
    if (!config) return;

    // Primary Registration Links
    if (config.registration && config.registration.url) {
      document.querySelectorAll('a[data-bind="registration-url"]').forEach(el => {
        el.href = config.registration.url;
        if (config.registration.target) {
          el.target = config.registration.target;
        }
      });
    }

    // Powerlist Nomination Links
    if (config.powerlist && config.powerlist.nominationUrl) {
      document.querySelectorAll('a[data-bind="powerlist-url"]').forEach(el => {
        el.href = config.powerlist.nominationUrl;
        if (config.powerlist.target) {
          el.target = config.powerlist.target;
        }
        if (config.powerlist.rel) {
          el.rel = config.powerlist.rel;
        }
      });
    }

    // Links (Privacy, Contact, Membership)
    if (config.links) {
      if (config.links.privacyPolicy) {
        document.querySelectorAll('a[data-bind="privacy-url"]').forEach(el => {
          el.href = config.links.privacyPolicy;
        });
      }
      if (config.links.rccContact) {
        document.querySelectorAll('a[data-bind="contact-url"]').forEach(el => {
          el.href = config.links.rccContact;
        });
      }
      if (config.links.rccMembership) {
        document.querySelectorAll('a[data-bind="membership-url"]').forEach(el => {
          el.href = config.links.rccMembership;
        });
      }
    }
  }

  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const drawer = document.getElementById('mobile-menu-drawer');
    if (!toggleBtn || !drawer) return;

    function openMenu() {
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on navigation link click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  function initSmoothScrolling() {
    const headerHeight = 85;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        e.preventDefault();

        const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        // Set focus to target for accessibility
        targetEl.setAttribute('tabindex', '-1');
        targetEl.focus({ preventScroll: true });
      });
    });
  }

  function initMobileStickyCta() {
    const stickyCta = document.getElementById('mobile-sticky-cta');
    const registerSection = document.getElementById('register');
    if (!stickyCta || !registerSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // If the registration card is in view, hide the sticky bar so it doesn't duplicate
          if (entry.isIntersecting) {
            stickyCta.classList.add('hidden');
          } else {
            stickyCta.classList.remove('hidden');
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(registerSection);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
