const ecosystemBenchmarks = [
  {
    name: 'Dr. Ambedkar Foundation',
    org: 'Ministry of Social Justice',
    desc: 'Contains 40+ volumes of published writings, speeches, and correspondence in multiple languages.',
  },
  {
    name: 'Constituent Assembly Debates',
    org: 'Parliament of India Archive',
    desc: '12 volumes documentation covering the clause-by-clause drafting of the Constitution from 1946 to 1950.',
  },
  {
    name: 'National Digital Library (NDLI)',
    org: 'Institutional Digital Repository',
    desc: 'Large-scale educational digital assets including referenced scholarly articles regarding Dr. Ambedkar.',
  },
  {
    name: 'Memorials & Museums',
    org: 'Dr. B.R. Pratishthan',
    desc: 'Chaitya Bhoomi, Deekshabhoomi, and Janmabhoomi requiring interactive visitor touchscreen hardware.',
  },
];

export default function Overview() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-[11px] uppercase tracking-widest font-mono text-amber-700 font-semibold block mb-1">
          Analytical Foundation
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heritage font-bold text-gray-900 tracking-tight">
          Project Overview &amp; Case Study
        </h2>
        <p className="text-xs md:text-sm text-gray-600 mt-2">
          Bridging the critical transition from fragmented physical paper documents to an
          interconnected, source-grounded national digital infrastructure.
        </p>
      </div>

      {/* 3-Column Problem/Gap/Approach */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* 01 Problem */}
        <div className="bg-white border-t-2 border-t-rose-500 border-x border-b border-[#E8E3DA] p-5 rounded-b-lg shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-rose-500 font-bold">▲</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">
              01. The Problem
            </span>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2">Fragmented Heritage</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Dr. B. R. Ambedkar's writings, speeches, manuscripts, constitutional debates,
            photographic and historical records are distributed across disparate libraries,
            memorial trusts, government archives, and fragmented physical printings with zero
            unified search.
          </p>
          <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
            <strong className="text-gray-800">Vulnerability:</strong> Paper brittleness, lack of
            high-res centralized scans, and regional isolation.
          </div>
        </div>

        {/* 02 Critical Gap */}
        <div className="bg-white border-t-2 border-t-amber-500 border-x border-b border-[#E8E3DA] p-5 rounded-b-lg shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-500 font-bold">⚠</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
              02. The Critical Gap
            </span>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2">Archives Need Intelligence</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Traditional archival repositories are passive PDF silos. Students, researchers, and
            memorial visitors cannot discover information across vernacular documents, multilingual
            voice material, calculated audio clips, or complex legal cross-references.
          </p>
          <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
            <strong className="text-gray-800">Limitation:</strong> Poor keyword searches fail when
            searching conceptual queries in Marathi, Hindi, and English.
          </div>
        </div>

        {/* 03 Approach */}
        <div className="bg-white border-t-2 border-t-emerald-600 border-x border-b border-[#E8E3DA] p-5 rounded-b-lg shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-emerald-600 font-bold">✔</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
              03. Our Approach
            </span>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2">One Intelligent Platform</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            A centralized digital platform pairing high-accuracy Indic OCR, dense vector semantic
            search, source-grounded RAG, interactive chronological timelines, audiovisual playback,
            and ruggedized physical museum kiosks.
          </p>
          <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
            <strong className="text-gray-800">Delivery:</strong> 100% verified archival citation
            grounding with physical memorial touchscreen kiosks.
          </div>
        </div>
      </div>

      {/* Case Study / Ecosystem Benchmark */}
      <div className="border border-[#E8E3DA] rounded-lg bg-white p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-gray-200">
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              Case Study &amp; Existing Heritage Ecosystem Benchmark
            </h4>
            <p className="text-[11px] text-gray-500">
              How our unified platform enhances and interconnects existing archival repositories
            </p>
          </div>
          <span className="text-[10px] bg-amber-50 text-amber-800 font-medium px-2 py-0.5 rounded border border-amber-200 self-start sm:self-auto">
            Ecosystem Integration
          </span>
        </div>

        {/* 4-column ecosystem grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {ecosystemBenchmarks.map((item) => (
            <div key={item.name} className="bg-gray-50/70 p-3.5 rounded border border-gray-200">
              <span className="font-bold text-gray-800 text-[11px] block mb-1">{item.name}</span>
              <span className="text-[10px] font-mono text-gray-400 block mb-2">{item.org}</span>
              <p className="text-gray-600 text-[11px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pipeline Footer Strip */}
        <div className="mt-4 bg-[#0A1118] text-white p-2.5 rounded flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-emerald-400 font-bold">● DIGITIZE (OCR)</span>
            <span className="text-gray-600">→</span>
            <span className="text-blue-400 font-bold">VECTORIZE (EMBED)</span>
            <span className="text-gray-600">→</span>
            <span className="text-amber-400 font-bold">INDEX (PGVECTOR)</span>
            <span className="text-gray-600">→</span>
            <span className="text-purple-400 font-bold">CITABLE RETRIEVAL</span>
          </div>
          <div className="text-amber-400 font-sans font-medium text-[11px]">
            Our Solution: One Unified, Source-Grounded Archive &amp; Kiosk System
          </div>
        </div>
      </div>
    </section>
  );
}
