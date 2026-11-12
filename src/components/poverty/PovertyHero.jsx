import { Link } from 'react-router-dom';

export default function PovertyHero() {
  return (
    <section className="inner-hero" aria-labelledby="poverty-hero-title">
      <div
        className="inner-hero-bg-photo poverty-hero-photo"
        style={{ backgroundImage: "url('/images/poverty/poverty-10.jpg')" }}
        aria-hidden="true"
      />
      <div className="inner-hero-scrim" aria-hidden="true" />

      <div className="wrap inner-hero-wrap">
        <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Initiatives</span>
          <span aria-hidden="true">›</span>
          <span className="current">Poverty Enrichment</span>
        </nav>

        <h1 id="poverty-hero-title" className="inner-hero-title">
          Poverty Enrichment
        </h1>

        <p className="inner-hero-tagline">
          Restoring Dignity Through Daily Nutrition, Essentials and Community Care.
        </p>
      </div>
    </section>
  );
}
