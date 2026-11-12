import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SLIDES, IMG, DONATION_URL } from '@/data';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="hero">
      {/* Background slide images */}
      <div className="hero-slides">
        {SLIDES.map((slideNum, idx) => (
          <div
            key={slideNum}
            className={`slide ${idx === current ? 'on' : ''}`}
            style={{ backgroundImage: `url(${IMG(slideNum)})` }}
            aria-hidden={idx !== current}
          />
        ))}
      </div>

      {/* Hero overlay gradient with warm peachy-tan left tone transitioning to transparent */}
      <div className="hero-fade" />

      {/* Navigation arrows: Thickened and centered SVGs */}
      <button
        className="arr l"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="arr r"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Hero text content container */}
      <div className="hero-content">
        <div className="hero-txt">
          <small className="eyebrow">SHARING IS HUMAN</small>
          <h1>
            Together We<br />
            Create Brighter<br />
            Futures
          </h1>
          <p>
            We support underprivileged communities with access to education, healthcare, and empowerment opportunities — because every child, every woman, and every family deserves a chance to thrive.
          </p>

          <div className="hero-btns row">
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn solid"
            >
              <span className="btn-heart">♡</span> Donate Now
            </a>
            <a href="#pillars" className="btn ghost">
              Explore Our Initiatives <span className="btn-arrow">→</span>
            </a>
          </div>

          <p className="tax">
            <svg className="tax-shield-svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#b8802f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2.5 L19.5 5.5 V11.2 C19.5 16.2 16.3 20.3 12 21.8 C7.7 20.3 4.5 16.2 4.5 11.2 V5.5 Z" />
              <path d="M8.8 11.8 L11 14 L15.5 9.5" strokeWidth="2.2" />
            </svg>
            <span>Your donation is tax-deductible in the USA</span>
          </p>
        </div>
      </div>

      {/* Script handwriting accent in Allura Regular 400 */}
      <div className="script hero-sc">
        Small acts<br />
        create big<br />
        change <span className="script-heart">♡</span>
      </div>

      {/* Dots navigation placed ON the image card above the curve */}
      <div className="dots" role="tablist" aria-label="Hero slider pagination">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === current ? 'on' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            role="tab"
            aria-selected={idx === current}
          />
        ))}
      </div>

      {/* Semicircle curve starting from parallel end point of tax sentence to rightmost end */}
      <div className="hero-bottom-curve">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="wave-svg"
          aria-hidden="true"
        >
          <path
            d="M 0,70 L 480,70 C 620,70 780,180 960,180 C 1140,180 1300,70 1440,70 L 1440,200 L 0,200 Z"
            fill="var(--cream)"
            stroke="rgba(184, 128, 47, 0.28)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}

