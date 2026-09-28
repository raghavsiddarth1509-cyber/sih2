import { SIH_LOGO_WHITE } from '../constants/images';
import spideyLogo from '../assets/spidey-sense-logo.jpg';

export default function TopUtilityBar() {
  return (
    <header className="w-full bg-primary-container text-on-primary text-xs py-1.5 px-4 md:px-8 border-b border-primary/40 flex flex-wrap items-center justify-between gap-2 shadow-xs">
      <div className="flex items-center space-x-2 text-[11px]">
        <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse shrink-0"></span>
        <span className="text-on-primary font-medium">Ministry of Education &amp; MIC Hackathon 2026 Participant</span>
        <span className="opacity-40 hidden sm:inline">|</span>
        <div className="hidden sm:inline-flex items-center gap-1.5">
          <img
            alt="Team Spidey Sense"
            className="h-4 w-4 object-contain rounded shrink-0"
            src={spideyLogo}
          />
          <span className="font-semibold text-secondary-fixed">Team Spidey Sense</span>
        </div>
        <span className="opacity-40 hidden md:inline">|</span>
        <span className="text-primary-fixed-dim text-[11px] hidden md:inline">PS SIH26096: Heritage &amp; Culture</span>
      </div>
      <div className="flex items-center space-x-3 text-[11px] text-primary-fixed-dim">
        <span className="hidden md:inline">Enterprise Hardware &amp; AI Systems</span>
        <span className="text-tertiary-fixed font-medium hidden sm:inline flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
          Status: Verified Code Base
        </span>
        <img
          alt="Smart India Hackathon 2026"
          className="h-5 w-auto object-contain bg-white/10 rounded px-1"
          src={SIH_LOGO_WHITE}
        />
      </div>
    </header>
  );
}
