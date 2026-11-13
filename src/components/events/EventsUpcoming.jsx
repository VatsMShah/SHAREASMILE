import { Link } from 'react-router-dom';
import { UPCOMING_EVENTS } from '@/data/eventsData';

export default function EventsUpcoming() {
  return (
    <section className="events-upcoming-section" aria-labelledby="upcoming-events-title">
      <div className="wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            JOIN OUR COMMUNITY
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="upcoming-events-title" className="edu-section-title">
            Upcoming Gatherings &amp; Community Drives
          </h2>
          <p className="edu-section-subtitle">
            Be part of our mission in action. Join an upcoming fundraiser, volunteer drive, or village health camp to connect with like-minded changemakers and support underserved communities.
          </p>
        </div>

        <div className="events-upcoming-grid">
          {UPCOMING_EVENTS.map((event) => (
            <article key={event.id} className="event-card">
              <div className="event-card-left">
                <div className="event-date-badge">
                  <span className="event-date-month">{event.date.month}</span>
                  <strong className="event-date-day">{event.date.day}</strong>
                  <span className="event-date-year">{event.date.year}</span>
                </div>
                <span className="event-tag-pill">{event.tag}</span>
              </div>

              <div className="event-card-main">
                <div className="event-meta-top">
                  <span className="event-category-label">{event.category}</span>
                </div>

                <h3 className="event-card-title">{event.title}</h3>

                <div className="event-meta-details">
                  <div className="event-meta-item">
                    <svg viewBox="0 0 24 24" className="event-meta-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{event.time}</span>
                  </div>

                  <div className="event-meta-item">
                    <svg viewBox="0 0 24 24" className="event-meta-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="event-card-desc">{event.description}</p>

                <div className="event-card-action">
                  <Link to={event.actionLink} className="btn solid sm">
                    {event.actionText} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
