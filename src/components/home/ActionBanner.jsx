import { Link } from 'react-router-dom';

export default function ActionBanner() {
  return (
    <section className="action-banner">
      <div className="action-bg-photo" style={{ backgroundImage: `url(/images/action-hearts.png)` }} />

      <div className="wrap action-wrap">
        <div className="action-content">
          <small className="eyebrow action-eyebrow">TAKE ACTION</small>
          <h2>Be the Reason for a Smile</h2>
          <p>
            Your support helps us bring hope, education, healthcare and empowerment to those who need it most.
          </p>
          <div className="row action-btns">
            <Link to="/contact" className="btn btn-action-white">
              <svg viewBox="0 0 24 24" className="action-btn-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

