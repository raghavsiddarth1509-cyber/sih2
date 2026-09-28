import { useEffect, useRef, useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Optional path/URL to the video file. Defaults to /assets/videos/sih-demo.mp4 */
  videoSrc?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc = '/assets/videos/sih-demo.mp4',
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [hasError, setHasError] = useState(false);

  // Manage video pause/reset, body scroll lock, and focus
  useEffect(() => {
    if (isOpen) {
      setHasError(false);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        clearTimeout(timer);
      };
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-primary/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-primary-container text-on-primary rounded-2xl border border-primary/40 shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 md:px-6 py-3.5 md:py-4 border-b border-primary/40 flex-shrink-0">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-secondary flex items-center gap-1.5 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
              <span>Evaluation Ready Artifacts</span>
            </div>
            <h2
              id="video-modal-title"
              className="text-on-primary font-headline font-bold text-sm md:text-lg"
            >
              3-Minute Video Demo — Ambedkar Digital Heritage Archive
            </h2>
            <p className="text-[11px] md:text-xs text-white/70 mt-0.5">
              Team Spidey Sense (Team ID: 139128) · SIH 2026
            </p>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-primary/60 hover:bg-primary text-white/80 hover:text-white flex items-center justify-center transition flex-shrink-0 cursor-pointer border border-white/10 focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Close video"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black flex items-center justify-center flex-grow overflow-hidden min-h-[220px] max-h-[68vh]">
          {hasError ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl mb-3 text-secondary">
                ⚠️
              </div>
              <p className="text-on-primary font-headline font-semibold text-sm mb-1">
                Video could not be loaded. Please try again.
              </p>
              <p className="text-white/60 text-xs max-w-xs">
                Check network connection or try reopening the demo modal.
              </p>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="w-full h-full max-h-[68vh] object-contain"
              controls
              playsInline
              preload="metadata"
              onError={() => setHasError(true)}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 md:px-6 py-2.5 md:py-3 border-t border-primary/40 flex items-center justify-between text-xs text-white/70 flex-shrink-0">
          <span className="font-mono text-[10px] md:text-[11px] truncate">
            SIH Problem PS SIH26096 · Heritage &amp; Culture · Phase 02
          </span>
          <button
            onClick={onClose}
            type="button"
            className="text-white/70 hover:text-white transition font-medium cursor-pointer ml-2 flex-shrink-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
