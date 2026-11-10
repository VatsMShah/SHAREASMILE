import { useState } from 'react';

/**
 * AboutVideo Component
 * Supports both YouTube embed (zero lag, adaptive streaming) and direct Google Drive fallback.
 * When the user provides their YouTube link/ID, simply update YOUTUBE_ID below.
 */
const YOUTUBE_ID = ''; // Paste YouTube video ID here (e.g. 'dQw4w9WgXcQ')
const GDRIVE_PREVIEW_URL = 'https://drive.google.com/file/d/1LsgTrH78aIHmu6xAZy6f1RLVvjtrLyP3/preview';

export default function AboutVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Determine active video source
  const videoSrc = YOUTUBE_ID
    ? `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`
    : GDRIVE_PREVIEW_URL;

  return (
    <section className="about-video-section" aria-labelledby="about-video-title">
      <div className="wrap about-video-wrap">
        <div className="about-video-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            OUR STORY IN MOTION
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="about-video-title" className="about-section-title">
            See the Smiles, Feel the Impact
          </h2>
          <p className="about-section-subtitle">
            Watch how your support translates into real classrooms, nourishing meals, and life-changing opportunities for rural children and families.
          </p>
        </div>

        {/* 16:9 Cinema Spotlight Frame */}
        <div className="about-video-frame">
          {!isPlaying ? (
            <div className="about-video-poster">
              <img
                src="/images/hopeful-classroom.png"
                alt="Share A Smile community documentary preview"
                className="about-video-poster-img"
              />
              <div className="about-video-scrim" />
              <button
                type="button"
                className="about-video-play-btn"
                onClick={() => setIsPlaying(true)}
                aria-label="Play Share A Smile documentary video"
              >
                <span className="play-btn-pulse" />
                <span className="play-btn-circle">
                  <svg viewBox="0 0 24 24" className="play-svg" fill="currentColor" aria-hidden="true">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </span>
                <span className="play-btn-label">Watch Our Story</span>
              </button>
            </div>
          ) : (
            <div className="about-video-embed">
              <iframe
                src={videoSrc}
                title="Share A Smile Documentary Video"
                className="about-video-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Key Highlights Ribbon below player */}
        <div className="about-video-highlights">
          <div className="video-highlight-item">
            <div className="video-highlight-icon">🎓</div>
            <div>
              <h4>Rural Classrooms</h4>
              <p>Direct tuition grants, uniforms, and digital learning tools.</p>
            </div>
          </div>

          <div className="video-highlight-item">
            <div className="video-highlight-icon">🍲</div>
            <div>
              <h4>10,50,000+ Hot Meals</h4>
              <p>Daily nutritional support for malnourished families.</p>
            </div>
          </div>

          <div className="video-highlight-item">
            <div className="video-highlight-icon">👩</div>
            <div>
              <h4>Women Empowerment</h4>
              <p>Vocational sewing, computer training, and micro-skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
