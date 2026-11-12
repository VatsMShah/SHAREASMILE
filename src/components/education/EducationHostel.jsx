import { HOSTEL_FACILITIES, HOSTEL_STATS } from '@/data/educationData';
import { EducationIcon } from './EducationIcons';

export default function EducationHostel() {
  return (
    <section className="edu-hostel-section" aria-labelledby="edu-hostel-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            BUILDING DREAMS: A GIRLS&apos; HOSTEL PROJECT
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="edu-hostel-title" className="edu-section-title">
            Creating a Safe Space for Girls to Continue Their Education
          </h2>
          <p className="edu-section-subtitle">
            Access to education is not just about having a school. For girls living in remote communities, distance, accommodation, and safety can become barriers to continuing their studies.
          </p>
        </div>

        {/* High-Contrast Architectural Capacity Banner */}
        <div className="edu-hostel-kpi-bar">
          <div className="edu-hostel-kpi-headline">
            <span className="edu-hostel-loc">Sudhagad Taluka Residential Initiative</span>
            <strong>36 Rooms. 108 Girls. More Opportunities for the Future.</strong>
          </div>
          <div className="edu-hostel-kpi-metrics">
            {HOSTEL_STATS.map((stat) => (
              <div key={stat.label} className="edu-hostel-metric">
                <span className="edu-hostel-metric-val">{stat.value}</span>
                <span className="edu-hostel-metric-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Impact Narrative + Facility Needs */}
        <div className="edu-hostel-grid">
          <div className="edu-hostel-story-card">
            <h3>A Better Environment for Learning and Living</h3>
            <p>
              Our supported girls&apos; hostel project in <strong>Sudhagad Taluka</strong> addresses these barriers by providing a dedicated, secure residential campus for girls pursuing education—planned to house <strong>108 girls</strong> across <strong>36 rooms</strong> (three students per room with attached bathrooms).
            </p>
            <p>
              The project gives young women access to modern infrastructure and a supportive residential community. More importantly, it helps them pursue education with confidence, dignity, and a stronger sense of independence, without feeling limited by their backgrounds.
            </p>
          </div>

          <div className="edu-hostel-facilities-card">
            <h3>Designed Around Their Needs</h3>
            <p className="edu-hostel-fac-sub">
              Thoughtfully planned campus amenities supporting health, hygiene, sustainability, and comfort:
            </p>
            <div className="edu-hostel-fac-grid">
              {HOSTEL_FACILITIES.map((fac) => (
                <div key={fac.label} className="edu-hostel-fac-item">
                  <div className="edu-hostel-fac-icon">
                    <EducationIcon name={fac.icon} />
                  </div>
                  <span>{fac.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
