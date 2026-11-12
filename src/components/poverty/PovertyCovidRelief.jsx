import { COVID_RELIEF_STATS } from '@/data/povertyData';

export default function PovertyCovidRelief() {
  return (
    <section className="poverty-relief-section" aria-labelledby="relief-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            HUMANITARIAN CRISIS RESPONSE
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="relief-title" className="edu-section-title">
            Standing Strong in Times of Greatest Need
          </h2>
          <p className="edu-section-subtitle">
            When livelihoods vanished and supply lines collapsed, our on-the-ground volunteer networks mobilized instantly to protect the most vulnerable rural households.
          </p>
        </div>

        {/* High-Contrast Architectural Impact Banner */}
        <div className="edu-hostel-kpi-bar poverty-relief-kpi">
          <div className="edu-hostel-kpi-headline">
            <span className="edu-hostel-loc">Humanitarian Action Across 255 Villages</span>
            <strong>Rapid Relief: Food, Healthcare &amp; Essential Ration Security</strong>
          </div>
          <div className="poverty-kpi-stats-strip">
            {COVID_RELIEF_STATS.slice(0, 3).map((stat) => (
              <div key={stat.label} className="edu-hostel-metric">
                <span className="edu-hostel-metric-val">{stat.value}</span>
                <span className="edu-hostel-metric-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Details: Narrative & 5 Milestone Cards */}
        <div className="poverty-relief-grid">
          <div className="poverty-relief-narrative-card">
            <h3>Unbroken Relief in Adverse Conditions</h3>
            <p>
              During nationwide lockdowns, daily-wage families lost their meager sources of income overnight. In remote tribal pockets and isolated rural villages, food scarcity was an immediate crisis.
            </p>
            <p>
              Share a Smile USA and ground partners set up emergency packaging centers, secured vehicular permissions, and navigated difficult monsoon terrain to deliver <strong>48.5 lakh meals</strong> and monthly grocery kits directly to household verandas.
            </p>
            <div className="poverty-relief-badge-line">
              <span>✦ Direct Ground Verification • Zero Middlemen</span>
            </div>
          </div>

          <div className="poverty-relief-metrics-card">
            <h3>Verified Emergency Deliveries</h3>
            <div className="poverty-relief-metrics-list">
              {COVID_RELIEF_STATS.map((stat) => (
                <div key={stat.label} className="poverty-metric-row">
                  <span className="poverty-metric-val">{stat.value}</span>
                  <span className="poverty-metric-lbl">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
