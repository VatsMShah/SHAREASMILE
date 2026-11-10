import { Link } from 'react-router-dom';

export default function AboutTransparency() {
  return (
    <section className="about-transparency-section" aria-labelledby="transparency-title">
      <div className="wrap about-transparency-wrap">
        <div className="about-transparency-header">
          <span className="about-transparency-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            ACCOUNTABILITY & INTEGRITY
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="transparency-title" className="about-transparency-title">
            Our Commitment to Transparency
          </h2>
          <p className="about-transparency-subtitle">
            Trust Is Built Through Accountability
          </p>
          <p className="about-transparency-lead">
            We believe that trust is the foundation of meaningful giving. As a registered 501(c)(3) nonprofit organisation in the United States, we are committed to responsible charitable giving and transparency in our work.
          </p>
        </div>

        <div className="transparency-cards-row">
          {/* Card 1: Official Non-Profit Registration */}
          <div className="transparency-feature-card">
            <div className="feature-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="feature-card-title">Official 501(c)(3) Status</h3>
            <p className="feature-card-desc">
              Share A Smile USA is recognized as a public charity under Section 501(c)(3) of the Internal Revenue Code. Contributions are tax-deductible to the full extent of the law.
            </p>

            <div className="official-details-table">
              <div className="detail-row">
                <span className="detail-label">Organisation</span>
                <span className="detail-value">Share A Smile USA</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Tax Status</span>
                <span className="detail-value">501(c)(3) Nonprofit Organisation</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Federal EIN</span>
                <span className="detail-value highlight">30-0221345</span>
              </div>
            </div>
          </div>

          {/* Card 2: Verified Third-Party Badges */}
          <div className="transparency-feature-card">
            <div className="feature-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <h3 className="feature-card-title">Verified Recognition</h3>
            <p className="feature-card-desc">
              We encourage supporters to learn more about our organisation, our initiatives, and our impact through publicly available nonprofit information and verified recognition platforms.
            </p>

            <div className="transparency-badges-container">
              <div className="badge-wrapper">
                <img
                  src="/images/candid-badge.png"
                  alt="Candid Platinum Transparency Seal"
                  className="transparency-seal-img"
                />
              </div>
              <div className="badge-wrapper">
                <img
                  src="/images/top-rated-badge.png"
                  alt="GreatNonprofits Top-Rated 2024 Non-Profit"
                  className="transparency-seal-img"
                />
              </div>
            </div>

            <div className="transparency-matching-box">
              <p>
                <strong>Double Your Impact:</strong> Ask your employer about corporate matching gift programs to double the reach of your charitable donation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
