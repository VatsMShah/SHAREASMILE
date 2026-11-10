import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutVideo from '@/components/about/AboutVideo';
import AboutMission from '@/components/about/AboutMission';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutLeadership from '@/components/about/AboutLeadership';
import AboutTransparency from '@/components/about/AboutTransparency';
import ActionBanner from '@/components/home/ActionBanner';

export default function About() {
  return (
    <div className="about-page">
      {/* 1. Hero Header: Emotional Purpose & 501(c)(3) Badges */}
      <AboutHero />

      {/* 2. Origin Story: NJ Roots & "Why We Exist" */}
      <AboutStory />

      {/* 3. Cinema Spotlight: "See the Smiles, Feel the Impact" (YouTube Ready) */}
      <AboutVideo />

      {/* 4. Mission, Vision & Core Values */}
      <AboutMission />

      {/* 5. Journey & Milestones: Interactive Timeline */}
      <AboutTimeline />

      {/* 6. Leadership & Governance: Trustees & Advisors Profile Cards */}
      <AboutLeadership />

      {/* 7. Financial Integrity & Stewardship Band */}
      <AboutTransparency />

      {/* 8. Take Action Banner: Authentic Hearts with Donate & Volunteer */}
      <ActionBanner />
    </div>
  );
}
