export function HealthcareIcon({ name, className = '' }) {
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
    case 'camp':
      return (
        <svg {...props}>
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
          <path d="M12 7v10" />
          <path d="M7 12h10" />
        </svg>
      );
    case 'heartbeat':
    case 'activity':
      return (
        <svg {...props}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...props}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'stomach':
      return (
        <svg {...props}>
          <path d="M12 4c-3 0-5 2-5 5v5c0 3 2 5 5 5s5-2 5-5V9c0-3-2-5-5-5z" />
          <path d="M9 11c1-1 3-1 4 0" />
          <path d="M11 15c1 1 2 1 3 0" />
        </svg>
      );
    case 'smile':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
        </svg>
      );
    case 'headset':
      return (
        <svg {...props}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case 'leaf':
      return (
        <svg {...props}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case 'siren':
      return (
        <svg {...props}>
          <path d="M12 2v4" />
          <path d="M5 19h14a2 2 0 0 0 2-2v-4a7 7 0 0 0-14 0v4a2 2 0 0 0 2 2z" />
          <path d="M12 10v4" />
          <path d="M9 22h6" />
        </svg>
      );
    case 'scalpel':
      return (
        <svg {...props}>
          <path d="m14 18 4-4-9-9c-1.1-1.1-2.9-1.1-4 0s-1.1 2.9 0 4l9 9z" />
          <path d="M18 14l3 3-5 5-3-3" />
        </svg>
      );
    case 'microscope':
      return (
        <svg {...props}>
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
  }
}
