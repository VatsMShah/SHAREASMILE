import PovertyHero from '@/components/poverty/PovertyHero';
import PovertyOverview from '@/components/poverty/PovertyOverview';
import PovertyMeals from '@/components/poverty/PovertyMeals';
import PovertyCovidRelief from '@/components/poverty/PovertyCovidRelief';
import PovertyGallery from '@/components/poverty/PovertyGallery';
import PovertySponsorAndCta from '@/components/poverty/PovertySponsorAndCta';

export default function Poverty() {
  return (
    <div className="poverty-page">
      <PovertyHero />
      <PovertyOverview />
      <PovertyMeals />
      <PovertyCovidRelief />
      <PovertyGallery />
      <PovertySponsorAndCta />
    </div>
  );
}
