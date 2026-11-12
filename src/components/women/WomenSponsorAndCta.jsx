import { Link } from 'react-router-dom';
import { DONATION_URL } from '@/data';
import { WOMEN_SPONSOR_TIERS } from '@/data/womenData';

export default function WomenSponsorAndCta() {
  return (
    <section className="women-sponsor-section" aria-labelledby="women-closing-title">
      <div className="wrap">
        {/* 1. Take Action Banner FIRST */}
        <div className="edu-closing-banner women-closing-banner" role="region" aria-labelledby="women-closing-title">
          <div className="edu-closing-inner">
            <span className="edu-closing-eyebrow">TAKE ACTION</span>
            <h2 id="women-closing-title" className="edu-closing-title">
              When a Woman Moves Forward, Her Family Moves Forward With Her.
            </h2>
            <p className="edu-closing-copy">
              Behind every woman is a story, a family, and a dream for a better future. Your support enables us to continue creating life-changing opportunities for underprivileged women — providing safe employment, fair wages, daily meals, and the independence to live with dignity.
            </p>
            <p className="edu-closing-tag">Empower a Woman. Strengthen a Family. Transform a Community.</p>
            <Link to="/contact?intent=women-empowerment-support" className="btn btn-action-white">
              Support Our Initiative
            </Link>
          </div>
        </div>

        {/* 2. Sponsor Spotlight Card SECOND (High Contrast against Dark Maroon Footer) */}
        <div className="edu-sponsor-card women-sponsor-card" id="sponsor-women">
          <div className="edu-sponsor-left">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              BE A PART OF HER JOURNEY
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 className="edu-section-title edu-left">
              Empower a Woman. Transform Generations.
            </h2>

            <p className="edu-sponsor-lead">
              Every grant, tool kit, and vocational training session opens a door from dependence to self-reliance. Your contribution directly funds skills training, hygienic production kits, transportation, and daily factory meals for rural women in Maharashtra.
            </p>

            <h3 className="edu-essentials-heading">
              Your contribution directly supports:
            </h3>

            <ul className="edu-essentials-list">
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Vocational skills training &amp; machinery operation</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Daily free nutritious meals at the factory</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Doorstep bus transportation from remote hamlets</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Financial literacy, savings &amp; health awareness</span>
              </li>
            </ul>
          </div>

          <div className="edu-sponsor-right">
            <div className="edu-tiers-stack">
              {WOMEN_SPONSOR_TIERS.map((tier) => (
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
              <Link to="/contact?intent=sponsor-woman" className="btn solid">
                Support Our Initiative
              </Link>
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
