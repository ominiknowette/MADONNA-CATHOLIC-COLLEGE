import { UserCheck, UserMinus, UserX, Users } from "lucide-react";
import PrincipalLayout from "../../src/component/Product/PrincipalLayout";
import { principalStats, students } from "../../src/lib/principalData";

export default function PrincipalStudentsPage() {
  const stats = [
    ["Total Students", principalStats.totalStudents, Users],
    ["Active Students", principalStats.activeStudents, UserCheck],
    ["Withdrawn", principalStats.withdrawn, UserX],
    ["Transfer Cases", principalStats.transferCases, UserMinus],
    ["Repeat Cases", principalStats.repeatCases, Users],
  ] as const;

  return (
    <PrincipalLayout active="Students">
      <div className="grid gap-5">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {stats.map(([label, value, Icon]) => (
            <article key={label} className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
              <Icon className="h-6 w-6 text-[#801431]" />
              <p className="mt-3 text-sm font-semibold text-[#6B5A70]">{label}</p>
              <p className="mt-1 text-2xl font-black text-[#2B1631]">{value.toLocaleString()}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
          <div className="grid gap-3 md:grid-cols-5">
            <input placeholder="Search by name or ID" className="min-w-0 rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm outline-none focus:border-[#801431]" />
            {["All Classes", "All Status", "All Gender", "2024/2025"].map((item) => (
              <select key={item} className="rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm outline-none focus:border-[#801431]"><option>{item}</option></select>
            ))}
          </div>
          <div className="mt-5 w-full overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="text-xs uppercase text-[#6B5A70]">
                <tr className="border-b border-[#E8B8C6]">
                  {["Student Name", "Student ID", "Class", "Gender", "Status", "Academic Standing", "Class Teacher"].map((header) => <th key={header} className="px-3 py-3">{header}</th>)}
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-[#E8B8C6] last:border-0">
                    <td className="px-3 py-3 font-bold text-[#2B1631]">{student.name}</td>
                    <td className="px-3 py-3">{student.id}</td>
                    <td className="px-3 py-3">{student.className}</td>
                    <td className="px-3 py-3">{student.gender}</td>
                    <td className="px-3 py-3"><Status value={student.status} /></td>
                    <td className="px-3 py-3">{student.academicStanding}</td>
                    <td className="px-3 py-3">{student.classTeacher}</td>
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

function Status({ value }: { value: string }) {
  const className = value === "Active" ? "bg-green-50 text-green-700" : value === "Withdrawn" ? "bg-rose-50 text-rose-700" : "bg-blue-50 text-blue-700";
  return <span className={`rounded-full px-2.5 py-1 text-xs font-black ${className}`}>{value}</span>;
}
