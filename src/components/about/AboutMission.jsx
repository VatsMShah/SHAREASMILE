export default function AboutMission() {
  return (
    <section className="about-mission-section" aria-labelledby="mission-vision-title">
      <div className="wrap about-mission-wrap">
        <div className="about-mission-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            GUIDING PRINCIPLES
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="mission-vision-title" className="about-section-title">
            Our Mission & Our Vision
          </h2>
          <p className="about-section-subtitle">
            The enduring foundation guiding every initiative, partnership, and grant we undertake.
          </p>
        </div>

        <div className="about-mv-grid">
          {/* Card 1: Our Mission */}
          <div className="about-mv-card mission-card">
            <div className="mv-card-top">
              <div className="mv-icon-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="mv-card-num">01</span>
            </div>

            <h3 className="mv-card-title">Our Mission</h3>

            <p className="mv-card-text">
              To improve the quality of life of underprivileged communities by supporting impactful initiatives in education, healthcare, poverty alleviation, and women empowerment.
            </p>

            <p className="mv-card-text secondary">
              We aim to create opportunities, remove barriers, and empower individuals to build a more secure and independent future.
            </p>

            <div className="mv-card-tag">
              <span>Impact-Driven Action</span>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="about-mv-card vision-card">
            <div className="mv-card-top">
              <div className="mv-icon-badge vision">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="mv-card-num">02</span>
            </div>

            <h3 className="mv-card-title">Our Vision</h3>

            <p className="mv-card-text">
              A world where every individual, regardless of their background or circumstances, has equal access to opportunities, essential resources, and the freedom to shape their future.
            </p>

            <p className="mv-card-text secondary">
              We envision empowered communities where education creates possibilities, healthcare protects lives, and individuals have the resources and confidence to become self-reliant.
            </p>

            <div className="mv-card-tag vision">
              <span>Generational Self-Reliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
