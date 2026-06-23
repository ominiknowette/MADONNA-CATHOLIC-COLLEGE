import { BarChart3, CalendarDays, CheckSquare, GraduationCap, UserCheck, Users } from "lucide-react";
import type { ReactNode } from "react";
import PrincipalLayout from "../../src/component/Product/PrincipalLayout";
import { principalStats, promotionRequests, staffRoleChanges, unassignedClasses } from "../../src/lib/principalData";

const summaryCards = [
  { label: "Pending Approvals", value: principalStats.pendingApprovals, icon: CheckSquare },
  { label: "Total Students", value: principalStats.totalStudents.toLocaleString(), icon: Users },
  { label: "Teaching Staff", value: principalStats.teachingStaff, icon: GraduationCap },
  { label: "Class Teachers", value: principalStats.classTeachers, icon: UserCheck },
  { label: "Current Session", value: principalStats.currentSession, icon: CalendarDays },
];

export default function PrincipalDashboardPage() {
  const specialCases = promotionRequests.filter((item) => item.recommendation === "Repeat" || item.recommendation === "Withdraw");

  return (
    <PrincipalLayout active="Dashboard">
      <div className="grid gap-5">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {summaryCards.map(({ label, value, icon: Icon }) => (
            <article key={label} className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
              <Icon className="h-6 w-6 text-[#801431]" />
              <p className="mt-3 text-sm font-semibold text-[#6B5A70]">{label}</p>
              <p className="mt-1 break-words text-2xl font-black text-[#2B1631]">{value}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,.85fr)]">
          <Card title="Pending Final Judgement" subtitle="Students recommended to repeat or withdraw">
            <Table headers={["Student Name", "Class", "Recommendation", "Reason", "Submitted By", "Action"]}>
              {specialCases.map((item) => (
                <tr key={item.id} className="border-b border-[#E8B8C6] last:border-0">
                  <Td>{item.studentName}</Td>
                  <Td>{item.currentClass}</Td>
                  <Td><Badge tone={item.recommendation === "Withdraw" ? "danger" : "warning"}>{item.recommendation}</Badge></Td>
                  <Td>{item.reason}</Td>
                  <Td>{item.submittedBy}</Td>
                  <Td><button className="rounded-lg border border-[#801431] px-3 py-2 text-xs font-black text-[#801431]">Review</button></Td>
                </tr>
              ))}
            </Table>
          </Card>

          <Card title="Classes Without Class Teachers">
            <div className="grid gap-3">
              {unassignedClasses.map((item) => (
                <div key={item.className} className="flex items-center justify-between gap-4 rounded-xl bg-[#FFF7FA] px-4 py-3">
                  <div>
                    <p className="font-black text-[#2B1631]">{item.className}</p>
                    <p className="text-sm text-[#6B5A70]">{item.students} students</p>
                  </div>
                  <button className="rounded-lg bg-[#801431] px-3 py-2 text-xs font-black text-white">Assign</button>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)]">
          <Card title="Recent Staff Role Changes">
            <Table headers={["Staff Name", "Previous Role", "New Role", "Effective Date", "Status"]}>
              {staffRoleChanges.map((item) => (
                <tr key={item.staffName} className="border-b border-[#E8B8C6] last:border-0">
                  <Td>{item.staffName}</Td>
                  <Td>{item.previousRole}</Td>
                  <Td>{item.newRole}</Td>
                  <Td>{item.effectiveDate}</Td>
                  <Td><Badge tone="success">{item.status}</Badge></Td>
                </tr>
              ))}
            </Table>
          </Card>

          <Card title="Quick Actions">
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {["Review Promotion Decisions", "Assign Class Teacher", "View Reports"].map((item) => (
                <button key={item} className="rounded-xl border border-[#E8B8C6] bg-white p-4 text-center text-sm font-black text-[#2B1631] shadow-soft transition hover:border-[#801431] hover:text-[#801431]">
                  <BarChart3 className="mx-auto mb-2 h-6 w-6 text-[#801431]" />
                  {item}
                </button>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </PrincipalLayout>
  );
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <article className="min-w-0 overflow-hidden rounded-2xl border border-[#E8B8C6] bg-white shadow-soft">
      <div className="border-b border-[#E8B8C6] bg-[#FFF7FA] px-5 py-4">
        <h2 className="font-black text-[#2B1631]">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-[#6B5A70]">{subtitle}</p>}
      </div>
      <div className="min-w-0 p-5">{children}</div>
    </article>
  );
}

function Table({ headers, children }: { headers: string[]; children: ReactNode }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="text-xs uppercase text-[#6B5A70]">
          <tr className="border-b border-[#E8B8C6]">{headers.map((header) => <th key={header} className="px-3 py-3">{header}</th>)}</tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

function Td({ children }: { children: ReactNode }) {
  return <td className="px-3 py-3 align-top text-[#2B1631]">{children}</td>;
}

function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "danger" }) {
  const classes = {
    neutral: "bg-[#FFF7FA] text-[#801431]",
    success: "bg-green-50 text-green-700",
    warning: "bg-amber-50 text-amber-700",
    danger: "bg-rose-50 text-rose-700",
  };
  return <span className={`rounded-full px-2.5 py-1 text-xs font-black ${classes[tone]}`}>{children}</span>;
}
