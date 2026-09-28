import { PIPELINE_DIAGRAM } from '../constants/images';

const capabilities = [
  {
    icon: '🔍',
    title: 'AI Semantic Search',
    desc: 'Deep semantic cross-archive discovery across 500k+ pages with vector similarity search.',
    bg: 'bg-amber-100 text-amber-800',
  },
  {
    icon: '🤖',
    title: 'AI Research Assistant',
    desc: 'Strict source-grounded answers citing exact volume, debate date, and physical archival folio.',
    bg: 'bg-blue-100 text-blue-800',
  },
  {
    icon: '🔤',
    title: 'OCR Digitization',
    desc: 'Custom Indic OCR pipeline for historical typography, low-contrast prints, and handwritten marginalia.',
    bg: 'bg-emerald-100 text-emerald-800',
  },
  {
    icon: '🌐',
    title: 'Multilingual Access',
    desc: 'Cross-lingual semantic matching across English, Marathi, Hindi, Tamil, and Bengali.',
    bg: 'bg-purple-100 text-purple-800',
  },
  {
    icon: '🔊',
    title: 'Audio Narration',
    desc: 'High-fidelity text-to-speech for accessibility, elderly visitors, and non-literate attendees.',
    bg: 'bg-rose-100 text-rose-800',
  },
  {
    icon: '🎞️',
    title: 'Audiovisual Archive',
    desc: 'Curated library of historical speeches, broadcast records, and restored photographic collections.',
    bg: 'bg-indigo-100 text-indigo-800',
  },
  {
    icon: '📅',
    title: 'Interactive Timeline',
    desc: 'Chronological exploration from 1891 through 1956 connected directly to verified primary documents.',
    bg: 'bg-orange-100 text-orange-800',
  },
  {
    icon: '🛡️',
    title: 'Digital Preservation',
    desc: 'Dublin Core metadata compliance, immutable SHA-256 checksums, and long-term Archival TIFF storage.',
    bg: 'bg-cyan-100 text-cyan-800',
  },
  {
    icon: '🖥️',
    title: 'Interactive Kiosks',
    desc: 'Touch-first, vandal-resistant physical hardware kiosks designed for high-footfall memorials.',
    bg: 'bg-teal-100 text-teal-800',
  },
  {
    icon: '🕸️',
    title: 'Knowledge Mapping',
    desc: 'Graph-based visualization linking key historical figures, legal roundtables, and constitutional articles.',
    bg: 'bg-violet-100 text-violet-800',
  },
];

export default function Pipeline() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-14">
      {/* Part 3 breadcrumb */}
      <div className="border-b border-[#E8E3DA] bg-[#F5F2EB]/50 py-3 -mx-4 md:-mx-8 px-4 md:px-8 -mt-8">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="text-amber-700 font-semibold uppercase text-[10px] tracking-wider">
              Part 3 of 3
            </span>
            <span>/</span>
            <span className="text-slate-800 font-medium">
              Hardware Architecture, Chronological Timeline &amp; Institutional Trust Framework
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-3 text-[11px] font-mono text-slate-500">
            <span className="inline-flex items-center">
              <i className="fa-solid fa-server mr-1.5 text-slate-400"></i> Edge Compute
            </span>
            <span>•</span>
            <span className="inline-flex items-center">
              <i className="fa-solid fa-shield-halved mr-1.5 text-slate-400"></i> SHA-256 Vault
            </span>
          </div>
        </div>
      </div>

      {/* Pipeline Diagram */}
      <section>
        <div className="bg-white border border-[#E2DDD3] rounded-xl p-4 sm:p-6 shadow-2xs overflow-hidden">
          <div className="mb-4">
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-semibold tracking-wider uppercase mb-2">
              Preservation Methodology
            </span>
            <h2 className="text-xl sm:text-2xl font-heritage font-bold text-slate-900">
              Digital Archive End-to-End Flow
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Standardised preservation pipeline turning fragile physical manuscripts into verified,
              searchable semantic assets.
            </p>
          </div>
          <img
            src={PIPELINE_DIAGRAM}
            alt="Digital Archive End-to-End Flow - Preservation Methodology"
            className="w-full h-auto object-contain rounded-lg shadow-sm border border-[#E8E5DD]"
          />
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded border border-amber-300 mb-1">
            Comprehensive Capabilities
          </div>
          <h2 className="text-2xl font-heritage font-bold text-gray-900 mt-1">
            What The Platform Delivers
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            An institutional suite engineered to digitize, index, verify, and preserve the heritage
            of Dr. B. R. Ambedkar across research centers and museums.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-[#FDFBF7] border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col"
            >
              <div
                className={`w-8 h-8 rounded-md ${cap.bg} flex items-center justify-center text-base mb-3`}
              >
                {cap.icon}
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-1">{cap.title}</h3>
              <p className="text-[11px] text-gray-600 leading-snug flex-1">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
