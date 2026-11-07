import { Link } from 'react-router-dom';
import { IMG } from '@/data';

export const Eyebrow = ({ children }) => (
  <small className="eyebrow">{children}</small>
);

export const PageHead = ({ eyebrow, title, intro, img }) => (
  <section
    className="phead"
    style={{
      backgroundImage: `linear-gradient(90deg, rgba(251, 245, 234, 0.95) 35%, rgba(251, 245, 234, 0.65)), url(${IMG(img)})`
    }}
  >
    <div className="phead-wrap">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {intro && <p className="phead-intro">{intro}</p>}
    </div>
  </section>
);

export const Sec = ({ title, sub, children, alt }) => (
  <section className={`sec ${alt ? 'alt' : ''}`}>
    <div className="wrap">
      {title && <h2>{title}</h2>}
      {sub && <p className="sub">{sub}</p>}
      {children}
    </div>
  </section>
);

export const Chips = ({ items }) => (
  <div className="chips">
    {items.map((x) => (
      <span key={x}>{x}</span>
    ))}
  </div>
);

export const Ul = ({ items }) => (
  <ul className="ul">
    {items.map((x) => (
      <li key={x}>{x}</li>
    ))}
  </ul>
);

export const Cards = ({ items }) => (
  <div className="grid3">
    {items.map(([t, d]) => (
      <div className="card pad" key={t}>
        <h3>{t}</h3>
        <p>{d}</p>
      </div>
    ))}
  </div>
);

export const Nums = ({ items }) => (
  <div className="nums">
    {items.map(([n, l]) => (
      <div key={l}>
        <b>{n}</b>
        <p>{l}</p>
      </div>
    ))}
  </div>
);

export const Cta = ({ children }) => (
  <div className="cta">
    <p>{children}</p>
    <Link to="/contact" className="btn solid">
      ♡ Donate
    </Link>
  </div>
);

