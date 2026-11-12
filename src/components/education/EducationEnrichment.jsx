import { FEATURED_EXHIBITIONS, GROWTH_OPPORTUNITIES } from '@/data/educationData';
import { EducationIcon } from './EducationIcons';

export default function EducationEnrichment() {
  return (
    <section className="edu-enrichment-section" aria-labelledby="edu-enrichment-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            BEYOND THE CLASSROOM
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="edu-enrichment-title" className="edu-section-title">
            Learning Through Experience, Creativity and Exploration
          </h2>
          <p className="edu-section-subtitle">
            We believe that education should extend beyond textbooks and traditional classroom lessons. Student enrichment activities help children develop creativity, critical thinking, teamwork, confidence, and practical problem-solving abilities.
          </p>
        </div>

        {/* Top Tier: 3 Flagship Fairs & Exhibitions */}
        <div className="edu-exhibitions-grid">
          {FEATURED_EXHIBITIONS.map((item) => (
            <article key={item.id} className="edu-exhibition-card">
              <div className="edu-exhibition-top">
                <div className="edu-icon-box gold">
                  <EducationIcon name={item.icon} />
                </div>
                <span className="edu-exhibition-tag">{item.tag}</span>
              </div>
              <h3 className="edu-exhibition-title">{item.title}</h3>
              <p className="edu-exhibition-desc">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Bottom Tier: Opportunities to Explore and Grow */}
        <div className="edu-opportunities-panel">
          <div className="edu-opportunities-head">
            <h3 className="edu-opportunities-heading">Opportunities to Explore and Grow</h3>
            <p className="edu-opportunities-sub">
              Encouraging students to explore their interests and learn through engaging hands-on experiences.
            </p>
          </div>

          <div className="edu-opportunities-grid">
            {GROWTH_OPPORTUNITIES.map((item) => (
              <div key={item.id} className="edu-opportunity-item">
                <div className="edu-opportunity-icon">
                  <EducationIcon name={item.icon} />
                </div>
                <div>
                  <h4 className="edu-opportunity-title">{item.title}</h4>
                  <p className="edu-opportunity-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
