import { useEffect, useState, useCallback } from 'react';
import {
  ALL_GALLERY_PHOTOS,
  GALLERY_ROW_ONE,
  GALLERY_ROW_TWO,
} from '@/data/educationData';

function FilmstripRow({ items, direction, paused, onSelectPhoto }) {
  return (
    <div className={`edu-marquee-row ${paused ? 'is-paused' : ''}`}>
      <div className={`edu-marquee-track ${direction}`}>
        {[0, 1].map((copyIdx) => (
          <div
            key={copyIdx}
            className="edu-marquee-set"
            aria-hidden={copyIdx === 1}
          >
            {items.map((photo, idx) => (
              <button
                key={`${copyIdx}-${photo.id}`}
                type="button"
                tabIndex={copyIdx === 1 ? -1 : 0}
                className={`edu-film-card variant-${photo.variant} tilt-${idx % 2 === 0 ? 'left' : 'right'}`}
                onClick={() => onSelectPhoto(photo.id)}
                aria-label={copyIdx === 0 ? `View photo: ${photo.title}` : undefined}
              >
                <div className="edu-film-media">
                  <img
                    src={photo.src}
                    alt={copyIdx === 0 ? photo.alt : ''}
                    loading="lazy"
                    style={{ objectPosition: photo.objectPosition || 'center center' }}
                  />
                  <span className="edu-film-expand-pill" aria-hidden="true">
                    View Story ↗
                  </span>
                </div>
                <div className="edu-film-caption">
                  <span className="edu-film-cat">{photo.category}</span>
                  <h3 className="edu-film-title">{photo.title}</h3>
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EducationGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openPhoto = useCallback((photoId) => {
    const idx = ALL_GALLERY_PHOTOS.findIndex((p) => p.id === photoId);
    if (idx !== -1) {
      setActiveIndex(idx);
    }
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const stepPhoto = useCallback((delta) => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      const total = ALL_GALLERY_PHOTOS.length;
      return (prev + delta + total) % total;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') stepPhoto(1);
      if (e.key === 'ArrowLeft') stepPhoto(-1);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeIndex, closeLightbox, stepPhoto]);

  const activePhoto = activeIndex !== null ? ALL_GALLERY_PHOTOS[activeIndex] : null;

  return (
    <section className="edu-gallery-section" aria-labelledby="edu-culture-title">
      <div className="wrap">
        <div className="edu-section-header edu-gallery-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            CELEBRATING LEARNING, CULTURE &amp; ACHIEVEMENTS
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>

          <h2 id="edu-culture-title" className="edu-section-title">
            Honouring Heritage. Building Confidence.
          </h2>

          <p className="edu-section-subtitle">
            Education also means understanding our roots, appreciating our culture, and learning to respect the diversity around us. Through cultural celebrations, national festivals, school events, and student activities, children get opportunities to participate, express themselves, and develop a sense of belonging—helping them build confidence while appreciating the traditions and values that shape their communities.
          </p>
        </div>
      </div>

      {/* Dual-Row Counter-Scrolling Kinetic Filmstrip */}
      <div className="edu-filmstrip-viewport">
        <FilmstripRow
          items={GALLERY_ROW_ONE}
          direction="dir-left"
          paused={activeIndex !== null}
          onSelectPhoto={openPhoto}
        />
        <FilmstripRow
          items={GALLERY_ROW_TWO}
          direction="dir-right"
          paused={activeIndex !== null}
          onSelectPhoto={openPhoto}
        />
      </div>

      {/* Interactive Lightbox Modal */}
      {activePhoto && (
        <div
          className="edu-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edu-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="edu-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="edu-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close photo viewer"
            >
              ✕
            </button>

            <div className="edu-lightbox-stage">
              <button
                type="button"
                className="edu-lightbox-nav prev"
                onClick={() => stepPhoto(-1)}
                aria-label="Previous photo"
              >
                ‹
              </button>

              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="edu-lightbox-img"
              />

              <button
                type="button"
                className="edu-lightbox-nav next"
                onClick={() => stepPhoto(1)}
                aria-label="Next photo"
              >
                ›
              </button>
            </div>

            <div className="edu-lightbox-meta">
              <div>
                <span className="edu-lightbox-cat">{activePhoto.category}</span>
                <h3 id="edu-lightbox-title" className="edu-lightbox-title">
                  {activePhoto.title}
                </h3>
                <p className="edu-lightbox-desc">{activePhoto.caption}</p>
              </div>
              <span className="edu-lightbox-count">
                {activeIndex + 1} / {ALL_GALLERY_PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
