import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/overview', label: 'Dual Mode' },
  { to: '/overview', label: 'AI Kiosk' },
  { to: '/capabilities', label: 'Touchscreen Kiosks' },
  { to: '/capabilities', label: 'Architecture' },
  { to: '/#team', label: 'Team Spidey Sense' },
];

const footerLinks2 = [
  { to: '/capabilities', label: 'Preservation Pipeline' },
  { to: '/overview', label: 'AI Research Assistant' },
  { to: '/capabilities', label: 'Platform Capabilities' },
  { to: '/capabilities', label: 'Languages & Audiences' },
  { to: '/overview', label: 'Integrity Ledger' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface-variant text-xs border-t border-surface-container mt-16 pt-10 pb-12 px-4 md:px-8 shadow-[0_-1px_8px_rgba(10,37,64,0.03)]">
      <div className="max-w-7xl mx-auto">
        {/* Top row: brand + quick links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-surface-container-high">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold font-headline text-base shadow-xs">
              अ
            </div>
            <div>
              <span className="font-headline font-bold text-sm tracking-wide text-primary block">
                Ambedkar Digital Heritage Archive
              </span>
              <p className="text-[11px] text-on-surface-variant">
                National Preservation &amp; Memorial AI Terminal Infrastructure
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-on-surface-variant">
            {footerLinks.map((l, i) => (
              <Link key={i} className="hover:text-primary transition-colors" to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Second row: secondary links */}
        <div className="pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-surface-container-high">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-on-surface-variant">
            {footerLinks2.map((l, i) => (
              <Link key={i} className="hover:text-secondary transition-colors" to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-on-surface-variant">
            <span className="inline-flex items-center gap-1.5 text-secondary font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
              Phase 02 — Complete
            </span>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-on-surface-variant">
          <div>
            <span className="font-semibold text-primary">PS SIH26096:</span> Digital Heritage Archive for Memorials / Manuscripts of Dr. B. R. Ambedkar
            <span className="mx-1.5 opacity-40">|</span>
            <span>Theme: Heritage &amp; Culture</span>
            <span className="mx-1.5 opacity-40">|</span>
            <span>Category: Hardware &amp; AI Integration</span>
          </div>
          <div>
            <span className="font-semibold text-primary">Team Spidey Sense (Team ID: 139128)</span>
          </div>
        </div>
        <div className="mt-2.5 text-center sm:text-left text-[10px] text-on-surface-variant opacity-80 leading-relaxed">
          Developed under the Smart India Hackathon 2026 Guidelines. Supported by Ministry of Education's Innovation Cell (MIC) &amp; AICTE. Developed in alignment with Dublin Core &amp; OAIS digital preservation guidelines.
        </div>
      </div>
    </footer>
  );
}
