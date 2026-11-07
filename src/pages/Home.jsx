import Hero from '@/components/home/Hero';
import ImpactStats from '@/components/home/ImpactStats';
import Pillars from '@/components/home/Pillars';
import AboutBand from '@/components/home/AboutBand';
import Stories from '@/components/home/Stories';
import ActionBanner from '@/components/home/ActionBanner';
import TransparencyBadges from '@/components/home/TransparencyBadges';

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <Pillars />
      <AboutBand />
      <Stories />
      <ActionBanner />
      <TransparencyBadges />
    </>
  );
}

