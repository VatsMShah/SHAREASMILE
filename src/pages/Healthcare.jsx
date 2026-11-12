import HealthcareHero from '@/components/healthcare/HealthcareHero';
import HealthcareOverview from '@/components/healthcare/HealthcareOverview';
import HealthcareServices from '@/components/healthcare/HealthcareServices';
import HealthcareJourney from '@/components/healthcare/HealthcareJourney';
import HealthcareHospital from '@/components/healthcare/HealthcareHospital';
import HealthcareGallery from '@/components/healthcare/HealthcareGallery';
import HealthcareSponsorAndCta from '@/components/healthcare/HealthcareSponsorAndCta';

export default function Healthcare() {
  return (
    <div className="healthcare-page">
      {/* 1. Compact Inner Hero Header */}
      <HealthcareHero />

      {/* 2. 18 Years of Rural Healthcare Outreach + Medical Duo Frame */}
      <HealthcareOverview />

      {/* 3. Clinical Services: 8-Card Specialty Grid */}
      <HealthcareServices />

      {/* 4. Journey of a Village: 3 Milestone Evolution Cards with Photo Headers */}
      <HealthcareJourney />

      {/* 5. Landmark Upcoming Project: 39-Bed Hospital with Real Construction Photo */}
      <HealthcareHospital />

      {/* 6. Healthcare in Action: Counter-Scrolling Kinetic Gallery & Lightbox */}
      <HealthcareGallery />

      {/* 7. Take Action Banner FIRST + Healthcare Sponsorship Card SECOND */}
      <HealthcareSponsorAndCta />
    </div>
  );
}
