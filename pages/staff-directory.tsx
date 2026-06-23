import StudentLayout from "../src/component/Product/StudentLayout";
import { useMemo, useState } from "react";
import StaffCard from "../src/component/Product/StaffCard";
import { staff } from "../src/lib/data";

const tabs = ["All", "Administration", "Teaching Staff", "Support Staff"];

export default function StaffDirectoryPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All");
  const leadership = staff.filter((person) => person.pinned);
  const regular = useMemo(() => {
    return staff.filter((person) => {
      if (person.pinned) return false;
      const matchesQuery = `${person.name} ${person.role} ${person.department}`.toLowerCase().includes(query.toLowerCase());
      const matchesTab = tab === "All" || (tab === "Teaching Staff" ? person.role.includes("Teacher") : person.department.includes(tab.replace("Support Staff", "ICT")));
      return matchesQuery && matchesTab;
    });
  }, [query, tab]);

  return (
    <StudentLayout active="Staff Directory">
      <div className="mb-6 grid gap-4 md:grid-cols-[1fr_auto]">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search staff by name, role, or department" className="w-full rounded-xl border border-mcc-line px-4 py-3 outline-none focus:border-mcc-wine" />
        <div className="scrollbar-thin flex gap-2 overflow-x-auto">
          {tabs.map((item) => (
            <button key={item} onClick={() => setTab(item)} className={`shrink-0 rounded-xl px-4 py-3 text-sm font-black ${tab === item ? "bg-mcc-wine text-white" : "bg-white text-mcc-ink"}`}>{item}</button>
          ))}
        </div>
      </div>
      <h2 className="mb-4 text-2xl font-black text-mcc-ink">Pinned Leadership</h2>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {leadership.map((person) => <StaffCard key={person.email} {...person} />)}
      </div>
      <h2 className="mb-4 mt-10 text-2xl font-black text-mcc-ink">Teaching Staff</h2>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {regular.map((person) => <StaffCard key={person.email} {...person} />)}
      </div>
    </StudentLayout>
  );
}