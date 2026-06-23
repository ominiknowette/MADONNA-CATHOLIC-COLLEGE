import { CalendarDays, FileText, Home, LogOut, Menu, User, Users, X } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { portalStudent } from "../../lib/data";
import Logo from "./Logo";

type PortalLayoutProps = {
  active: string;
  children: ReactNode;
};

const portalNav = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Results", href: "/results", icon: FileText },
  { label: "Events", href: "/events", icon: CalendarDays },
  { label: "Staff Directory", href: "/staff-directory", icon: Users },
  { label: "Profile", href: "/profile", icon: User },
];

/** Minimal student portal layout. */
export default function PortalLayout({ active, children }: PortalLayoutProps) {
  const [open, setOpen] = useState(false);
  const sidebar = (
    <aside className="flex h-full flex-col border-r border-mcc-line bg-white p-6 text-mcc-ink">
      <div className="flex items-center justify-between">
        <Logo imageClassName="h-11 w-11" />
        <button onClick={() => setOpen(false)} className="rounded-lg p-2 text-mcc-wine hover:bg-mcc-blush xl:hidden" aria-label="Close menu"><X className="h-5 w-5" /></button>
      </div>
      <nav className="mt-10 grid gap-2">
        {portalNav.map((item) => {
          const Icon = item.icon;
          const selected = active === item.label;
          return (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-lg px-4 py-3 font-bold transition ${selected ? "bg-mcc-wine text-white shadow-soft" : "text-mcc-muted hover:bg-mcc-blush hover:text-mcc-wine"}`}>
              <Icon className="h-5 w-5" /> {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-mcc-line pt-6">
        <div className="flex items-center gap-3">
          <img src={portalStudent.photo} alt="" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <p className="font-black text-mcc-ink">{portalStudent.name}</p>
            <p className="text-sm text-mcc-muted">{portalStudent.className}</p>
          </div>
        </div>
        <Link href="/login" className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-mcc-wine bg-white px-4 py-3 font-black text-mcc-wine transition hover:bg-mcc-blush">
          <LogOut className="h-5 w-5" /> Logout
        </Link>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-mcc-blush xl:grid xl:grid-cols-[280px_minmax(0,1fr)]">
      <div className="hidden xl:block xl:h-screen xl:sticky xl:top-0">{sidebar}</div>
      {open && <div className="fixed inset-0 z-50 bg-black/40 xl:hidden"><div className="h-full w-[280px] max-w-[86vw]">{sidebar}</div></div>}
      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-mcc-line bg-white/95 px-4 shadow-sm backdrop-blur sm:px-6 lg:px-8">
          <button onClick={() => setOpen(true)} className="rounded-lg p-2 hover:bg-mcc-blush xl:hidden" aria-label="Open menu"><Menu className="h-6 w-6" /></button>
          <h1 className="text-lg font-black text-mcc-ink sm:text-xl">{active}</h1>
          <img src={portalStudent.photo} alt="" className="h-10 w-10 rounded-full object-cover" />
        </header>
        <main className="min-w-0 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
