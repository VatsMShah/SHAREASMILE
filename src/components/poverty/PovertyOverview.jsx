export default function PovertyOverview() {
  return (
    <section className="poverty-overview-section" aria-labelledby="poverty-overview-title">
      <div className="wrap">
        <div className="poverty-overview-grid">
          {/* Left Column: Mission Narrative */}
          <div className="poverty-overview-content">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              COMMUNITY-ROOTED ASSISTANCE
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 id="poverty-overview-title" className="edu-section-title edu-left">
              Breaking the Cycle of Poverty with Dignity
            </h2>

            <p className="edu-lead-quote">
              Breaking the cycle of poverty requires more than temporary relief. It requires reliable daily support, wholesome nutrition, and genuine community empathy.
            </p>

            <div className="edu-prose">
              <p>
                Our supported <strong>Poverty Enrichment Centers across India</strong> are dedicated to providing individuals and families with the essential tools, resources, and nutritional security needed to improve their circumstances and achieve economic and social stability.
              </p>
              <p>
                We stand beside families facing acute financial hardship—delivering fresh, balanced daily midday meals to vulnerable elders, distributing dry ration kits during monsoons and emergencies, and fostering community self-reliance.
              </p>
              <p>
                Every meal prepared and every kit delivered is guided by respect and care, ensuring that no grandparent, child, or parent is left alone in times of distress.
              </p>
            </div>

            <div className="edu-highlight-strip">
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Daily Tiffin Meal Programs</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>5 Active Regional Centers</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Emergency Ration Assistance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Ground Photo Duo Frame */}
          <div className="poverty-overview-visual">
            <div className="poverty-duo-frame">
              <div className="poverty-duo-decor" aria-hidden="true" />

              <div className="poverty-frame-main">
                <img
                  src="/images/poverty/poverty-1.jpg"
                  alt="Volunteer handing essential food kit directly to elderly rural villager"
                />
                <div className="poverty-frame-main-cap">
                  <span>Direct Ground Delivery • Rural India</span>
                </div>
              </div>

              <div className="poverty-frame-inset">
                <img
                  src="/images/poverty/poverty-3.jpg"
                  alt="Kitchen team measuring and packing wholesome meals with scale"
                />
              </div>

              <div className="poverty-badge-floating">
                <strong>Nutritional Security</strong>
                <span>Wholesome Fresh Daily Meals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
