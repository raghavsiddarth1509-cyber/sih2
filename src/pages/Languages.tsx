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
    iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
    title: 'Read Verified Transcripts',
    desc: 'Side-by-side original scans alongside accurately transcribed bilingual text with line-by-line editorial footnotes and provenance tags.',
    meta: 'Format: XML / TEI Compliant',
  },
  {
    icon: 'fa-solid fa-language',
    iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
    title: 'Cross-Lingual Discovery',
    desc: 'Search in Marathi or Hindi and discover relevant English constitutional speeches with seamless cross-language vector retrieval.',
    meta: 'Engine: Multilingual E5 & LaBSE',
  },
  {
    icon: 'fa-solid fa-headphones',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    title: 'Listen Audio Narration',
    desc: 'Natural Indic speech models synthesizing Marathi, Hindi, and English audio for accessibility among visually challenged visitors.',
    meta: 'Voice Models: Bhashini TTS Integrated',
  },
];

const audiences = [
  {
    icon: 'fa-solid fa-users-line',
    iconBg: 'bg-amber-50 text-amber-800 border-amber-200',
    title: 'Memorial & Museum Visitors',
    desc: 'Simplified navigation, audio-visual storytelling, and multilingual guided narration tailored for quick public engagement.',
    tag: 'Walk-up Touch Experience',
    tagColor: 'text-amber-900',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    iconBg: 'bg-blue-50 text-blue-800 border-blue-200',
    title: 'Students & Learners',
    desc: 'Curated timelines, interactive constitutional themes, and gamified historical exploration paths for school groups.',
    tag: 'Curriculum Aligned',
    tagColor: 'text-blue-900',
  },
  {
    icon: 'fa-solid fa-book-bookmark',
    iconBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    title: 'Academic Researchers',
    desc: 'Deep semantic cross-referencing, verbatim citation exports, DOI referencing, and dialect-specific search across archives.',
    tag: 'Scholarly Citations',
    tagColor: 'text-emerald-900',
  },
  {
    icon: 'fa-solid fa-feather-pointed',
    iconBg: 'bg-purple-50 text-purple-800 border-purple-200',
    title: 'Archivists & Curators',
    desc: 'Digitization pipeline, OCR quality verification, Dublin Core tagging, and audit trail ledger access.',
    tag: 'Preservation Controls',
    tagColor: 'text-purple-900',
  },
];

export default function Languages() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Languages Section */}
      <section>
        <div className="mb-6 border-b border-[#E2DDD3] pb-4">
          <div className="inline-flex items-center px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-semibold tracking-wider uppercase mb-1.5">
            Multilingual Heritage Repository
          </div>
          <h2 className="text-2xl sm:text-3xl font-heritage text-slate-900 font-semibold tracking-tight">
            One Archive. Many Languages.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Democratizing Dr. Ambedkar's intellectual thought across India's linguistic diversity
            with real-time translation and Indic speech synthesis.
          </p>
        </div>

        {/* Language Chips */}
        <div className="flex flex-wrap items-center gap-2 p-3 bg-white border border-[#E8E5DD] rounded-lg mb-6">
          <span className="text-xs font-semibold text-slate-500 mr-2 uppercase tracking-wide">
            Supported Languages:
          </span>
          {languages.map((lang) => (
            <span
              key={lang.label}
              className={
                lang.primary
                  ? 'px-2.5 py-1 rounded bg-amber-800 text-white text-xs font-medium shadow-sm'
                  : 'px-2.5 py-1 rounded bg-[#F5F2EB] text-slate-800 text-xs font-medium border border-[#E2DDD3] hover:bg-amber-50 cursor-pointer transition-colors'
              }
            >
              {lang.label}
            </span>
          ))}
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {langFeatures.map((feat) => (
            <div
              key={feat.title}
              className="bg-white border border-[#E8E5DD] rounded-lg p-5 shadow-2xs"
            >
              <div
                className={`w-8 h-8 rounded-full ${feat.iconBg} flex items-center justify-center text-xs mb-3 border`}
              >
                <i className={feat.icon}></i>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 font-heritage">{feat.title}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{feat.desc}</p>
              <div className="mt-4 text-[11px] font-mono text-slate-400">{feat.meta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Audiences Section */}
      <section>
        <div className="mb-6 border-b border-[#E2DDD3] pb-4 text-center">
          <div className="inline-flex items-center px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-semibold tracking-wider uppercase mb-1.5">
            Human-Centric Design
          </div>
          <h2 className="text-2xl sm:text-3xl font-heritage text-slate-900 font-semibold tracking-tight">
            Designed for Four Key Audiences
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl mx-auto">
            Tailored user experiences accommodating different levels of scholarly rigor, physical
            accessibility, and research depth.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((aud) => (
            <div
              key={aud.title}
              className="bg-white border border-[#E8E5DD] rounded-lg p-5 shadow-2xs text-center flex flex-col items-center justify-between"
            >
              <div className="w-full">
                <div
                  className={`w-12 h-12 rounded-full ${aud.iconBg} flex items-center justify-center text-lg mb-3 mx-auto border`}
                >
                  <i className={aud.icon}></i>
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heritage">{aud.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{aud.desc}</p>
              </div>
              <div
                className={`mt-4 w-full pt-3 border-t border-slate-100 text-[10px] font-semibold ${aud.tagColor} tracking-wide uppercase`}
              >
                {aud.tag}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
