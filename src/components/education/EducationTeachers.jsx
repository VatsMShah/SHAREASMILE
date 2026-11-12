import { EDUCATOR_TRACKS } from '@/data/educationData';

export default function EducationTeachers() {
  return (
    <section className="edu-teachers-section" aria-labelledby="edu-teachers-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            EMPOWERING EDUCATORS
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="edu-teachers-title" className="edu-section-title">
            Supporting Teachers to Inspire the Next Generation
          </h2>
          <p className="edu-section-subtitle">
            Behind every confident student is a teacher who inspires and guides them. Supporting educator growth builds lasting classroom excellence.
          </p>
        </div>

        <div className="edu-teachers-grid">
          {EDUCATOR_TRACKS.map((track) => (
            <article key={track.num} className="edu-teacher-card">
              <div className="edu-teacher-photo">
                <img
                  src={track.image}
                  alt={track.imageAlt}
                  style={{ objectPosition: track.imagePosition || 'center center' }}
                />
                <span className="edu-teacher-photo-badge">
                  {track.num} · {track.tag}
                </span>
              </div>

              <div className="edu-teacher-body">
                <h3 className="edu-teacher-title">{track.title}</h3>
                <p className="edu-teacher-summary">{track.summary}</p>

                <ul className="edu-check-list">
                  {track.points.map((point) => (
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
