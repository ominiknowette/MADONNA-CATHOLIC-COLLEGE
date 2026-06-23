import { CalendarDays, MapPin } from "lucide-react";

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  text: string;
};

/** Compact student portal event card. */
export default function EventCard({ title, date, location, text }: EventCardProps) {
  return (
    <article className="rounded-2xl border border-mcc-line bg-white p-5 shadow-soft">
      <p className="flex items-center gap-2 text-sm font-bold text-mcc-wine"><CalendarDays className="h-4 w-4" /> {date}</p>
      <h2 className="mt-3 text-xl font-black text-mcc-ink">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#6B5A70]">{text}</p>
      <p className="mt-4 flex items-center gap-2 text-sm font-bold text-mcc-ink"><MapPin className="h-4 w-4 text-mcc-rose" /> {location}</p>
    </article>
  );
}