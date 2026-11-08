import { Link } from 'react-router-dom';

export default function ActionBannerV2() {
  return (
    <section className="action-banner-v2" aria-labelledby="action-v2-title">
      <div className="wrap action-v2-container">
        {/* Floating Contained Action Card */}
        <div className="action-v2-card">
          {/* Cool Background Image */}
          <div
            className="action-v2-card-bg"
            style={{ backgroundImage: `url('/images/action-hearts.png')` }}
            aria-hidden="true"
          />

          {/* Cinematic Scrim Overlay */}
          <div className="action-v2-card-scrim" aria-hidden="true" />

          {/* Centered Content: Completely different from the left-heavy Hero */}
          <div className="action-v2-card-content">
            <span className="action-v2-eyebrow">
              <span className="action-v2-sparkle" aria-hidden="true">✦</span>
              TAKE ACTION
              <span className="action-v2-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 id="action-v2-title" className="action-v2-heading">
              Be the Reason for a Smile
            </h2>

            <p className="action-v2-desc">
              Your support brings hope, education, healthcare and empowerment to children and families who need it most.
            </p>

            <div className="action-v2-btn-wrap">
              <Link to="/contact" className="btn btn-action-v2-donate">
                <svg
                  viewBox="0 0 24 24"
                  className="action-v2-btn-svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Donate Now
              </Link>
            </div>

            <p className="action-v2-tax-note">
              <span>501(c)(3) Tax-Exempt Nonprofit Organization</span>
              <span className="action-v2-bullet">•</span>
              <span>EIN: 30-0221345</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
