import { AnimatePresence, motion } from "framer-motion";
import { Edit3, Users, X } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import PrincipalLayout from "../../src/component/Product/PrincipalLayout";
import { principalStats, staffMembers, unassignedClasses, type StaffMember } from "../../src/lib/principalData";

const tabs = ["All Teaching Staff", "Class Teachers", "Non-Class Teachers", "Unassigned Classes"];
const departments = ["All Departments", "Sciences", "Arts", "Humanities", "Commercial"];
const statuses = ["All Status", "Active", "Available"];

export default function StaffClassTeachersPage() {
  const [tab, setTab] = useState(tabs[0]);
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState(departments[0]);
  const [status, setStatus] = useState(statuses[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(staffMembers[0]);

  const filteredStaff = useMemo(() => {
    return staffMembers.filter((staff) => {
      const matchesQuery = `${staff.name} ${staff.id}`.toLowerCase().includes(query.toLowerCase());
      const matchesDepartment = department === "All Departments" || staff.department === department;
      const matchesStatus = status === "All Status" || staff.status === status;
      const matchesTab =
        tab === "All Teaching Staff" ||
        (tab === "Class Teachers" && staff.isClassTeacher) ||
        (tab === "Non-Class Teachers" && !staff.isClassTeacher);
      return matchesQuery && matchesDepartment && matchesStatus && matchesTab;
    });
  }, [department, query, status, tab]);

  return (
    <PrincipalLayout active="Staff & Class Teachers">
      <div className="grid gap-5">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Total Teaching Staff", principalStats.teachingStaff],
            ["Current Class Teachers", principalStats.classTeachers],
            ["Non-Class Teachers", principalStats.nonClassTeachers],
            ["Unassigned Classes", principalStats.unassignedClasses],
          ].map(([label, value]) => (
            <article key={label} className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
              <Users className="h-6 w-6 text-[#801431]" />
              <p className="mt-3 text-sm font-semibold text-[#6B5A70]">{label}</p>
              <p className="mt-1 text-2xl font-black text-[#2B1631]">{value}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="scrollbar-thin flex gap-2 overflow-x-auto">
              {tabs.map((item) => (
                <button key={item} onClick={() => setTab(item)} className={`shrink-0 rounded-xl px-4 py-2 text-sm font-black ${tab === item ? "bg-[#801431] text-white" : "bg-[#FFF7FA] text-[#2B1631]"}`}>
                  {item}
                </button>
              ))}
            </div>
            <button onClick={() => { setSelectedStaff(staffMembers[0]); setDrawerOpen(true); }} className="h-11 rounded-xl bg-[#801431] px-5 text-sm font-black text-white">
              Assign Class Teacher
            </button>
          </div>

          {tab === "Unassigned Classes" ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {unassignedClasses.map((item) => (
                <article key={item.className} className="rounded-xl border border-[#E8B8C6] bg-[#FFF7FA] p-4">
                  <p className="font-black text-[#2B1631]">{item.className}</p>
                  <p className="mt-1 text-sm text-[#6B5A70]">{item.students} students</p>
                  <button onClick={() => setDrawerOpen(true)} className="mt-4 rounded-lg border border-[#801431] px-3 py-2 text-xs font-black text-[#801431]">Assign Teacher</button>
                </article>
              ))}
            </div>
          ) : (
            <>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search staff by name or ID" className="min-w-0 rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm outline-none focus:border-[#801431]" />
                <select value={department} onChange={(event) => setDepartment(event.target.value)} className="rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm outline-none focus:border-[#801431]">
                  {departments.map((item) => <option key={item}>{item}</option>)}
                </select>
                <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm outline-none focus:border-[#801431]">
                  {statuses.map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div className="mt-5 w-full overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead className="text-xs uppercase text-[#6B5A70]">
                    <tr className="border-b border-[#E8B8C6]">
                      {["Staff Name", "Staff ID", "Subject / Department", "Current Role", "Assigned Class", "Status", "Actions"].map((header) => <th key={header} className="px-3 py-3">{header}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStaff.map((staff) => (
                      <tr key={staff.id} className="border-b border-[#E8B8C6] last:border-0">
                        <td className="px-3 py-3 font-bold text-[#2B1631]">{staff.name}</td>
                        <td className="px-3 py-3">{staff.id}</td>
                        <td className="px-3 py-3">{staff.subject} / {staff.department}</td>
                        <td className="px-3 py-3"><div className="flex flex-wrap gap-2"><Badge>Teaching Staff</Badge>{staff.isClassTeacher && <Badge>Class Teacher</Badge>}</div></td>
                        <td className="px-3 py-3">{staff.assignedClass ?? "-"}</td>
                        <td className="px-3 py-3"><Badge tone={staff.status === "Active" ? "success" : "neutral"}>{staff.status}</Badge></td>
                        <td className="px-3 py-3">
                          <button onClick={() => { setSelectedStaff(staff); setDrawerOpen(true); }} className="rounded-lg border border-[#801431] p-2 text-[#801431]" aria-label={`Edit ${staff.name}`}>
                            <Edit3 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </section>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/35">
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22 }}
              className="ml-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-white p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black text-[#2B1631]">Assign Class Teacher</h2>
                  <p className="mt-1 text-sm text-[#6B5A70]">Only teaching staff can receive class teacher assignments.</p>
                </div>
                <button onClick={() => setDrawerOpen(false)} className="rounded-lg p-2 hover:bg-[#FFF7FA]" aria-label="Close assignment drawer"><X className="h-5 w-5" /></button>
              </div>

              <div className="mt-6 grid gap-4">
                <Field label="Select Staff Member">
                  <select className="input"><option>{selectedStaff?.name ?? "Select staff"}</option>{staffMembers.map((staff) => <option key={staff.id}>{staff.name}</option>)}</select>
                </Field>
                <Field label="Staff Type / Current Role">
                  <input readOnly className="input" value={selectedStaff?.isClassTeacher ? "Teaching Staff + Class Teacher" : "Teaching Staff"} />
                </Field>
                <label className="flex items-center justify-between rounded-xl border border-[#E8B8C6] px-4 py-3 text-sm font-bold text-[#2B1631]">
                  Make Class Teacher
                  <input type="checkbox" defaultChecked={selectedStaff?.isClassTeacher} className="h-5 w-5 accent-[#801431]" />
                </label>
                <Field label="Select Class">
                  <select className="input"><option>{selectedStaff?.assignedClass ?? "Select class"}</option><option>JSS1A</option><option>JSS2B</option><option>SS1E</option><option>SS2B</option></select>
                </Field>
                <Field label="Effective Session">
                  <select className="input"><option>2024/2025</option><option>2025/2026 First Term</option></select>
                </Field>
                <Field label="Optional Notes">
                  <textarea className="input min-h-24 py-3" placeholder="Add assignment notes" />
                </Field>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button className="rounded-xl bg-[#801431] px-4 py-3 font-black text-white">Save Assignment</button>
                <button className="rounded-xl border border-[#801431] px-4 py-3 font-black text-[#801431]">Remove Role</button>
                <button onClick={() => setDrawerOpen(false)} className="rounded-xl border border-[#E8B8C6] px-4 py-3 font-black text-[#2B1631] sm:col-span-2">Cancel</button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .input {
          width: 100%;
          min-width: 0;
          border-radius: 0.75rem;
          border: 1px solid #E8B8C6;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          outline: none;
        }
        .input:focus {
          border-color: #801431;
          box-shadow: 0 0 0 2px rgba(216, 90, 138, 0.2);
        }
      `}</style>
    </PrincipalLayout>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#2B1631]">{label}</span>
      {children}
    </label>
  );
}

function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" }) {
  return <span className={`rounded-full px-2.5 py-1 text-xs font-black ${tone === "success" ? "bg-green-50 text-green-700" : "bg-[#FFF7FA] text-[#801431]"}`}>{children}</span>;
}
