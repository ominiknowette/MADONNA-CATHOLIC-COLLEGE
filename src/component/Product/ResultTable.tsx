import { Download } from "lucide-react";
import { portalResults } from "../../lib/data";
import Card from "./Card";

/** Student result table with term/session controls. */
export default function ResultTable() {
  const total = portalResults.reduce((sum, row) => sum + row.total, 0);
  const average = Math.round(total / portalResults.length);

  return (
    <Card header className="p-4 sm:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-black text-mcc-ink">Second Term Results</h2>
          <p className="text-sm text-[#6B5A70]">2025/2026 Academic Session</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <select className="rounded-lg border border-mcc-line px-4 py-3"><option>Second Term</option></select>
          <select className="rounded-lg border border-mcc-line px-4 py-3"><option>2025/2026</option></select>
        </div>
      </div>
      <div className="mt-6 w-full overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead className="text-sm text-[#6B5A70]">
            <tr className="border-b border-mcc-line">
              {["Subject", "CA", "Exam", "Total", "Grade", "Remark"].map((header) => <th key={header} className="px-4 py-3">{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {portalResults.map((row) => (
              <tr key={row.subject} className="border-b border-mcc-line last:border-0">
                <td className="px-4 py-4 font-bold">{row.subject}</td>
                <td className="px-4 py-4">{row.ca}</td>
                <td className="px-4 py-4">{row.exam}</td>
                <td className="px-4 py-4 font-black text-mcc-wine">{row.total}</td>
                <td className="px-4 py-4">{row.grade}</td>
                <td className="px-4 py-4">{row.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-col justify-between gap-4 rounded-xl bg-mcc-blush p-4 sm:flex-row sm:items-center">
        <p className="font-black text-mcc-ink">Total: {total} • Average: {average}% • Grade: A</p>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-mcc-wine px-5 py-3 font-black text-white"><Download className="h-4 w-4" /> Download Result PDF</button>
      </div>
    </Card>
  );
}