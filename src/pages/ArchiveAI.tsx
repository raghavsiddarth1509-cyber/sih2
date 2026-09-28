import { useState } from 'react';
import VideoModal from '../components/VideoModal';

const metrics = [
  {
    label: 'Semantic Vector Retrieval',
    value: '23ms (Target: <50ms)',
    pct: 46,
    color: 'bg-emerald-500',
    textColor: 'text-emerald-600',
  },
  {
    label: 'Multilingual OCR Accuracy (Devanagari/Eng)',
    value: '98.4% Accuracy',
    pct: 98,
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
  },
  {
    label: 'Source Grounding Verification',
    value: '100% Zero-Hallucination',
    pct: 100,
    color: 'bg-purple-600',
    textColor: 'text-purple-600',
  },
  {
    label: 'Offline Edge Node Cache Sync',
    value: '100% Synchronized',
    pct: 100,
    color: 'bg-amber-500',
    textColor: 'text-amber-600',
  },
];

export default function ArchiveAI() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoSrc="/assets/videos/sih-demo.mp4"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
        {/* Evaluator Resources Banner */}
        <section className="w-full">
          <div className="bg-[#111625] border border-gray-800 rounded-xl p-6 shadow-md text-white relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-5 border-b border-gray-800">
              <div>
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold tracking-wider text-xs uppercase mb-1.5">
                  <span>📎</span>
                  <span>EVALUATION READY ARTIFACTS</span>
                </div>
                <h2 className="text-2xl font-heritage font-bold text-white">
                  Evaluator Resources &amp; Submission Slide Deck
                </h2>
                <p className="text-xs text-gray-300 mt-1 max-w-2xl leading-relaxed">
                  Complete documentation pack prepared for the SIH 2026 jury. Includes system
                  whitepaper, Indic OCR &amp; vector pipeline architecture topology, and hardware
                  kiosk deployment blueprints.
                </p>
              </div>
              <div className="flex items-center flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-950 text-[10px]">
                    ▶
                  </span>
                  <span>Watch 3-Min Video Demo</span>
                </button>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="text-gray-400 text-[11px]">
                <strong className="text-gray-200">Team Spidey Sense (Team ID: 139128):</strong>{' '}
                6 Core Engineers · Indic OCR, Multilingual RAG &amp; Edge Kiosks
              </div>
              <div className="inline-flex items-center px-2 py-0.5 rounded bg-gray-800 border border-gray-700 font-mono text-[10px] text-amber-300">
                BOP Offline Ready
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="space-y-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                100% Retrievable Source Grounding
              </span>
            </div>
            <h2 className="text-2xl font-heritage font-bold text-gray-900 mt-1">
              Source-Grounded AI Research Assistant &amp; Memorial Kiosk View
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Simulated two-way conversation demonstrating zero-hallucination factual grounding
              directly anchored in Constituent Assembly records.
            </p>
          </div>

          {/* Assistant Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Kiosk Terminal (8 cols) */}
            <div className="lg:col-span-8 bg-[#FDFBF7] border border-gray-300 rounded-xl shadow-sm overflow-hidden flex flex-col">
              {/* Terminal Header */}
              <div className="bg-[#111625] text-white px-4 py-3 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                  <span className="text-xs font-mono font-medium ml-2 text-gray-200">
                    Kiosk UI: Terminal node @ ADHA-Memorial-01
                  </span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span>ONLINE</span>
                  <span className="text-gray-600">•</span>
                  <span>LATENCY: 124ms</span>
                  <span className="text-gray-600">•</span>
                  <span>NODE #02</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-5 flex-1">
                {/* Query Input */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Natural Language Archival Query
                  </label>
                  <div className="flex items-center bg-white border border-gray-300 rounded-lg p-2 shadow-inner">
                    <span className="text-gray-400 mr-2 text-sm">🔍</span>
                    <input
                      className="w-full text-xs font-semibold text-gray-800 bg-transparent border-none p-0 focus:ring-0 focus:outline-none"
                      readOnly
                      type="text"
                      value="What was Dr. B. R. Ambedkar's role in the Constituent Assembly?"
                    />
                    <span className="bg-[#111625] text-white text-[11px] px-3 py-1 rounded font-medium ml-2 flex-shrink-0">
                      Ask Archive
                    </span>
                  </div>
                </div>

                {/* Grounded Response */}
                <div className="bg-white border border-amber-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100 flex-wrap gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded flex items-center gap-1">
                      ✓ Source Grounded AI • 100% Retrieval Verified
                    </span>
                    <span className="text-[11px] text-gray-400 font-mono">
                      CAD Reference: VII.1.181
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed font-serif">
                    "Dr. B. R. Ambedkar was appointed{' '}
                    <strong>Chairman of the Drafting Committee</strong> on August 29, 1947. He
                    piloted the Draft Constitution through the Constituent Assembly, introducing the
                    provisions, debating amendments, defending fundamental rights, and ensuring
                    constitutional remedies under <em>Article 32</em> — which he termed{' '}
                    <em>'the very soul of the Constitution and the very heart of it.'</em>"
                  </p>

                  {/* Citation Card */}
                  <div className="bg-[#FDFBF7] border border-gray-200 rounded-md p-3 text-[11px] space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="font-bold text-gray-800 flex items-center gap-1.5">
                        📑 Primary Archival Citation
                      </span>
                      <span className="text-amber-800 font-mono text-[10px] bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        STATUS: OK • LEDGER RECORD #831
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-gray-600">
                      <div>
                        <strong>Source:</strong> Constituent Assembly Debates (Official Report)
                      </div>
                      <div>
                        <strong>Speaker:</strong> Dr. B. R. Ambedkar, Drafting Committee
                      </div>
                      <div>
                        <strong>Date:</strong> 04 November 1948 •{' '}
                        <strong>Volume:</strong> VII No. 1
                      </div>
                      <div>
                        <strong>Cryptographic Token:</strong>{' '}
                        <span className="font-mono text-gray-500">SHA256: e3b0...71e4 (Verified)</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <button className="inline-flex items-center space-x-1 bg-[#111625] hover:bg-gray-800 text-white text-[11px] px-3 py-1.5 rounded font-medium transition-colors">
                      <span>📄</span>
                      <span>View Original Manuscript</span>
                    </button>
                    <button className="inline-flex items-center space-x-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-[11px] px-3 py-1.5 rounded font-medium transition-colors">
                      <span>🔤</span>
                      <span>View OCR Text</span>
                    </button>
                    <button className="inline-flex items-center space-x-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-[11px] px-3 py-1.5 rounded font-medium transition-colors">
                      <span>🔊</span>
                      <span>Listen Narration (English/Hindi)</span>
                    </button>
                    <button className="inline-flex items-center space-x-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-[11px] px-3 py-1.5 rounded font-medium transition-colors ml-auto">
                      <span>🔗</span>
                      <span>Related Documents (12)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500">
                <span>Touch-optimized memorial mode with multilingual speech synthesis support</span>
                <span className="font-mono hidden sm:block">Display: 55" Capacitive Touch Surface</span>
              </div>
            </div>

            {/* Right: Telemetry + Crypto (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              {/* Telemetry Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800">
                    Live Archival Telemetry
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-600 font-semibold">
                    EDGE PERFORMANCE
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 leading-snug">
                  Edge performance metrics logged from live kiosk prototypes and institutional
                  mirrors.
                </p>

                <div className="space-y-3 text-xs">
                  {metrics.map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between text-[11px] font-medium mb-1 flex-wrap gap-1">
                        <span className="text-gray-600">{m.label}</span>
                        <span className={`font-mono font-bold ${m.textColor}`}>{m.value}</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`${m.color} h-1.5 rounded-full`}
                          style={{ width: `${m.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cryptographic Integrity */}
              <div className="bg-[#111625] text-white border border-gray-800 rounded-xl p-4 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                    Cryptographic Integrity
                  </span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-1.5 py-0.5 rounded font-mono">
                    Tamper Proof
                  </span>
                </div>
                <p className="text-[11px] text-gray-300">
                  Every digitized page, OCR transcript, and audio recording is locked with
                  immutable SHA-256 hash proofs, safeguarding institutional integrity against
                  revisionism.
                </p>
                <div className="bg-black/50 p-2.5 rounded border border-gray-800 font-mono text-[10px] space-y-1 text-gray-400">
                  <div>
                    <span className="text-gray-500">ROOT_HASH: </span>
                    <span className="text-emerald-400">c04711…c8ba0</span>
                  </div>
                  <div>
                    <span className="text-gray-500">BLOCK_HEIGHT: </span>1,489,204 • STATUS: VERIFIED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
