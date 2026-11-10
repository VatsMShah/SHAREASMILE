export default function AboutApproach() {
  const steps = [
    {
      num: '01',
      title: 'Community-Centred Initiatives',
      lead: 'Focusing on the real, lived needs of communities.',
      desc: 'We focus on the real needs of underserved communities and support initiatives that make a meaningful difference in their everyday lives.'
    },
    {
      num: '02',
      title: 'Collaboration and Partnerships',
      lead: 'Working hand-in-hand with verified ground partners.',
      desc: 'We work alongside organisations and partners in India who share our commitment to social development and community welfare.'
    },
    {
      num: '03',
      title: 'Long-Term Empowerment',
      lead: 'Moving beyond relief to generational self-reliance.',
      desc: 'We believe in creating opportunities that go beyond immediate relief — helping individuals develop the resources, skills, and confidence to build independent futures.'
    }
  ];

  return (
    <section className="about-approach-section" aria-labelledby="approach-title">
      <div className="wrap about-approach-wrap">
        <div className="about-approach-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            OUR METHODOLOGY
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="approach-title" className="about-section-title">
            Our Approach
          </h2>
          <p className="about-section-subtitle">
            Creating Meaningful and Sustainable Impact
          </p>
          <p className="about-approach-lead">
            We believe that lasting change comes from understanding the needs of communities and supporting solutions that address them. Our approach is built around three key principles:
          </p>
        </div>

        <div className="about-approach-grid">
          {steps.map((step) => (
            <div key={step.num} className="approach-card">
              <div className="approach-card-top">
                <span className="approach-step-num">{step.num}</span>
                <span className="approach-step-line" aria-hidden="true" />
              </div>
              <h3 className="approach-card-title">{step.title}</h3>
              <p className="approach-card-lead">{step.lead}</p>
              <p className="approach-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
