import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AMBEDKAR_IMAGE, TEAM_PHOTOS } from '../constants/images';
import ArchivalCutting from '../components/ArchivalCutting';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  subRole: string;
  badgeNum: string;
  department: string;
  year: string;
  bio: string;
  skills: string[];
  achievement: {
    icon: string;
    text: string;
  };
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'nagasundaram',
    name: 'Nagasundaram PB',
    role: 'Team Lead',
    subRole: 'Business Analyst',
    badgeNum: '01',
    department: 'Business Analysis',
    year: '3rd Year ECE',
    bio: 'Leads project strategy, stakeholder requirements, and operational feasibility matrices. Translates defense border surveillance mandates into actionable edge AI deployment roadmaps.',
    skills: ['Business Analysis', 'Product Strategy', 'Agile / Scrum', 'Market Feasibility'],
    achievement: {
      icon: '🏆',
      text: 'SIH 2025 Winner; Experienced team lead directing multi-disciplinary engineering initiatives.',
    },
    photo: TEAM_PHOTOS.nagasundaram,
  },
  {
    id: 'hariharapandiyan',
    name: 'Hariharapandiyan S',
    role: 'Core Engineer',
    subRole: 'ML Engineer',
    badgeNum: '02',
    department: 'Machine Learning',
    year: '3rd Year ECE',
    bio: 'Drives computer vision model training, edge optimization for YOLOv9/v26, and data science pipelines for camouflage-resilient threat detection across frontier video streams.',
    skills: ['Machine Learning', 'PyTorch / YOLO', 'Data Science', 'Python'],
    achievement: {
      icon: '🎖️',
      text: 'SIH 2025 Finalist; Specialized in computer vision pipelines and edge inference optimization.',
    },
    photo: TEAM_PHOTOS.hariharapandiyan,
  },
  {
    id: 'subhiksha',
    name: 'Subhiksha S',
    role: 'Core Engineer',
    subRole: 'Embedded & IoT',
    badgeNum: '03',
    department: 'Embedded Systems',
    year: '3rd Year ECE',
    bio: 'Designs and builds embedded firmware, RTSP/ONVIF hardware stream ingestion pipelines, and network control systems connecting border outpost CCTV nodes.',
    skills: ['Embedded C/C++', 'IoT Systems', 'Network Control', 'RTOS', 'GStreamer'],
    achievement: {
      icon: '🏆',
      text: 'SIH 2025 Winner; Specialized in embedded hardware controls and distributed edge network systems.',
    },
    photo: TEAM_PHOTOS.subhiksha,
  },
  {
    id: 'raghav',
    name: 'Raghav Siddarth D M',
    role: 'Core Engineer',
    subRole: 'Frontend & UI/UX',
    badgeNum: '04',
    department: 'UI/UX Design',
    year: '2nd Year CSE',
    bio: 'Architects intuitive operator dashboards, real-time telemetry visualizations, and data analytics pipelines for IBVAP border surveillance monitoring.',
    skills: ['Frontend Dev', 'UI/UX Design', 'Data Analysis', 'Tailwind CSS', 'React / Vue'],
    achievement: {
      icon: '🎨',
      text: 'UI/UX & Analytics Specialist; recognized for high-performance responsive web consoles.',
    },
    photo: TEAM_PHOTOS.raghav,
  },
  {
    id: 'tushar',
    name: 'Tushar H Parwani',
    role: 'Core Engineer',
    subRole: 'Security & Full Stack',
    badgeNum: '05',
    department: 'Cybersecurity',
    year: '2nd Year Cybersecurity',
    bio: 'Specializes in tamper-proof cryptographic audit trails, 10-layered security architectures, and robust full-stack dashboards for real-time border telemetry monitoring.',
    skills: ['Security Analysis', 'Full Stack Dev', 'Blockchain / SHA-256', 'Web Security', 'API Hardening'],
    achievement: {
      icon: '🛡️',
      text: 'Cybersecurity Specialist; Architect of tamper-proof ledger and hardened endpoints.',
    },
    photo: TEAM_PHOTOS.tushar,
  },
  {
    id: 'meinidhi',
    name: 'Meinidhi V',
    role: 'Core Engineer',
    subRole: 'Model Trainer & Editor',
    badgeNum: '06',
    department: 'Technical Editing',
    year: '2nd Year CSE',
    bio: 'Curates specialized datasets, optimizes computer vision training pipelines for low-light & camouflage edge scenarios, and directs technical media editing and documentation.',
    skills: ['Model Training', 'Dataset Curation', 'Technical Editing', 'Computer Vision', 'PyTorch'],
    achievement: {
      icon: '📚',
      text: 'AI Model Specialist; Spearheads synthetic training data generation and project media workflows.',
    },
    photo: TEAM_PHOTOS.meinidhi,
  },
];

const featureBadges = [
  { title: 'Archival Manuscripts', sub: 'Rare & Historic Papers' },
  { title: 'Indic OCR Digitization', sub: 'High Precision' },
  { title: 'Semantic Vector Search', sub: 'Hybrid RAG / BM25' },
  { title: 'Touchscreen Kiosks', sub: '4K Multitouch Rig' },
  { title: 'Chronological Timeline', sub: '1891 – 1956' },
  { title: 'Audiovisual Records', sub: 'Multi-indic Languages' },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between group border border-surface-container">
      <div>
        {/* Top: Avatar with Badge + Role info */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="relative shrink-0">
            <img
              alt={`${member.name}, ${member.role}`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shadow-sm border border-surface-container"
              src={member.photo}
            />
            <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[11px] font-bold shadow">
              {member.badgeNum}
            </span>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary text-[11px] font-semibold border border-surface-container-high">
              {member.role}
            </span>
            <span className="text-secondary text-xs font-semibold mt-1">
              {member.subRole}
            </span>
          </div>
        </div>

        {/* Member Name & Subtitle */}
        <h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">
          {member.name}
        </h3>
        <p className="text-xs text-on-surface-variant font-medium mb-2.5">
          {member.subRole}
        </p>

        {/* Bio */}
        <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
          {member.bio}
        </p>

        {/* Skills Chips */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded bg-surface-container-low text-primary text-[11px] font-medium border border-surface-container/60"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Highlight Achievement */}
        <div className="bg-surface-container-low p-2.5 rounded-lg border border-surface-container flex items-start gap-2 text-xs text-on-surface">
          <span className="text-secondary shrink-0 text-sm">{member.achievement.icon}</span>
          <span
            className="leading-snug text-[11px]"
            dangerouslySetInnerHTML={{
              __html: member.achievement.text.replace(
                /^(.*?);/,
                '<strong class="text-primary font-semibold">$1;</strong>'
              ),
            }}
          />
        </div>
      </div>

      {/* Card Footer: Year + Social Links */}
      <div className="mt-4 pt-3 border-t border-surface-container flex justify-between items-center text-xs text-on-surface-variant">
        <span className="font-medium">{member.year}</span>
        <div className="flex items-center space-x-2 text-on-surface-variant">
          <span className="p-1 rounded text-on-surface-variant cursor-default select-none pointer-events-none" aria-hidden="true">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </span>
          <span className="p-1 rounded text-on-surface-variant cursor-default select-none pointer-events-none" aria-hidden="true">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </span>
          <span className="p-1 rounded text-on-surface-variant cursor-default select-none pointer-events-none" aria-hidden="true">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy or error handled smoothly
      });
    }
  }, []);

  useEffect(() => {
    if (location.hash === '#mission-mandate') {
      const el = document.getElementById('mission-mandate');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16 space-y-14">
      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <section className="relative overflow-visible">
        {/* Archival cutting 1 — top-right of the image area, angled */}
        <ArchivalCutting
          variant="ambedkar-tribute"
          rotate={2.5}
          opacity={0.82}
          size="md"
          className="hidden lg:block -top-3 right-1"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          {/* Left: Tags + Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag Row */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface-container text-primary border border-surface-container-high">
                <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                Smart India Hackathon 2026
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-surface-container text-secondary border border-surface-container-high">
                TEAM ID: 139128
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface-container-high text-on-surface-variant border border-surface-container">
                Theme: Heritage &amp; Culture
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface-container-high text-on-surface-variant border border-surface-container">
                Category: Hardware &amp; AI Integration
              </span>
            </div>

            {/* Headline */}
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-headline font-bold text-primary leading-[1.12] tracking-tight mb-4">
                Preserving History.
                <br />
                <span className="italic font-semibold text-secondary">Making Knowledge Discoverable.</span>
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                An AI-powered Digital Heritage Archive for Dr. B. R. Ambedkar's writings,
                speeches, manuscripts, constitutional debates, and audiovisual legacy —
                engineered for institutional research vaults, memorials, and interactive
                public touchscreen kiosks.
              </p>
            </div>
          </div>

          {/* Right: Memorial Image Plate */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md lg:max-w-none bg-surface-container-lowest p-2.5 rounded-2xl border border-surface-container shadow-sm">
              <div className="relative overflow-hidden rounded-xl border border-surface-container bg-primary-container">
                {!videoError ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={AMBEDKAR_IMAGE}
                    onError={() => setVideoError(true)}
                    className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl block"
                  >
                    <source src="/assets/videos/ambedkar-hero-intro.mp4" type="video/mp4" />
                    <img
                      src={AMBEDKAR_IMAGE}
                      alt="Dr. B. R. Ambedkar Memorial Statue and Parliament Architecture"
                      className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
                    />
                  </video>
                ) : (
                  <img
                    src={AMBEDKAR_IMAGE}
                    alt="Dr. B. R. Ambedkar Memorial Statue and Parliament Architecture"
                    className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
                  />
                )}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-4 pt-8 text-on-primary text-left z-10 pointer-events-none">
                  <div className="text-[11px] font-medium tracking-wide text-secondary-fixed uppercase font-mono">
                    Archival Reference #AMB-1950
                  </div>
                  <div className="text-xs text-primary-fixed-dim font-sans mt-0.5">
                    Architect of the Constitution • Parliament of India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {featureBadges.map((badge) => (
            <div
              key={badge.title}
              className="bg-primary-container border border-primary/40 p-3.5 rounded-xl text-center shadow-sm
                         hover:bg-primary hover:-translate-y-0.5 hover:border-secondary-container/60
                         hover:shadow-md transition-all duration-150 cursor-default"
            >
              <div className="text-xs font-bold text-on-primary">{badge.title}</div>
              <div className="text-[10px] text-white/60 mt-0.5">{badge.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          2. TEAM & ROSTER SECTION (Below Hero Content)
          ============================================================ */}
      <section id="team" className="relative pt-6 border-t border-surface-container">
        {/* Archival cutting 2 — Educate, Agitate, Organize quote, top-right header of team */}
        <ArchivalCutting
          variant="educate-quote"
          rotate={-2.5}
          opacity={0.80}
          size="md"
          className="hidden lg:block top-0 right-44"
        />
        {/* Archival cutting 3 — small record note, top-right of team section */}
        <ArchivalCutting
          variant="cad-archive"
          rotate={2}
          opacity={0.76}
          size="sm"
          className="hidden lg:block top-2 right-4"
        />
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary uppercase tracking-widest mb-1">
            <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
            <span>Specialist Roster</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary tracking-tight">
            The Core Engineering Unit
          </h2>
          <p className="text-xs md:text-sm text-on-surface-variant mt-1 max-w-2xl">
            Six multidisciplinary engineers and researchers delivering end-to-end hardware kiosk
            enclosures, Indic OCR pipelines, cryptographic archival ledgers, and responsive
            visitor interfaces.
          </p>
        </div>

        {/* 3×2 Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Mission Mandate Banner */}
        <div
          id="mission-mandate"
          className="scroll-mt-20 mt-10 bg-primary-container text-on-primary rounded-2xl p-6 md:p-8 shadow-md border border-primary/50 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center space-x-2 text-[11px] tracking-wider uppercase font-semibold text-secondary-fixed">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              <span>Mission Mandate</span>
              <span className="text-on-primary-container">·</span>
              <span className="text-on-primary-container">Ministry of Culture &amp; Ministry of Education / SIH 2026</span>
            </div>
            <h3 className="text-lg md:text-xl font-headline font-bold text-on-primary tracking-tight">
              AI-Powered Institutional Digital Archive &amp; Interactive Kiosk Platform for Dr. B. R.
              Ambedkar Memorials &amp; Manuscripts
            </h3>
            <p className="text-xs md:text-sm text-on-primary-container leading-relaxed">
              Overcoming heritage fragmentation through high-resolution manuscript digitization,
              multilingual OCR, semantic vector search, source-grounded RAG, and edge-powered
              interactive public touchscreen kiosks.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://drambedkar-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap bg-secondary-container hover:bg-secondary text-on-primary font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <span>Explore Prototype</span>
              <span className="text-base">→</span>
            </a>
          </div>
        </div>

        {/* Project Pitch Compact CTA Strip */}
        <div className="mt-6 bg-surface-container-lowest border border-surface-container rounded-2xl p-5 md:px-7 md:py-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-1.5 text-secondary text-[11px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
              <span>Project Pitch</span>
            </div>
            <p className="text-xs md:text-sm text-primary font-medium leading-relaxed">
              See how the Ambedkar Digital Heritage Archive transforms fragile historical records into an interactive digital archive.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              to="/overview#project-pitch"
              className="inline-flex items-center gap-1.5 whitespace-nowrap bg-primary hover:bg-primary-container text-on-primary font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <span>View Pitch</span>
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
