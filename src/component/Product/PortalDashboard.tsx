import { CalendarDays, Download, FileText, LucideIcon, Users } from "lucide-react";
import Link from "next/link";
import { portalEvents, portalStudent } from "../../lib/data";
import Card from "./Card";

const quickActions: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: "View Results", href: "/results", icon: FileText },
  { label: "Download Result", href: "/results", icon: Download },
  { label: "Upcoming Events", href: "/events", icon: CalendarDays },
  { label: "Staff Directory", href: "/staff-directory", icon: Users },
];

/** Minimal student portal dashboard. */
export default function PortalDashboard() {
  return (
    <div className="grid gap-6">
      <Card className="p-5 sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <img src={portalStudent.photo} alt="" className="h-24 w-24 rounded-full object-cover" />
          <div className="min-w-0">
            <h2 className="break-words text-2xl font-black text-mcc-ink sm:text-3xl">Welcome back, {portalStudent.name}</h2>
            <p className="mt-2 text-mcc-muted">Student ID: {portalStudent.studentId}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Info label="Class" value={portalStudent.className} />
          <Info label="Current Session" value={portalStudent.session} />
          <Info label="Current Term" value={portalStudent.term} />
        </div>
      </Card>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map(({ label, href, icon: Icon }) => (
          <Link key={label} href={href} className="rounded-2xl border border-mcc-line bg-white p-5 text-center shadow-soft transition hover:border-mcc-rose">
            <Icon className="mx-auto h-8 w-8 text-mcc-wine" />
            <span className="mt-3 block font-black text-mcc-ink">{label}</span>
          </Link>
        ))}
      </div>
      <Card className="p-5">
        <h2 className="text-xl font-black text-mcc-ink">Recent Announcement</h2>
        <p className="mt-2 text-mcc-muted">Second term results have been reviewed. Students may download their result slips from the Results page.</p>
      </Card>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portalEvents.map((event) => (
          <Card key={event.title} className="p-5">
            <p className="text-sm font-bold text-mcc-wine">{event.date}</p>
            <h3 className="mt-2 font-black text-mcc-ink">{event.title}</h3>
            <p className="mt-1 text-sm text-mcc-muted">{event.location}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-mcc-blush p-4">
      <p className="text-sm text-mcc-muted">{label}</p>
      <p className="mt-1 font-black text-mcc-ink">{value}</p>
    </div>
  );
}
