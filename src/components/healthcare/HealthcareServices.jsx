import { HEALTHCARE_SERVICES } from '@/data/healthcareData';
import { HealthcareIcon } from './HealthcareIcons';

export default function HealthcareServices() {
  return (
    <section className="health-services-section" aria-labelledby="health-services-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            COMPREHENSIVE CLINICAL CARE
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="health-services-title" className="edu-section-title">
            Specialised Medical Departments &amp; Outreach
          </h2>
          <p className="edu-section-subtitle">
            From routine health screenings to specialised ophthalmic and cardiac care, our supported medical center brings vital multidisciplinary healthcare directly to underserved rural populations.
          </p>
        </div>

        <div className="health-services-grid">
          {HEALTHCARE_SERVICES.map((service) => (
            <article key={service.id} className="health-service-card">
              <div className="health-service-top">
                <div className="edu-icon-box">
                  <HealthcareIcon name={service.icon} />
                </div>
              </div>
              <h3 className="health-service-title">{service.title}</h3>
              <p className="health-service-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
