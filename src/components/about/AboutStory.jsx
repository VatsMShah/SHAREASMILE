export default function AboutStory() {
  return (
    <section className="about-story-section" aria-labelledby="about-story-title">
      <div className="wrap about-story-wrap">
        <div className="about-story-grid">
          {/* Left: Narrative Story */}
          <div className="about-story-content">
            <span className="about-section-eyebrow">OUR ORIGIN</span>
            <h2 id="about-story-title" className="about-section-title">
              Why Share A Smile Was Born
            </h2>
            <div className="about-story-body">
              <p>
                Share A Smile was founded in New Jersey by a close-knit group of professionals and community leaders who shared a common conviction: no child’s future should be dictated by where they were born, and no family should suffer from preventable hardship simply because they live in a remote village.
              </p>
              <p>
                During visits to rural regions across India, our founders witnessed a stark reality—gifted young girls leaving school due to lack of basic supplies, elderly villagers losing their sight to easily treatable cataracts, and entire communities left vulnerable during seasonal shocks.
              </p>
              <p>
                Rather than creating a bloated, bureaucratic charity with heavy overhead, Share A Smile was structured as a lean, direct-impact grant-making foundation. We partner directly with thoroughly vetted grassroots schools, clinical camps, and vocational centers on the ground—ensuring that every donated dollar directly fuels scholarships, medicine, and warm meals.
              </p>
            </div>

            <div className="about-story-quote">
              <span className="quote-mark">“</span>
              <p>
                Sharing is not an act of charity—it is an affirmation of our shared humanity. When we give a child the chance to learn, we change the destiny of an entire family.
              </p>
            </div>
          </div>

          {/* Right: Framed Authentic Photo */}
          <div className="about-story-visual">
            <div className="about-story-card">
              <img
                src="/images/about-mission.png"
                alt="Share A Smile education and community impact in action"
                className="about-story-img"
              />
              <div className="about-story-caption">
                <span className="caption-tag">GRASSROOTS PARTNERSHIPS</span>
                <p>Supporting rural schools and medical camps across 150+ villages annually.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
