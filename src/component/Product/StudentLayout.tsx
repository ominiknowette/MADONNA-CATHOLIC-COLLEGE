import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Bell, CalendarDays, ChevronDown, FileText, Home, LogOut, Menu, Settings, User, Users, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { portalStudent } from "../../lib/data";

type StudentLayoutProps = {
  active: string;
  children: ReactNode;
};

/** Shared protected layout for the student portal. */
export default function StudentLayout({ active, children }: StudentLayoutProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const role = window.localStorage.getItem("mccPortalRole");
    if (role !== "student") {
      router.replace("/login");
      return;
    }
    setAllowed(true);
  }, [router]);

  function logout() {
    window.localStorage.removeItem("mccPortalRole");
    router.push("/login");
  }

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Results", href: "/results", icon: FileText },
    { label: "Events", href: "/events", icon: CalendarDays },
    { label: "Staff Directory", href: "/staff-directory", icon: Users },
    { label: "Profile", href: "/profile", icon: User },
  ];

  const sidebar = (
    <aside className="flex h-full flex-col bg-mcc-wine p-5 text-white">
      <div className="flex items-start justify-between gap-3">
        <Link href="/dashboard" className="flex min-w-0 items-center gap-3">
          <img src="/images/mcc-logo.png" alt="Madonna Catholic College logo" className="h-11 w-11 shrink-0 rounded-lg bg-white object-contain p-1" />
          <div className="min-w-0">
            <p className="break-words text-sm font-black leading-tight">Madonna Catholic</p>
            <p className="break-words text-sm font-black leading-tight">College</p>
          </div>
        </Link>
        <button onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-white/10 xl:hidden" aria-label="Close menu">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-5 rounded-xl bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-wide text-white/85">
        Student Portal
      </div>

      <nav className="mt-6 grid flex-1 content-start gap-2 overflow-y-auto pr-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const selected = active === item.label;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex min-w-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${selected ? "bg-white/18 text-white shadow-soft" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="break-words">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <Link href="/login" onClick={logout} className="mt-4 flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-white/85 transition hover:bg-white/10 hover:text-white">
        <LogOut className="h-5 w-5" /> Logout
      </Link>
    </aside>
  );

  if (!allowed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-mcc-blush px-4 text-center text-sm font-semibold text-[#6B5A70]">
        Checking student access...
      </main>
    );
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-mcc-blush">
      {/* Desktop sidebar */}
      <div className="hidden xl:fixed xl:inset-y-0 xl:left-0 xl:z-40 xl:block xl:w-[280px]">
        {sidebar}
      </div>
      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/35 xl:hidden">
            <motion.div initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ duration: 0.22 }} className="h-full w-[280px] max-w-[88vw]">
              {sidebar}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-screen min-w-0 overflow-y-auto xl:ml-[280px]">
        <header className="sticky top-0 z-30 flex h-16 min-w-0 items-center justify-between gap-4 bg-mcc-blush/95 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            {/* Hamburger button: only show on mobile */}
            <button onClick={() => setOpen(true)} className="rounded-lg p-2 text-mcc-wine hover:bg-mcc-blush xl:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
            <div className="min-w-0">
              <h1 className="break-words text-lg font-black text-mcc-ink sm:text-xl">{active}</h1>
              <p className="hidden text-xs text-[#6B5A70] sm:block">Session: {portalStudent.session}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <select aria-label="Academic session" className="hidden rounded-lg border border-mcc-line bg-white px-3 py-2 text-xs font-semibold text-mcc-ink outline-none focus:border-mcc-wine md:block">
              <option>2025/2026</option>
              <option>2026/2027</option>
            </select>
            <button className="relative rounded-lg p-2 text-mcc-wine hover:bg-mcc-blush" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-mcc-rose" />
            </button>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mcc-line text-mcc-ink">
                <User className="h-5 w-5" />
              </span>
              <div className="hidden text-xs sm:block">
                <p className="font-black text-mcc-ink">{portalStudent.name}</p>
                <p className="text-[#6B5A70]">Student</p>
              </div>
              <ChevronDown className="hidden h-4 w-4 text-[#6B5A70] sm:block" />
            </div>
          </div>
        </header>
        <motion.main initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="min-w-0 px-4 py-5 sm:px-6 lg:px-8">
          {children}
        </motion.main>
      </div>
    </div>
  );
}
