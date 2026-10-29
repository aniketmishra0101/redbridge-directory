/**
 * Redbridge Directory Landing Page — Comprehensive Automated Verification Suite
 * 
 * Verifies all 20 points of the Section 19 Acceptance Checklist & User Feedback:
 * - Brand Colors & Typography
 * - Exact Copy Integrity
 * - Strict Section Sequence + Contact ("Talk to us")
 * - External Redirect Only (No Form/Inputs)
 * - Powerlist Separation (No Star Icon)
 * - Contact Channels (Phone 020 3633 9665, Email chamber@redbridgechamber.com, Contact Page)
 * - Countdown Timezone, Tick, and Clean Label
 * - Hero Section uses official uploaded hero graphic
 * - WCAG Accessibility Standards
 * - SEO Metadata
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');
const htmlContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
const mainCss = fs.readFileSync(path.join(ROOT_DIR, 'css', 'main.css'), 'utf8');
const compCss = fs.readFileSync(path.join(ROOT_DIR, 'css', 'components.css'), 'utf8');
const a11yCss = fs.readFileSync(path.join(ROOT_DIR, 'css', 'accessibility.css'), 'utf8');
const config = require(path.join(ROOT_DIR, 'config.js'));

let testsPassed = 0;
let testsTotal = 0;

function runTest(name, fn) {
  testsTotal++;
  try {
    fn();
    console.log(`  ✓ ${name}`);
    testsPassed++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    Error: ${err.message}`);
  }
}

console.log('\n======================================================');
console.log('  Running Redbridge Directory Acceptance Test Suite');
console.log('======================================================\n');

// 1. Brand Tokens & Colors
runTest('Brand Colors: Navy #032C4D, Orange #FF8717, White #FFFFFF present in tokens', () => {
  assert(mainCss.includes('#032C4D'), 'Primary navy #032C4D missing');
  assert(mainCss.includes('#FF8717'), 'Primary orange #FF8717 missing');
  assert(mainCss.includes('#FFFFFF'), 'Base white #FFFFFF missing');
});

runTest('Typography: Inter and Poppins Google Fonts implemented', () => {
  assert(htmlContent.includes('family=Inter'), 'Inter font link missing in HTML');
  assert(htmlContent.includes('family=Poppins'), 'Poppins font link missing in HTML');
  assert(mainCss.includes("'Inter'"), 'Inter font token missing in CSS');
  assert(mainCss.includes("'Poppins'"), 'Poppins font token missing in CSS');
});

// 2. User Feedback Checks: Supplied Logo & White Header Background
runTest('User Feedback: Supplied RCC logo used in Header and Footer', () => {
  assert(htmlContent.includes('assets/images/rcc-logo.png'), 'Supplied logo rcc-logo.png missing in HTML');
  assert(fs.existsSync(path.join(ROOT_DIR, 'assets/images/rcc-logo.png')), 'rcc-logo.png file missing from assets/images');
  assert(compCss.includes('background-color: #FFFFFF; /* Pure white background as requested */'), 'Header solid white background missing');
  assert(htmlContent.includes('class="footer-logo-card"'), 'Footer white logo card container missing');
});

runTest('User Feedback: Privacy Policy URL updated to https://www.redbridgechamber.com/privacy-policy/', () => {
  assert(config.links.privacyPolicy === 'https://www.redbridgechamber.com/privacy-policy/', 'Config privacy policy URL not updated');
  assert(htmlContent.includes('https://www.redbridgechamber.com/privacy-policy/'), 'HTML privacy policy link not updated');
});

// 3. User Feedback: Hero Section uses uploaded graphic & countdown date removed
runTest('User Feedback: Hero section uses uploaded graphic hero-hub.jpg', () => {
  assert(htmlContent.includes('assets/images/hero-hub.jpg'), 'hero-hub.jpg missing in HTML hero section');
  assert(fs.existsSync(path.join(ROOT_DIR, 'assets/images/hero-hub.jpg')), 'hero-hub.jpg file missing from assets/images');
});

runTest('User Feedback: Target date above countdown label removed', () => {
  assert(!htmlContent.includes('Target: 1st January 2027 (GMT)'), 'Target date above countdown was not removed');
});

// 4. User Feedback: Powerlist section removed
runTest('User Feedback: Powerlist section removed as requested', () => {
  assert(!htmlContent.includes('id="powerlist"'), 'Powerlist section should be removed');
  assert(!htmlContent.includes('REDBRIDGE POWERLIST • SEPARATE INITIATIVE'), 'Powerlist badge should be removed');
});

// 5. User Feedback: Contact Section "Talk to us" (Zero mailto: links)
runTest('User Feedback: Contact section "Talk to us" present with exact details (No mailto: links)', () => {
  assert(htmlContent.includes('Talk to us'), 'Contact section heading "Talk to us" missing');
  assert(htmlContent.includes('Do you have a question about membership, an event, or the Chamber itself? Then please get in touch.'), 'Contact lead copy missing');
  assert(htmlContent.includes('020 3633 9665'), 'Phone number 020 3633 9665 missing');
  assert(htmlContent.includes('tel:02036339665'), 'Phone tel: link missing');
  assert(htmlContent.includes('chamber@redbridgechamber.com'), 'Email chamber@redbridgechamber.com missing');
  assert(!htmlContent.includes('mailto:'), 'Contact section must NOT contain mailto: links');
  assert(htmlContent.includes('https://www.redbridgechamber.com/contact/'), 'Contact page link missing');
});

// 6. Strict Section Sequence
runTest('Website Structure: Exact Section Sequence 1 to 7', () => {
  const headerIdx = htmlContent.indexOf('<header');
  const heroIdx = htmlContent.indexOf('class="section-hero"');
  const benefitsIdx = htmlContent.indexOf('class="section-benefits"');
  const membershipIdx = htmlContent.indexOf('class="section-membership"');
  const registerIdx = htmlContent.indexOf('class="section-register"');
  const contactIdx = htmlContent.indexOf('class="section-contact"');
  const footerIdx = htmlContent.indexOf('<footer');

  assert(headerIdx !== -1, 'Header missing');
  assert(heroIdx > headerIdx, 'Hero must be after Header');
  assert(benefitsIdx > heroIdx, 'Benefits must be after Hero');
  assert(membershipIdx > benefitsIdx, 'Membership must be after Benefits');
  assert(registerIdx > membershipIdx, 'Registration must be after Membership');
  assert(contactIdx > registerIdx, 'Contact must be after Registration');
  assert(footerIdx > contactIdx, 'Footer must be after Contact');
});

// 7. Exact Copy & Content Checks
runTest('Hero Section Copy: Exact text preserved', () => {
  assert(htmlContent.includes('RED BRIDGE DIRECTORY'), 'Eyebrow copy missing');
  assert(htmlContent.includes('Your Business. Your Borough. Get Found.'), 'Hero title missing');
  assert(htmlContent.includes('The Redbridge Directory is coming and your business should be part of it.'), 'Hero subtitle missing');
  assert(htmlContent.includes('Help local customers discover your business through a new directory backed by the Redbridge Chamber of Commerce.'), 'Hero body paragraph 1 missing');
  assert(htmlContent.includes('A listing can support your local SEO and strengthen your online credibility, making your company easier to discover.'), 'Hero body paragraph 2 missing');
  assert(htmlContent.includes('GET LISTED FOR FREE'), 'Primary Hero CTA text missing');
});

runTest('Benefits Section Copy: 3 exact benefit columns', () => {
  assert(htmlContent.includes('Get Listed. Get Discovered. Get Connected.'), 'Benefits heading missing');
  assert(htmlContent.includes('Help Local Customers Find You'), 'Benefit 1 title missing');
  assert(htmlContent.includes('Strengthen Your Online Presence'), 'Benefit 2 title missing');
  assert(htmlContent.includes('Connect With the Local Business Community'), 'Benefit 3 title missing');
  assert(htmlContent.includes('FREE Associate membership of the Chamber'), 'Free Associate membership mention missing');
  assert(htmlContent.includes('RCC WhatsApp community'), 'RCC WhatsApp community mention missing');
});

runTest('Membership Section Copy: Free listing & Founder membership exact copy', () => {
  assert(htmlContent.includes('Get More With Full Membership'), 'Membership heading missing');
  assert(htmlContent.includes('For greater visibility and access, choose Founder membership or above.'), 'Membership intro copy missing');
  assert(htmlContent.includes('FREE BUSINESS LISTING'), 'Free listing label missing');
  assert(htmlContent.includes('FOUNDER MEMBERSHIP OR ABOVE'), 'Founder membership label missing');
  assert(htmlContent.includes('You’ll receive an enhanced directory listing featuring your website link, business summary, contact details, LinkedIn profile, and customer enquiry form'), 'Founder exact copy part 1 missing');
  assert(htmlContent.includes('Plus, unlock wider RCC benefits, including opportunities to speak and exhibit, specialist subgroups, and member promotion.'), 'Founder exact copy part 2 missing');
});

runTest('Registration Section Copy & External Redirect: Strictly NO forms', () => {
  assert(!htmlContent.includes('<form'), 'Registration section must NOT contain a <form> tag!');
  assert(!htmlContent.includes('<input'), 'Registration section must NOT contain <input> fields!');
  assert(htmlContent.includes('Put Your Business on the Map'), 'Registration heading missing');
  assert(htmlContent.includes('Enter your details to get started.'), 'Registration body copy missing');
  assert(htmlContent.includes('Register your interest in joining the Redbridge Directory. You’ll need to provide your company name, email address and contact number.'), 'Registration supporting copy missing');
  assert(htmlContent.includes('REGISTER MY FREE BUSINESS LISTING'), 'Primary CTA text missing');
  assert(config.registration.url === 'https://members.redbridgechamberofcommerce.co.uk/redbridgedirectory', 'Registration URL mismatch in config');
  assert(htmlContent.includes('https://members.redbridgechamberofcommerce.co.uk/redbridgedirectory'), 'Registration URL missing in HTML link');
  assert(config.registration.target === '_self', 'Registration link must open in same tab');
});

runTest('Powerlist Section: Removed from landing page', () => {
  assert(!htmlContent.includes('class="section-powerlist"'), 'Powerlist section should be absent from HTML');
});

runTest('Footer: Mandatory eligibility statement, Chamber backing, and links', () => {
  assert(htmlContent.includes('For businesses based in or connected to Redbridge. We’ll use your details to arrange your listing and Associate membership. See our'), 'Mandatory footer eligibility copy missing');
  assert(htmlContent.includes('Privacy Policy'), 'Privacy Policy link missing');
  assert(htmlContent.includes('Redbridge Chamber of Commerce'), 'Chamber backing missing in footer');
  assert(htmlContent.includes('id="current-year"'), 'Dynamic year element missing');
});

// 8. Launch Countdown Logic: 1st January 2027 GMT
runTest('Countdown Configuration: 1st January 2027 GMT launch date', () => {
  assert(config.launch.targetDate === '2027-01-01T00:00:00Z', 'Target date must be 2027-01-01T00:00:00Z');
  assert(config.launch.timezone.includes('GMT'), 'Timezone must include GMT');
  assert(config.launch.isConfirmed === true, 'isConfirmed must be true');
  assert(new Date(config.launch.targetDate).getTime() > Date.now(), 'Target date must be in future');
});

// 9. Accessibility & SEO
runTest('Accessibility: Skip link, sr-only utilities, and ARIA attributes', () => {
  assert(htmlContent.includes('class="skip-link"'), 'Skip to content link missing');
  assert(htmlContent.includes('class="sr-only"'), 'Screen reader only announcement missing');
  assert(a11yCss.includes(':focus-visible'), 'Focus visible styling missing');
  assert(a11yCss.includes('prefers-reduced-motion: reduce'), 'prefers-reduced-motion query missing');
});

runTest('SEO & Metadata: Title, Meta description, Open Graph, and Favicon', () => {
  assert(htmlContent.includes('<title>Redbridge Directory | Get Your Business Listed for Free</title>'), 'SEO page title missing or incorrect');
  assert(htmlContent.includes('name="description"'), 'Meta description missing');
  assert(htmlContent.includes('property="og:title"'), 'Open Graph title missing');
  assert(htmlContent.includes('rel="canonical"'), 'Canonical URL tag missing');
  assert(htmlContent.includes('rel="icon"'), 'Favicon tag missing');
});

console.log(`\n======================================================`);
console.log(`  Tests Completed: ${testsPassed}/${testsTotal} Passed`);
console.log('======================================================\n');

if (testsPassed !== testsTotal) {
  process.exit(1);
}
