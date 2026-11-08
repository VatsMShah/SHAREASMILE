import { Link } from 'react-router-dom';

export default function ActionBannerV2() {
  return (
    <section className="action-banner-v2" aria-labelledby="action-v2-title">
      {/* Cool Background Image on right with smooth fade */}
      <div
        className="action-v2-bg-photo"
        style={{ backgroundImage: `url('/images/smiling-schoolgirl.png')` }}
        aria-hidden="true"
      />

      <div className="wrap action-v2-wrap">
        <div className="action-v2-content">
          <small className="eyebrow action-v2-eyebrow">TAKE ACTION</small>
          <h2 id="action-v2-title" className="action-v2-heading">
            Be the Reason for a Smile
          </h2>
          <p className="action-v2-desc">
            Your support helps us bring hope, education, healthcare and empowerment to those who need it most.
          </p>
          <div className="action-v2-btns">
            <Link to="/contact" className="btn btn-action-v2-donate">
              <svg
                viewBox="0 0 24 24"
                className="action-v2-btn-svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
