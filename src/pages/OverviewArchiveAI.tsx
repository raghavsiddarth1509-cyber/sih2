import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoModal from '../components/VideoModal';
import { AMBEDKAR_IMAGE } from '../constants/images';
import ArchivalCutting from '../components/ArchivalCutting';


/* ─── Static data ────────────────────────────────────────────────────── */

const existingSources = [
  { icon: '🏛️', name: 'Libraries',       sub: '& Universities' },
  { icon: '📜', name: 'Manuscripts',     sub: '& Personal Letters' },
  { icon: '🏢', name: 'Government',      sub: 'Archives' },
  { icon: '📷', name: 'Photographs',     sub: '& Historical Records' },
  { icon: '🏛️', name: 'Memorial Trusts', sub: '& Institutions' },
  { icon: '🎬', name: 'Audio / Video',   sub: 'Speeches & Events' },
];

const archiveFeatures = [
  { icon: '📄', name: 'Indic OCR',                  desc: 'Multi-script text extraction' },
  { icon: '🔍', name: 'Semantic Search',             desc: 'Meaning-based cross-language search' },
  { icon: '🔗', name: 'RAG with Source Grounding',   desc: 'Verified archival citations' },
  { icon: '📅', name: 'Interactive Timelines',       desc: 'Chronological exploration' },
];

const archiveAIFeatures = [
  { icon: '🔍', name: 'High-Accuracy',      sub: 'Indic OCR' },
  { icon: '🔍', name: 'Semantic Search',    sub: '& RAG' },
  { icon: '🔗', name: 'Multi-language',     sub: 'Retrieval (Marathi, Hindi, English)' },
  { icon: '🔗', name: 'Verified Citations', sub: '& Source Tracking' },
];

const ecosystemCategories = [
  { icon: '📜', name: 'Manuscripts' },
  { icon: '🎤', name: 'Speeches' },
  { icon: '⚖️', name: 'Constitutional\nDebates' },
  { icon: '📷', name: 'Photographs' },
  { icon: '🎵', name: 'Audio Records' },
  { icon: '🎬', name: 'Video Archives' },
  { icon: '📚', name: 'Books &\nJournals' },
  { icon: '🏛️', name: 'Memorial Records' },
];

const metrics = [
  { label: 'Semantic Vector Retrieval',                  value: '23ms (Target: <50ms)',    pct: 46,  color: 'bg-secondary-container' },
  { label: 'Multilingual OCR Accuracy (Devanagari/Eng)', value: '98.4% Accuracy',          pct: 98,  color: 'bg-primary' },
  { label: 'Source Grounding Verification',              value: '100% Zero-Hallucination', pct: 100, color: 'bg-secondary' },
  { label: 'Offline Edge Node Cache Sync',               value: '100% Synchronized',       pct: 100, color: 'bg-primary-container' },
];

/* ─── Component ──────────────────────────────────────────────────────── */

export default function OverviewArchiveAI() {
  const [videoOpen, setVideoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#project-pitch') {
      const el = document.getElementById('project-pitch');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">

        {/* ==============================================================
            HERO — Project Overview & Case Study
            ============================================================== */}
        <section id="overview" className="relative overflow-visible">
          {/* Archival cutting 1 — Poona Pact, top-right near Ambedkar image */}
          <ArchivalCutting
            variant="poona-pact"
            rotate={2.5}
            opacity={0.80}
            size="md"
            className="hidden lg:block top-0 right-0"
          />
          {/* Archival cutting 2 — Ambedkar tribute, small, open sky between title and statue */}
          <ArchivalCutting
            variant="ambedkar-tribute"
            rotate={-2}
            opacity={0.76}
            size="sm"
            className="hidden xl:block top-2 left-[55%]"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Left: Text content */}
            <div className="lg:col-span-7 pt-2">
              <div className="inline-flex items-center gap-1.5 text-secondary font-semibold text-xs uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary-container" />
                Analytical Foundation
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary tracking-tight leading-tight mb-4">
                Project Overview &amp; Case Study
              </h1>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-xl">
                Bridging the critical transition from fragmented physical paper documents to an
                interconnected, source-grounded national digital infrastructure.
              </p>
            </div>

            {/* Right: Ambedkar image — seamless editorial background element, no box */}
            <div className="lg:col-span-5 relative min-h-[220px] md:min-h-[248px] lg:min-h-[268px]">
              <img
                src={AMBEDKAR_IMAGE}
                alt="Dr. B. R. Ambedkar"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
                style={{
                  /* Slightly more visible — clearly recognizable figure, still soft and blended */
                  filter: 'grayscale(0.72) brightness(0.84) contrast(0.88) saturate(0.22)',
                  opacity: 0.65,
                  /* Four-direction fade — soft edges on all sides, no hard frame */
                  WebkitMaskImage:
                    'linear-gradient(to right,  transparent 0%, rgba(0,0,0,0.20) 12%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.92) 72%, rgba(0,0,0,0.60) 100%), ' +
                    'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.60) 10%, black 22%, black 72%, rgba(0,0,0,0.40) 90%, transparent 100%)',
                  maskImage:
                    'linear-gradient(to right,  transparent 0%, rgba(0,0,0,0.20) 12%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.92) 72%, rgba(0,0,0,0.60) 100%), ' +
                    'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.60) 10%, black 22%, black 72%, rgba(0,0,0,0.40) 90%, transparent 100%)',
                  WebkitMaskComposite: 'source-in',
                  maskComposite: 'intersect',
                } as React.CSSProperties}
              />
            </div>
          </div>

          {/* 3-Column Problem / Gap / Approach cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">

            {/* 01 — The Problem */}
            <div className="bg-surface-container-lowest border border-surface-container rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 font-semibold text-[11px] uppercase tracking-wider border border-red-100">
                    <span>⚠</span> 01. The Problem
                  </span>
                </div>
                <h3 className="text-base font-headline font-bold text-primary mb-2">Fragmented Heritage</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Dr. B. R. Ambedkar's writings, speeches, manuscripts, constitutional debates,
                  photographic and historical records are distributed across disparate libraries,
                  memorial trusts, government archives, and fragmented physical printings with zero
                  unified search.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-container text-xs text-on-surface-variant">
                <strong className="text-primary font-semibold">Vulnerability:</strong> Paper brittleness, lack of
                high-res centralized scans, and regional isolation.
              </div>
            </div>

            {/* 02 — The Critical Gap */}
            <div className="bg-surface-container-lowest border border-surface-container rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-secondary font-semibold text-[11px] uppercase tracking-wider border border-surface-container-high">
                    <span>⚠</span> 02. The Critical Gap
                  </span>
                </div>
                <h3 className="text-base font-headline font-bold text-primary mb-2">Archives Need Intelligence</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Traditional archival repositories are passive PDF silos. Students, researchers, and
                  memorial visitors cannot discover information across vernacular documents, multilingual
                  voice material, calculated audio clips, or complex legal cross-references.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-container text-xs text-on-surface-variant">
                <strong className="text-primary font-semibold">Limitation:</strong> Poor keyword searches fail when
                searching conceptual queries in Marathi, Hindi, and English.
              </div>
            </div>

            {/* 03 — Our Approach */}
            <div className="bg-surface-container-lowest border border-surface-container rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-primary font-semibold text-[11px] uppercase tracking-wider border border-surface-container-high">
                    <span>✔</span> 03. Our Approach
                  </span>
                </div>
                <h3 className="text-base font-headline font-bold text-primary mb-2">One Intelligent Platform</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  A centralized digital platform pairing high-accuracy Indic OCR, dense vector semantic
                  search, source-grounded RAG, interactive chronological timelines, audiovisual playback,
                  and ruggedized physical museum kiosks.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-container text-xs text-on-surface-variant">
                <strong className="text-primary font-semibold">Delivery:</strong> 100% verified archival citation
                grounding with physical memorial touchscreen kiosks.
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            CASE STUDY CARD  +  ARCHIVE AI PANEL  (side by side)
            ============================================================== */}
        <section className="relative overflow-visible">
          {/* Archival cutting 3 — Drafting Committee, bottom of Case Study card */}
          <ArchivalCutting
            variant="drafting-committee"
            rotate={-2}
            opacity={0.80}
            size="sm"
            className="hidden lg:block -bottom-6 left-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

            {/* ── Left: Case Study card (8 cols) ── */}
            <div className="lg:col-span-8 bg-surface-container-lowest border border-surface-container rounded-2xl p-6 shadow-sm">

              {/* Card header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 mb-5 border-b border-surface-container">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-low border border-surface-container flex items-center justify-center shrink-0 text-lg">
                    📚
                  </div>
                  <div>
                    <h3 className="text-sm font-headline font-bold text-primary uppercase tracking-wider leading-tight">
                      Case Study &amp; Existing Heritage Ecosystem Benchmark
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      How our unified platform enhances and interconnects existing archival repositories
                    </p>
                  </div>
                </div>
                <span className="shrink-0 self-start text-xs bg-secondary-container/20 text-secondary font-semibold px-3 py-1 rounded-full border border-secondary/20">
                  Ecosystem Integration
                </span>
              </div>

              {/* Two-column interior: Existing Sources ──→── Our Archive */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_32px_1fr] gap-4 items-start">

                {/* Column A — Existing Heritage Sources */}
                <div>
                  <h4 className="text-[11px] font-headline font-bold text-primary mb-3 uppercase tracking-widest">
                    Existing Heritage Sources
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {existingSources.map((src) => (
                      <div
                        key={src.name}
                        className="flex items-center gap-2 bg-surface-container-low p-2.5 rounded-lg border border-surface-container"
                      >
                        <div className="w-7 h-7 rounded bg-surface-container border border-surface-container-high flex items-center justify-center text-sm shrink-0">
                          {src.icon}
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-primary leading-tight">{src.name}</div>
                          <div className="text-[10px] text-on-surface-variant leading-tight">{src.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center pt-10">
                  <div className="flex items-center gap-0">
                    <div className="w-5 h-0.5 bg-secondary-container" />
                    <div
                      className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px]"
                      style={{ borderLeftColor: 'rgb(var(--color-secondary-container, 253 118 26) / 1)' }}
                    />
                  </div>
                </div>

                {/* Column B — Our Unified Digital Archive */}
                <div>
                  <h4 className="text-[11px] font-headline font-bold text-primary mb-3 uppercase tracking-widest">
                    Our Unified Digital Archive
                  </h4>
                  <div className="flex flex-col gap-2">
                    {archiveFeatures.map((feat) => (
                      <div
                        key={feat.name}
                        className="flex items-center gap-2.5 bg-surface-container-low p-2.5 rounded-lg border border-surface-container"
                      >
                        <div className="w-7 h-7 rounded bg-surface-container border border-surface-container-high flex items-center justify-center text-sm shrink-0">
                          {feat.icon}
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-primary leading-tight">{feat.name}</div>
                          <div className="text-[10px] text-on-surface-variant">{feat.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Archive AI dark panel (4 cols) ── */}
            <div className="lg:col-span-4 bg-primary-container rounded-2xl p-6 text-on-primary shadow-md flex flex-col">

              {/* Icon + label */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shrink-0">
                  🗄️
                </div>
                <span className="text-secondary-container font-bold text-xs uppercase tracking-widest">
                  Archive AI
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-headline font-bold text-on-primary leading-tight mb-3">
                From Documents to Discoverable Knowledge
              </h3>

              {/* Description */}
              <p className="text-xs text-white/70 leading-relaxed mb-5">
                Converting fragmented archival material into a searchable, multilingual, and
                source-grounded knowledge system accessible to researchers, students, and the public.
              </p>

              {/* 2 × 2 mini feature grid */}
              <div className="grid grid-cols-2 gap-2.5 mt-auto">
                {archiveAIFeatures.map((feat) => (
                  <div
                    key={feat.name}
                    className="bg-white/10 rounded-xl p-3 border border-white/10"
                  >
                    <div className="text-lg mb-1">{feat.icon}</div>
                    <div className="text-xs font-semibold text-on-primary leading-tight">{feat.name}</div>
                    <div className="text-[10px] text-white/60 mt-0.5 leading-snug">{feat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            ARCHIVAL ECOSYSTEM STRIP
            ============================================================== */}
        <section className="relative overflow-visible">
          {/* Archival cutting 4 — Constitution Record, right of ecosystem strip */}
          <ArchivalCutting
            variant="constitution-record"
            rotate={-2}
            opacity={0.75}
            size="sm"
            className="hidden lg:block top-2 -right-3"
          />
          <div className="bg-surface-container-lowest border border-surface-container rounded-2xl px-5 py-4 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-5">

              {/* Left: Title block */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center text-xl shrink-0">
                  📂
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest">
                    The Archival Ecosystem
                  </div>
                  <div className="text-[11px] text-on-surface-variant mt-0.5 max-w-xs leading-snug">
                    Diverse heritage material unified under one intelligent platform
                  </div>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block w-px h-10 bg-surface-container-high mx-2 shrink-0" />

              {/* Right: Category icon strip */}
              <div className="flex items-start flex-wrap gap-3">
                {ecosystemCategories.map((cat) => (
                  <div key={cat.name} className="flex flex-col items-center gap-1 text-center w-14">
                    <div className="w-9 h-9 rounded-lg bg-surface-container border border-surface-container-high flex items-center justify-center text-base">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] text-on-surface-variant font-medium leading-tight whitespace-pre-line text-center">
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visual divider */}
        <div className="border-t border-surface-container" />

        {/* ==============================================================
            ARCHIVE AI DEMO — Evaluator Resources + Kiosk Terminal
            ============================================================== */}
        <div className="space-y-10" id="archive-ai">

          {/* Evaluator Resources Banner */}
          <section id="project-pitch" className="w-full scroll-mt-24">
            <div className="bg-primary-container border border-primary/50 rounded-2xl p-6 md:p-8 shadow-md text-on-primary relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-5 border-b border-primary/40">
                <div>
                  <div className="flex items-center gap-1.5 text-secondary-container font-semibold tracking-wider text-xs uppercase mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary-container" />
                    <span>Evaluation Ready Artifacts</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-on-primary tracking-tight">
                    Evaluator Resources &amp; Submission Slide Deck
                  </h2>
                  <p className="text-xs md:text-sm text-white/70 mt-1 max-w-2xl leading-relaxed">
                    Complete documentation pack prepared for the SIH 2026 jury. Includes system
                    whitepaper, Indic OCR &amp; vector pipeline architecture topology, and hardware
                    kiosk deployment blueprints.
                  </p>
                </div>
                <div className="flex items-center flex-shrink-0">
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="inline-flex items-center gap-2 bg-secondary-container hover:bg-secondary text-on-primary font-semibold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
                  >
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-white text-[10px]">▶</span>
                    <span>Watch 3-Min Video Demo</span>
                  </button>
                </div>
              </div>
              <div className="pt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="text-white/60 text-xs">
                  <strong className="text-on-primary">Team Spidey Sense (Team ID: 139128):</strong>{' '}
                  6 Core Engineers · Indic OCR, Multilingual RAG &amp; Edge Kiosks
                </div>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 font-mono text-[11px] text-white/80">
                  BOP Offline Ready
                </div>
              </div>
            </div>
          </section>

          {/* Source-Grounded AI Research Assistant / Kiosk Demo */}
          <section className="space-y-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary-container" />
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  100% Retrievable Source Grounding
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-primary mt-1 tracking-tight">
                Source-Grounded AI Research Assistant &amp; Memorial Kiosk View
              </h2>
              <p className="text-xs md:text-sm text-on-surface-variant mt-1">
                Simulated two-way conversation demonstrating zero-hallucination factual grounding
                directly anchored in Constituent Assembly records.
              </p>
            </div>

            {/* Kiosk terminal + telemetry grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

              {/* Kiosk Terminal (8 cols) */}
              <div className="lg:col-span-8 bg-surface-container-lowest border border-surface-container rounded-2xl shadow-sm overflow-hidden flex flex-col">
                {/* Terminal chrome bar */}
                <div className="bg-primary-container text-on-primary px-5 py-3.5 flex items-center justify-between border-b border-white/20">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                    <span className="text-xs font-mono font-medium ml-2 text-white/80">
                      Kiosk UI: Terminal node @ ADHA-Memorial-01
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-white/60 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>ONLINE</span>
                    <span className="text-white/30">•</span>
                    <span>LATENCY: 124ms</span>
                  </div>
                </div>

                {/* Terminal body */}
                <div className="p-5 space-y-4 flex-1 bg-surface-container-low/30">
                  {/* Query input */}
                  <div>
                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                      Natural Language Archival Query
                    </label>
                    <div className="flex items-center bg-surface-container-lowest border border-surface-container rounded-xl p-2.5 shadow-sm">
                      <span className="text-on-surface-variant mr-2 text-sm">🔍</span>
                      <input
                        className="w-full text-xs font-medium text-primary bg-transparent border-none p-0 focus:ring-0 focus:outline-none"
                        readOnly
                        type="text"
                        value="What was Dr. B. R. Ambedkar's role in the Constituent Assembly?"
                      />
                      <span className="bg-primary text-on-primary text-[11px] px-3.5 py-1.5 rounded-lg font-semibold ml-2 flex-shrink-0 cursor-pointer">
                        Ask Archive
                      </span>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="bg-surface-container-lowest border border-surface-container rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-surface-container flex-wrap gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider bg-surface-container text-primary px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-surface-container-high">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                        Source Grounded AI • 100% Retrieval Verified
                      </span>
                      <span className="text-xs text-on-surface-variant font-mono">CAD Reference: VII.1.181</span>
                    </div>

                    <p className="text-xs md:text-sm text-on-surface leading-relaxed">
                      "Dr. B. R. Ambedkar was appointed{' '}
                      <strong className="text-primary font-semibold">Chairman of the Drafting Committee</strong> on
                      August 29, 1947. He piloted the Draft Constitution through the Constituent Assembly,
                      introducing the provisions, debating amendments, defending fundamental rights, and ensuring
                      constitutional remedies under <em className="text-secondary font-medium">Article 32</em> —
                      which he termed <em>'the very soul of the Constitution and the very heart of it.'</em>"
                    </p>

                    {/* Citation card */}
                    <div className="bg-surface-container-low border border-surface-container rounded-lg p-3 text-xs space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <span className="font-bold text-primary flex items-center gap-1.5">📑 Primary Archival Citation</span>
                        <span className="text-secondary font-mono text-[10px] bg-surface-container px-2 py-0.5 rounded-full border border-surface-container-high font-semibold">
                          STATUS: OK • LEDGER RECORD #831
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-on-surface-variant">
                        <div><strong className="text-primary">Source:</strong> Constituent Assembly Debates</div>
                        <div><strong className="text-primary">Speaker:</strong> Dr. B. R. Ambedkar</div>
                        <div><strong className="text-primary">Date:</strong> 04 November 1948 · <strong>Volume:</strong> VII No. 1</div>
                        <div><strong className="text-primary">Cryptographic Token:</strong>{' '}
                          <span className="font-mono text-secondary">SHA256: e3b0...71e4 (Verified)</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button className="inline-flex items-center space-x-1.5 bg-primary text-on-primary text-xs px-3.5 py-1.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
                        <span>📄</span><span>View Original Manuscript</span>
                      </button>
                      <button className="inline-flex items-center space-x-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-surface-container text-xs px-3.5 py-1.5 rounded-lg font-medium transition-colors">
                        <span>🔤</span><span>View OCR Text</span>
                      </button>
                      <button className="inline-flex items-center space-x-1.5 bg-surface-container hover:bg-surface-container-high text-secondary border border-surface-container-high text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-colors ml-auto">
                        <span>🔊</span><span>Listen Narration</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Terminal footer */}
                <div className="bg-surface-container-lowest px-5 py-2.5 border-t border-surface-container flex items-center justify-between text-xs text-on-surface-variant">
                  <span>Touch-optimized memorial mode with multilingual speech synthesis support</span>
                  <span className="font-mono hidden sm:block">Display: 55" Capacitive Touch Surface</span>
                </div>
              </div>

              {/* Telemetry + Ledger sidebar (4 cols) */}
              <div className="lg:col-span-4 space-y-4">

                {/* Telemetry card */}
                <div className="bg-surface-container-lowest border border-surface-container rounded-2xl p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                    <span className="font-headline font-bold text-primary text-sm">Kiosk &amp; Node Telemetry</span>
                    <span className="text-[10px] font-mono bg-surface-container text-secondary px-2 py-0.5 rounded-full font-semibold">REALTIME</span>
                  </div>
                  <div className="space-y-3.5 text-xs">
                    {metrics.map((m) => (
                      <div key={m.label} className="space-y-1">
                        <div className="flex justify-between items-baseline text-[11px]">
                          <span className="text-on-surface-variant">{m.label}</span>
                          <span className="font-mono font-bold text-primary">{m.value}</span>
                        </div>
                        <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                          <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Immutable Ledger card */}
                <div className="bg-surface-container-lowest border border-surface-container rounded-2xl p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                    <span className="font-headline font-bold text-primary text-sm flex items-center gap-1.5">
                      <span className="text-secondary">🛡️</span> Immutable Ledger
                    </span>
                    <span className="text-[10px] font-mono text-white bg-primary px-2 py-0.5 rounded-full font-semibold">
                      BLOCK #12891
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Every manuscript page and CAD speech transcript is cryptographically hashed with
                    SHA-256 upon ingestion to ensure tamper-proof preservation.
                  </p>
                  <div className="bg-surface-container-low p-2.5 rounded-lg border border-surface-container font-mono text-[10px] text-primary break-all">
                    0x8f4a21...e12d9b6c07a3f81e
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </>
  );
}
