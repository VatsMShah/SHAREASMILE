import { useEffect, useState, useCallback } from 'react';
import { WOMEN_GALLERY } from '@/data/womenData';

const ROW_ONE = WOMEN_GALLERY.slice(0, 4);
const ROW_TWO = WOMEN_GALLERY.slice(4, 8);

function FilmstripRow({ items, direction, onSelectPhoto }) {
  return (
    <div className="edu-marquee-row">
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
                    decoding="async"
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

export default function WomenGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openPhoto = useCallback((photoId) => {
    const idx = WOMEN_GALLERY.findIndex((p) => p.id === photoId);
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
      const total = WOMEN_GALLERY.length;
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

  const activePhoto = activeIndex !== null ? WOMEN_GALLERY[activeIndex] : null;

  return (
    <section className="women-gallery-section" aria-labelledby="women-gallery-title">
      <div className="wrap">
        <div className="edu-section-header edu-gallery-header">
          <span className="about-section-eyebrow">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            VOICES OF INDEPENDENCE
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </span>

          <h2 id="women-gallery-title" className="edu-section-title">
            Dignity, Craftsmanship &amp; Community on the Ground
          </h2>

          <p className="edu-section-subtitle">
            Authentic moments from the Mahila Gruh Udyog factory in Parli — capturing the dedication, teamwork, daily meals, and joy of rural women building self-reliant futures.
          </p>
        </div>
      </div>

      <div className="edu-filmstrip-viewport">
        <FilmstripRow
          items={ROW_ONE}
          direction="dir-left"
          onSelectPhoto={openPhoto}
        />
        <FilmstripRow
          items={ROW_TWO}
          direction="dir-right"
          onSelectPhoto={openPhoto}
        />
      </div>

      {activePhoto && (
        <div
          className="edu-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="women-lightbox-title"
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
              aria-label="Close photo preview"
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
                <h3 id="women-lightbox-title" className="edu-lightbox-title">
                  {activePhoto.title}
                </h3>
                <p className="edu-lightbox-desc">{activePhoto.caption}</p>
              </div>
              <span className="edu-lightbox-count">
                {activeIndex + 1} / {WOMEN_GALLERY.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
