export default function HealthcareOverview() {
  return (
    <section className="health-overview-section" aria-labelledby="health-overview-title">
      <div className="wrap">
        <div className="health-overview-grid">
          {/* Left Column: Narrative */}
          <div className="health-overview-content">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              18 YEARS OF GROUND ACTION
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 id="health-overview-title" className="edu-section-title edu-left">
              Bringing Essential Medical Care Closer to Rural Communities
            </h2>

            <p className="edu-lead-quote">
              Access to healthcare should never depend on where someone lives or what they earn. Healing begins when care reaches the doorstep.
            </p>

            <div className="edu-prose">
              <p>
                Our supported <strong>Medical &amp; Healthcare Center in Parli, Maharashtra, India</strong> has been actively serving for the last <strong>18 years</strong> across the underprivileged rural regions of <strong>Sudhagadh and Khalapur talukas</strong>.
              </p>
              <p>
                Before our outreach began, families had to travel more than 20 kilometres over rugged roads to reach basic medical facilities. For daily-wage households, travel expenses alone rendered preventive care and emergency interventions out of reach.
              </p>
              <p>
                Through sustained village camps, mobile dispensary vans, dedicated medical personnel, and permanent infrastructure, we work to ensure every individual receives quality diagnostics, preventive screenings, and surgical treatment with complete dignity.
              </p>
            </div>

            <div className="edu-highlight-strip">
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>18+ Years of Service</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Sudhagadh &amp; Khalapur Talukas</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Mobile Dispensary Outreach</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Premium Medical Showcase (No circles, No dashed borders) */}
          <div className="health-overview-visual">
            <div className="health-showcase-card">
              <div className="health-showcase-main">
                <img
                  src="/images/story-devi.jpg"
                  alt="Doctor conducting diagnostic checkup with stethoscope on an elderly rural villager"
                />
                <div className="health-showcase-caption">
                  <span>Direct Clinical Consultation • Parli Rural Center</span>
                </div>
              </div>

              <div className="health-showcase-sub">
                <img
                  src="/images/banner-4.png"
                  alt="Ophthalmic specialist checking villager eyesight with diagnostic light"
                />
              </div>

              <div className="health-showcase-badge">
                <span className="badge-tag">RURAL HEALTHCARE</span>
                <strong>18+ Years of Service</strong>
                <span className="badge-sub">255+ Villages Touched</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
