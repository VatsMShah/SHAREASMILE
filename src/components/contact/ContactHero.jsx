import { Link } from 'react-router-dom';

export default function ContactHero() {
  return (
    <section className="inner-hero" aria-labelledby="contact-hero-title">
      <div
        className="inner-hero-bg-photo contact-hero-photo"
        style={{ backgroundImage: "url('/images/events/gala-stage-backdrop.jpg')" }}
        aria-hidden="true"
      />
      <div className="inner-hero-scrim" aria-hidden="true" />

      <div className="wrap inner-hero-wrap">
        <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span className="current">Contact Us</span>
        </nav>

        <h1 id="contact-hero-title" className="inner-hero-title">
          Let’s Connect
        </h1>

        <p className="inner-hero-tagline">
          We’d Love to Hear From You.
        </p>
      </div>
    </section>
  );
}
