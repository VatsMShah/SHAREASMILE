import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CONTACT_DETAILS, INQUIRY_TOPICS } from '@/data/contactData';

export default function ContactMain() {
  const [searchParams] = useSearchParams();

  // Map incoming URL intent to dropdown option
  const getInitialTopic = () => {
    const intent = (searchParams.get('intent') || '').toLowerCase();
    if (intent.includes('host-event') || intent.includes('sponsor-event')) return 'sponsor-event';
    if (intent.includes('health-camp')) return 'sponsor-health-camp';
    if (intent.includes('women')) return 'women-empowerment';
    if (intent.includes('child') || intent.includes('education')) return 'sponsor-child';
    if (intent.includes('volunteer') || intent.includes('ration')) return 'volunteer';
    if (intent.includes('tax') || intent.includes('receipt')) return 'tax-receipt';
    if (intent.includes('corporate') || intent.includes('match')) return 'corporate-matching';
    return 'general';
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: getInitialTopic(),
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const topicFromUrl = getInitialTopic();
    if (topicFromUrl !== 'general') {
      setFormData((prev) => ({ ...prev, topic: topicFromUrl }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'general',
      subject: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section className="contact-main-section" aria-labelledby="contact-main-title">
      <div className="wrap">
        {/* Narrative Header */}
        <div className="edu-section-header contact-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            WE’D LOVE TO HEAR FROM YOU
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 className="edu-section-title">
            Every Meaningful Connection Begins with a Conversation
          </h2>
          <p className="edu-section-subtitle">
            Whether you would like to learn more about our initiatives, explore partnership opportunities, volunteer your time or support our mission, we’d love to hear from you.
          </p>
          <p className="contact-collective-lead">
            At <strong>Share A Smile USA</strong>, we believe that collective efforts can create meaningful change. Reach out to us and become a part of our journey towards building stronger, healthier and more empowered communities.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Get in Touch / Direct Channels */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <span className="about-section-eyebrow edu-eyebrow-left">
                <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
                DIRECT CHANNELS
                <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              </span>

              <h2 id="contact-main-title" className="contact-card-heading">
                Get in Touch
              </h2>

              <p className="contact-card-lead">
                Have a question or want to know more about our work? Our team would be happy to connect with you.
              </p>

              <div className="contact-channel-list">
                {/* Email */}
                <a href="mailto:info@shareasmileusa.org" className="contact-channel-item">
                  <div className="contact-channel-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 7L2 7" />
                    </svg>
                  </div>
                  <div className="contact-channel-details">
                    <span className="channel-label">Email</span>
                    <strong className="channel-value">info@shareasmileusa.org</strong>
                    <span className="channel-sub">Click to send an email directly</span>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:2132103711" className="contact-channel-item">
                  <div className="contact-channel-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-channel-details">
                    <span className="channel-label">Phone</span>
                    <strong className="channel-value">213-210-3711</strong>
                    <span className="channel-sub">Available Monday – Friday</span>
                  </div>
                </a>

                {/* Address */}
                <div className="contact-channel-item static-channel">
                  <div className="contact-channel-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-channel-details">
                    <span className="channel-label">Address</span>
                    <strong className="channel-value">
                      45 River Dr S, Apt 3010
                    </strong>
                    <span className="channel-sub">
                      Jersey City, NJ – 07310, United States
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 501(c)(3) Trust Badge Card */}
            <div className="contact-trust-card">
              <div className="trust-badge-header">
                <span className="trust-shield-icon" aria-hidden="true">🛡️</span>
                <div>
                  <h3 className="trust-card-title">Share A Smile - USA</h3>
                  <p className="trust-card-sub">501(c)(3) Nonprofit Organization</p>
                </div>
              </div>
              <p className="trust-card-text">
                All donations are tax-deductible to the full extent permissible by US law.
              </p>
              <div className="trust-meta-row">
                <div className="trust-meta-item">
                  <span className="trust-meta-label">Government ID (EIN)</span>
                  <strong className="trust-meta-val">{CONTACT_DETAILS.ein}</strong>
                </div>
                <div className="trust-meta-item">
                  <span className="trust-meta-label">Headquarters</span>
                  <strong className="trust-meta-val">New Jersey, USA</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message / Form Card */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="form-card-header">
                <span className="about-section-eyebrow edu-eyebrow-left">
                  <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
                  GET IN TOUCH
                  <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
                </span>
                <h2 className="form-card-title">Send Us a Message</h2>
                <p className="form-card-subtitle">
                  Have something you’d like to share? Fill out the form below and let us know how we can help. We look forward to hearing from you.
                </p>
              </div>

              {submitted ? (
                <div className="form-success-banner" role="status" aria-live="polite">
                  <div className="success-icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="success-title">Message Received!</h3>
                  <p className="success-text">
                    Thank you, <strong>{formData.name}</strong>. We have received your message regarding{' '}
                    <strong>
                      {INQUIRY_TOPICS.find((t) => t.value === formData.topic)?.label || 'your inquiry'}
                    </strong>
                    . A member of our team will review your message and follow up at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn solid sm success-reset-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Eleanor Vance"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Email Address <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. eleanor@example.org"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">
                        Phone Number <span className="opt-tag">(Optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 213-210-3711"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-topic" className="form-label">
                        Inquiry Topic <span className="req-star">*</span>
                      </label>
                      <select
                        id="contact-topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="form-select"
                      >
                        {INQUIRY_TOPICS.map((topic) => (
                          <option key={topic.value} value={topic.value}>
                            {topic.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">
                      Subject <span className="opt-tag">(Optional)</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Inquiring about partnership or volunteer opportunities"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Your Message <span className="req-star">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please let us know how we can help. We look forward to hearing from you..."
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-submit-row">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      className="btn solid form-submit-btn"
                    >
                      {isSubmitting ? 'Submitting...' : 'Send Message →'}
                    </button>
                    <span className="form-privacy-note">
                      We respect your privacy and never share your details.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
