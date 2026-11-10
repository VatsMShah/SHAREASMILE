export default function AboutWhoWeAre() {
  return (
    <section className="about-who-section" aria-labelledby="who-we-are-title">
      <div className="wrap about-who-wrap">
        <div className="about-who-grid">
          {/* Left Column: Visual with Editorial Frame */}
          <div className="about-who-visual">
            <div className="who-image-card">
              <div className="who-image-gold-border" />
              <img
                src="/images/IT7A7306-edit.jpg"
                alt="Community leaders and villagers gathering together"
                className="who-image"
              />
              <div className="who-quote-box">
                <span className="who-quote-mark">“</span>
                <p>
                  Sharing what we have can transform the lives of those who need it most.
                </p>
                <span className="who-quote-author">— Share a Smile Philosophy</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="about-who-content">
            <span className="about-section-eyebrow">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              WHO WE ARE
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 id="who-we-are-title" className="about-section-title">
              A Mission Rooted in Compassion
            </h2>

            <div className="about-who-body">
              <p>
                <strong>Share a Smile USA</strong> was established with a simple belief: sharing what we have can transform the lives of those who need it most.
              </p>
              <p>
                We work towards bridging the gap between opportunity and accessibility for underserved communities. Our focus is not just on providing immediate assistance, but on supporting initiatives that create lasting improvements in people&apos;s lives.
              </p>
              <p>
                From helping children access quality education to improving rural healthcare, supporting families facing financial hardship, and creating opportunities for women to become financially independent, our efforts are guided by compassion, equality, and the belief that everyone deserves a chance to thrive.
              </p>
            </div>

            <div className="who-commitments-grid">
              <div className="who-commitment-item">
                <div className="commitment-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h4>Quality Education</h4>
                  <p>Unlocking potential through learning and school infrastructure.</p>
                </div>
              </div>

              <div className="who-commitment-item">
                <div className="commitment-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <h4>Accessible Healthcare</h4>
                  <p>Preventive camps, screenings, and rural medical aid.</p>
                </div>
              </div>

              <div className="who-commitment-item">
                <div className="commitment-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h4>Poverty Alleviation</h4>
                  <p>Nutritious food, essential support, and family dignity.</p>
                </div>
              </div>

              <div className="who-commitment-item">
                <div className="commitment-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <h4>Women Empowerment</h4>
                  <p>Vocational training and pathways to economic independence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
