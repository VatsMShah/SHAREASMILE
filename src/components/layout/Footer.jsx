import { Link } from 'react-router-dom';
import { INITIATIVES } from '@/data';

export default function Footer() {
  const quickLinks = [
    ['Home', '/'],
    ['Initiatives', '/education'],
    ['Events', '/events'],
    ['About Us', '/about'],
    ['Contact', '/contact']
  ];

  return (
    <footer className="ftr">
      <div className="ftr-wrap">
        <div className="ftr-g">
          {/* Col 1 */}
          <div className="ftr-brand">
            <Link to="/" className="ftr-logo-link">
              <img
                src="/images/logo.png"
                alt="Share a Smile"
                className="logo ftr-logo"
              />
            </Link>
            <p className="ftr-ein">
              Share A Smile - USA a 501(c)(3) nonprofit organization.
              <br />
              Government ID (EIN): 300221345
            </p>
          </div>

          {/* Col 2 */}
          <div className="ftr-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(([name, path]) => (
                <li key={path}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="ftr-col">
            <h4>Our Initiatives</h4>
            <ul>
              {INITIATIVES.map((init) => (
                <li key={init.path}>
                  <Link to={init.path}>{init.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="ftr-col ftr-contact">
            <h4>Contact Us</h4>
            <a href="mailto:info@shareasmileusa.org" className="contact-link">
              <svg className="c-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 7L2 7" />
              </svg>
              <span>info@shareasmileusa.org</span>
            </a>
            <div className="contact-link">
              <svg className="c-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>USA</span>
            </div>

            <div className="ftr-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#6b0c0d" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="ftr-match">
          Check to see if your company has a matching gift program for charitable giving, or a volunteer grant program for hours volunteered.
        </p>

        <div className="ftr-copy">
          <span>© 2025 Share a Smile. All rights reserved.</span>
          <span>501(c)(3) Nonprofit Organization | Tax-Deductible Donations</span>
        </div>
      </div>
    </footer>
  );
}

