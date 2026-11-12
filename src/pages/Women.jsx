import WomenHero from '@/components/women/WomenHero';
import WomenOverview from '@/components/women/WomenOverview';
import WomenFactory from '@/components/women/WomenFactory';
import WomenStory from '@/components/women/WomenStory';
import WomenGallery from '@/components/women/WomenGallery';
import WomenSponsorAndCta from '@/components/women/WomenSponsorAndCta';

export default function Women() {
  return (
    <div className="women-page">
      <WomenHero />
      <WomenOverview />
      <WomenFactory />
      <WomenStory />
      <WomenGallery />
      <WomenSponsorAndCta />
    </div>
  );
}
