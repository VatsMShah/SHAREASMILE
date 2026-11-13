import { Link } from 'react-router-dom';

export default function EventsHero() {
  return (
    <section className="inner-hero" aria-labelledby="events-hero-title">
      <div
        className="inner-hero-bg-photo events-hero-photo"
        style={{ backgroundImage: "url('/images/events/gala-hall-audience.jpg')" }}
        aria-hidden="true"
      />
      <div className="inner-hero-scrim" aria-hidden="true" />

      <div className="wrap inner-hero-wrap">
        <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span className="current">Events</span>
        </nav>

        <h1 id="events-hero-title" className="inner-hero-title">
          Events &amp; Celebrations
        </h1>

        <p className="inner-hero-tagline">
          Bringing People Together, Creating Smiles.
        </p>
      </div>
    </section>
  );
}
