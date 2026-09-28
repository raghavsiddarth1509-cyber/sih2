import { useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Optional path/URL to the video file. Leave undefined until MP4 is ready. */
  videoSrc?: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Video Demo"
    >
      <div className="relative w-full max-w-4xl bg-primary-container text-on-primary rounded-2xl border border-primary/40 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary/40">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-secondary-fixed flex items-center gap-1.5 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
              <span>Evaluation Ready Artifacts</span>
            </div>
            <h2 className="text-on-primary font-headline font-bold text-base md:text-lg">
              3-Minute Video Demo — Ambedkar Digital Heritage Archive
            </h2>
            <p className="text-xs text-primary-fixed-dim mt-0.5">
              Team Spidey Sense (Team ID: 139128) · SIH 2026
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-primary/60 hover:bg-primary text-primary-fixed-dim hover:text-on-primary flex items-center justify-center transition flex-shrink-0 cursor-pointer"
            aria-label="Close video"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black aspect-video flex items-center justify-center">
          {videoSrc ? (
            <video
              ref={videoRef}
              className="w-full h-full"
              controls
              playsInline
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            /* Clean placeholder shown when no MP4 is available yet */
            <div className="flex flex-col items-center justify-center gap-4 text-center px-8 py-12">
              <div className="w-16 h-16 rounded-full bg-secondary-container/20 border border-secondary-container/40 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary-container" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <p className="text-on-primary font-headline font-bold text-base mb-1">
                  Demo video coming soon
                </p>
                <p className="text-primary-fixed-dim text-xs leading-relaxed max-w-sm">
                  The 3-minute demonstration video will be available here. The video UI
                  and player are fully functional — connect the MP4 file to activate playback.
                </p>
              </div>
              <div className="mt-2 font-mono text-[10px] text-primary-fixed-dim bg-primary/70 px-4 py-2 rounded-lg border border-primary-fixed-dim/20">
                To enable: add <span className="text-secondary-fixed">videoSrc</span> prop to{' '}
                <span className="text-secondary-fixed">&lt;VideoModal&gt;</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-primary/40 flex items-center justify-between text-xs text-primary-fixed-dim">
          <span className="font-mono text-[11px]">
            SIH Problem PS SIH26096 · Heritage &amp; Culture · Phase 02
          </span>
          <button
            onClick={onClose}
            className="text-primary-fixed-dim hover:text-on-primary transition font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
