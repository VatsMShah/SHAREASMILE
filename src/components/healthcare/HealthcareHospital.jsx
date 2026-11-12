import { HOSPITAL_DEPARTMENTS, HOSPITAL_METRICS } from '@/data/healthcareData';
import { HealthcareIcon } from './HealthcareIcons';

export default function HealthcareHospital() {
  return (
    <section className="health-hospital-section" aria-labelledby="hospital-project-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            LANDMARK UPCOMING PROJECT
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="hospital-project-title" className="edu-section-title">
            39-Bed Hospital in Parli, Maharashtra
          </h2>
          <p className="edu-section-subtitle">
            Bringing state-of-the-art emergency, surgical, cardiac, and diagnostic care to rural Sudhagad Taluka through a permanent, modern healthcare campus.
          </p>
        </div>

        {/* High-Contrast Architectural Capacity Banner */}
        <div className="edu-hostel-kpi-bar health-hospital-kpi">
          <div className="edu-hostel-kpi-headline">
            <span className="edu-hostel-loc">Shree Raj Medical &amp; Healthcare Centre • Parli</span>
            <strong>30,000 Sq. Ft. Multi-Specialty Hospital Under Active Construction</strong>
          </div>
          <div className="edu-hostel-kpi-metrics">
            {HOSPITAL_METRICS.map((stat) => (
              <div key={stat.label} className="edu-hostel-metric">
                <span className="edu-hostel-metric-val">{stat.value}</span>
                <span className="edu-hostel-metric-lbl">
                  {stat.unit} · {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Real Construction Photo & Facilities Grid */}
        <div className="health-hospital-grid">
          {/* Left Column: Real Site Construction Photo with Gold Framing */}
          <div className="health-hospital-photo-frame">
            <div className="health-hospital-photo-inner">
              <img
                src="/images/healthcare/hospital-construction-1.jpg"
                alt="30,000 sq ft hospital building under active construction in Parli, Maharashtra"
              />
              <div className="health-hospital-photo-caption">
                <strong>Ground Reality: Parli Hospital Campus</strong>
                <span>Active construction photographed June 2026</span>
              </div>
            </div>
            <div className="health-hospital-badge-corner">
              <span>✦ Expandable up to 51 Beds</span>
            </div>
          </div>

          {/* Right Column: Proposed Hospital Departments */}
          <div className="health-hospital-depts-card">
            <h3>Planned Hospital Departments &amp; Facilities</h3>
            <p className="health-hospital-sub">
              Engineered to meet the acute and chronic medical needs of surrounding rural communities:
            </p>

            <div className="health-hospital-depts-list">
              {HOSPITAL_DEPARTMENTS.map((dept) => (
                <div key={dept.title} className="health-dept-item">
                  <div className="health-dept-icon">
                    <HealthcareIcon name={dept.icon} />
                  </div>
                  <div>
                    <h4 className="health-dept-title">{dept.title}</h4>
                    <p className="health-dept-desc">{dept.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
