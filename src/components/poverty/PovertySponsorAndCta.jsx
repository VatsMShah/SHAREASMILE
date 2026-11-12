import { Link } from 'react-router-dom';
import { DONATION_URL } from '@/data';
import { POVERTY_SPONSOR_TIERS } from '@/data/povertyData';

export default function PovertySponsorAndCta() {
  return (
    <section className="poverty-sponsor-section" aria-labelledby="poverty-closing-title">
      <div className="wrap">
        {/* 1. Take Action Banner FIRST */}
        <div className="edu-closing-banner poverty-closing-banner" role="region" aria-labelledby="poverty-closing-title">
          <div className="edu-closing-inner">
            <span className="edu-closing-eyebrow">TAKE ACTION</span>
            <h2 id="poverty-closing-title" className="edu-closing-title">
              Together, We Can End Hunger &amp; Restore Dignity.
            </h2>
            <p className="edu-closing-copy">
              A single meal delivered on time can bring peace of mind to a lonely elder. A monthly ration kit can ensure a struggling family never has to choose between medicine and nourishment. Join Share a Smile USA in providing hot, wholesome food and sustained support to those who need it most.
            </p>
            <p className="edu-closing-tag">Because no one should ever go to sleep hungry.</p>
            <Link to="/contact?intent=poverty-support" className="btn btn-action-white">
              Support Food Relief
            </Link>
          </div>
        </div>

        {/* 2. Sponsor a Meal Spotlight Card SECOND */}
        <div className="edu-sponsor-card poverty-sponsor-card" id="sponsor-meal">
          <div className="edu-sponsor-left">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              NOURISH A LIFE
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 className="edu-section-title edu-left">
              Sponsor a Meal. Provide Warmth &amp; Nutrition.
            </h2>

            <p className="edu-sponsor-lead">
              Every meal packed and delivered is an act of love and respect. Your contribution directly funds fresh ingredients, hygienic stainless steel tiffins, dependable daily logistics, and emergency grocery ration kits for families in severe distress.
            </p>

            <h3 className="edu-essentials-heading">
              Your contribution directly supports:
            </h3>

            <ul className="edu-essentials-list">
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Hot, freshly cooked vegetarian midday meals</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Daily fresh fruit &amp; weekly nutritious snacks</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Stainless steel eco-friendly tiffins</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Comprehensive 30-day household grocery ration kits</span>
              </li>
            </ul>
          </div>

          <div className="edu-sponsor-right">
            <div className="edu-tiers-stack">
              {POVERTY_SPONSOR_TIERS.map((tier) => (
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
              <Link to="/contact?intent=sponsor-meal" className="btn solid">
                Sponsor a Meal
              </Link>
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                Donate Food Relief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
