import { Link } from 'react-router-dom';

/**
 * Standard Reusable Inner-Page Hero Header
 * Standardized across all subpages: compact height, clean breadcrumb, page title, single tagline.
 */
export default function AboutHero() {
  return (
    <section className="inner-hero" aria-labelledby="inner-hero-title">
      <div
        className="inner-hero-bg-photo"
        style={{ backgroundImage: `url('/images/IT7A7312-edit.jpg')` }}
        aria-hidden="true"
      />
      <div className="inner-hero-scrim" aria-hidden="true" />

      <div className="wrap inner-hero-wrap">
        <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">
            <svg viewBox="0 0 24 24" className="breadcrumb-home-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>
          <span className="breadcrumb-sep" aria-hidden="true">›</span>
          <span className="breadcrumb-current" aria-current="page">About Us</span>
        </nav>

        <h1 id="inner-hero-title" className="inner-hero-title">
          About Us
        </h1>

        <p className="inner-hero-tagline">
          Creating opportunities. Empowering communities. Changing lives.
        </p>
      </div>
    </section>
  );
}
