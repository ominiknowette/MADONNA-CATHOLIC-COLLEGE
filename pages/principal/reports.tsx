import { Download, FileText, Layers, PieChart, Users } from "lucide-react";
import PrincipalLayout from "../../src/component/Product/PrincipalLayout";
import { principalStats, reports } from "../../src/lib/principalData";

const summary = [
  { label: "Class Reports", value: 18, icon: Layers },
  { label: "Promotion Reports", value: 8, icon: FileText },
  { label: "Staff Reports", value: 6, icon: Users },
  { label: "Student Population", value: principalStats.totalStudents.toLocaleString(), icon: Users },
  { label: "Result Submission", value: "87%", icon: PieChart },
];

/** Principal reports page for reviewing and exporting administrative summaries. */
export default function PrincipalReportsPage() {
  return (
    <PrincipalLayout active="Reports">
      <div className="grid gap-5">
        <section className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
            <select className="rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm outline-none focus:border-[#801431]" aria-label="Academic session">
              <option>2024/2025</option>
              <option>2025/2026</option>
            </select>
            <select className="rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm outline-none focus:border-[#801431]" aria-label="Term">
              <option>Second Term</option>
              <option>First Term</option>
              <option>Third Term</option>
            </select>
            <select className="rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm outline-none focus:border-[#801431]" aria-label="Date range">
              <option>01 Aug 2024 - 31 Jul 2025</option>
            </select>
            <button className="h-12 rounded-xl bg-[#801431] px-5 text-sm font-black text-white transition hover:bg-[#6F0F2A]">
              Export All
            </button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {summary.map(({ label, value, icon: Icon }) => (
            <article key={label} className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
              <Icon className="h-6 w-6 text-[#801431]" />
              <p className="mt-3 text-sm font-semibold text-[#6B5A70]">{label}</p>
              <p className="mt-1 break-words text-2xl font-black text-[#2B1631]">{value}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reports.map((report) => (
            <article key={report.title} className="min-w-0 rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF7FA] text-[#801431]">
                  <FileText className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-wide text-[#801431]">{report.category}</p>
                  <h2 className="mt-2 break-words text-lg font-black text-[#2B1631]">{report.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6B5A70]">{report.description}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button className="rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm font-black text-[#801431] transition hover:border-[#801431]">
                  View Report
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl bg-[#FFF7FA] px-4 py-3 text-sm font-black text-[#801431] transition hover:bg-[#F8E8EE]">
                  Export <Download className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </PrincipalLayout>
  );
}
