import { ReactNode } from "react";

type PortalCardProps = {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Dashboard card wrapper with MCC header treatment. */
export default function PortalCard({ title, action, children, className = "" }: PortalCardProps) {
  return (
    <section className={`w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-mcc-line bg-white shadow-card ${className}`}>
      {title && (
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 bg-mcc-blush px-4 py-4 sm:px-5">
          <h2 className="min-w-0 break-words text-lg font-black leading-tight text-black">{title}</h2>
          <div className="shrink-0">{action}</div>
        </div>
      )}
      <div className="min-w-0 p-4 sm:p-5">{children}</div>
    </section>
  );
}
