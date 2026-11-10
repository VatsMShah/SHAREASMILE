export default function AboutLeadership() {
  const trustees = [
    {
      name: 'Chintan Shah',
      role: 'Trustee',
      initials: 'CS'
    },
    {
      name: 'Premal Doshi',
      role: 'Trustee',
      initials: 'PD'
    },
    {
      name: 'Hiren Shah',
      role: 'Trustee',
      initials: 'HS'
    },
    {
      name: 'Pritesh Vora',
      role: 'Trustee',
      initials: 'PV'
    }
  ];

  const advisors = [
    {
      name: 'Bindesh Shah',
      role: 'Managing Director, Advisor',
      initials: 'BS'
    },
    {
      name: 'Sejal Shah (CPA)',
      role: 'Advisor',
      initials: 'SS'
    },
    {
      name: 'Harshad Kothari',
      role: 'CPA, Advisor',
      initials: 'HK'
    }
  ];

  return (
    <section className="about-leadership-section" aria-labelledby="leadership-title">
      <div className="wrap about-leadership-wrap">
        <div className="about-leadership-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            LEADERSHIP & GOVERNANCE
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="leadership-title" className="about-section-title">
            The People Behind Our Mission
          </h2>
          <p className="about-section-subtitle">
            Guided by Commitment. United by Purpose.
          </p>
          <p className="about-leadership-lead">
            Share a Smile USA is supported by a team of trustees and advisors who contribute their experience, guidance, and commitment towards the organisation&apos;s mission.
          </p>
        </div>

        {/* Volunteer Commitment Banner */}
        <div className="leadership-pledge-card">
          <svg viewBox="0 0 24 24" className="pledge-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <p>
            <strong>Volunteer-Led Governance:</strong> All trustees and advisors contribute their time, expertise, and oversight on a voluntary basis, ensuring maximum resources directly support children and communities in India.
          </p>
        </div>

        {/* Board of Trustees Block */}
        <div className="leadership-block">
          <div className="leadership-tier-header">
            <h3>Board of Trustees</h3>
            <span className="tier-badge">Governance & Strategy</span>
          </div>

          <div className="leadership-grid trustees-grid">
            {trustees.map((t) => (
              <div key={t.name} className="leader-card">
                <div className="leader-avatar">
                  <span className="leader-initials">{t.initials}</span>
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{t.name}</h4>
                  <span className="leader-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Advisors Block */}
        <div className="leadership-block advisors-block">
          <div className="leadership-tier-header">
            <h3>Board of Advisors</h3>
            <span className="tier-badge">Advisory & Compliance</span>
          </div>

          <div className="leadership-grid advisors-grid">
            {advisors.map((a) => (
              <div key={a.name} className="leader-card advisor-card">
                <div className="leader-avatar advisor-avatar">
                  <span className="leader-initials">{a.initials}</span>
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{a.name}</h4>
                  <span className="leader-role">{a.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
