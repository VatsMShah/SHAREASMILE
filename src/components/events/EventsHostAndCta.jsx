import { Link } from 'react-router-dom';
import { DONATION_URL } from '@/data';
import { EVENT_SPONSOR_TIERS } from '@/data/eventsData';

export default function EventsHostAndCta() {
  return (
    <section className="events-sponsor-section" aria-labelledby="events-closing-title">
      <div className="wrap">
        {/* 1. Take Action Banner FIRST (Deep Maroon) */}
        <div className="edu-closing-banner events-closing-banner" role="region" aria-labelledby="events-closing-title">
          <div className="edu-closing-inner">
            <span className="edu-closing-eyebrow">TAKE ACTION</span>
            <h2 id="events-closing-title" className="edu-closing-title">
              Be Part of Our Journey
            </h2>
            <p className="edu-closing-copy">
              Every helping hand, every contribution and every shared moment brings us closer to a more compassionate world. Behind every event is a community uniting to create lasting change for rural families.
            </p>
            <p className="edu-closing-tag">
              Together, we can create more moments worth remembering.
            </p>
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-action-white"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* 2. Sponsor Spotlight Card SECOND (Warm Cream against dark maroon footer) */}
        <div className="edu-sponsor-card events-sponsor-card" id="sponsor-event">
          <div className="edu-sponsor-left">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              EVENT IMPACT &amp; SPONSORSHIP
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 className="edu-section-title edu-left">
              Sponsor a Gathering. Multiply the Impact.
            </h2>

            <p className="edu-sponsor-lead">
              Your support powers the tangible logistics, testing supplies, and learning materials that make community gatherings transformative for underserved rural families.
            </p>

            <h3 className="edu-essentials-heading">
              Your sponsorship directly funds:
            </h3>

            <ul className="edu-essentials-list">
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>STEM materials &amp; awards for student exhibitions</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Diagnostic kits &amp; medicines for village health camps</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Transit &amp; vehicle logistics for rural food drives</span>
              </li>
              <li>
                <span className="edu-essentials-check" aria-hidden="true">✓</span>
                <span>Nutritious meals &amp; refreshments for attendees</span>
              </li>
            </ul>
          </div>

          <div className="edu-sponsor-right">
            <div className="edu-tiers-stack">
              {EVENT_SPONSOR_TIERS.map((tier) => (
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
              <Link to="/contact?intent=sponsor-event" className="btn solid">
                Sponsor an Event
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
