import { Link } from 'react-router-dom';
import { DONATION_URL } from '@/data';
import { SPONSOR_ESSENTIALS, SPONSOR_TIERS } from '@/data/educationData';

export default function EducationSponsorAndCta() {
  return (
    <section className="edu-sponsor-section" aria-labelledby="edu-closing-title">
      <div className="wrap">
        {/* 1. Take Action Banner FIRST (cleanly separated from Footer below) */}
        <div className="edu-closing-banner" role="region" aria-labelledby="edu-closing-title">
          <div className="edu-closing-inner">
            <span className="edu-closing-eyebrow">TAKE ACTION</span>
            <h2 id="edu-closing-title" className="edu-closing-title">
              Together, We Can Build Brighter Futures.
            </h2>
            <p className="edu-closing-copy">
              A classroom can open a world of possibilities. A teacher can inspire a lifetime of learning. And an opportunity can change the direction of a child&apos;s future. Join Share a Smile USA in supporting education and creating opportunities for children in underserved communities.
            </p>
            <p className="edu-closing-tag">Because every child deserves a chance to shine.</p>
            <Link to="/contact?intent=make-a-difference" className="btn btn-action-white">
              Make a Difference
            </Link>
          </div>
        </div>

        {/* 2. Child Sponsorship Spotlight Card SECOND (light cream surface cleanly meets Maroon Footer) */}
        <div className="edu-sponsor-card" id="sponsor-child">
          <div className="edu-sponsor-left">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              BE THE REASON A CHILD&apos;S DREAM COMES TRUE
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 className="edu-section-title edu-left">
              Sponsor a Child. Support a Brighter Future.
            </h2>

            <p className="edu-sponsor-lead">
              Every child deserves the chance to learn, grow, and build a future filled with possibilities. Your contribution helps make education accessible and creates opportunities that last a lifetime.
            </p>

            <h3 className="edu-essentials-heading">
              A contribution towards child sponsorship supports essential educational needs:
            </h3>

            <ul className="edu-essentials-list">
              {SPONSOR_ESSENTIALS.map((item) => (
                <li key={item}>
                  <span className="edu-essentials-check" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="edu-sponsor-right">
            <div className="edu-tiers-stack">
              {SPONSOR_TIERS.map((tier) => (
                <div key={tier.cadence} className="edu-tier-box">
                  <div className="edu-tier-price">
                    <strong>{tier.amount}</strong>
                    <span>{tier.cadence}</span>
                  </div>
                  <p>{tier.description}</p>
                </div>
              ))}
            </div>

            <div className="edu-sponsor-actions">
              <Link to="/contact?intent=sponsor-a-child" className="btn solid">
                Sponsor a Child
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
