import { Link } from 'react-router-dom';

export default function WomenHero() {
  return (
    <section className="inner-hero" aria-labelledby="women-hero-title">
      <div
        className="inner-hero-bg-photo women-hero-photo"
        style={{ backgroundImage: "url('/images/women/women-team-outside.jpg')" }}
        aria-hidden="true"
      />
      <div className="inner-hero-scrim" aria-hidden="true" />

      <div className="wrap inner-hero-wrap">
        <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Initiatives</span>
          <span aria-hidden="true">›</span>
          <span className="current">Women Empowerment</span>
        </nav>

        <h1 id="women-hero-title" className="inner-hero-title">
          Women Empowerment
        </h1>

        <p className="inner-hero-tagline">
          Empowering Women. Transforming Lives &amp; Strengthening Rural Communities.
        </p>
      </div>
    </section>
  );
}
