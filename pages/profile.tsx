import StudentLayout from "../src/component/Product/StudentLayout";
import Card from "../src/component/Product/Card";
import { User } from "lucide-react";
import { portalStudent } from "../src/lib/data";

export default function ProfilePage() {
  return (
    <StudentLayout active="Profile">
      <Card className="p-5 sm:p-6">
        <div className="grid gap-8 xl:grid-cols-[220px_minmax(0,1fr)]">
          <div className="text-center">
            <span className="flex h-36 w-36 items-center justify-center rounded-full bg-mcc-line text-mcc-ink">
              <User className="h-20 w-20" />
            </span>
            <h2 className="mt-4 text-xl font-black text-mcc-ink">{portalStudent.name}</h2>
            <p className="text-sm text-[#6B5A70]">{portalStudent.studentId}</p>
          </div>
          <div className="grid min-w-0 gap-4 md:grid-cols-2">
            {[
              ["Full Name", portalStudent.name],
              ["Student ID", portalStudent.studentId],
              ["Class", portalStudent.className],
              ["School Email", portalStudent.email],
              ["Gender", portalStudent.gender],
              ["Date of Birth", portalStudent.dateOfBirth],
              ["Parent / Guardian", portalStudent.guardian],
              ["Guardian Phone", portalStudent.guardianPhone],
            ].map(([label, value]) => (
              <label key={label} className="block">
                <span className="mb-2 block text-sm font-bold text-[#6B5A70]">{label}</span>
                <input readOnly value={value} className="w-full min-w-0 rounded-lg border border-mcc-line bg-mcc-blush px-4 py-3 text-mcc-ink" />
              </label>
            ))}
            <button className="mt-2 rounded-lg bg-mcc-wine px-5 py-3 font-black text-white md:col-span-2 md:w-max">Change Password</button>
          </div>
        </div>
      </Card>
    </StudentLayout>
  );
}