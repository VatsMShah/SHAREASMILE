import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MiniContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Child Sponsorship & Education',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Smooth simulated network delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      interest: 'Child Sponsorship & Education',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section className="mini-contact-section" aria-labelledby="mini-contact-title">
      {/* Slow-mo Ken Burns Background Image Container */}
      <div
        className="mini-contact-bg-media"
        style={{ backgroundImage: `url('/images/IT7A7079-edit.jpg')` }}
        aria-hidden="true"
      />

      {/* Atmospheric Warm Cinematic Scrim Overlay */}
      <div className="mini-contact-overlay" aria-hidden="true" />

      {/* Inner Content Wrap */}
      <div className="wrap mini-contact-wrap">
        <div className="mini-contact-grid">
          {/* Left Column: Brand Context & Direct Reach */}
          <div className="mini-contact-info">
            <span className="mini-contact-eyebrow">
              <svg viewBox="0 0 24 24" className="mini-contact-eyebrow-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              GET IN TOUCH
            </span>

            <h2 id="mini-contact-title" className="mini-contact-title">
              Be the Reason for a Smile
            </h2>

            <p className="mini-contact-desc">
              Have a question about our educational sponsorships, grassroots healthcare camps, or corporate matching? Leave us a quick note—we’d love to connect.
            </p>

            {/* Quick Contact Badges */}
            <div className="mini-contact-details">
              <a href="mailto:info@shareasmileusa.org" className="mini-contact-item">
                <span className="mini-contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <span className="mini-contact-item-label">Direct Email</span>
                  <span className="mini-contact-item-value">info@shareasmileusa.org</span>
                </div>
              </a>

              <a href="tel:2132103711" className="mini-contact-item">
                <span className="mini-contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <span className="mini-contact-item-label">Call Us</span>
                  <span className="mini-contact-item-value">(213) 210-3711</span>
                </div>
              </a>

              <div className="mini-contact-item non-interactive">
                <span className="mini-contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <span className="mini-contact-item-label">Headquarters</span>
                  <span className="mini-contact-item-value">Jersey City, NJ • USA</span>
                </div>
              </div>
            </div>

            {/* Sub-note with EIN & 501(c)(3) */}
            <div className="mini-contact-nonprofit-badge">
              <svg viewBox="0 0 24 24" className="mini-contact-badge-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Share A Smile USA is a 501(c)(3) tax-exempt nonprofit (EIN: 30-0221345). Contributions are tax-deductible.</span>
            </div>
          </div>

          {/* Right Column: Floating Warm Ivory Mini Form Card */}
          <div className="mini-contact-card">
            {submitted ? (
              <div className="mini-contact-success" role="status">
                <div className="mini-contact-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Thank You, {formData.name || 'Friend'}!</h3>
                <p>
                  We have received your message. A member of our volunteer leadership team will get in touch with you at <strong>{formData.email}</strong> within 24–48 hours.
                </p>
                <button
                  type="button"
                  className="btn mini-contact-reset-btn"
                  onClick={handleReset}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="mini-contact-form" onSubmit={handleSubmit}>
                <div className="mini-contact-card-header">
                  <h3 className="mini-contact-card-title">Send a Quick Note</h3>
                  <p className="mini-contact-card-sub">
                    Direct inquiry or sponsorship question—we’re here to help.
                  </p>
                </div>

                <div className="mini-contact-row">
                  <div className="mini-contact-field">
                    <label htmlFor="mini-name">Full Name *</label>
                    <input
                      id="mini-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Maya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mini-contact-field">
                    <label htmlFor="mini-email">Email Address *</label>
                    <input
                      id="mini-email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mini-contact-field">
                  <label htmlFor="mini-interest">I am interested in</label>
                  <select
                    id="mini-interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="Child Sponsorship & Education">Child Sponsorship & Education</option>
                    <option value="Medical & Healthcare Camps">Medical & Healthcare Camps</option>
                    <option value="Women Empowerment & Vocational Training">Women Empowerment & Skills</option>
                    <option value="Poverty Enrichment & Daily Meals">Poverty Enrichment & Meals</option>
                    <option value="Volunteer with Us">Volunteer with Us</option>
                    <option value="Corporate Matching & CSR Partnership">Corporate Matching / CSR</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="mini-contact-field">
                  <label htmlFor="mini-message">Message *</label>
                  <textarea
                    id="mini-message"
                    name="message"
                    rows={3}
                    required
                    placeholder="How would you like to make a difference or how can we help?"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn mini-contact-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg viewBox="0 0 24 24" className="mini-contact-send-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                <div className="mini-contact-privacy-note">
                  🔒 Your information is private and never shared. Prefer to make a direct donation?{' '}
                  <Link to="/contact">Visit donation portal →</Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Radiant Gold Transition Divider Bar: Ensures zero camouflage with the maroon footer */}
      <div className="mini-contact-divider" aria-hidden="true" />
    </section>
  );
}
