import { Bell, CalendarDays, Lock, ShieldCheck, User } from "lucide-react";
import PrincipalLayout from "../../src/component/Product/PrincipalLayout";
import { principalProfile } from "../../src/lib/principalData";

const settings = [
  {
    title: "Change Password",
    description: "Update your account password regularly for security.",
    action: "Change Password",
    icon: Lock,
  },
  {
    title: "Session Preferences",
    description: "Set default session and academic year preferences.",
    action: "Manage Preferences",
    icon: CalendarDays,
  },
  {
    title: "Notification Preferences",
    description: "Choose how and when you want to receive notifications.",
    action: "Manage Notifications",
    icon: Bell,
  },
  {
    title: "Login Activity",
    description: "View recent login activity and active sessions.",
    action: "View Activity",
    icon: ShieldCheck,
  },
];

/** Principal account settings page with profile and security controls. */
export default function PrincipalSettingsPage() {
  return (
    <PrincipalLayout active="Settings">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
        <section className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#E8B8C6] text-[#2B1631]">
              <User className="h-12 w-12" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="break-words text-xl font-black text-[#2B1631]">{principalProfile.name}</h2>
                <span className="rounded-full bg-[#FFF7FA] px-3 py-1 text-xs font-black text-[#801431]">{principalProfile.role}</span>
              </div>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-black text-[#2B1631]">Username</dt>
                  <dd className="mt-1 break-words text-[#6B5A70]">{principalProfile.username}</dd>
                </div>
                <div>
                  <dt className="font-black text-[#2B1631]">Email</dt>
                  <dd className="mt-1 break-words text-[#6B5A70]">{principalProfile.email}</dd>
                </div>
                <div>
                  <dt className="font-black text-[#2B1631]">Current Session</dt>
                  <dd className="mt-1 text-[#6B5A70]">{principalProfile.session}</dd>
                </div>
              </dl>
              <button className="mt-6 rounded-xl bg-[#801431] px-5 py-3 text-sm font-black text-white transition hover:bg-[#6F0F2A]">
                Edit Profile
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {settings.map(({ title, description, action, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-[#E8B8C6] bg-white p-5 shadow-soft">
              <Icon className="h-7 w-7 text-[#801431]" />
              <h2 className="mt-4 text-lg font-black text-[#2B1631]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#6B5A70]">{description}</p>
              <button className="mt-5 rounded-xl border border-[#801431] px-4 py-2.5 text-sm font-black text-[#801431] transition hover:bg-[#FFF7FA]">
                {action}
              </button>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-[#E8B8C6] bg-[#F8E8EE] px-5 py-4 text-sm text-[#2B1631] xl:col-span-2">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#801431]" />
            <p>
              <span className="font-black">Tip:</span> Keep your account secure. Do not share your login details with anyone.
            </p>
          </div>
        </section>
      </div>
    </PrincipalLayout>
  );
}
