import { Link } from 'react-router-dom';

export default function AboutTransparency() {
  return (
    <section className="about-transparency-section" aria-labelledby="transparency-title">
      <div className="wrap about-transparency-wrap">
        <div className="about-transparency-header">
          <span className="about-transparency-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            FINANCIAL INTEGRITY & TRUST
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="transparency-title" className="about-transparency-title">
            Radical Transparency, Measurable Stewardship
          </h2>
          <p className="about-transparency-sub">
            We hold ourselves to the highest benchmarks of financial honesty, fiscal discipline, and direct donor reporting.
          </p>
        </div>

        <div className="about-transparency-grid">
          {/* Card 1: Platinum Badges */}
          <div className="transparency-card">
            <div className="transparency-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <h3>Platinum Transparency</h3>
            <p>
              Awarded the <strong>Candid Platinum Seal</strong> and <strong>GreatNonprofits Top-Rated</strong> recognition, verifying comprehensive reporting and verified community impact.
            </p>
            <div className="transparency-badges-row">
              <img
                src="/images/candid-badge.png"
                alt="Candid Platinum Transparency 2024"
                className="transparency-badge-img"
              />
              <img
                src="/images/top-rated-badge.png"
                alt="GreatNonprofits Top-Rated 2024"
                className="transparency-badge-img"
              />
            </div>
          </div>

          {/* Card 2: 501(c)(3) Tax Exemption */}
          <div className="transparency-card">
            <div className="transparency-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>IRS 501(c)(3) Public Charity</h3>
            <p>
              Share A Smile is an official 501(c)(3) tax-exempt nonprofit organized under the laws of the United States. All donations are 100% tax-deductible to the fullest extent permitted by law.
            </p>
            <div className="transparency-ein-box">
              <span className="ein-label">FEDERAL EIN / TAX ID</span>
              <strong className="ein-num">30-0221345</strong>
            </div>
          </div>

          {/* Card 3: Corporate Gift Matching */}
          <div className="transparency-card">
            <div className="transparency-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3>Double Your Impact</h3>
            <p>
              Many employers match employee charitable contributions dollar-for-dollar through Benevity, CyberGrants, or Bright Funds. Check with your HR to multiply your gift.
            </p>
            <Link to="/contact" className="transparency-link">
              Inquire About Matching Gifts →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
