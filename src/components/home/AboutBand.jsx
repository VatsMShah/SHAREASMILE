import { Link } from 'react-router-dom';

export default function AboutBand() {
  return (
    <section className="about-band">
      <div className="wrap ab-wrap">
        <div className="ab-img-wrap">
          <img
            src="/images/about-mission.png"
            alt="Healthcare volunteers and community members supported by Share a Smile"
            className="ab-brush-img"
          />
        </div>

        <div className="ab-content">
          <small className="eyebrow">ABOUT US</small>
          <h2>A Mission Rooted<br />in Compassion</h2>
          <p>
            Share a Smile is a 501(c)(3) nonprofit organization committed to creating sustainable change through education, healthcare, poverty alleviation and women empowerment.
          </p>
          <Link to="/about" className="btn ghost sm">
            Learn More About Us →
          </Link>
        </div>

        <div className="ab-quote-wrap">
          <div className="script quote">
            “ A little kindness<br />
            can make a big<br />
            difference. ” <span className="quote-heart">♡</span>
          </div>
        </div>
      </div>
    </section>
  );
}

