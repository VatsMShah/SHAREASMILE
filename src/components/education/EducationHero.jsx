import { Link } from 'react-router-dom';

export default function EducationHero() {
  return (
    <section className="inner-hero" aria-labelledby="education-hero-title">
      <div
        className="inner-hero-bg-photo edu-hero-photo"
        style={{ backgroundImage: "url('/images/hopeful-classroom.png')" }}
        aria-hidden="true"
      />
      <div className="inner-hero-scrim" aria-hidden="true" />

      <div className="wrap inner-hero-wrap">
        <nav className="inner-hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Initiatives</span>
          <span aria-hidden="true">›</span>
          <span className="current">Education</span>
        </nav>

        <h1 id="education-hero-title" className="inner-hero-title">
          Education
        </h1>

        <p className="inner-hero-tagline">
          Every Child Deserves the Opportunity to Dream, Learn and Succeed.
        </p>
      </div>
    </section>
  );
}
