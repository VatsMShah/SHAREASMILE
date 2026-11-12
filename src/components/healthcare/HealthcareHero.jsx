import { Link } from 'react-router-dom';

export default function HealthcareHero() {
  return (
    <section className="inner-hero" aria-labelledby="healthcare-hero-title">
      <div
        className="inner-hero-bg-photo healthcare-hero-photo"
        style={{ backgroundImage: "url('/images/banner-4.png')" }}
        aria-hidden="true"
      />
      <div className="inner-hero-scrim" aria-hidden="true" />

      <div className="wrap inner-hero-wrap">
        <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Initiatives</span>
          <span aria-hidden="true">›</span>
          <span className="current">Medical &amp; Healthcare</span>
        </nav>

        <h1 id="healthcare-hero-title" className="inner-hero-title">
          Medical &amp; Healthcare
        </h1>

        <p className="inner-hero-tagline">
          Making High-Quality Healthcare Accessible to Every Rural Community.
        </p>
      </div>
    </section>
  );
}
