import { Link } from 'react-router-dom';
import { STORIES } from '@/data';

const STORY_TAGS = {
  1: 'Education Beneficiary',
  2: "Women's Empowerment"
};

export default function StoriesSectionV2() {
  return (
    <section className="stories-v2-section" id="stories">
      <div className="wrap">
        {/* Industry Standard Top Header */}
        <div className="section-head-bar">
          <div className="head-text">
            <small className="eyebrow">STORIES OF HOPE</small>
            <h2>Real People. Real Stories.</h2>
            <p className="head-desc">
              Personal journeys of perseverance, education, and resilience made possible through your compassionate support.
            </p>
          </div>
          <div className="head-action">
            <Link to="/events" className="btn ghost sm">
              View All Stories →
            </Link>
          </div>
        </div>

        {/* 2 Featured Story Cards Spanning Full Width */}
        <div className="stories-v2-grid">
          {STORIES.map((story) => (
            <div className="story-v2-card" key={story.id}>
              <div
                className="story-v2-img"
                style={{ backgroundImage: `url(${story.img})` }}
                role="img"
                aria-label={story.title}
              >
                <span className="story-v2-tag">
                  {STORY_TAGS[story.id] || 'Community Story'}
                </span>
              </div>

              <div className="story-v2-body">
                <h4>{story.title}</h4>
                <div className="story-v2-quote-wrap">
                  <span className="quote-icon" aria-hidden="true">“</span>
                  <p className="story-v2-quote">{story.quote}”</p>
                </div>
                <div className="story-v2-link-row">
                  <Link to={story.link} className="story-v2-link">
                    Read Full Story <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
