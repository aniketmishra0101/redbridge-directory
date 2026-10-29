import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  brand: {
    name: 'Redbridge Directory',
    tagline: 'Your Business. Your Borough. Get Found.',
    backedBy: 'Redbridge Chamber of Commerce',
    backedByShort: 'RCC',
    year: new Date().getFullYear(),
  },

  registration: {
    url: 'https://members.redbridgechamberofcommerce.co.uk/redbridgedirectory',
    target: '_self',
    ariaLabel: 'Register my free business listing on the Redbridge Chamber of Commerce website',
  },

  powerlist: {
    nominationUrl: 'https://members.redbridgechamberofcommerce.co.uk/powerlist-nomination',
    target: '_blank',
    rel: 'noopener noreferrer',
    ariaLabel: 'Nominate an influential person for the Redbridge Powerlist',
    totalHonourees: 25,
  },

  contact: {
    phone: '020 3633 9665',
    phoneHref: 'tel:02036339665',
    email: 'chamber@redbridgechamber.com',
    emailHref: 'mailto:chamber@redbridgechamber.com',
    pageUrl: 'https://www.redbridgechamber.com/contact/',
  },

  launch: {
    targetDate: '2027-01-01T00:00:00Z',
    timezone: 'GMT (Europe/London)',
    isConfirmed: true,
    label: 'THE DIRECTORY LAUNCHES IN',
    liveMessage: 'The Redbridge Directory is now live! Register your business listing below.',
    unconfirmedMessage: 'Coming Soon • Launching 1st January 2027 GMT',
  },

  links: {
    privacyPolicy: 'https://www.redbridgechamber.com/privacy-policy/',
    rccContact: 'https://www.redbridgechamber.com/contact/',
    rccMembership: 'https://members.redbridgechamberofcommerce.co.uk',
    rccMain: 'https://www.redbridgechamber.com',
  },

  assets: {
    logo: '/assets/images/rcc-logo.png',
    logoWhite: '/assets/images/rcc-logo.png',
    favicon: '/assets/images/favicon.svg',
  },

  analytics: {
    enabled: false,
    events: {
      businessRegistrationClick: 'business_registration_cta_click',
      powerlistNominationClick: 'powerlist_nomination_cta_click',
      headerCtaClick: 'header_cta_click',
      heroCtaClick: 'hero_cta_click',
    },
  },
};
