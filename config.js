/**
 * Redbridge Directory Landing Page Configuration
 * 
 * Centralized settings for URLs, launch date, timezone, brand settings,
 * contact details, and analytics. Update values here without needing to modify component code.
 */

const siteConfig = {
  // Brand details
  brand: {
    name: 'Redbridge Directory',
    tagline: 'Your Business. Your Borough. Get Found.',
    backedBy: 'Redbridge Chamber of Commerce',
    backedByShort: 'RCC',
    year: new Date().getFullYear(),
  },

  // Primary conversion destination (Strictly external redirect, same-tab)
  registration: {
    url: 'https://members.redbridgechamberofcommerce.co.uk/redbridgedirectory',
    target: '_self', // Same tab as required by the brief
    ariaLabel: 'Register my free business listing on the Redbridge Chamber of Commerce website',
  },

  // Secondary conversion destination (Redbridge Powerlist nomination)
  powerlist: {
    // Configurable URL placeholder until the final nomination form URL is supplied
    nominationUrl: 'https://members.redbridgechamberofcommerce.co.uk/powerlist-nomination',
    target: '_blank',
    rel: 'noopener noreferrer',
    ariaLabel: 'Nominate an influential person for the Redbridge Powerlist (opens in new tab)',
    totalHonourees: 25,
  },

  // Official Chamber Contact details ("Talk to us")
  contact: {
    phone: '020 3633 9665',
    phoneHref: 'tel:02036339665',
    email: 'chamber@redbridgechamber.com',
    emailHref: 'mailto:chamber@redbridgechamber.com',
    pageUrl: 'https://www.redbridgechamber.com/contact/',
  },

  // Launch countdown configuration: Live on 1st January GMT UK time
  launch: {
    /**
     * Confirmed launch date: 1st January 2027 GMT UK time
     */
    targetDate: '2027-01-01T00:00:00Z',
    timezone: 'GMT (Europe/London)',
    isConfirmed: true,

    // Label above countdown units
    label: 'THE DIRECTORY LAUNCHES IN',

    // Message displayed when the target date is reached
    liveMessage: 'The Redbridge Directory is now live! Register your business listing below.',

    // Fallback message when isConfirmed is false
    unconfirmedMessage: 'Coming Soon • Launching 1st January 2027 GMT',
  },

  // External Links & Chamber details
  links: {
    // Privacy policy link (Official approved URL)
    privacyPolicy: 'https://www.redbridgechamber.com/privacy-policy/',
    // RCC Contact link
    rccContact: 'https://www.redbridgechamber.com/contact/',
    // RCC Membership portal
    rccMembership: 'https://members.redbridgechamberofcommerce.co.uk',
    // RCC Main website
    rccMain: 'https://www.redbridgechamber.com',
  },

  // Brand assets
  assets: {
    logo: 'assets/images/rcc-logo.png',
    logoFooter: 'assets/images/rcc-logo.png',
    favicon: 'assets/images/favicon.svg',
  },

  // Analytics event definitions
  analytics: {
    enabled: false,
    events: {
      businessRegistrationClick: 'business_registration_cta_click',
      powerlistNominationClick: 'powerlist_nomination_cta_click',
      headerCtaClick: 'header_cta_click',
      heroCtaClick: 'hero_cta_click',
      contactPhoneClick: 'contact_phone_click',
      contactEmailClick: 'contact_email_click',
      contactPageClick: 'contact_page_click',
    },
  },
};

// Export for ES modules and browser window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}
if (typeof window !== 'undefined') {
  window.siteConfig = siteConfig;
}
