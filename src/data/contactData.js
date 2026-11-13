export const CONTACT_DETAILS = {
  organizationName: 'Share A Smile - USA',
  legalStatus: '501(c)(3) Nonprofit Public Charity',
  ein: '300221345',
  phone: '213-210-3711',
  phoneDisplay: '(213) 210-3711',
  phoneTel: 'tel:2132103711',
  email: 'info@shareasmileusa.org',
  emailMailto: 'mailto:info@shareasmileusa.org',
  address: {
    line1: '45 River Dr S, Apt 3010',
    city: 'Jersey City',
    state: 'NJ',
    zip: '07310',
    country: 'United States',
  },
  hours: 'Monday – Friday: 9:00 AM – 6:00 PM EST',
  responseNote: 'We typically respond to all inquiries within 24–48 business hours.',
};

export const INQUIRY_TOPICS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'sponsor-child', label: 'Child Education Sponsorship ($21/mo)' },
  { value: 'sponsor-health-camp', label: 'Medical & Diagnostic Camp Sponsorship' },
  { value: 'sponsor-event', label: 'Host or Sponsor a Community Event / Gala' },
  { value: 'women-empowerment', label: 'Women Empowerment & Vocational Programs' },
  { value: 'poverty-relief', label: 'Food Ration Drives & Poverty Relief' },
  { value: 'corporate-matching', label: 'Corporate Matching Gifts & Foundation Grants' },
  { value: 'volunteer', label: 'Volunteer Opportunities' },
  { value: 'tax-receipt', label: 'Tax Receipt & Donation Questions' },
];

export const CONTACT_FAQS = [
  {
    id: 'faq-tax',
    question: 'Is my donation tax-deductible in the United States?',
    answer: 'Yes. Share A Smile - USA is a registered 501(c)(3) tax-exempt public charity (EIN: 300221345). Contributions are tax-deductible to the maximum extent permitted by United States federal law. You will receive an official tax receipt via email immediately after donating.',
  },
  {
    id: 'faq-allocation',
    question: 'How are donated funds allocated across your initiatives?',
    answer: 'Donations directly fund our four core humanitarian programs: rural English-medium education, mobile diagnostic clinics and hospital infrastructure, dignified employment and transport for rural women artisans, and monthly grocery ration kits for vulnerable elderly families.',
  },
  {
    id: 'faq-sponsor-child',
    question: 'Can I sponsor an individual child’s schooling or a village clinic?',
    answer: 'Yes! Child sponsorships are available for $21/month ($250/year), covering tuition, uniforms, textbooks, and daily nourishment. You can also sponsor village diagnostic health camps ($150) or regional relief mobilizations ($500) through our sponsorship programs.',
  },
  {
    id: 'faq-matching',
    question: 'Does my employer’s corporate matching gift program apply to Share a Smile?',
    answer: 'Many US employers match charitable gifts made by their employees 1:1 or 2:1. Search for "Share A Smile USA" or use our EIN (300221345) in your company’s Benevity, CyberGrants, or employee giving portal. Reach out to info@shareasmileusa.org for matching gift assistance.',
  },
  {
    id: 'faq-events-volunteer',
    question: 'How can I volunteer or organize a fundraiser in my local community?',
    answer: 'We welcome volunteer advocates, school fundraisers, 5K charity walks, and regional gala dinner organizers. Select "Host or Sponsor a Community Event" in our contact form or email info@shareasmileusa.org with your ideas.',
  },
  {
    id: 'faq-ground-location',
    question: 'Where is Share a Smile based and where is the ground work conducted?',
    answer: 'Share A Smile USA is headquartered in the United States, managing donor stewardship, governance, and community outreach. Our on-the-ground project partner organizations operate directly in Parli and surrounding rural tribal hamlets across Maharashtra, India.',
  },
];
