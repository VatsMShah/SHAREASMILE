import { Link } from 'react-router-dom';

export default function AboutSectionV2() {
  return (
    <section className="about-v2-section" id="about">
      <div className="wrap about-v2-wrap">
        {/* Left Column: Visual Storytelling */}
        <div className="about-v2-media">
          <div className="about-v2-img-container">
            <img
              src="/images/about-mission.png"
              alt="Healthcare volunteers and community members supported by Share a Smile"
              className="about-v2-img"
              loading="lazy"
            />
            {/* Floating Trust Pill Badge */}
            <div className="about-v2-badge">
              <span className="badge-bullet" aria-hidden="true">★</span>
              <span>100% Direct Community Impact</span>
            </div>
          </div>
        </div>

        {/* Right Column: Structured Narrative */}
        <div className="about-v2-content">
          <small className="eyebrow">ABOUT SHARE A SMILE</small>
          <h2>A Mission Rooted in Compassion</h2>
          
          <p className="about-v2-lead">
            Share a Smile is a registered 501(c)(3) nonprofit organization committed to creating sustainable, generational change through education, medical care, poverty alleviation, and women empowerment.
          </p>

          <p className="about-v2-p">
            By partnering directly with grassroots communities and local schools across rural India, we provide the essential resources, clinical support, and vocational skills needed to break cycles of poverty and spark lasting hope.
          </p>

          {/* Integrated Editorial Quote Card */}
          <div className="about-v2-quote-box">
            <div className="quote-mark" aria-hidden="true">“</div>
            <p className="script about-v2-script">
              A little kindness can make a big difference. <span className="quote-heart">♡</span>
            </p>
          </div>

          <div className="about-v2-btns row">
            <Link to="/about" className="btn ghost sm">
              Learn More About Us →
            </Link>
            <Link to="/contact" className="btn solid sm">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

