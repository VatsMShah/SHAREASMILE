import { JOURNEY_MILESTONES } from '@/data/healthcareData';

const MILESTONE_IMAGES = [
  { src: '/images/story-devi.jpg', alt: 'Physician providing rural clinic examination' },
  { src: '/images/banner-4.png', alt: 'Doctor performing cataract examination with ophthalmic light' },
  { src: '/images/healthcare/hospital-construction-1.jpg', alt: 'Hospital building campus under active construction in Parli' },
];

export default function HealthcareJourney() {
  return (
    <section className="health-journey-section" aria-labelledby="health-journey-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            EVOLUTION OF COMMUNITY HEALTH
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="health-journey-title" className="edu-section-title">
            Journey of a Village
          </h2>
          <p className="edu-section-subtitle">
            From isolated villages without a doctor for 20 kilometres to regular multi-specialty camps and a permanent hospital, see the transformative healthcare milestones achieved over 18 years.
          </p>
        </div>

        <div className="health-journey-grid">
          {JOURNEY_MILESTONES.map((item, idx) => (
            <article key={item.step} className="health-journey-card">
              <div className="health-journey-photo">
                <img
                  src={MILESTONE_IMAGES[idx].src}
                  alt={MILESTONE_IMAGES[idx].alt}
                />
                <span className="health-journey-badge">
                  {item.step} · {item.badge}
                </span>
              </div>

              <div className="health-journey-body">
                <h3 className="health-journey-title">{item.title}</h3>
                <p className="health-journey-summary">{item.summary}</p>

                <ul className="edu-check-list">
                  {item.points.map((point) => (
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
