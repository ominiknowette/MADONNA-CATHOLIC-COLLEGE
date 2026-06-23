import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  dark?: boolean;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
};

/** Renders the Madonna Catholic College crest and wordmark. */
export default function Logo({ compact = false, dark = false, className = "", imageClassName = "", textClassName = "" }: LogoProps) {
  return (
    <Link href="/" className={`min-w-0 flex items-center gap-3 ${className}`}>
      <img
        src="/images/mcc-logo.png"
        alt="Madonna Catholic College logo"
        className={`h-12 w-12 shrink-0 rounded-md bg-white object-contain ${imageClassName}`}
      />
      {!compact && (
        <div className={`min-w-0 ${dark ? "text-white" : "text-mcc-ink"} ${textClassName}`}>
          <p className="text-base font-extrabold leading-tight">Madonna Catholic</p>
          <p className="text-base font-extrabold leading-tight">College (MCC)</p>
        </div>
      )}
    </Link>
  );
}
