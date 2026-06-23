import { Check, X } from "lucide-react";
import type { ReactNode } from "react";
import PrincipalLayout from "../../src/component/Product/PrincipalLayout";
import { promotionRequests, type PromotionRequest } from "../../src/lib/principalData";

export default function PromotionApprovalsPage() {
  return (
    <PrincipalLayout active="Promotion Approvals">
      <div className="grid gap-5">
        <section className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
          <div className="grid gap-3 md:grid-cols-4">
            {["2024/2025", "All Classes", "All Types", "All Status"].map((item, index) => (
              <select key={item} className="rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm outline-none focus:border-[#801431]" aria-label={`Filter ${index + 1}`}>
                <option>{item}</option>
              </select>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-[#E8B8C6] bg-white shadow-soft">
          <div className="border-b border-[#E8B8C6] bg-amber-50 px-5 py-4">
            <h2 className="font-black text-[#2B1631]">Special Final Judgement Required</h2>
            <p className="mt-1 text-sm text-[#6B5A70]">Students recommended to repeat, withdraw, or transfer require your final decision.</p>
          </div>
          <div className="w-full overflow-x-auto p-5">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="text-xs uppercase text-[#6B5A70]">
                <tr className="border-b border-[#E8B8C6]">
                  {["Student Name", "Current Class", "Proposed Next Class", "Recommendation", "Reason", "Submitted By", "Principal Decision", "Actions"].map((header) => <th key={header} className="px-3 py-3">{header}</th>)}
                </tr>
              </thead>
              <tbody>
                {promotionRequests.map((item) => (
                  <tr key={item.id} className="border-b border-[#E8B8C6] last:border-0">
                    <td className="px-3 py-3 font-bold text-[#2B1631]">{item.studentName}</td>
                    <td className="px-3 py-3">{item.currentClass}</td>
                    <td className="px-3 py-3">{item.proposedNextClass}</td>
                    <td className="px-3 py-3"><Badge tone={item.recommendation}>{item.recommendation}</Badge></td>
                    <td className="px-3 py-3">{item.reason}</td>
                    <td className="px-3 py-3">{item.submittedBy}</td>
                    <td className="px-3 py-3"><Status>{item.principalDecision}</Status></td>
                    <td className="w-28 px-3 py-3">
                      <div className="flex gap-2">
                        <DecisionButton
                          label="Approve recommendation"
                          title="Approve recommendation"
                          className="border-green-200 bg-green-50 text-green-700 hover:border-green-500 hover:bg-green-100"
                        >
                          <Check className="h-4 w-4" />
                        </DecisionButton>
                        <DecisionButton
                          label="Return for review"
                          title="Return for review"
                          className="border-red-200 bg-red-50 text-red-700 hover:border-red-500 hover:bg-red-100"
                        >
                          <X className="h-4 w-4" />
                        </DecisionButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PrincipalLayout>
  );
}

function Badge({ children, tone }: { children: ReactNode; tone: PromotionRequest["recommendation"] }) {
  const styles: Record<PromotionRequest["recommendation"], string> = {
    Promote: "bg-green-50 text-green-700",
    Repeat: "bg-amber-50 text-amber-700",
    Withdraw: "bg-rose-50 text-rose-700",
    Transfer: "bg-blue-50 text-blue-700",
  };
  return <span className={`rounded-full px-2.5 py-1 text-xs font-black ${styles[tone]}`}>{children}</span>;
}

function Status({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-[#FFF7FA] px-2.5 py-1 text-xs font-black text-[#801431]">{children}</span>;
}

function DecisionButton({ label, title, className, children }: { label: string; title: string; className: string; children: ReactNode }) {
  return (
    <button
      type="button"
      className={`flex h-9 w-9 items-center justify-center rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-[#D85A8A]/30 ${className}`}
      aria-label={label}
      title={title}
    >
      {children}
    </button>
  );
}
