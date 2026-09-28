import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { SIH_LOGO } from '../constants/images';
import spideySenseLogo from '../assets/spidey-sense-logo.jpg';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/overview', label: 'Overview & Archive AI' },
  { to: '/capabilities', label: 'Capabilities & Methodology' },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleViewDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('mission-mandate');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#mission-mandate');
    }
  };

  return (
    <nav className="w-full bg-surface-container-lowest/90 backdrop-blur-xl border-b border-surface-container sticky top-0 z-50 shadow-[0_1px_8px_rgba(10,37,64,0.04)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Brand: Logo + Team Title + Team ID */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <img
              alt="Spidey Sense"
              className="h-10 w-10 object-contain rounded-lg shrink-0"
              src={spideySenseLogo}
            />
            <div className="flex flex-col">
              <span className="font-title text-base font-bold tracking-tight text-primary leading-none group-hover:text-secondary transition-colors">
                Spidey Sense
              </span>
              <span className="text-[10px] text-secondary font-semibold uppercase tracking-wider mt-0.5">
                SIH · 2026
              </span>
            </div>
          </NavLink>
          <div className="hidden xl:flex items-center px-2.5 py-0.5 rounded-full bg-surface-container text-primary text-[11px] font-semibold border border-surface-container-high">
            <span>Team ID: 139128</span>
          </div>
        </div>

        {/* Desktop Nav Links in Previous Website's Capsule Container */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-surface-container-low border border-surface-container">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-lg text-xs transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-on-primary font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60 font-medium'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: PS Badge + View Demo Button + SIH Logo + Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="text-[9px] uppercase tracking-wider font-semibold text-on-surface-variant">
              Official Problem ID
            </span>
            <span className="text-xs font-mono font-bold text-primary bg-surface-container px-2 py-0.5 rounded border border-surface-container-high">
              PS SIH26096
            </span>
          </div>

          {/* View Demo Button */}
          <button
            type="button"
            onClick={handleViewDemo}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-xs font-semibold shadow-sm transition-all duration-150 cursor-pointer whitespace-nowrap border border-primary/20"
          >
            <span>View Demo</span>
            <span className="text-xs">→</span>
          </button>

          <img
            alt="Smart India Hackathon 2026 Logo"
            className="h-9 md:h-11 w-auto object-contain flex-shrink-0"
            src={SIH_LOGO}
          />
          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg border border-surface-container text-on-surface-variant hover:bg-surface-container hover:text-primary transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-surface-container bg-surface-container-lowest px-4 pb-4 shadow-md">
          <div className="flex flex-col space-y-1.5 pt-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm transition-all ${
                    isActive
                      ? 'bg-primary text-on-primary font-semibold shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={(e) => {
                setMobileOpen(false);
                handleViewDemo(e);
              }}
              className="mt-1 px-3.5 py-2 rounded-lg text-sm font-semibold bg-primary hover:bg-primary-container text-on-primary flex items-center justify-between shadow-sm transition-all"
            >
              <span>View Demo</span>
              <span>→</span>
            </button>
          </div>
          {/* Mobile path indicator */}
          <div className="mt-3 pt-3 border-t border-surface-container flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
            <span>Route: {location.pathname}</span>
            <span className="text-secondary font-semibold">PS SIH26096</span>
          </div>
        </div>
      )}
    </nav>
  );
}
