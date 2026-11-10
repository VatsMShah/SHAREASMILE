import { useState } from 'react';

/**
 * AboutVideo Component
 * High-performance YouTube cinema player with custom poster facade (0 ms initial page lag).
 * Official YouTube Link: https://youtu.be/HIeXZHP9DUM?si=3jmT0iCkSpsct-xy
 * Widescreen cinema sizing (1180px-1200px max width).
 */
const YOUTUBE_ID = 'HIeXZHP9DUM';

export default function AboutVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoSrc = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <section className="about-video-section" aria-labelledby="about-video-title">
      <div className="wrap about-video-wrap">
        <div className="about-video-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            OUR JOURNEY ON THE GROUND
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="about-video-title" className="about-section-title">
            Witness Our Impact in Motion
          </h2>
          <p className="about-section-subtitle">
            A glimpse into the lives touched, the classrooms energized, and the communities empowered through our on-the-ground initiatives.
          </p>
        </div>

        {/* Expanded 16:9 Cinema Spotlight Frame (1180px-1200px max width) */}
        <div className="about-video-cinema-container">
          <div className="about-video-frame">
            {!isPlaying ? (
              <div className="about-video-poster">
                <img
                  src="/images/hopeful-classroom.png"
                  alt="Share a Smile documentary highlight preview"
                  className="about-video-poster-img"
                  loading="lazy"
                />
                <div className="about-video-scrim" />
                <button
                  type="button"
                  className="about-video-play-btn"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Share a Smile official highlight video"
                >
                  <span className="play-btn-pulse" />
                  <span className="play-btn-circle">
                    <svg viewBox="0 0 24 24" className="play-svg" fill="currentColor" aria-hidden="true">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </span>
                  <span className="play-btn-label">Watch Full Video</span>
                </button>
              </div>
            ) : (
              <div className="about-video-embed">
                <iframe
                  src={videoSrc}
                  title="Share A Smile Official Highlight Video"
                  className="about-video-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>

        {/* Highlights Ribbon below Cinema Player */}
        <div className="about-video-highlights">
          <div className="video-highlight-item">
            <div className="video-highlight-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <h4>Rural Classrooms</h4>
              <p>Direct tuition grants, learning tools, and school facilities.</p>
            </div>
          </div>

          <div className="video-highlight-item">
            <div className="video-highlight-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <h4>Preventive Healthcare</h4>
              <p>Accessible medical camps, health screenings, and diagnostics.</p>
            </div>
          </div>

          <div className="video-highlight-item">
            <div className="video-highlight-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <h4>Self-Reliance for Women</h4>
              <p>Vocational skills, financial independence, and community respect.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
