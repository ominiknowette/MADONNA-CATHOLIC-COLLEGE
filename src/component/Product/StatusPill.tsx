type StatusPillProps = {
  children: string;
  tone?: "success" | "danger" | "warning" | "neutral";
};

/** Small status indicator for tables and badges. */
export default function StatusPill({ children, tone = "neutral" }: StatusPillProps) {
  const tones = {
    success: "bg-emerald-100 text-emerald-800",
    danger: "bg-rose-100 text-rose-800",
    warning: "bg-amber-100 text-amber-800",
    neutral: "bg-mcc-blush text-mcc-wine",
  };

  return <span className={`rounded-full px-3 py-1 text-xs font-bold ${tones[tone]}`}>{children}</span>;
}
