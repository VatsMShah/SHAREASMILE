import { FACTORY_FEATURES } from '@/data/womenData';
import { WomenIcon } from './WomenIcons';

export default function WomenFactory() {
  return (
    <section className="women-factory-section" aria-labelledby="factory-section-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            A FACTORY POWERED BY WOMEN
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="factory-section-title" className="edu-section-title">
            Creating a Better Future Through Employment
          </h2>
          <p className="edu-section-subtitle">
            Through our women empowerment initiative, a thriving facility provides stable livelihoods for more than 100 women from surrounding villages, pairing fair wages with complete workplace dignity.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="women-features-grid">
          {FACTORY_FEATURES.map((item) => (
            <article key={item.id} className="women-feature-card">
              <div className="women-feature-top">
                <div className="edu-icon-box">
                  <WomenIcon name={item.icon} />
                </div>
              </div>
              <h3 className="women-feature-title">{item.title}</h3>
              <p className="women-feature-desc">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Factory Metric Banner */}
        <div className="women-factory-banner">
          <div className="women-factory-metric">
            <strong>100+</strong>
            <span>Rural Women Employed</span>
          </div>
          <div className="women-factory-divider" aria-hidden="true" />
          <div className="women-factory-metric">
            <strong>5,000 kg</strong>
            <span>Khakhras Produced Monthly</span>
          </div>
          <div className="women-factory-divider" aria-hidden="true" />
          <div className="women-factory-metric">
            <strong>100%</strong>
            <span>FSSAI &amp; FDA Certified</span>
          </div>
          <div className="women-factory-divider" aria-hidden="true" />
          <div className="women-factory-metric">
            <strong>Daily</strong>
            <span>Doorstep Bus Transit &amp; Meals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
