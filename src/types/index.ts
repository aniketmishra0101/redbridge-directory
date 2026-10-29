/**
 * TypeScript Type Definitions for Redbridge Directory Landing Page
 */

export interface BrandConfig {
  name: string;
  tagline: string;
  backedBy: string;
  backedByShort: string;
  year: number;
}

export interface RegistrationConfig {
  url: string;
  target: '_self' | '_blank';
  ariaLabel: string;
}

export interface PowerlistConfig {
  nominationUrl: string;
  target: '_blank' | '_self';
  rel: string;
  ariaLabel: string;
  totalHonourees: number;
}

export interface ContactConfig {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  pageUrl: string;
}

export interface LaunchConfig {
  targetDate: string;
  timezone: string;
  isConfirmed: boolean;
  label: string;
  liveMessage: string;
  unconfirmedMessage: string;
}

export interface LinksConfig {
  privacyPolicy: string;
  rccContact: string;
  rccMembership: string;
  rccMain: string;
}

export interface AssetsConfig {
  logo: string;
  logoWhite: string;
  favicon: string;
}

export interface SiteConfig {
  brand: BrandConfig;
  registration: RegistrationConfig;
  powerlist: PowerlistConfig;
  contact: ContactConfig;
  launch: LaunchConfig;
  links: LinksConfig;
  assets: AssetsConfig;
  analytics: {
    enabled: boolean;
    events: {
      businessRegistrationClick: string;
      powerlistNominationClick: string;
      headerCtaClick: string;
      heroCtaClick: string;
    };
  };
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MembershipTier {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  features: string[];
  note: string;
  isHighlighted?: boolean;
}
