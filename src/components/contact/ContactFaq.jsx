import { useState } from 'react';
import { CONTACT_FAQS } from '@/data/contactData';

export default function ContactFaq() {
  const [openId, setOpenId] = useState(CONTACT_FAQS[0].id);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="contact-faq-section" aria-labelledby="contact-faq-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            FREQUENTLY ASKED QUESTIONS
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="contact-faq-title" className="edu-section-title">
            Common Inquiries &amp; Helpful Answers
          </h2>
          <p className="edu-section-subtitle">
            Find quick answers about tax receipts, corporate gift matching, program allocations, and volunteer opportunities.
          </p>
        </div>

        <div className="contact-faq-list">
          {CONTACT_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`contact-faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="contact-faq-trigger"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="contact-faq-answer"
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
