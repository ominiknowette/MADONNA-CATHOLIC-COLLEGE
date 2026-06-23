import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

/** Minimal secure school-issued account login form. */
export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = form.email.trim().toLowerCase();
    const role = email === "principal@mcc.edu.ng" || email === "principal" || email.includes("principal") ? "principal" : "student";
    window.localStorage.setItem("mccPortalRole", role);
    router.push(role === "principal" ? "/principal/dashboard" : "/dashboard");
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-[#FFF7FA] px-5 py-10 sm:px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl border border-[#E8B8C6] bg-white px-6 py-7 shadow-lg sm:px-8 sm:py-8">
        <div className="text-center">
          <img
            src="/images/mcc-logo.png"
            alt="Madonna Catholic College logo"
            className="mx-auto h-20 w-20 object-contain"
          />
          <h1 className="mt-4 text-lg font-semibold text-[#2B1631]">Madonna Catholic College</h1>
          <p className="mt-1 text-xs leading-5 text-[#6B5A70]">
            Nurturing Faith. Building Character. Inspiring Excellence.
          </p>
          <h2 className="mt-6 text-2xl font-black text-[#801431]">Portal Login</h2>
          <p className="mt-2 text-sm leading-6 text-[#6B5A70]">
            Enter your school email and password to continue.
          </p>
        </div>

        <div className="mt-6 grid gap-5">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[#2B1631]">School Email</span>
            <span className="flex h-12 items-center gap-3 rounded-xl border border-[#E8B8C6] px-4 transition focus-within:border-[#801431] focus-within:ring-2 focus-within:ring-[#D85A8A]/20">
              <Mail className="h-5 w-5 shrink-0 text-[#7A6B80]" />
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="Enter your school email"
                className="min-w-0 flex-1 bg-transparent text-sm text-[#2B1631] outline-none placeholder:text-[#7A6B80]"
                aria-label="School email"
              />
            </span>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[#2B1631]">Password</span>
            <span className="flex h-12 items-center gap-3 rounded-xl border border-[#E8B8C6] px-4 transition focus-within:border-[#801431] focus-within:ring-2 focus-within:ring-[#D85A8A]/20">
              <Lock className="h-5 w-5 shrink-0 text-[#7A6B80]" />
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                placeholder="Enter your password"
                className="min-w-0 flex-1 bg-transparent text-sm text-[#2B1631] outline-none placeholder:text-[#7A6B80]"
                aria-label="Password"
              />
              <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <EyeOff className="h-5 w-5 text-[#7A6B80]" /> : <Eye className="h-5 w-5 text-[#7A6B80]" />}
              </button>
            </span>
          </label>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-[#2B1631]">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.remember}
              onChange={(event) => setForm({ ...form, remember: event.target.checked })}
              className="h-4 w-4 rounded border-[#E8B8C6] accent-[#801431]"
            />
            Remember me
          </label>
          <a href="#" className="font-semibold text-[#801431] hover:text-[#6F0F2A]">Forgot Password?</a>
        </div>

        <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#801431] px-5 font-semibold text-white shadow-md transition hover:bg-[#6F0F2A]">
          Login <ArrowRight className="h-5 w-5" />
        </button>

        <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-medium text-[#7A6B80]">
          <ShieldCheck className="h-4 w-4 text-[#801431]" />
          Secure access to your school-issued portal account
        </p>

        <div className="mt-6 border-t border-[#E8B8C6] pt-5 text-center text-xs leading-5 text-[#6B5A70]">
          <p>
            <span className="font-black text-[#801431]">Need help?</span> Contact ICT Support
          </p>
          <a href="mailto:support@mcc.edu.ng" className="mt-1 block font-semibold text-[#2B1631] hover:text-[#801431]">
            support@mcc.edu.ng
          </a>
          <p className="font-semibold text-[#2B1631]">+234 803 123 4567</p>
        </div>
      </form>
    </main>
  );
}
