import { VISION_PILLARS } from '@/data/womenData';

export default function WomenStory() {
  return (
    <section className="women-story-section" aria-labelledby="women-story-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            CHANGING LIVES, ONE WOMAN AT A TIME
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="women-story-title" className="edu-section-title">
            Employment That Creates Independence
          </h2>
          <p className="edu-section-subtitle">
            Providing employment is about far more than a salary. It gives women the confidence to stand on their own feet, provide for their children, and shape their own destinies.
          </p>
        </div>

        <div className="women-story-grid">
          {/* Left: Devi's Story Spotlight Card */}
          <div className="women-quote-card">
            <div className="women-quote-top">
              <span className="women-quote-badge">DEVI'S STORY</span>
              <span className="women-quote-loc">Parli Village • Maharashtra</span>
            </div>

            <blockquote className="women-quote-body">
              “My husband passed away and left me with two kids — I didn't know what to do. At Chaakri, I feel safe and am able to raise my family with dignity...”
            </blockquote>

            <cite className="women-quote-author">
              <strong>Devi Gupta</strong>
              <span>Chaakri Artisan &amp; Single Mother</span>
            </cite>

            <p className="women-quote-narrative">
              Devi's journey reflects the life-altering difference that a safe working environment and regular wages make. Faced with sudden hardship, she found not only employment, but respect, stability, and hope for her children's future.
            </p>
          </div>

          {/* Right: 4 Vision Pillars */}
          <div className="women-vision-card">
            <div className="women-vision-header">
              <span className="badge-tag">OUR COMMITMENT</span>
              <h3 className="women-vision-title">Our Vision for Women</h3>
              <p className="women-vision-sub">
                A future where every rural woman has the tools and opportunities to grow and lead.
              </p>
            </div>

            <div className="women-vision-list">
              {VISION_PILLARS.map((item, idx) => (
                <div key={item.title} className="women-vision-row">
                  <div className="women-vision-num">0{idx + 1}</div>
                  <div className="women-vision-text">
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
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
