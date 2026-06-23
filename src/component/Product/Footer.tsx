import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import Logo from "./Logo";

/** Public website footer with admissions and contact links. */
export default function Footer() {
  return (
    <footer id="contact" className="bg-mcc-wine text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8 xl:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo dark imageClassName="h-10 w-10" />
          <p className="mt-4 max-w-sm text-sm text-white/80">Nurturing faith, knowledge and character for a brighter future.</p>
        </div>
        <div>
          <h3 className="font-black uppercase">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/80">
            <a>About MCC</a>
            <a>Academics</a>
            <a>Admissions</a>
            <a>News & Events</a>
          </div>
        </div>
        <div>
          <h3 className="font-black uppercase">Contact</h3>
          <p className="mt-4 flex gap-2 text-sm text-white/80"><Mail className="h-4 w-4" /> info@mcc.edu.ng</p>
          <p className="mt-2 flex gap-2 text-sm text-white/80"><Phone className="h-4 w-4" /> +234 803 123 4567</p>
        </div>
        <div>
          <h3 className="font-black uppercase">Connect With Us</h3>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, index) => (
              <span key={index} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12"><Icon className="h-4 w-4" /></span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-5 text-center text-xs text-white/70">
        © 2026 Madonna Catholic College. All rights reserved.
      </div>
    </footer>
  );
}
