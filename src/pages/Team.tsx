import { Link } from 'react-router-dom';
import { TEAM_PHOTOS } from '../constants/images';

interface TeamMember {
  id: string;
  num: string;
  name: string;
  role: string;
  subrole: string;
  year: string;
  photo: string;
  borderColor: string;
  bio: string;
  skills: string[];
  achievement: { icon: string; text: string };
}

const teamMembers: TeamMember[] = [
  {
    id: 'nagasundaram',
    num: '01',
    name: 'Nagasundaram PB',
    role: 'Team Lead',
    subrole: 'Business Analyst',
    year: '3rd Year ECE',
    photo: TEAM_PHOTOS.nagasundaram,
    borderColor: 'border-amber-200',
    bio: 'Leads project strategy, stakeholder requirements, and operational feasibility matrices. Translates defense border surveillance mandates into actionable edge AI deployment roadmaps.',
    skills: ['Business Analysis', 'Product Strategy', 'Agile / Scrum', 'Market Feasibility'],
    achievement: {
      icon: '🏆',
      text: 'SIH 2025 Winner; Experienced team lead directing multi-disciplinary engineering initiatives.',
    },
  },
  {
    id: 'hariharapandiyan',
    num: '02',
    name: 'Hariharapandiyan S',
    role: 'Core Engineer',
    subrole: 'ML Engineer',
    year: '3rd Year ECE',
    photo: TEAM_PHOTOS.hariharapandiyan,
    borderColor: 'border-blue-200',
    bio: 'Drives computer vision model training, edge optimization for YOLOv9/v26, and data science pipelines for camouflage-resilient threat detection across frontier video streams.',
    skills: ['Machine Learning', 'PyTorch / YOLO', 'Data Science', 'Python'],
    achievement: {
      icon: '🎖',
      text: 'SIH 2025 Finalist; Specialized in computer vision pipelines and edge inference optimization.',
    },
  },
  {
    id: 'subhiksha',
    num: '03',
    name: 'Subhiksha S',
    role: 'Core Engineer',
    subrole: 'Embedded & IoT',
    year: '3rd Year ECE',
    photo: TEAM_PHOTOS.subhiksha,
    borderColor: 'border-purple-200',
    bio: 'Designs and builds embedded firmware, RTSP/ONVIF hardware stream ingestion pipelines, and network control systems connecting border outpost CCTV nodes.',
    skills: ['Embedded C/C++', 'IoT Systems', 'Network Control', 'RTOS', 'GStreamer'],
    achievement: {
      icon: '🏆',
      text: 'SIH 2025 Winner; Specialized in embedded hardware controls and distributed edge network systems.',
    },
  },
  {
    id: 'raghav',
    num: '04',
    name: 'Raghav Siddarth D M',
    role: 'Core Engineer',
    subrole: 'Frontend & UI/UX',
    year: '2nd Year CSE',
    photo: TEAM_PHOTOS.raghav,
    borderColor: 'border-teal-200',
    bio: 'Architects intuitive operator dashboards, real-time telemetry visualizations, and data analytics pipelines for IDVAP border surveillance monitoring.',
    skills: ['Frontend Dev', 'UI/UX Design', 'Data Analysis', 'Tailwind CSS', 'React / Vue'],
    achievement: {
      icon: '🎖',
      text: 'UI/UX & Analytics Specialist; recognized for high-performance responsive web consoles.',
    },
  },
  {
    id: 'tushar',
    num: '05',
    name: 'Tushar H Parwani',
    role: 'Core Engineer',
    subrole: 'Security & Full Stack',
    year: '2nd Year Cybersecurity',
    photo: TEAM_PHOTOS.tushar,
    borderColor: 'border-rose-200',
    bio: 'Specializes in tamper-proof cryptographic audit trails, 10-layered security architectures, and robust full-stack dashboards for real-time border telemetry monitoring.',
    skills: ['Security Analysis', 'Full Stack Dev', 'Blockchain / SHA-256', 'Web Security', 'API Hardening'],
    achievement: {
      icon: '🛡',
      text: 'Cybersecurity Specialist; Architect of AMB-AI tamper-proof ledger and hardened endpoints.',
    },
  },
  {
    id: 'meinidhi',
    num: '06',
    name: 'Meinidhi V',
    role: 'Core Engineer',
    subrole: 'Model Trainer & Editor',
    year: '2nd Year CSE',
    photo: TEAM_PHOTOS.meinidhi,
    borderColor: 'border-emerald-200',
    bio: 'Curates specialized datasets, optimizes computer vision training pipelines for low-light & camouflage edge scenarios, and directs technical media editing and documentation.',
    skills: ['Model Training', 'Dataset Curation', 'Technical Editing', 'Computer Vision', 'PyTorch'],
    achievement: {
      icon: '✨',
      text: 'AI Model Specialist; Spearheads synthetic training data generation and project media workflows.',
    },
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="bg-white border border-[#E8E3DA] rounded-xl p-5 shadow-xs hover:border-amber-400 transition-colors duration-150 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="relative flex-shrink-0">
            <img
              alt={member.name}
              className={`w-12 h-12 rounded-lg object-cover border ${member.borderColor} shadow-xs`}
              src={member.photo}
            />
            <span className="absolute -bottom-1 -right-1 px-1 rounded-full bg-[#0A1118] text-white font-mono font-bold text-[8px] flex items-center justify-center border border-white leading-4">
              {member.num}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-bold text-blue-800 block leading-tight">{member.role}</span>
            <span className="text-[10px] font-medium text-amber-800 block">{member.subrole}</span>
          </div>
        </div>

        {/* Name */}
        <div className="mb-2">
          <h3 className="text-base font-bold text-gray-900 leading-tight">{member.name}</h3>
          <div className="text-[11px] font-medium text-gray-500 mt-0.5">
            {member.role} &amp; {member.subrole}
          </div>
        </div>

        <p className="text-[11px] text-gray-600 leading-relaxed">{member.bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mt-3">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="text-[9px] font-medium bg-blue-50 text-blue-900 px-2 py-0.5 rounded border border-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Achievement */}
        <div className="mt-3 p-2 rounded-lg bg-amber-50/70 border border-amber-200/60 flex items-start gap-2 text-[10px] text-amber-900 leading-tight">
          <span className="text-amber-600 flex-shrink-0">{member.achievement.icon}</span>
          <span
            dangerouslySetInnerHTML={{
              __html: member.achievement.text.replace(
                /^(.*?);/,
                '<strong>$1;</strong>'
              ),
            }}
          />
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-4 pt-2.5 border-t border-gray-100 flex justify-between items-center text-[11px] text-gray-500">
        <span className="font-medium text-gray-600">{member.year}</span>
        <div className="flex items-center space-x-2 text-gray-400">
          <a className="hover:text-amber-700 transition-colors" href="#" title="Email">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </a>
          <a className="hover:text-amber-700 transition-colors" href="#" title="Profile">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </a>
          <a className="hover:text-amber-700 transition-colors" href="#" title="Portfolio">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-12">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block"></span>
          ● OFFICIAL SIH ROSTER
        </div>
        <h2 className="text-2xl md:text-3xl font-heritage font-bold text-gray-900 mt-1">
          The Core Engineering Unit
        </h2>
        <p className="text-xs md:text-sm text-gray-600 mt-1 max-w-3xl">
          Six multidisciplinary engineers and researchers delivering end-to-end hardware kiosk
          enclosures, Indic OCR pipelines, cryptographic archival ledgers, and responsive
          visitor interfaces.
        </p>
      </div>

      {/* 3×2 Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      {/* Team Summary Strip */}
      <div className="mt-8 bg-[#0A1118] text-white rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-md border border-gray-800">
        <div className="space-y-1.5 max-w-3xl">
          <div className="flex items-center space-x-2 text-[10px] tracking-widest uppercase font-mono text-amber-400">
            <span>● Problem Statement</span>
            <span className="text-gray-500">|</span>
            <span>Ministry of Culture &amp; Ministry of Education</span>
            <span className="text-gray-500">|</span>
            <span>SIH 2026</span>
          </div>
          <h3 className="text-base md:text-lg font-bold text-white tracking-wide">
            AI-Powered Institutional Digital Archive &amp; Interactive Kiosk Platform for Dr. B. R.
            Ambedkar Memorials &amp; Manuscripts
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Overcoming heritage fragmentation through high-resolution manuscript digitization,
            multilingual OCR, semantic vector search, source-grounded RAG, and edge-powered
            interactive public touchscreen kiosks.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            to="/archive-ai"
            className="inline-block whitespace-nowrap bg-[#D97706] hover:bg-[#b45309] text-white font-bold text-xs px-5 py-3 rounded shadow transition uppercase tracking-wider"
          >
            Interactive Prototype Demo →
          </Link>
        </div>
      </div>
    </section>
  );
}
