import ArchivalCutting from '../components/ArchivalCutting';

const capabilities = [
  {
    icon: '🔍',
    title: 'AI Semantic Search',
    desc: 'Deep semantic cross-archive discovery across 500k+ pages with vector similarity search.',
    bg: 'bg-surface-container text-primary border border-surface-container-high',
  },
  {
    icon: '🤖',
    title: 'AI Research Assistant',
    desc: 'Strict source-grounded answers citing exact volume, debate date, and physical archival folio.',
    bg: 'bg-surface-container text-secondary border border-surface-container-high',
  },
  {
    icon: '🔤',
    title: 'OCR Digitization',
    desc: 'Custom Indic OCR pipeline for historical typography, low-contrast prints, and handwritten marginalia.',
    bg: 'bg-surface-container text-primary border border-surface-container-high',
  },
  {
    icon: '🌐',
    title: 'Multilingual Access',
    desc: 'Cross-lingual semantic matching across English, Marathi, Hindi, Tamil, and Bengali.',
    bg: 'bg-surface-container text-secondary border border-surface-container-high',
  },
  {
    icon: '🔊',
    title: 'Audio Narration',
    desc: 'High-fidelity text-to-speech for accessibility, elderly visitors, and non-literate attendees.',
    bg: 'bg-surface-container text-primary border border-surface-container-high',
  },
  {
    icon: '🎞️',
    title: 'Audiovisual Archive',
    desc: 'Curated library of historical speeches, broadcast records, and restored photographic collections.',
    bg: 'bg-surface-container text-secondary border border-surface-container-high',
  },
  {
    icon: '📅',
    title: 'Interactive Timeline',
    desc: 'Chronological exploration from 1891 through 1956 connected directly to verified primary documents.',
    bg: 'bg-surface-container text-primary border border-surface-container-high',
  },
  {
    icon: '🛡️',
    title: 'Digital Preservation',
    desc: 'Dublin Core metadata compliance, immutable SHA-256 checksums, and long-term Archival TIFF storage.',
    bg: 'bg-surface-container text-secondary border border-surface-container-high',
  },
  {
    icon: '🖥️',
    title: 'Interactive Kiosks',
    desc: 'Touch-first, vandal-resistant physical hardware kiosks designed for high-footfall memorials.',
    bg: 'bg-surface-container text-primary border border-surface-container-high',
  },
  {
    icon: '🕸️',
    title: 'Knowledge Mapping',
    desc: 'Graph-based visualization linking key historical figures, legal roundtables, and constitutional articles.',
    bg: 'bg-surface-container text-secondary border border-surface-container-high',
  },
];

const languages = [
  { label: 'English (Primary)', primary: true },
  { label: 'मराठी (Marathi)', primary: false },
  { label: 'हिन्दी (Hindi)', primary: false },
  { label: 'தமிழ் (Tamil)', primary: false },
  { label: 'తెలుగు (Telugu)', primary: false },
  { label: 'বাংলা (Bengali)', primary: false },
  { label: 'ગુજરાતી (Gujarati)', primary: false },
  { label: 'ਪੰਜਾਬੀ (Punjabi)', primary: false },
  { label: 'മലയാളം (Malayalam)', primary: false },
  { label: 'ଓଡ଼ିଆ (Odia)', primary: false },
];

const langFeatures = [
  {
    icon: 'fa-solid fa-file-lines',
    iconBg: 'bg-surface-container text-primary border-surface-container-high',
    title: 'Read Verified Transcripts',
    desc: 'Side-by-side original scans alongside accurately transcribed bilingual text with line-by-line editorial footnotes and provenance tags.',
    meta: 'Format: XML / TEI Compliant',
  },
  {
    icon: 'fa-solid fa-language',
    iconBg: 'bg-surface-container text-secondary border-surface-container-high',
    title: 'Cross-Lingual Discovery',
    desc: 'Search in Marathi or Hindi and discover relevant English constitutional speeches with seamless cross-language vector retrieval.',
    meta: 'Engine: Multilingual E5 & LaBSE',
  },
  {
    icon: 'fa-solid fa-headphones',
    iconBg: 'bg-surface-container text-primary border-surface-container-high',
    title: 'Listen Audio Narration',
    desc: 'Natural Indic speech models synthesizing Marathi, Hindi, and English audio for accessibility among visually challenged visitors.',
    meta: 'Voice Models: Bhashini TTS Integrated',
  },
];

const audiences = [
  {
    icon: 'fa-solid fa-users-line',
    iconBg: 'bg-surface-container text-secondary border-surface-container-high',
    title: 'Memorial & Museum Visitors',
    desc: 'Simplified navigation, audio-visual storytelling, and multilingual guided narration tailored for quick public engagement.',
    tag: 'Walk-up Touch Experience',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    iconBg: 'bg-surface-container text-primary border-surface-container-high',
    title: 'Students & Learners',
    desc: 'Curated timelines, interactive constitutional themes, and gamified historical exploration paths for school groups.',
    tag: 'Curriculum Aligned',
  },
  {
    icon: 'fa-solid fa-book-bookmark',
    iconBg: 'bg-surface-container text-secondary border-surface-container-high',
    title: 'Legal Scholars & Historians',
    desc: 'Deep Boolean + vector search, exact parliamentary citation cross-references, and high-resolution document inspection.',
    tag: 'Primary Source Grounding',
  },
  {
    icon: 'fa-solid fa-building-columns',
    iconBg: 'bg-surface-container text-primary border-surface-container-high',
    title: 'Archivists & Curators',
    desc: 'Standardized Dublin Core metadata entry, audit-logged document ingestion, and automated SHA-256 cryptographic verification.',
    tag: 'OAIS Preservation Standard',
  },
];

export default function CapabilitiesMethodology() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-14">
      {/* Part 3 breadcrumb strip */}
      <div className="border border-surface-container bg-surface-container-low rounded-xl py-3 px-4 md:px-6">
        <div className="flex items-center justify-between text-xs text-on-surface-variant">
          <div className="flex items-center space-x-2">
            <span className="text-secondary font-semibold uppercase text-[10px] tracking-wider">
              Part 3 of 3
            </span>
            <span>/</span>
            <span className="text-primary font-medium">
              Hardware Architecture, Chronological Timeline &amp; Institutional Trust Framework
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-3 text-[11px] font-mono text-on-surface-variant">
            <span className="inline-flex items-center">
              <i className="fa-solid fa-server mr-1.5 text-secondary"></i> Edge Compute
            </span>
            <span>•</span>
            <span className="inline-flex items-center">
              <i className="fa-solid fa-shield-halved mr-1.5 text-tertiary-fixed-dim"></i> SHA-256 Vault
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================
          1. PRESERVATION METHODOLOGY & FLOW (ONLY ONE SECTION)
          ============================================================ */}
      <section id="methodology" className="relative overflow-visible">
        {/* Archival cutting 1 — From Fragile Paper to Digital Record, top-right of pipeline */}
        <ArchivalCutting
          variant="fragile-to-digital"
          rotate={-1.5}
          opacity={0.80}
          size="md"
          className="hidden lg:block top-0 right-0"
        />
        <div className="bg-surface-container-lowest border border-surface-container rounded-2xl p-6 shadow-sm overflow-hidden">
          {/* Section header — ONE title, ONE subtitle */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-secondary text-xs font-semibold tracking-wider uppercase mb-2 border border-surface-container-high">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Preservation Methodology
            </span>
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary tracking-tight">
              Digital Archive End-to-End Flow
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant mt-1 max-w-2xl">
              Standardised preservation pipeline turning fragile physical manuscripts into verified,
              searchable semantic assets.
            </p>
          </div>

          {/* 8-step pipeline — HTML/CSS, dark navy container */}
          <div className="bg-primary-container rounded-xl border border-primary/40 p-4 shadow-sm overflow-x-auto">
            <div className="flex gap-2 min-w-max lg:min-w-0 lg:grid lg:grid-cols-8">
              {[
                { step: '01', icon: '📄', title: 'Physical Document',  sub: 'Paper intake & sorting' },
                { step: '02', icon: '📷', title: 'Hi-Res Capture',     sub: '600+ DPI raw scanning' },
                { step: '03', icon: '🔤', title: 'OCR Digitization',   sub: 'Multilingual extraction' },
                { step: '04', icon: '🏷️', title: 'Dublin Core Meta',   sub: 'Catalog standardisation' },
                { step: '05', icon: '🗄️', title: 'Archive Storage',    sub: 'Immutable S3 & local vault' },
                { step: '06', icon: '🔍', title: 'Semantic Index',     sub: 'Vector-based indexing' },
                { step: '07', icon: '🤖', title: 'AI Search RAG',      sub: 'Zero-hallucination retrieval' },
                { step: '08', icon: '🖥️', title: 'Kiosk Experience',   sub: 'Public terminal access' },
              ].map(({ step, icon, title, sub }) => (
                <div
                  key={step}
                  className="flex flex-col items-center text-center p-3 rounded-lg border transition-all w-28 lg:w-auto flex-shrink-0 lg:flex-shrink bg-primary/70 border-primary-fixed-dim/20 hover:bg-primary"
                >
                  <span className="text-[10px] font-mono font-bold tracking-widest mb-1.5 text-primary-fixed-dim">
                    STEP {step}
                  </span>
                  <span className="text-xl mb-2">{icon}</span>
                  <span className="text-xs font-semibold leading-tight mb-1 text-on-primary">
                    {title}
                  </span>
                  <span className="text-[10px] text-primary-fixed-dim leading-snug">{sub}</span>
                </div>
              ))}
            </div>

            {/* Pipeline flow indicator */}
            <div className="mt-3.5 flex items-center gap-2 text-[10px] font-mono text-primary-fixed-dim">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
              <span>DIGITIZE (OCR)</span>
              <span className="text-on-primary-container">—</span>
              <span>VECTORIZE (EMBED)</span>
              <span className="text-on-primary-container">—</span>
              <span>INDEX (PGVECTOR)</span>
              <span className="text-on-primary-container">—</span>
              <span>CITABLE RETRIEVAL</span>
              <span className="ml-auto text-secondary-fixed font-sans text-xs hidden sm:block">
                Our Solution: One Unified, Source-Grounded Archive &amp; Kiosk System
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. COMPREHENSIVE CAPABILITIES GRID
          ============================================================ */}
      <section className="relative overflow-visible space-y-6" id="capabilities">
        {/* Archival cutting 2 — Constitution Record, left side of capabilities */}
        <ArchivalCutting
          variant="constitution-record"
          rotate={2}
          opacity={0.74}
          size="sm"
          className="hidden lg:block top-4 -left-3"
        />
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface-container text-secondary uppercase tracking-wider mb-2 border border-surface-container-high">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Comprehensive Capabilities
          </div>
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mt-1 tracking-tight">
            What The Platform Delivers
          </h2>
          <p className="text-xs md:text-sm text-on-surface-variant mt-1">
            An institutional suite engineered to digitize, index, verify, and preserve the heritage
            of Dr. B. R. Ambedkar across research centers and museums.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-surface-container-lowest border border-surface-container rounded-xl p-4.5 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-9 h-9 rounded-lg ${cap.bg} flex items-center justify-center text-lg mb-3`}
                >
                  {cap.icon}
                </div>
                <h3 className="text-xs font-headline font-bold text-primary mb-1">{cap.title}</h3>
                <p className="text-[11px] text-on-surface-variant leading-snug">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cohesive Visual Divider */}
      <div className="border-t border-surface-container my-8" />

      {/* ============================================================
          3. MULTILINGUAL REPOSITORY
          ============================================================ */}
      <section id="languages">
        <div className="mb-6 border-b border-surface-container pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface-container text-secondary uppercase tracking-wider mb-2 border border-surface-container-high">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Multilingual Heritage Repository
          </div>
          <h2 className="text-2xl md:text-3xl font-headline text-primary font-bold tracking-tight">
            One Archive. Many Languages.
          </h2>
          <p className="text-xs md:text-sm text-on-surface-variant mt-1 max-w-3xl leading-relaxed">
            Democratizing Dr. Ambedkar's intellectual thought across India's linguistic diversity
            with real-time translation and Indic speech synthesis.
          </p>
        </div>

        {/* Language Chips */}
        <div className="flex flex-wrap items-center gap-2 p-3 bg-surface-container-lowest border border-surface-container rounded-xl mb-6 shadow-xs">
          <span className="text-xs font-semibold text-on-surface-variant mr-2 uppercase tracking-wide">
            Supported Languages:
          </span>
          {languages.map((lang) => (
            <span
              key={lang.label}
              className={
                lang.primary
                  ? 'px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-semibold shadow-xs'
                  : 'px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-medium border border-surface-container-high hover:bg-surface-container-highest cursor-pointer transition-colors'
              }
            >
              {lang.label}
            </span>
          ))}
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {langFeatures.map((feat) => (
            <div
              key={feat.title}
              className="bg-surface-container-lowest border border-surface-container rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-9 h-9 rounded-lg ${feat.iconBg} flex items-center justify-center text-sm mb-3 border`}
                >
                  <i className={feat.icon}></i>
                </div>
                <h3 className="text-sm font-headline font-bold text-primary mb-1.5">{feat.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{feat.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-container text-[11px] font-mono text-on-surface-variant">
                {feat.meta}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cohesive Visual Divider */}
      <div className="border-t border-surface-container my-8" />

      {/* ============================================================
          4. INTENDED AUDIENCES
          ============================================================ */}
      <section id="audiences" className="relative overflow-visible">
        {/* Archival cutting 3 — Justice quote, right side of audiences section */}
        <ArchivalCutting
          variant="justice-quote"
          rotate={-2}
          opacity={0.76}
          size="sm"
          className="hidden lg:block top-0 right-0"
        />
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface-container text-secondary uppercase tracking-wider mb-2 border border-surface-container-high">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Institutional Stakeholders
          </div>
          <h2 className="text-2xl md:text-3xl font-headline text-primary font-bold tracking-tight">
            Engineered For Diverse User Groups
          </h2>
          <p className="text-xs md:text-sm text-on-surface-variant mt-1 max-w-3xl">
            Tailored interfaces bridging the gap between casual museum visitors, institutional
            archivists, and academic legal scholars.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((aud) => (
            <div
              key={aud.title}
              className="bg-surface-container-lowest border border-surface-container rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-9 h-9 rounded-lg ${aud.iconBg} flex items-center justify-center text-sm mb-3 border`}
                >
                  <i className={aud.icon}></i>
                </div>
                <h3 className="text-sm font-headline font-bold text-primary mb-1">{aud.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{aud.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-container">
                <span className="text-[10px] font-semibold text-primary bg-surface-container px-2.5 py-0.5 rounded-full border border-surface-container-high">
                  {aud.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
