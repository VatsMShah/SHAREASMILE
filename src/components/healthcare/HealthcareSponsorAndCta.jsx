import { Link } from 'react-router-dom';
import { DONATION_URL } from '@/data';
import { HEALTHCARE_SPONSOR_TIERS } from '@/data/healthcareData';

export default function HealthcareSponsorAndCta() {
  return (
    <section className="health-sponsor-section" aria-labelledby="health-closing-title">
      <div className="wrap">
        {/* 1. Take Action Banner FIRST */}
        <div className="edu-closing-banner health-closing-banner" role="region" aria-labelledby="health-closing-title">
          <div className="edu-closing-inner">
            <span className="edu-closing-eyebrow">TAKE ACTION</span>
            <h2 id="health-closing-title" className="edu-closing-title">
              Together, We Can Protect Every Life.
            </h2>
            <p className="edu-closing-copy">
              A single eye surgery can restore independence. A mobile medical dispensary can save a child from acute illness. An accessible hospital can protect an entire rural community. Join Share a Smile USA in making high-quality healthcare a reality for underprivileged families.
            </p>
            <p className="edu-closing-tag">Because everyone deserves access to healing and dignity.</p>
            <Link to="/contact?intent=healthcare-support" className="btn btn-action-white">
              Support Healthcare
            </Link>
          </div>
        </div>

        {/* 2. Healthcare & Surgery Sponsorship Spotlight Card SECOND */}
        <div className="edu-sponsor-card health-sponsor-card" id="sponsor-healthcare">
          <div className="edu-sponsor-left">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              GIVE THE GIFT OF HEALING
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 className="edu-section-title edu-left">
              Sponsor Healthcare. Restore Sight &amp; Vitality.
            </h2>

            <p className="edu-sponsor-lead">
              Every medical intervention restores dignity and independence. Your tax-deductible contribution directly funds free village diagnostic checkups, essential medicines, mobile dispensaries, and life-changing cataract surgeries.
            </p>

            <h3 className="edu-essentials-heading">
              Your contribution directly supports:
            </h3>

            <ul className="edu-essentials-list">
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Sight-restoring cataract surgeries</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Mobile dispensary fuel &amp; supplies</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Free prescription medicines for seniors</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Multi-specialty village health camps</span>
              </li>
            </ul>
          </div>

          <div className="edu-sponsor-right">
            <div className="edu-tiers-stack">
              {HEALTHCARE_SPONSOR_TIERS.map((tier) => (
                <div key={tier.title} className="edu-tier-box">
                  <div className="edu-tier-price">
                    <strong>{tier.amount}</strong>
                    <span>{tier.cadence}</span>
                  </div>
                  <strong className="health-tier-label">{tier.title}</strong>
                  <p>{tier.description}</p>
                </div>
              ))}
            </div>

            <div className="edu-sponsor-actions">
              <Link to="/contact?intent=sponsor-cataract-surgery" className="btn solid">
                Sponsor a Surgery
              </Link>
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                Donate to Healthcare
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
