import { Mail, MapPin, Phone } from "lucide-react";

/** Slim public contact bar above the main navigation. */
export default function TopBar() {
  return (
    <div className="hidden w-full bg-mcc-wine text-white md:block">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-xs font-semibold">
        <span>Nurturing faith, knowledge, and character for a brighter future.</span>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Okija, Anambra State, Nigeria</span>
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +234 803 123 4567</span>
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@mcc.edu.ng</span>
        </div>
      </div>
    </div>
  );
}
