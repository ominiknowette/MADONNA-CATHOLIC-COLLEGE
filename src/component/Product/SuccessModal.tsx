import { Check, CheckCircle2, Heart, Mail, X } from "lucide-react";
import { useEffect, useRef } from "react";

type SuccessModalProps = {
  open: boolean;
  title?: string;
  message: string;
  onClose: () => void;
};

/** Accessible confirmation modal for successful public form submissions. */
export default function SuccessModal({
  open,
  title = "Enquiry Submitted!",
  message,
  onClose,
}: SuccessModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-mcc-ink/50 px-4 py-4 backdrop-blur-md"
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-message success-modal-next"
        className="relative max-h-[92vh] w-full overflow-y-auto rounded-[1.65rem] border border-white/80 bg-white text-center text-mcc-ink shadow-[0_24px_70px_rgba(43,22,49,0.24)]"
        style={{
          maxWidth: "min(92vw, var(--admission-modal-max-width, 35rem))",
          padding:
            "clamp(1.25rem, calc(var(--admission-modal-density, 0.86) * 4vw), 2rem)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-mcc-line/80 bg-white text-mcc-wine transition hover:border-mcc-wine hover:bg-mcc-pink focus:outline-none focus:ring-4 focus:ring-mcc-line/70 sm:h-10 sm:w-10"
          aria-label="Close confirmation modal"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </button>

        <div
          className="mx-auto mb-4 flex w-full max-w-xs items-center justify-center gap-3 pt-1"
          aria-hidden="true"
        >
          <span className="hidden h-2 w-2 rounded-full border-2 border-mcc-wine/50 sm:block" />
          <span className="hidden text-mcc-line sm:block">✣</span>
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-700 shadow-[0_0_0_10px_rgba(34,197,94,0.08)] sm:h-20 sm:w-20">
            <Check className="h-9 w-9 stroke-[3]" aria-hidden="true" />
          </span>
          <span className="hidden text-mcc-line sm:block">✣</span>
          <span className="hidden h-2 w-2 rounded-full border-2 border-mcc-wine/50 sm:block" />
        </div>

        <p className="text-xs font-black uppercase tracking-[0.32em] text-mcc-wine sm:text-sm">
          Madonna Catholic College
        </p>
        <h2
          id="success-modal-title"
          className="mt-3 font-display text-3xl font-black tracking-tight text-mcc-ink sm:text-4xl"
        >
          {title}
        </h2>

        <div
          className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-4 text-mcc-wine/80"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-mcc-wine/70" />
          <CheckCircle2 className="h-6 w-6" />
          <span className="h-px flex-1 bg-mcc-wine/70" />
        </div>

        <p
          id="success-modal-message"
          className="mx-auto mt-4 max-w-lg text-sm font-medium leading-7 text-mcc-ink/85 sm:text-base"
        >
          {message}
        </p>

        <div
          id="success-modal-next"
          className="mx-auto mt-5 flex max-w-xl items-start gap-4 rounded-[1.35rem] border border-mcc-line/40 bg-mcc-pink/55 p-4 text-left shadow-inner sm:p-5"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-mcc-wine shadow-soft">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-base font-black text-mcc-wine">What happens next?</h3>
            <p className="mt-1.5 text-sm font-medium leading-6 text-mcc-ink/80">
              Our admissions team will review your details. You will receive an email update soon.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-lg items-start gap-3 border-t border-mcc-line/60 pt-4 text-left">
          <Heart className="mt-1 h-5 w-5 shrink-0 text-mcc-wine" aria-hidden="true" />
          <p className="text-sm font-medium leading-6 text-mcc-ink/85">
            We appreciate your trust in us and look forward to connecting with you.
          </p>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="mx-auto mt-5 inline-flex min-h-11 w-full max-w-lg items-center justify-center gap-2 rounded-xl bg-mcc-wine px-5 py-3 text-sm font-black text-white shadow-soft transition-colors hover:bg-mcc-plum focus:outline-none focus:ring-4 focus:ring-mcc-line/80"
        >
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          Close
        </button>
      </section>
    </div>
  );
}
