import AboutHero from '@/components/about/AboutHero';
import AboutOpportunity from '@/components/about/AboutOpportunity';
import AboutWhoWeAre from '@/components/about/AboutWhoWeAre';
import AboutVideo from '@/components/about/AboutVideo';
import AboutMission from '@/components/about/AboutMission';
import PillarsSectionV2 from '@/components/home-v2/PillarsSectionV2';
import AboutApproach from '@/components/about/AboutApproach';
import AboutLeadership from '@/components/about/AboutLeadership';
import ActionBanner from '@/components/home/ActionBanner';
import AboutTransparency from '@/components/about/AboutTransparency';

export default function About() {
  return (
    <div className="about-page">
      {/* 1. Standard Inner Hero Header (Compact, Breadcrumb, Title, Tagline, Background Image) */}
      <AboutHero />

      {/* 2. Core Purpose & Overlapping Photo Collage: Every Smile Begins With an Opportunity */}
      <AboutOpportunity />

      {/* 3. Who We Are: A Mission Rooted in Compassion */}
      <AboutWhoWeAre />

      {/* 4. Cinema Spotlight: Official Widescreen YouTube Video */}
      <AboutVideo />

      {/* 5. Our Mission & Our Vision: Dual Balanced Cards */}
      <AboutMission />

      {/* 6. Four Pillars of Change: Identical to Home Page Four Pillars Section */}
      <PillarsSectionV2 />

      {/* 7. Our Approach: 3 Core Principles for Sustainable Impact */}
      <AboutApproach />

      {/* 8. The People Behind Our Mission: Board of Trustees & Board of Advisors */}
      <AboutLeadership />

      {/* 9. Take Action Banner (Identical to Home Page: Be the Reason for a Smile, Donate & Volunteer) */}
      <ActionBanner />

      {/* 10. Our Commitment to Transparency: Official 501(c)(3), EIN & Candid Badges on Warm Ivory */}
      <AboutTransparency />
    </div>
  );
}
