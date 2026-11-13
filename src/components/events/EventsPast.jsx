import { PAST_EVENTS } from '@/data/eventsData';

export default function EventsPast() {
  return (
    <section className="events-past-section" aria-labelledby="past-events-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            PROVEN GROUND ACTION
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="past-events-title" className="edu-section-title">
            Past Milestones &amp; Gatherings
          </h2>
          <p className="edu-section-subtitle">
            Every gathering, camp, and relief mobilization creates lasting change. Explore key moments that our donors, volunteers, and ground teams brought to life.
          </p>
        </div>

        <div className="events-past-grid">
          {PAST_EVENTS.map((item) => (
            <article key={item.id} className="past-event-card">
              <div className="past-event-media">
                <img
                  src={item.img}
                  alt={item.title}
                  decoding="async"
                />
                <div className="past-event-metric-badge">
                  <strong>{item.metric}</strong>
                  <span>{item.metricLabel}</span>
                </div>
              </div>

              <div className="past-event-body">
                <div className="past-event-meta">
                  <span className="past-event-category">{item.category}</span>
                  <span className="past-event-year">{item.year}</span>
                </div>

                <h3 className="past-event-title">{item.title}</h3>
                <p className="past-event-summary">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
