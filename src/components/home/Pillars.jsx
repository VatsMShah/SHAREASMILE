import { Link } from 'react-router-dom';
import { INITIATIVES } from '@/data';

// Crisp outline SVG icons matching the reference design
const PILLAR_ICONS = {
  '/education': (
    <svg viewBox="0 0 24 24" className="pillar-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 3 2 8 12 13 22 8 12 3" />
      <path d="M6 10.5v5c0 3 2.7 5 6 5s6-2 6-5v-5" />
      <path d="M22 8v8" />
    </svg>
  ),
  '/healthcare': (
    <svg viewBox="0 0 24 24" className="pillar-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 3v6a7.5 7.5 0 0 0 15 0V3" />
      <path d="M12 16.5v4" />
      <circle cx="12" cy="21.5" r="1.5" fill="currentColor" />
      <circle cx="4.5" cy="3" r="1.2" fill="currentColor" />
      <circle cx="19.5" cy="3" r="1.2" fill="currentColor" />
    </svg>
  ),
  '/poverty-enrichment': (
    <svg viewBox="0 0 24 24" className="pillar-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="7" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      <circle cx="17" cy="8" r="3" />
      <path d="M14.5 15.5c1.2-.8 2.6-1.3 4-1.3 2.5 0 4.5 2 4.5 5.8" />
    </svg>
  ),
  '/women-empowerment': (
    <svg viewBox="0 0 24 24" className="pillar-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="5" />
      <line x1="12" y1="13" x2="12" y2="21" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  )
};

export default function Pillars() {
  return (
    <section className="wrap pillars-section" id="pillars">
      <div className="between">
        <div>
          <small className="eyebrow">OUR INITIATIVES</small>
          <h2>Four Pillars of Change</h2>
          <div className="pillars-gold-bar" aria-hidden="true" />
        </div>
        <Link to="/education" className="btn ghost sm">
          Explore All Initiatives →
        </Link>
      </div>

      <div className="grid4">
        {INITIATIVES.map((item) => (
          <Link to={item.path} className="card pillar" key={item.path}>
            <div
              className="pimg"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span className="ico" aria-hidden="true">
                {PILLAR_ICONS[item.path] || item.icon}
              </span>
            </div>
            <div className="pb">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span className="more">Learn More →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

