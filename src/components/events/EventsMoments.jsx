import { MOMENTS_PILLARS } from '@/data/eventsData';

export default function EventsMoments() {
  return (
    <section className="events-moments-section" aria-labelledby="events-moments-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            SHARED PURPOSE &amp; IMPACT
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="events-moments-title" className="edu-section-title">
            Moments That Make a Difference
          </h2>
          <p className="edu-section-subtitle">
            Behind every photograph is a story of togetherness, kindness and meaningful connections. Our events capture the people and moments that make our journey special.
          </p>
        </div>

        <div className="events-moments-grid">
          {MOMENTS_PILLARS.map((pillar) => (
            <article key={pillar.num} className="events-moment-card">
              <div className="events-moment-photo">
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  loading="lazy"
                />
                <span className="events-moment-photo-badge">
                  {pillar.num} · {pillar.tag}
                </span>
              </div>

              <div className="events-moment-body">
                <h3 className="events-moment-title">{pillar.title}</h3>
                <p className="events-moment-summary">{pillar.summary}</p>

                <ul className="edu-check-list">
                  {pillar.points.map((point) => (
                    <li key={point}>
                      <span className="edu-check-mark" aria-hidden="true">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
