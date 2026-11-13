export default function EventsOverview() {
  return (
    <section className="events-overview-section" aria-labelledby="events-overview-title">
      <div className="wrap">
        <div className="events-overview-grid">
          {/* Left Column: Mission Narrative */}
          <div className="events-overview-content">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              CONNECTION &amp; PURPOSE
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 id="events-overview-title" className="edu-section-title edu-left">
              Bringing People Together, Creating Smiles.
            </h2>

            <p className="edu-lead-quote">
              Every meaningful change begins with people coming together.
            </p>

            <div className="edu-prose">
              <p>
                At <strong>Share A Smile USA</strong>, our events are moments of connection, compassion and shared purpose. They bring together individuals, volunteers, supporters and communities who believe in making a positive difference.
              </p>
              <p>
                Through celebrations, gatherings and community initiatives, we create opportunities to share experiences, recognise contributions and strengthen the spirit of giving.
              </p>
            </div>

            <div className="edu-highlight-strip">
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Moments of Connection</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Dedicated Changemakers</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Strengthening the Spirit of Giving</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="events-overview-visual">
            <div className="events-showcase-card">
              <div className="events-showcase-main">
                <img
                  src="/images/events/gala-stage-backdrop.jpg"
                  alt="Share a Smile stage backdrop with DoubleTree podium and healthcare banner"
                  loading="lazy"
                />
                <div className="events-showcase-caption">
                  <span>Grand Supporter Gathering • Main Stage</span>
                </div>
              </div>
              <div className="events-showcase-stat-badge">
                <strong>500+</strong>
                <span>Supporters &amp; Advocates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
