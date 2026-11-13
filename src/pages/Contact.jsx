import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';
import ContactFaq from '@/components/contact/ContactFaq';
import ContactCta from '@/components/contact/ContactCta';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* 1. Header Hero */}
      <ContactHero />

      {/* 2. Main Contact Grid: Organization Details & Clean Inquiry Form */}
      <ContactMain />

      {/* 3. Frequently Asked Questions (Accordion) */}
      <ContactFaq />

      {/* 4. Zero-Camouflage Take Action Banner & Tax-Exempt Giving Spotlight */}
      <ContactCta />
    </div>
  );
}
