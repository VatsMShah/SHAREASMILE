import { useState, useEffect, useRef } from 'react';

function formatIndianNumber(num) {
  const str = Math.floor(num).toString();
  if (str.length <= 3) return str;
  const lastThree = str.substring(str.length - 3);
  const otherNumbers = str.substring(0, str.length - 3);
  const formattedOther = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return formattedOther + ',' + lastThree;
}

function AnimatedStat({ target, suffix = '', label, icon, isIndianFormat = false, isTriggered }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;

    let startTime = null;
    let animationFrameId = null;
    const duration = 2000; // 2 seconds smooth count-up

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setValue(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isTriggered, target]);

  const displayString = isIndianFormat
    ? formatIndianNumber(value)
    : value.toLocaleString('en-US');

  return (
    <div className="stat">
      <span className="stat-ico" aria-hidden="true">
        {icon}
      </span>
      <b className="stat-num">{displayString}{suffix}</b>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function ImpactStats() {
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHasTriggered(true);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-section" ref={sectionRef}>
      <div className="impact">
        <div className="impact-head">
          <small className="eyebrow">OUR IMPACT</small>
          <h2>Real Change.<br />Lasting Impact.</h2>
          <div className="impact-gold-bar" aria-hidden="true" />
        </div>

        <div className="stats-list">
          {/* Stat 1: Students Educated */}
          <AnimatedStat
            target={900}
            suffix="+"
            label={<>Students Educated<br />Annually</>}
            isIndianFormat={false}
            isTriggered={hasTriggered}
            icon={
              <svg viewBox="0 0 24 24" className="stat-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 3 2 8 12 13 22 8 12 3" />
                <path d="M6 10.5v5c0 3 2.7 5 6 5s6-2 6-5v-5" />
                <path d="M22 8v8" />
              </svg>
            }
          />

          {/* Stat 2: Lives Impacted */}
          <AnimatedStat
            target={40000}
            suffix="+"
            label="Lives Impacted"
            isIndianFormat={false}
            isTriggered={hasTriggered}
            icon={
              <svg viewBox="0 0 24 24" className="stat-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="7" r="3.5" />
                <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
                <circle cx="17" cy="8" r="3" />
                <path d="M14.5 15.5c1.2-.8 2.6-1.3 4-1.3 2.5 0 4.5 2 4.5 5.8" />
              </svg>
            }
          />

          {/* Stat 3: Villages Reached */}
          <AnimatedStat
            target={150}
            suffix="+"
            label="Villages Reached"
            isIndianFormat={false}
            isTriggered={hasTriggered}
            icon={
              <svg viewBox="0 0 24 24" className="stat-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            }
          />

          {/* Stat 4: Meals Provided */}
          <AnimatedStat
            target={1050000}
            suffix="+"
            label="Meals Provided"
            isIndianFormat={true}
            isTriggered={hasTriggered}
            icon={
              <svg viewBox="0 0 24 24" className="stat-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11c0 5 4 8 9 8s9-3 9-8H3z" />
                <line x1="2" y1="11" x2="22" y2="11" />
                <path d="M8 4c0 2 1 3 1 5" />
                <path d="M12 2c0 3 1 4 1 7" />
                <path d="M16 4c0 2 1 3 1 5" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

