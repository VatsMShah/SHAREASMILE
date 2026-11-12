export function PovertyIcon({ name, className = '' }) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.85',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true',
  };

  switch (name) {
    case 'tiffin':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="7" rx="8" ry="3" />
          <path d="M4 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7" />
          <path d="M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" />
          <path d="M12 2v2" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'fruit':
      return (
        <svg {...props}>
          <path d="M12 2c1 2 2 3.5 2 5.5A6.5 6.5 0 1 1 5.5 14c0-4 4.5-8.5 6.5-12z" />
          <path d="M12 2v4" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...props}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}
