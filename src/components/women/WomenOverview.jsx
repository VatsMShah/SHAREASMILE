export default function WomenOverview() {
  return (
    <section className="women-overview-section" aria-labelledby="women-overview-title">
      <div className="wrap">
        <div className="women-overview-grid">
          {/* Left Column: Mission Narrative */}
          <div className="women-overview-content">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              OPPORTUNITY &amp; SELF-RELIANCE
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 id="women-overview-title" className="edu-section-title edu-left">
              From Dependence to Dignity. From Challenges to Opportunities.
            </h2>

            <p className="edu-lead-quote">
              When women are given the opportunity to earn, grow, and become independent, they build a better future for themselves, their families, and their communities.
            </p>

            <div className="edu-prose">
              <p>
                Women are the foundation of families and an essential pillar of a growing society. Yet in rural communities across India, many women carry the heavy responsibility of supporting their households without adequate financial resources, safe working environments, or stable employment.
              </p>
              <p>
                Women who are widowed or have spouses unable to work often face acute financial vulnerability—having historically depended on uncertain, low-paying temporary labor or hazardous unorganized tasks.
              </p>
              <p>
                At <strong>Share a Smile USA</strong>, our mission is to transform the social and economic circumstances of underprivileged women by creating dignified opportunities through <strong>education, fair-wage employment, and financial literacy</strong>.
              </p>
            </div>

            <div className="edu-highlight-strip">
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>100+ Women Employed</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Safe Working Environment</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Free Bus Transport &amp; Daily Meals</span>
              </div>
            </div>
          </div>

          {/* Right Column: Ground Photo Showcase */}
          <div className="women-overview-visual">
            <div className="women-showcase-card">
              <div className="women-showcase-main">
                <img
                  src="/images/women/women-sifting-flour.jpg"
                  alt="Rural women in clean aprons and hairnets sifting flour and preparing wholesome food products"
                />
                <div className="women-showcase-caption">
                  <span>Hygienic Craftsmanship • Parli Chaakri Facility</span>
                </div>
              </div>

              <div className="women-showcase-sub">
                <img
                  src="/images/women/women-daily-meals.jpg"
                  alt="Women factory employees enjoying freshly prepared daily lunch together"
                />
              </div>

              <div className="women-showcase-badge">
                <span className="badge-tag">EMPOWERMENT IN ACTION</span>
                <strong>100+ Women Employed</strong>
                <span className="badge-sub">Mahila Gruh Udyog • Parli</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
