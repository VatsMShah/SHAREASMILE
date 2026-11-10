export default function AboutTimeline() {
  const milestones = [
    {
      year: 'Inception',
      tag: '501(c)(3) FORMATION',
      title: 'Founded in New Jersey, USA',
      desc: 'Formed by dedicated community leaders as an IRS-recognized 501(c)(3) public charity with the mission of uplifting underprivileged rural communities across India.'
    },
    {
      year: 'Growth',
      tag: 'EDUCATIONAL SPONSORSHIPS',
      title: 'First 100+ Rural Scholars',
      desc: 'Launched direct school grants providing full annual tuition, books, uniforms, and digital tablets to children in remote rural schools.'
    },
    {
      year: 'Expansion',
      tag: 'HEALTHCARE OUTREACH',
      title: 'Mobile Clinics & Cataract Camps',
      desc: 'Funded diagnostic health screenings and free cataract eye surgeries, restoring vision and health across 150+ underserved villages.'
    },
    {
      year: 'Relief',
      tag: 'HUMANITARIAN RESPONSE',
      title: '10,50,000+ Emergency Meals Served',
      desc: 'Mobilized community volunteers during lockdown hunger disruptions, preparing and delivering over 1 million nutritious meals to stranded families.'
    },
    {
      year: 'Milestone',
      tag: 'GOLD-STANDARD GOVERNANCE',
      title: 'Candid Platinum Seal of Transparency',
      desc: 'Earned the Platinum Seal of Transparency on Candid (GuideStar), placing Share A Smile in the top 0.1% of US nonprofits for accountability and open reporting.'
    }
  ];

  return (
    <section className="about-timeline-section" aria-labelledby="about-timeline-title">
      <div className="wrap about-timeline-wrap">
        <div className="about-timeline-header">
          <span className="about-section-eyebrow">OUR JOURNEY</span>
          <h2 id="about-timeline-title" className="about-section-title">
            Milestones of Hope & Transformation
          </h2>
          <p className="about-section-subtitle">
            A decade of measurable impact, grounded in grassroots trust and generous donor partnership.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track" aria-hidden="true" />
          {milestones.map((m, idx) => (
            <div key={m.title} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-node" aria-hidden="true">
                <span className="node-dot" />
              </div>
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-year">{m.year}</span>
                  <span className="timeline-tag">{m.tag}</span>
                </div>
                <h3 className="timeline-card-title">{m.title}</h3>
                <p className="timeline-card-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
