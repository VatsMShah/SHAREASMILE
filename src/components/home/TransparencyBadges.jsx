import { Link } from 'react-router-dom';

export default function TransparencyBadges() {
  return (
    <section className="wrap trust-section">
      <div className="trust-content">
        <small className="eyebrow">TRUSTED & RECOGNIZED</small>
        <h2>Our Commitment to Transparency</h2>
        <p>
          We are a registered 501(c)(3) nonprofit organization and maintain the highest standards of accountability and integrity.
        </p>
        <Link to="/about" className="btn ghost sm">
          Learn More →
        </Link>
      </div>

      <div className="trust-badges">
        <div className="badge-item candid-wrap">
          <img
            src="/images/candid-badge.png"
            alt="Candid Platinum Transparency 2024"
            title="Candid Platinum Transparency 2024"
            width="94"
            height="94"
            className="badge-img candid-img"
          />
        </div>
        <div className="badge-item toprated-wrap">
          <img
            src="/images/top-rated-badge.png"
            alt="GreatNonprofits Top-Rated 2024"
            title="GreatNonprofits Top-Rated 2024"
            width="125"
            height="94"
            className="badge-img toprated-img"
          />
        </div>
      </div>
    </section>
  );
}
