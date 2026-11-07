import { Link } from 'react-router-dom';
import { STORIES } from '@/data';

export default function Stories() {
  return (
    <section className="wrap stories-section">
      <div className="stories-intro">
        <small className="eyebrow">STORIES OF HOPE</small>
        <h2>Real People. Real Stories.</h2>
        <p>
          Meet the individuals whose lives have been positively impacted by your support.
        </p>
        <Link to="/events" className="btn ghost sm">
          View All Stories →
        </Link>
      </div>

      <div className="stories-cards">
        {STORIES.map((story) => (
          <div className="card story" key={story.id}>
            <div
              className="simg"
              style={{ backgroundImage: `url(${story.img})` }}
              role="img"
              aria-label={story.title}
            />
            <div className="pb">
              <h4>{story.title}</h4>
              <em>“{story.quote}”</em>
              <div className="story-link-wrap">
                <Link to={story.link} className="more">
                  Read Full Story →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative heart outline doodle */}
      <svg className="stories-heart-bg" viewBox="0 0 160 140" fill="none" aria-hidden="true">
        <path
          d="M80 40 C60 10 20 20 20 60 C20 95 70 125 80 135 C90 125 140 95 140 60 C140 20 100 10 80 40 Z"
          stroke="#b8802f"
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />
        <path
          d="M105 35 C90 15 65 22 65 48 C65 72 100 95 105 102 C110 95 145 72 145 48 C145 22 120 15 105 35 Z"
          stroke="#b8802f"
          strokeWidth="0.9"
          strokeOpacity="0.2"
        />
      </svg>
    </section>
  );
}

