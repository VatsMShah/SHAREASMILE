import Hero from '@/components/home/Hero';
import AboutSectionV2 from '@/components/home-v2/AboutSectionV2';
import PillarsSectionV2 from '@/components/home-v2/PillarsSectionV2';
import ImpactRibbonV2 from '@/components/home-v2/ImpactRibbonV2';
import StoriesSectionV2 from '@/components/home-v2/StoriesSectionV2';
import ActionBanner from '@/components/home/ActionBanner';
import TransparencyBadges from '@/components/home/TransparencyBadges';

export default function Home() {
  return (
    <div className="home-v2-container">
      {/* 1. Hero: Emotional Opener */}
      <Hero />

      {/* 2. About Us: Mission & Story */}
      <AboutSectionV2 />

      {/* 3. Four Pillars: Grassroots Programs */}
      <PillarsSectionV2 />

      {/* 4. Impact in Numbers: Measurable Results */}
      <ImpactRibbonV2 />

      {/* 5. Stories of Hope: Human Transformation */}
      <StoriesSectionV2 />

      {/* 6. Take Action Banner: Authentic Hearts with Donate & Volunteer */}
      <ActionBanner />

      {/* 7. Trust & Transparency: 501(c)(3) Badges & Governance */}
      <TransparencyBadges />
    </div>
  );
}
