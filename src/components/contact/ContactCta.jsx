import { Link } from 'react-router-dom';
import { DONATION_URL } from '@/data';

export default function ContactCta() {
  return (
    <section className="contact-cta-section" aria-labelledby="contact-closing-title">
      <div className="wrap">
        {/* 1. Deep Maroon Take Action Banner FIRST */}
        <div className="edu-closing-banner contact-closing-banner" role="region" aria-labelledby="contact-closing-title">
          <div className="edu-closing-inner">
            <span className="edu-closing-eyebrow">TAKE ACTION</span>
            <h2 id="contact-closing-title" className="edu-closing-title">
              Let's Make a Difference Together
            </h2>
            <p className="edu-closing-copy">
              Whether you are an individual, organisation, volunteer or supporter, your interest and involvement can help us move closer to our vision.
            </p>
            <p className="edu-closing-tag">
              Share a Smile. Make a Difference.
            </p>
            <div className="edu-closing-actions">
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-action-white"
              >
                Donate Now
              </a>
              <Link to="/education" className="btn btn-action-white-ghost">
                Explore Our Initiatives
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Spotlight Direct Contact Quick-Help Card SECOND (Warm Cream against dark maroon footer) */}
        <div className="contact-quick-card">
          <div className="quick-card-left">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              TAX-EXEMPT GIVING
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>
            <h3 className="quick-card-title">Looking to Make an Immediate Difference?</h3>
            <p className="quick-card-desc">
              Your donation directly funds tuition, diagnostic tests, and food security packages. As a 501(c)(3) nonprofit, all gifts are fully tax-deductible.
            </p>
          </div>
          <div className="quick-card-actions">
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn solid"
            >
              Donate via Zeffy (100% Free)
            </a>
            <a
              href="mailto:info@shareasmileusa.org?subject=Donor%20Inquiry"
              className="btn ghost"
            >
              Email Stewardship Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
