import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="wrap about-hero-wrap">
        <div className="about-hero-content">
          <span className="about-hero-eyebrow">
            <svg viewBox="0 0 24 24" className="about-hero-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            ABOUT SHARE A SMILE
          </span>

          <h1 id="about-hero-title" className="about-hero-title">
            Driven by Compassion,<br />Guided by Integrity
          </h1>

          <p className="about-hero-intro">
            Founded in New Jersey, Share A Smile is an official 501(c)(3) nonprofit dedicated to breaking the cycle of rural poverty across India through direct educational scholarships, preventive healthcare camps, daily meal programs, and women’s self-reliance initiatives.
          </p>

          <div className="about-hero-badges">
            <div className="about-badge-item">
              <span className="about-badge-dot" />
              <span>501(c)(3) Registered • EIN: 30-0221345</span>
            </div>
            <div className="about-badge-item">
              <span className="about-badge-dot" />
              <span>Candid Platinum Transparency 2024</span>
            </div>
            <div className="about-badge-item">
              <span className="about-badge-dot" />
              <span>100% Volunteer-Led Leadership</span>
            </div>
            <div className="about-badge-item">
              <span className="about-badge-dot" />
              <span>40,000+ Lives Impacted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
