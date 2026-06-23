import { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

/** Compact statistic card for summaries and landing metrics. */
export default function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="min-w-0 rounded-xl bg-white p-4 shadow-soft">
      <Icon className="mb-3 h-6 w-6 text-mcc-wine" />
      <p className="break-words text-2xl font-black text-mcc-ink">{value}</p>
      <p className="break-words text-sm text-mcc-muted">{label}</p>
    </div>
  );
}
