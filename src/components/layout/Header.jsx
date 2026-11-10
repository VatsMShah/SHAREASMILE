import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { INITIATIVES } from '@/data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className="hdr">
      <div className="hdr-container">
        {/* Left: Logo */}
        <div className="hdr-left">
          <Link to="/" className="logo-link">
            <img
              src="/images/logo.png"
              alt="Share a Smile – Sharing is Human"
              className="logo"
            />
          </Link>
        </div>

        {/* Center: Navigation Menu Items */}
        <nav className={`hdr-nav ${open ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About Us
          </NavLink>

          <div
            className={`dd ${dropdownOpen ? 'dd-active' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className="dd-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Initiatives <span className="caret">▾</span>
            </button>
            <div className="dd-m">
              {INITIATIVES.map((init) => (
                <Link
                  key={init.path}
                  to={init.path}
                  onClick={() => {
                    setOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  <span>{init.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact Us
          </NavLink>

          {/* Mobile drawer donate button */}
          <div className="hdr-mobile-donate">
            <Link
              to="/contact"
              className="btn solid sm btn-donate"
              onClick={() => setOpen(false)}
            >
              Donate
            </Link>
          </div>
        </nav>

        {/* Right: Donate button on desktop & Burger button on mobile */}
        <div className="hdr-right">
          <Link
            to="/contact"
            className="btn solid sm btn-donate hdr-desktop-donate"
          >
            Donate
          </Link>

          <button
            className={`burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

