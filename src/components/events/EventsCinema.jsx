import { useState } from 'react';
import { EVENT_VIDEOS } from '@/data/eventsData';

export default function EventsCinema() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeVideo = EVENT_VIDEOS[selectedIdx];
  const videoSrc = `https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`;

  const handleSelectVideo = (idx) => {
    setSelectedIdx(idx);
    setIsPlaying(true); // Automatically play selected video
  };

  return (
    <section className="events-cinema-section" aria-labelledby="events-cinema-title">
      <div className="wrap events-cinema-wrap">
        <div className="edu-section-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            CINEMA &amp; DOCUMENTARY THEATER
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>
          <h2 id="events-cinema-title" className="edu-section-title">
            Stories of Hope &amp; Change: Official Video Showcase
          </h2>
          <p className="edu-section-subtitle">
            Experience our mission through authentic documentary films — featuring annual gala celebrations, inspiring personal stories of resilience, and landmark healthcare projects.
          </p>
        </div>

        {/* Video Selector Tabs / Reel */}
        <div className="video-selector-reel" role="tablist" aria-label="Select a video documentary to watch">
          {EVENT_VIDEOS.map((video, idx) => {
            const isCurrent = idx === selectedIdx;
            return (
              <button
                key={video.id}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                className={`video-selector-card ${isCurrent ? 'is-active' : ''}`}
                onClick={() => handleSelectVideo(idx)}
              >
                <div className="video-selector-thumb-wrap">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="video-selector-thumb"
                  />
                  <span className="video-duration-pill">{video.duration}</span>
                  {isCurrent && isPlaying ? (
                    <span className="video-playing-indicator">
                      <span className="playing-dot" /> Now Playing
                    </span>
                  ) : (
                    <span className="video-play-mini-btn" aria-hidden="true">▶</span>
                  )}
                </div>

                <div className="video-selector-info">
                  <span className="video-selector-badge">{video.badge}</span>
                  <h3 className="video-selector-title">{video.title}</h3>
                  <span className="video-selector-cat">{video.category}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 16:9 Cinema Spotlight Frame */}
        <div className="about-video-cinema-container events-theater-container">
          <div className="about-video-frame">
            {!isPlaying ? (
              <div className="about-video-poster">
                <img
                  src={activeVideo.poster}
                  alt={activeVideo.title}
                  className="about-video-poster-img"
                  loading="lazy"
                />
                <div className="about-video-scrim" />
                <button
                  type="button"
                  className="about-video-play-btn"
                  onClick={() => setIsPlaying(true)}
                  aria-label={`Play ${activeVideo.title}`}
                >
                  <span className="play-btn-pulse" />
                  <span className="play-btn-circle">
                    <svg viewBox="0 0 24 24" className="play-svg" fill="currentColor" aria-hidden="true">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </span>
                  <span className="play-btn-label">Watch: {activeVideo.tag}</span>
                </button>
              </div>
            ) : (
              <div className="about-video-embed">
                <iframe
                  key={activeVideo.id}
                  src={videoSrc}
                  title={activeVideo.title}
                  className="about-video-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>

        {/* Active Video Meta Info & Highlights Bar */}
        <div className="theater-meta-bar">
          <div className="theater-meta-text">
            <span className="theater-meta-tag">{activeVideo.tag} • {activeVideo.duration}</span>
            <h3 className="theater-meta-title">{activeVideo.title}</h3>
            <p className="theater-meta-desc">{activeVideo.description}</p>
          </div>
          <div className="theater-meta-actions">
            <a
              href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost sm theater-yt-btn"
            >
              Watch on YouTube ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
