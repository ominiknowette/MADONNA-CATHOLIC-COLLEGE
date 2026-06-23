import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  header?: boolean;
  headerClassName?: string;
};

/** Soft MCC card surface used across the public site and portal. */
export default function Card({
  children,
  className = "",
  header = false,
  headerClassName = ""
 }: CardProps) {
  return (
    <section className={`w-full min-w-0 rounded-2xl border border-mcc-line bg-white shadow-soft ${className}`}>
      {header && (
        <div className={`border-b border-mcc-line bg-mcc-blush px-5 py-4 ${headerClassName}`}>
          {children}
        </div>
      )}
      {!header && (
        <div className="p-5">
          {children}
        </div>
      )}
    </section>
  );
}