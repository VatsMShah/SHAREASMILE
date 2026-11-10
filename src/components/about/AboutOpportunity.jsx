export default function AboutOpportunity() {
  return (
    <section className="about-opportunity-section" aria-labelledby="opportunity-title">
      <div className="wrap about-opportunity-wrap">
        <div className="about-opportunity-grid">
          {/* Left Column: Rich Narrative */}
          <div className="about-opportunity-content">
            <span className="about-section-eyebrow">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              OUR CORE PURPOSE
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 id="opportunity-title" className="about-opportunity-title">
              Every Smile Begins With an Opportunity
            </h2>

            <p className="about-opportunity-lead">
              Creating opportunities. Empowering communities. Changing lives.
            </p>

            <div className="about-opportunity-body">
              <p>
                At <strong>Share a Smile USA</strong>, we believe that every individual deserves the opportunity to live with dignity, access essential resources, and build a better future.
              </p>
              <p>
                We are a New Jersey-based <strong>501(c)(3) nonprofit organisation</strong> committed to supporting underprivileged communities in India through initiatives focused on education, healthcare, poverty alleviation, and women empowerment.
              </p>
              <p>
                Through our work and partnerships with organisations on the ground, we strive to create meaningful, sustainable change — one individual, one family, and one community at a time.
              </p>
            </div>

            <div className="about-opportunity-pillars-strip">
              <div className="pill-strip-item">
                <span className="pill-strip-dot" />
                <span>Education</span>
              </div>
              <div className="pill-strip-item">
                <span className="pill-strip-dot" />
                <span>Healthcare</span>
              </div>
              <div className="pill-strip-item">
                <span className="pill-strip-dot" />
                <span>Poverty Alleviation</span>
              </div>
              <div className="pill-strip-item">
                <span className="pill-strip-dot" />
                <span>Women Empowerment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Overlapping Designer Photo Collage */}
          <div className="about-opportunity-visual" aria-hidden="true">
            <div className="overlap-photo-group">
              {/* Decorative Offset Gold Frame */}
              <div className="overlap-frame-bg" />

              {/* Primary Main Photo (Classroom / Community Ground Action) */}
              <div className="overlap-primary-frame">
                <img
                  src="/images/IT7A7079-edit.jpg"
                  alt="Rural classroom supported by Share a Smile"
                  className="overlap-primary-img"
                />
                <div className="overlap-primary-caption">
                  <span>Ground Action • Gujarat & Across India</span>
                </div>
              </div>

              {/* Overlapping Secondary Photo (Warm Smiling Beneficiary Portrait) */}
              <div className="overlap-secondary-frame">
                <img
                  src="/images/story-devi.jpg"
                  alt="Beneficiary supported through women empowerment initiatives"
                  className="overlap-secondary-img"
                />
              </div>

              {/* Floating Verified Trust Pill */}
              <div className="overlap-floating-pill">
                <span className="floating-pill-icon">♥</span>
                <div>
                  <strong>501(c)(3) Non-Profit</strong>
                  <span>Direct Ground Partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
