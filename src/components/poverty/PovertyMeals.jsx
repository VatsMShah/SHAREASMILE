import { MEALS_CENTERS_DATA, MEALS_PROGRAM_FEATURES } from '@/data/povertyData';
import { PovertyIcon } from './PovertyIcons';

export default function PovertyMeals() {
  return (
    <section className="poverty-meals-section" aria-labelledby="meals-program-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            DAILY MIDDAY NOURISHMENT
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="meals-program-title" className="edu-section-title">
            Nourishing Bodies &amp; Minds — One Balanced Meal at a Time
          </h2>
          <p className="edu-section-subtitle">
            Reliable, hot midday meals delivered to the doorsteps of elderly individuals, widows, and families living in poverty who cannot cook or afford a balanced diet.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="poverty-features-grid">
          {MEALS_PROGRAM_FEATURES.map((item) => (
            <article key={item.id} className="poverty-feature-card">
              <div className="poverty-feature-top">
                <div className="edu-icon-box">
                  <PovertyIcon name={item.icon} />
                </div>
              </div>
              <h3 className="poverty-feature-title">{item.title}</h3>
              <p className="poverty-feature-desc">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Center-by-Center Meal Impact Showcase */}
        <div className="poverty-centers-panel">
          <div className="poverty-centers-head">
            <div>
              <span className="poverty-centers-tag">MEASURE OF CARE</span>
              <h3 className="poverty-centers-title">Center-by-Center Meal Impact</h3>
            </div>
            <p className="poverty-centers-sub">
              Delivering consistent nutrition across urban and rural centers in Maharashtra and Gujarat.
            </p>
          </div>

          <div className="poverty-centers-grid">
            {MEALS_CENTERS_DATA.map((c) => (
              <div key={c.center} className="poverty-center-card">
                <div className="poverty-center-top">
                  <span className="poverty-center-name">{c.center}</span>
                  <span className="poverty-center-reg">{c.region}</span>
                </div>
                <div className="poverty-center-stat">
                  <strong>{c.meals}</strong>
                  <span>Meals Served</span>
                </div>
                <div className="poverty-center-ben">
                  <span>Daily Beneficiaries:</span>
                  <strong>{c.beneficiaries}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
