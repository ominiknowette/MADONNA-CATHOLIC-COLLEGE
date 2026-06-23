import { Mail, Phone } from "lucide-react";

type StaffCardProps = {
  name: string;
  role: string;
  department: string;
  phone: string;
  email: string;
  pinned?: boolean;
};

/** Staff directory card, with highlighted leadership variant. */
export default function StaffCard({ name, role, department, phone, email, pinned = false }: StaffCardProps) {
  return (
    <article className={`rounded-2xl border border-mcc-line bg-white shadow-soft ${pinned ? "border-mcc-rose bg-mcc-blush/50" : ""}`}>
      <div className="flex items-center gap-4 p-5">
        <img src="/images/user-avatar.png" alt="" className="h-12 w-12 rounded-full object-cover" />
        <div className="min-w-0">
          <h2 className="break-words font-black text-mcc-ink">{name}</h2>
          <p className="text-sm font-bold text-mcc-wine">{role}</p>
          <p className="text-sm text-[#6B5A70]">{department}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-2 text-sm text-mcc-ink p-5">
        <p className="flex min-w-0 items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-mcc-rose" /><span className="break-words">{phone}</span></p>
        <p className="flex min-w-0 items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-mcc-rose" /><span className="break-words">{email}</span></p>
      </div>
    </article>
  );
}