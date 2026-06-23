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

/** Student portal dashboard matching Principal Portal design system. */
export default function StudentDashboard() {
  return (
    <div className="grid gap-6">
      {/* Welcome Card */}
      <Card header className="p-5 sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mcc-line text-mcc-ink">
            <Users className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <h2 className="font-black text-mcc-ink">Welcome back, {portalStudent.name}</h2>
            <p className="mt-1 text-sm text-[#6B5A70]">Student ID: {portalStudent.studentId}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-4">
            <p className="text-sm text-[#6B5A70]">Class</p>
            <p className="mt-1 font-black text-mcc-ink">{portalStudent.className}</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-[#6B5A70]">Current Session</p>
            <p className="mt-1 font-black text-mcc-ink">{portalStudent.session}</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-[#6B5A70]">Current Term</p>
            <p className="mt-1 font-black text-mcc-ink">{portalStudent.term}</p>
          </Card>
        </div>
      </Card>

      {/* Quick Actions Cards */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map(({ label, href, icon: Icon }) => (
          <Link key={label} href={href} className="rounded-2xl border border-mcc-line bg-white p-5 text-center shadow-soft transition hover:border-mcc-wine hover:text-mcc-wine">
            <Icon className="mx-auto h-6 w-6 text-mcc-wine" />
            <span className="mt-3 block font-black text-mcc-ink">{label}</span>
          </Link>
        ))}
      </div>

      {/* Recent Announcement */}
      <Card header className="p-5">
        <h2 className="font-black text-mcc-ink">Recent Announcement</h2>
        <p className="mt-1 text-sm text-[#6B5A70]">Second term results have been reviewed. Students may download their result slips from the Results page.</p>
      </Card>

      {/* Events */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portalEvents.map((event) => (
          <Card key={event.title} className="p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-mcc-wine">
              <CalendarDays className="h-4 w-4" /> {event.date}
            </p>
            <h3 className="mt-2 font-black text-mcc-ink">{event.title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#6B5A70]">{event.location}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}