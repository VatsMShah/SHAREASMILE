export default function EducationTransforming() {
  return (
    <section className="edu-transform-section" aria-labelledby="edu-transform-title">
      <div className="wrap">
        <div className="edu-transform-grid">
          {/* Left Column: Core Story & Parli School Overview */}
          <div className="edu-transform-content">
            <span className="about-section-eyebrow edu-eyebrow-left">
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
              TRANSFORMING EDUCATION IN RURAL INDIA
              <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            </span>

            <h2 id="edu-transform-title" className="edu-section-title edu-left">
              Bringing Quality Learning Closer to Every Child
            </h2>

            <p className="edu-lead-quote">
              Education is more than learning from books. It is the foundation on which children build confidence, discover their potential, and create a better future.
            </p>

            <div className="edu-prose">
              <p>
                At <strong>Share a Smile USA</strong>, we believe every child deserves access to quality education, regardless of their background or circumstances. Through our support for rural education initiatives, we work towards creating an environment where children can learn, explore, and grow with dignity.
              </p>
              <p>
                Our supported school in <strong>Parli, Maharashtra, India</strong>, stands as a centre of learning and opportunity for children in the surrounding rural communities. As the <strong>first English-medium school in the locality</strong>, it strives to provide educational opportunities that meet the aspirations of children and families who may otherwise have limited access to quality schooling.
              </p>
              <p>
                Beyond academics, the school encourages students to participate in extracurricular activities, develop practical skills, and discover their individual strengths. Every child deserves an education that prepares them not just for examinations, but for life.
              </p>
            </div>

            <div className="edu-highlight-strip">
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Parli, Maharashtra</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>First Local English-Medium School</span>
              </div>
              <div className="edu-strip-chip">
                <span className="edu-strip-dot" />
                <span>Holistic Student Development</span>
              </div>
            </div>
          </div>

          {/* Right Column: Arched Portal + Staggered Landscape Duo Photo Frame */}
          <div className="edu-transform-visual">
            <div className="edu-duo-frames">
              <div className="edu-duo-backdrop" aria-hidden="true" />

              <figure className="edu-duo-arch">
                <div className="edu-duo-arch-inner">
                  <img
                    src="/images/smiling-schoolgirl.png"
                    alt="Confident student holding school notebooks"
                  />
                </div>
                <figcaption className="edu-duo-ribbon">
                  Parli English-Medium School
                </figcaption>
              </figure>

              <figure className="edu-duo-corridor">
                <div className="edu-duo-corridor-inner">
                  <img
                    src="/images/IT7A7079-edit.jpg"
                    alt="Smiling schoolgirls walking along the Parli school corridor"
                  />
                </div>
                <figcaption className="edu-duo-subtag">
                  <strong>Education for Life</strong>
                  <span>Beyond Textbooks &amp; Exams</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
