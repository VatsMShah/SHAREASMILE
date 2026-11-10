export default function AboutLeadership() {
  const trustees = [
    {
      name: 'Chintan Shah',
      role: 'Trustee & Co-Founder',
      initials: 'CS',
      desc: 'Leads program strategy, international grant allocation, and ground partner due diligence.'
    },
    {
      name: 'Premal Doshi',
      role: 'Trustee',
      initials: 'PD',
      desc: 'Oversees community engagement, donor partnerships, and grassroots operations in India.'
    },
    {
      name: 'Hiren Shah',
      role: 'Trustee',
      initials: 'HS',
      desc: 'Directs logistics, meal distribution networks, and educational sponsorship tracking.'
    },
    {
      name: 'Pritesh Vora',
      role: 'Trustee',
      initials: 'PV',
      desc: 'Manages technology initiatives, communications, and volunteer coordination.'
    }
  ];

  const advisors = [
    {
      name: 'Bindesh Shah, M.D.',
      role: 'Medical & Clinical Advisor',
      initials: 'BS',
      desc: 'Board-certified physician advising on mobile medical camps, cataract procedures, and clinical standards.'
    },
    {
      name: 'Sejal Shah, C.P.A.',
      role: 'Financial Governance Advisor',
      initials: 'SS',
      desc: 'Certified Public Accountant ensuring strict fiscal compliance, 501(c)(3) adherence, and transparent accounting.'
    },
    {
      name: 'Harshad Kothari, C.P.A.',
      role: 'Audit & Compliance Advisor',
      initials: 'HK',
      desc: 'Certified Public Accountant providing independent audit reviews, tax filings, and regulatory stewardship.'
    }
  ];

  return (
    <section className="about-leadership-section" aria-labelledby="about-leadership-title">
      <div className="wrap about-leadership-wrap">
        <div className="about-leadership-header">
          <span className="about-section-eyebrow">GOVERNANCE & LEADERSHIP</span>
          <h2 id="about-leadership-title" className="about-section-title">
            Stewards of Your Generosity
          </h2>
          <p className="about-section-subtitle">
            Our leadership team brings decades of business, healthcare, and financial expertise to ensure every grant creates maximum impact.
          </p>
        </div>

        {/* 100% Volunteer Governance Pledge */}
        <div className="leadership-pledge-card">
          <svg viewBox="0 0 24 24" className="pledge-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <p>
            <strong>100% Volunteer Governance:</strong> All trustees and advisors serve without taking executive salaries or management fees, ensuring your contributions directly support children and families in need.
          </p>
        </div>

        {/* Board of Trustees Grid */}
        <div className="leadership-block">
          <div className="leadership-tier-header">
            <h3>Board of Trustees</h3>
            <span className="tier-badge">Executive Stewards</span>
          </div>

          <div className="leadership-grid">
            {trustees.map((t) => (
              <div key={t.name} className="leader-card">
                <div className="leader-avatar">
                  <span className="leader-initials">{t.initials}</span>
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{t.name}</h4>
                  <span className="leader-role">{t.role}</span>
                  <p className="leader-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Advisors Grid */}
        <div className="leadership-block advisors-block">
          <div className="leadership-tier-header">
            <h3>Board of Advisors</h3>
            <span className="tier-badge">Clinical & Financial Oversight</span>
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
                  <p className="leader-desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
