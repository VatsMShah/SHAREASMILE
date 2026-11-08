import { Link } from 'react-router-dom';

export default function TrustSectionV2() {
  return (
    <section className="trust-v2-section" id="transparency">
      <div className="wrap">
        <div className="trust-v2-header">
          <small className="eyebrow">TRUSTED & RECOGNIZED</small>
          <h2>Our Commitment to Transparency</h2>
          <div className="gold-accent-line" aria-hidden="true" />
          <p className="trust-v2-sub">
            Share a Smile is a registered 501(c)(3) nonprofit organization held to the highest standards of financial integrity, accountability, and ethical stewardship.
          </p>
          <div className="trust-v2-btn-row">
            <Link to="/about" className="btn ghost sm">
              Learn More About Our Governance →
            </Link>
          </div>
        </div>

        <div className="trust-v2-badges">
          <div className="badge-v2-card">
            <img
              src="/images/candid-badge.png"
              alt="Candid Platinum Transparency 2024"
              title="Candid Platinum Transparency 2024"
              width="96"
              height="96"
              className="badge-v2-img candid-img"
            />
          </div>
          <div className="badge-v2-card">
            <img
              src="/images/top-rated-badge.png"
              alt="GreatNonprofits Top-Rated 2024"
              title="GreatNonprofits Top-Rated 2024"
              width="128"
              height="96"
              className="badge-v2-img toprated-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

