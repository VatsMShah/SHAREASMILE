import { INFRASTRUCTURE_ITEMS } from '@/data/educationData';
import { EducationIcon } from './EducationIcons';

export default function EducationInfrastructure() {
  return (
    <section className="edu-infra-section" aria-labelledby="edu-infra-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            A LEARNING ENVIRONMENT DESIGNED FOR GROWTH
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="edu-infra-title" className="edu-section-title">
            Infrastructure That Supports Every Child&apos;s Potential
          </h2>
          <p className="edu-section-subtitle">
            A positive learning environment plays an important role in a child&apos;s development. Our supported school focuses on providing facilities that make education engaging, accessible, and meaningful.
          </p>
        </div>

        <div className="edu-infra-grid">
          {INFRASTRUCTURE_ITEMS.map((item) => (
            <article key={item.id} className="edu-infra-card">
              <div className="edu-infra-card-top">
                <div className="edu-icon-box">
                  <EducationIcon name={item.icon} />
                </div>
                {item.badge && <span className="edu-infra-badge">{item.badge}</span>}
              </div>
              <h3 className="edu-infra-card-title">{item.title}</h3>
              <p className="edu-infra-card-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
