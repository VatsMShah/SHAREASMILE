export default function AboutMission() {
  const values = [
    {
      title: 'Dignity First',
      desc: 'We treat every beneficiary as an equal partner, uplifting human potential rather than offering mere handouts.'
    },
    {
      title: 'Grassroots Proximity',
      desc: 'We partner directly with schools and local clinic leaders embedded deep in rural villages who understand real local needs.'
    },
    {
      title: 'Radical Transparency',
      desc: 'As a Candid Platinum nonprofit, every donation is accounted for with complete financial integrity and open reporting.'
    },
    {
      title: 'Sustainable Impact',
      desc: 'We focus on long-term systemic uplift through education and skills rather than temporary, short-lived relief.'
    }
  ];

  return (
    <section className="about-mission-section" aria-labelledby="about-mission-title">
      <div className="wrap about-mission-wrap">
        <div className="about-mission-header">
          <span className="about-section-eyebrow">WHAT DRIVES US</span>
          <h2 id="about-mission-title" className="about-section-title">
            Our Mission, Vision & Core Values
          </h2>
          <p className="about-section-subtitle">
            Every grant we distribute and every school we support is rooted in these enduring principles.
          </p>
        </div>

        <div className="about-mission-grid">
          {/* Card 1: Mission */}
          <div className="about-card-pillar">
            <div className="pillar-header">
              <span className="pillar-num">01</span>
              <h3>Our Mission</h3>
            </div>
            <p>
              To eliminate the systemic barriers of isolation, poverty, and illiteracy by educating underprivileged children, funding rural medical camps, and empowering women with vocational dignity.
            </p>
            <div className="pillar-footer">
              <span className="pillar-pill">Direct Grant-Making Model</span>
            </div>
          </div>

          {/* Card 2: Vision */}
          <div className="about-card-pillar">
            <div className="pillar-header">
              <span className="pillar-num">02</span>
              <h3>Our Vision</h3>
            </div>
            <p>
              A future where birth location and economic status never restrict a child’s potential, where preventable illness is treated promptly, and where women stand as independent pillars of their communities.
            </p>
            <div className="pillar-footer">
              <span className="pillar-pill">Generational Transformation</span>
            </div>
          </div>

          {/* Card 3: Values */}
          <div className="about-card-pillar values-card">
            <div className="pillar-header">
              <span className="pillar-num">03</span>
              <h3>Core Principles</h3>
            </div>
            <div className="pillar-values-list">
              {values.map((v) => (
                <div key={v.title} className="pillar-value-item">
                  <span className="value-bullet">✦</span>
                  <div>
                    <strong>{v.title}:</strong> <span>{v.desc}</span>
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
