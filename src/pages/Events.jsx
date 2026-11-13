import EventsHero from '@/components/events/EventsHero';
import EventsOverview from '@/components/events/EventsOverview';
import EventsCinema from '@/components/events/EventsCinema';
import EventsMoments from '@/components/events/EventsMoments';
import EventsUpcoming from '@/components/events/EventsUpcoming';
import EventsGallery from '@/components/events/EventsGallery';
import EventsHostAndCta from '@/components/events/EventsHostAndCta';

export default function Events() {
  return (
    <div className="events-page">
      {/* 1. Header Hero */}
      <EventsHero />

      {/* 2. Overview: Bringing People Together, Creating Smiles */}
      <EventsOverview />

      {/* 3. Ground Documentary Cinema Player */}
      <EventsCinema />

      {/* 4. Moments That Make a Difference: 3 Impact Pillars */}
      <EventsMoments />

      {/* 5. Upcoming Gatherings & Community Drives */}
      <EventsUpcoming />

      {/* 6. Memories That Inspire Us: Kinetic Filmstrip & Lightbox */}
      <EventsGallery />

      {/* 7. Take Action Banner FIRST + Sponsor Spotlight Card SECOND */}
      <EventsHostAndCta />
    </div>
  );
}
