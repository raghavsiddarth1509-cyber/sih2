import React from 'react';

// --- Types --------------------------------------------------------------------

export type CuttingVariant =
  | 'ambedkar-tribute'
  | 'educate-quote'
  | 'poona-pact'
  | 'constitution-record'
  | 'drafting-committee'
  | 'fragile-to-digital'
  | 'cad-archive'
  | 'justice-quote';

interface ArchivalCuttingProps {
  variant: CuttingVariant;
  rotate?: number;
  opacity?: number;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

// --- Size map -----------------------------------------------------------------

const sizeWidths: Record<string, string> = { xs: '108px', sm: '138px', md: '170px', lg: '210px' };

// --- Torn clip-paths ----------------------------------------------------------

const tornBottomPath =
  'polygon(0% 0%, 100% 0%, 100% 82%, 96% 90%, 90% 80%, 83% 89%, 77% 79%, 70% 87%, 63% 78%, 56% 87%, 49% 78%, 43% 86%, 36% 77%, 29% 86%, 22% 78%, 16% 86%, 9% 77%, 4% 84%, 0% 78%)';
const tornTopPath =
  'polygon(0% 20%, 4% 12%, 10% 22%, 16% 10%, 22% 20%, 29% 10%, 36% 21%, 43% 11%, 49% 20%, 56% 11%, 63% 20%, 70% 10%, 77% 21%, 83% 11%, 90% 20%, 96% 10%, 100% 20%, 100% 100%, 0% 100%)';

// --- Shared styles ------------------------------------------------------------

const paper: React.CSSProperties = {
  background: 'linear-gradient(135deg, #faf4e2 0%, #f3e9cc 50%, #eaddb8 100%)',
  boxShadow: '2px 4px 14px rgba(0,0,0,0.22), 0px 1px 3px rgba(0,0,0,0.14), inset 0 0 0 1px rgba(120,80,30,0.18)',
};

const rule: React.CSSProperties  = { height: '1px',  background: 'rgba(100,65,20,0.28)', margin: '5px 0' };
const ruleBold: React.CSSProperties = { height: '2px', background: 'rgba(100,65,20,0.38)', margin: '5px 0' };

const bl: React.CSSProperties = { flex: 1, height: '1px', background: 'rgba(90,55,15,0.25)' };

function badgeStyle(extra?: React.CSSProperties): React.CSSProperties {
  return { display:'flex', alignItems:'center', gap:'4px', fontSize:'6.5px', fontFamily:'monospace', letterSpacing:'0.13em', textTransform:'uppercase', color:'rgba(90,55,15,0.65)', marginBottom:'5px', ...extra };
}
function hl(extra?: React.CSSProperties): React.CSSProperties {
  return { fontFamily:'Georgia,"Times New Roman",serif', color:'#1a0e05', lineHeight:1.25, ...extra };
}
function bd(extra?: React.CSSProperties): React.CSSProperties {
  return { fontFamily:'Georgia,"Times New Roman",serif', color:'rgba(60,35,8,0.72)', lineHeight:1.35, ...extra };
}

const openQ: React.CSSProperties = { fontFamily:'Georgia,serif', fontSize:'30px', color:'rgba(90,55,15,0.30)', lineHeight:0.7, marginBottom:'2px' };

// --- Variants -----------------------------------------------------------------

function AmbedkarTribute() {
  return (
    <div style={{ padding:'10px 11px' }}>
      <div style={badgeStyle()}><span style={bl}/><span>Historical Record</span><span style={bl}/></div>
      <div style={hl({ fontWeight:700, fontSize:'12.5px', textTransform:'uppercase', letterSpacing:'0.045em', marginBottom:'2px' })}>Dr. B. R. Ambedkar</div>
      <div style={hl({ fontSize:'10px', fontStyle:'italic', marginBottom:'6px' })}>A Voice for Social Justice</div>
      <div style={rule}/>
      <div style={bd({ fontSize:'8px' })}>Born 14 April 1891 · Passed 6 December 1956</div>
      <div style={bd({ fontSize:'8px', marginTop:'2px' })}>Architect of the Constitution of India</div>
      <div style={{ ...rule, marginTop:'6px' }}/>
      <div style={badgeStyle({ justifyContent:'center', marginBottom:0 })}><span>Archival Reference · AMB-1891</span></div>
    </div>
  );
}

function EducateQuote() {
  return (
    <div style={{ padding:'10px 11px' }}>
      <div style={badgeStyle()}><span style={bl}/><span>Press Archive</span><span style={bl}/></div>
      <div style={openQ}>"</div>
      <div style={hl({ fontWeight:700, fontSize:'13.5px', fontStyle:'italic', textAlign:'center', marginBottom:'7px', lineHeight:1.4 })}>Educate.<br/>Agitate.<br/>Organize.</div>
      <div style={rule}/>
      <div style={badgeStyle({ justifyContent:'flex-end', marginBottom:0 })}><span>— Dr. B. R. Ambedkar</span></div>
    </div>
  );
}

function PoonaPact() {
  return (
    <div style={{ padding:'10px 11px', paddingBottom:'24px' }}>
      <div style={badgeStyle({ justifyContent:'center' })}>Archival Dispatch · September 1932</div>
      <div style={ruleBold}/>
      <div style={hl({ fontWeight:700, fontSize:'12px', textAlign:'center', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'5px' })}>The Poona Pact</div>
      <div style={bd({ fontSize:'8px', textAlign:'center', lineHeight:1.4 })}>24 September 1932 · Agreement between<br/>Dr. Ambedkar &amp; Mahatma Gandhi</div>
      <div style={rule}/>
      <div style={bd({ fontSize:'7.5px', textAlign:'center', fontStyle:'italic' })}>On reserved constituencies in provincial legislatures</div>
    </div>
  );
}

function ConstitutionRecord() {
  return (
    <div style={{ padding:'10px 11px' }}>
      <div style={badgeStyle({ justifyContent:'center' })}>Constitutional Record</div>
      <div style={ruleBold}/>
      <div style={hl({ fontWeight:700, fontSize:'16px', textAlign:'center', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'0px' })}>26 November</div>
      <div style={hl({ fontWeight:700, fontSize:'12px', textAlign:'center', letterSpacing:'0.04em', marginBottom:'6px' })}>1949</div>
      <div style={rule}/>
      <div style={bd({ fontSize:'8px', textAlign:'center', lineHeight:1.4 })}>Constitution of India officially adopted<br/>by the Constituent Assembly</div>
    </div>
  );
}

function DraftingCommittee() {
  return (
    <div style={{ padding:'10px 11px', paddingBottom:'24px' }}>
      <div style={badgeStyle()}><span style={bl}/><span>Digital Archive Note</span><span style={bl}/></div>
      <div style={hl({ fontWeight:700, fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.04em', marginBottom:'4px', lineHeight:1.3 })}>Ambedkar Chairs<br/>Drafting Committee</div>
      <div style={rule}/>
      <div style={bd({ fontSize:'8px', lineHeight:1.45 })}>29 August 1947 · Constituent Assembly appoints Dr. B. R. Ambedkar as Chairman of the Constitution Drafting Committee.</div>
    </div>
  );
}

function FragileToDigital() {
  return (
    <div style={{ padding:'10px 11px', paddingTop:'22px' }}>
      <div style={badgeStyle()}><span style={bl}/><span>Preservation Archive</span><span style={bl}/></div>
      <div style={hl({ fontWeight:700, fontSize:'11.5px', textTransform:'uppercase', letterSpacing:'0.04em', lineHeight:1.3, marginBottom:'5px' })}>From Fragile Paper<br/>to Digital Record</div>
      <div style={rule}/>
      <div style={bd({ fontSize:'8px', fontStyle:'italic', lineHeight:1.45 })}>Preserving Dr. Ambedkar's intellectual heritage through high-accuracy Indic OCR and source-grounded archival infrastructure.</div>
    </div>
  );
}

function CADArchive() {
  return (
    <div style={{ padding:'10px 11px' }}>
      <div style={badgeStyle({ justifyContent:'center' })}>Digital Archive Note</div>
      <div style={ruleBold}/>
      <div style={hl({ fontWeight:700, fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.07em', textAlign:'center', marginBottom:'3px' })}>Constituent Assembly<br/>Debates</div>
      <div style={bd({ fontSize:'8.5px', textAlign:'center', fontStyle:'italic', marginBottom:'4px' })}>1946 – 1950</div>
      <div style={rule}/>
      <div style={badgeStyle({ justifyContent:'center', marginBottom:0 })}><span>12 Volumes · 2,473 Pages · Digitized</span></div>
    </div>
  );
}

function JusticeQuote() {
  return (
    <div style={{ padding:'10px 11px' }}>
      <div style={badgeStyle()}><span style={bl}/><span>Archival Record</span><span style={bl}/></div>
      <div style={openQ}>"</div>
      <div style={hl({ fontWeight:400, fontSize:'10px', fontStyle:'italic', lineHeight:1.5, marginBottom:'6px' })}>Justice is the first virtue of social institutions.</div>
      <div style={rule}/>
      <div style={badgeStyle({ justifyContent:'flex-end', marginBottom:0 })}><span>— Dr. B. R. Ambedkar</span></div>
    </div>
  );
}

// --- Variant config -----------------------------------------------------------

type VC = { render: () => React.ReactNode; tornBottom?: boolean; tornTop?: boolean };
const variantConfig: Record<CuttingVariant, VC> = {
  'ambedkar-tribute':    { render: AmbedkarTribute },
  'educate-quote':       { render: EducateQuote },
  'poona-pact':          { render: PoonaPact, tornBottom: true },
  'constitution-record': { render: ConstitutionRecord },
  'drafting-committee':  { render: DraftingCommittee, tornBottom: true },
  'fragile-to-digital':  { render: FragileToDigital, tornTop: true },
  'cad-archive':         { render: CADArchive },
  'justice-quote':       { render: JusticeQuote },
};

// --- Main export --------------------------------------------------------------

export default function ArchivalCutting({ variant, rotate = 1.5, opacity = 0.82, className = '', size = 'md' }: ArchivalCuttingProps) {
  const { render, tornBottom, tornTop } = variantConfig[variant];
  const clipPath = tornBottom ? tornBottomPath : tornTop ? tornTopPath : undefined;
  return (
    <div aria-hidden="true" className={`pointer-events-none select-none absolute ${className}`} style={{ width: sizeWidths[size], transform: `rotate(${rotate}deg)`, opacity, zIndex: 3, clipPath }}>
      <div style={paper}>{render()}</div>
    </div>
  );
}
