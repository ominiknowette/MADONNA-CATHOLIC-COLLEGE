import { motion } from "framer-motion";
import {
  Beaker,
  BookOpen,
  Building2,
  CalendarDays,
  Church,
  ClipboardCheck,
  FileText,
  GraduationCap,
  ImageIcon,
  Landmark,
  MapPin,
  Music,
  ShieldCheck,
  Trophy,
  UserRound,
  Users,
} from "lucide-react";
import { megaMenus } from "../../lib/data";

type MegaMenuProps = {
  active: keyof typeof megaMenus;
};

type IconComponent = typeof BookOpen;

const itemDetails: Record<string, { description: string; icon: IconComponent }> = {
  "History of MCC": { description: "Discover our journey and heritage", icon: BookOpen },
  "Mission & Vision": { description: "Our purpose and aspirations", icon: Trophy },
  "Catholic Identity": { description: "Rooted in our faith and values", icon: Church },
  "Principal's Message": { description: "A message from our school leader", icon: UserRound },
  "School Management": { description: "Meet our dedicated leadership team", icon: Users },
  Facilities: { description: "Modern facilities that enable learning", icon: Building2 },
  "Learning Spaces": { description: "Classrooms, labs, library and more", icon: Landmark },
  "Science Laboratories": { description: "Well-equipped labs for practical excellence", icon: Beaker },
  "Junior Secondary School": { description: "Building strong academic foundations", icon: GraduationCap },
  "Senior Secondary School": { description: "Preparing learners for a brighter future", icon: GraduationCap },
  Sciences: { description: "Excellence in STEM education", icon: Beaker },
  "Arts & Humanities": { description: "Exploring creativity and culture", icon: BookOpen },
  "Commercial Studies": { description: "Building business and life skills", icon: ClipboardCheck },
  Curriculum: { description: "Comprehensive and future-ready", icon: FileText },
  "Academic Calendar": { description: "Stay updated with all academic activities", icon: CalendarDays },
  "Assessment System": { description: "Fair, transparent and continuous", icon: ClipboardCheck },
  "How to Apply": { description: "Step-by-step application guide", icon: FileText },
  "Entry Requirements": { description: "See what we look for", icon: Users },
  "Admission Timeline": { description: "Key dates and deadlines", icon: CalendarDays },
  "Download Admission Form": { description: "Get started today", icon: FileText },
  Sports: { description: "Developing strength, teamwork and discipline", icon: Trophy },
  "Music & Arts": { description: "Nurturing creativity and expression", icon: Music },
  "Religious Life": { description: "Growing in faith and service", icon: Church },
  Leadership: { description: "Building tomorrow's leaders today", icon: Users },
  "Clubs & Societies": { description: "Friendship, talent and shared interests", icon: ShieldCheck },
  Excursions: { description: "Learning beyond the classroom", icon: MapPin },
  "Events & Activities": { description: "A vibrant calendar of school moments", icon: CalendarDays },
  "Academic Achievements": { description: "Celebrating student success", icon: Trophy },
  "School Activities": { description: "Events and daily life at MCC", icon: Users },
  "Competition Results": { description: "Our students make us proud", icon: ClipboardCheck },
  "Upcoming Events": { description: "See what's coming up", icon: CalendarDays },
  "School Calendar": { description: "Academic calendar and key dates", icon: CalendarDays },
  "Photo Gallery": { description: "Moments captured", icon: ImageIcon },
  Videos: { description: "Watch and enjoy", icon: FileText },
  "Admissions Office": { description: "Speak with our admissions team", icon: Users },
  "Academic Office": { description: "Academic enquiries and support", icon: GraduationCap },
  "General Enquiries": { description: "We are happy to help", icon: FileText },
  "Our Location": { description: "Okija, Anambra State, Nigeria", icon: MapPin },
  "Get Directions": { description: "Find us on the map", icon: MapPin },
};

/** Contained animated public navigation dropdown menu. */
export default function MegaMenu({ active }: MegaMenuProps) {
  const menu = megaMenus[active];
  const columns = menu.columns.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute inset-x-4 top-full z-[1000] mx-auto hidden max-w-[920px] rounded-3xl border border-[#E8B8C6] bg-white px-6 py-7 shadow-[0_22px_70px_rgba(128,20,49,0.16)] xl:block xl:px-8"
    >
      <div
        className="grid gap-6 xl:gap-8"
        style={{
          gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, minmax(0, 1fr))`,
        }}
      >
        {columns.map((column, columnIndex) => (
          <section
            key={`${column.title}-${columnIndex}`}
            className={`min-w-0 ${columnIndex < columns.length - 1 ? "border-r border-[#E8B8C6] pr-6 xl:pr-8" : ""}`}
          >
            <h3 className="min-w-0 break-words text-xs font-black uppercase tracking-wide text-[#801431]">{column.title}</h3>
            <div className="mt-6 grid gap-5">
              {column.items.map((item) => {
                const details = itemDetails[item] ?? { description: "Learn more about Madonna Catholic College", icon: BookOpen };
                const Icon = details.icon;

                return (
                  <a key={item} href="#" className="group flex min-w-0 gap-4 rounded-2xl p-1 transition hover:bg-mcc-blush/70">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-mcc-rose transition group-hover:bg-mcc-blush group-hover:text-[#801431]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <b className="block min-w-0 break-words text-sm font-black leading-tight text-mcc-ink">{item}</b>
                      <span className="mt-1.5 block min-w-0 break-words text-sm leading-6 text-mcc-muted">{details.description}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  );
}
