import { AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { megaMenus, publicNav } from "../../lib/data";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import TopBar from "./TopBar";

type MenuKey = keyof typeof megaMenus;

/** Public website header with desktop mega menus and mobile navigation. */
export default function Header() {
  const [active, setActive] = useState<MenuKey | null>(null);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<MenuKey | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActive(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <header ref={headerRef} className="relative z-50 w-full">
      <TopBar />
      <nav className="relative border-b border-[#E8B8C6] bg-white" onMouseLeave={() => setActive(null)}>
        <div className="mx-auto flex h-[88px] max-w-[1500px] items-center gap-5 px-4 sm:px-6 lg:px-8">
          <Logo imageClassName="h-11 w-11" textClassName="text-sm" />
          <div className="hidden flex-1 items-center justify-center gap-5 text-sm font-semibold text-mcc-ink xl:flex 2xl:gap-7">
            {publicNav.map((item) => {
              const isMega = item !== "Home" && item !== "Contact";
              const isActive = active === item || (item === "Home" && !active);

              if (!isMega) {
                return (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : "#contact"}
                    onMouseEnter={() => setActive(null)}
                    className={`whitespace-nowrap border-b-2 px-1 py-8 transition ${isActive ? "border-[#801431] text-[#801431]" : "border-transparent hover:text-[#801431]"}`}
                  >
                    {item}
                  </Link>
                );
              }

              return (
                <div key={item} className="relative" onMouseEnter={() => setActive(item as MenuKey)}>
                  <button
                    type="button"
                    onClick={() => setActive((value) => (value === item ? null : (item as MenuKey)))}
                    className={`inline-flex items-center gap-1 whitespace-nowrap border-b-2 px-1 py-8 transition ${isActive ? "border-[#801431] text-[#801431]" : "border-transparent hover:text-[#801431]"}`}
                  >
                    {item}
                    <ChevronDown className={`h-4 w-4 transition ${active === item ? "rotate-180" : ""}`} />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="hidden shrink-0 items-center gap-4 xl:flex">
            <Link href="/apply-now" className="flex h-11 items-center whitespace-nowrap rounded-xl bg-[#801431] px-6 font-semibold text-white transition hover:bg-[#6F0F2A] focus:outline-none focus:ring-4 focus:ring-mcc-line/70">Apply Now</Link>
            <Link href="/login" className="flex h-11 items-center gap-2 whitespace-nowrap rounded-xl border border-[#801431] bg-white px-6 font-semibold text-[#801431] transition hover:bg-[#FFF7FA]">
              <User className="h-4 w-4" /> Portal Login
            </Link>
          </div>
          <button onClick={() => setOpen((value) => !value)} className="ml-auto rounded-lg border border-mcc-line p-3 text-mcc-ink xl:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <AnimatePresence>{active && <MegaMenu active={active} />}</AnimatePresence>
        {open && (
          <div className="max-h-[calc(100vh-88px)] overflow-y-auto border-t border-mcc-line bg-white p-4 shadow-xl xl:hidden">
            <div className="grid gap-2">
              {publicNav.map((item) => {
                const isMega = item !== "Home" && item !== "Contact";

                if (!isMega) {
                  return (
                    <Link key={item} href={item === "Home" ? "/" : "#contact"} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-bold text-mcc-ink hover:bg-mcc-blush">
                      {item}
                    </Link>
                  );
                }

                const menu = megaMenus[item as MenuKey];
                const expanded = openGroup === item;

                return (
                  <div key={item} className="rounded-xl border border-mcc-line bg-white">
                    <button
                      type="button"
                      onClick={() => setOpenGroup((value) => (value === item ? null : (item as MenuKey)))}
                      className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left font-bold text-mcc-ink"
                    >
                      <span>{item}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-mcc-wine transition ${expanded ? "rotate-180" : ""}`} />
                    </button>
                    {expanded && (
                      <div className="grid gap-4 border-t border-mcc-line bg-mcc-blush/60 px-4 py-4 sm:grid-cols-2">
                        {menu.columns.map((column) => (
                          <div key={column.title} className="min-w-0">
                            <p className="text-xs font-black uppercase tracking-wide text-mcc-wine">{column.title}</p>
                            <div className="mt-2 grid gap-1">
                              {column.items.map((link) => (
                                <a key={link} href="#" className="min-w-0 rounded-lg px-2 py-2 text-sm font-semibold text-mcc-muted hover:bg-white hover:text-mcc-wine">
                                  <span className="block break-words">{link}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link href="/apply-now" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-mcc-wine px-4 py-3 text-center font-black text-white focus:outline-none focus:ring-4 focus:ring-mcc-line/70">Apply Now</Link>
              <Link href="/login" onClick={() => setOpen(false)} className="rounded-xl border border-mcc-wine px-4 py-3 text-center font-black text-mcc-wine">Portal Login</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
