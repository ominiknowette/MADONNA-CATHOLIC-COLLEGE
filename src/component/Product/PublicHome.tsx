import { ArrowRight, CalendarDays, CheckCircle2, Church, ClipboardList, FlaskConical, GraduationCap, LibraryBig, Monitor, Music, Quote, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { academicProgrammes, admissionSteps, facilities, lifeAtMcc, publicNews, testimonials, whyChoose } from "../../lib/data";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";

const programmeIcons = [Users, GraduationCap, FlaskConical, Music, ClipboardList, Monitor, Church, Trophy];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title?: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-mcc-wine">{eyebrow}</p>
      {title && <h2 className="mt-3 text-3xl font-black leading-tight text-mcc-ink sm:text-4xl">{title}</h2>}
      {text && <p className="mt-4 text-base leading-8 text-mcc-muted">{text}</p>}
    </div>
  );
}

/** Premium public-facing MCC homepage. */
export default function PublicHome() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-mcc-ink">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-mcc-blush">
          <img src="/images/placeholder2.png" alt="Madonna Catholic College students" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/82 to-white/8" />
          <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center px-4 py-12 sm:px-6 md:min-h-[620px] lg:min-h-[680px] lg:px-8 lg:py-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-black leading-[1.02] text-mcc-ink sm:text-5xl lg:text-6xl">
                Forming confident learners rooted in Catholic values.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-mcc-muted">
                Madonna Catholic College partners with families to nurture academic strength, moral courage, and service-minded leadership.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 rounded-xl bg-mcc-wine px-6 py-4 text-sm font-black text-white shadow-card transition hover:bg-mcc-plum focus:outline-none focus:ring-4 focus:ring-mcc-line">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#admissions" className="inline-flex items-center justify-center rounded-xl border border-mcc-line bg-white px-6 py-4 text-sm font-black text-mcc-wine shadow-soft transition hover:bg-mcc-blush focus:outline-none focus:ring-4 focus:ring-mcc-line">
                  View Admissions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden bg-white/95 backdrop-blur">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-mcc-wine">Welcome to Madonna Catholic College</p>
                <h2 className="mt-3 text-2xl font-black leading-tight text-mcc-ink sm:text-3xl">A calm first step for families considering MCC.</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-mcc-muted sm:text-base">
                  Visit the admissions page to share your enquiry, learn what documents to prepare, and let the college office guide you through the next step.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 rounded-xl bg-mcc-wine px-5 py-3 text-sm font-black text-white shadow-soft transition hover:bg-mcc-plum focus:outline-none focus:ring-4 focus:ring-mcc-line">
                  Start an enquiry <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#student-life" className="inline-flex items-center justify-center rounded-xl border border-mcc-line bg-white px-5 py-3 text-sm font-black text-mcc-wine transition hover:bg-mcc-blush focus:outline-none focus:ring-4 focus:ring-mcc-line">
                  View Gallery
                </a>
              </div>
            </div>
          </Card>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-mcc-wine">Why Choose MCC</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-mcc-ink sm:text-4xl">A structured college experience with heart.</h2>
              <p className="mt-5 text-base leading-8 text-mcc-muted">
                Our learning community balances disciplined study, faith formation, extracurricular participation, and pastoral attention for each child.
              </p>
              <div className="mt-8 grid gap-4">
                {whyChoose.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4 rounded-2xl border border-mcc-line bg-mcc-blush/60 p-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-mcc-wine shadow-soft">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-black text-mcc-ink">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-mcc-muted">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Card className="overflow-hidden bg-mcc-blush/50">
              <div className="grid gap-4 sm:grid-cols-2">
                <img src="/images/placeholder2.png" alt="MCC campus learning environment" className="h-64 w-full rounded-2xl object-cover sm:col-span-2" />
                {facilities.map((facility) => (
                  <div key={facility} className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-bold text-mcc-ink shadow-soft">
                    <CheckCircle2 className="h-5 w-5 text-mcc-wine" /> {facility}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section id="academics" className="bg-mcc-blush py-20">
          <SectionTitle eyebrow="Academics" title="Programmes that prepare students for the future" text="A broad curriculum supports intellectual curiosity, examination readiness, creativity, and practical skills." />
          <div className="mx-auto mt-10 grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {academicProgrammes.map((item, index) => {
              const Icon = programmeIcons[index] ?? LibraryBig;
              return (
                <Card key={item} className="transition hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mcc-pink text-mcc-wine">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-black text-mcc-ink">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-mcc-muted">Focused learning pathways supported by experienced teachers and a values-led environment.</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-black text-mcc-ink">Latest News & Events</h2>
              <a className="text-sm font-black text-mcc-wine">View All News →</a>
            </div>
            <div className="mt-6 grid gap-3">
              {publicNews.map((item) => (
                <article key={item.title} className="group flex min-w-0 gap-4 rounded-2xl border border-transparent p-2 transition hover:border-mcc-line hover:bg-white hover:shadow-soft">
                  <img src={item.image} alt="MCC event preview" className="h-20 w-24 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 py-1">
                    <h3 className="break-words font-black leading-snug text-mcc-ink group-hover:text-mcc-wine">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-mcc-muted">{item.text}</p>
                    <p className="mt-2 flex items-center gap-2 text-xs font-bold text-mcc-wine"><CalendarDays className="h-4 w-4" /> {item.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="admissions" className="rounded-[2rem] border border-mcc-line bg-white/90 p-5 shadow-card sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-mcc-wine">Admissions</p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-mcc-ink">A clearer path into MCC</h2>
              </div>
              <p className="max-w-xs text-sm font-semibold leading-6 text-mcc-muted sm:text-right">Begin your child's journey with guided steps from enquiry to offer.</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {admissionSteps.map((item, index) => (
                <article key={item.step} className="relative overflow-hidden rounded-2xl border border-mcc-line bg-mcc-blush/45 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-soft">
                  <div className="absolute right-4 top-4 text-5xl font-black leading-none text-mcc-line/40">0{item.step}</div>
                  <div className="relative flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-mcc-wine shadow-soft ring-1 ring-mcc-line">{item.step}</span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-mcc-wine">Step {index + 1}</p>
                      <h3 className="mt-1 text-base font-black leading-snug text-mcc-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-mcc-muted">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-mcc-line bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold leading-6 text-mcc-muted">Ready to continue? Share your enquiry and the admissions office will follow up by email.</p>
              <Link href="/apply-now" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-mcc-wine px-5 py-3 text-sm font-black text-white transition hover:bg-mcc-plum focus:outline-none focus:ring-4 focus:ring-mcc-line">Begin Application <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        <section id="student-life" className="bg-mcc-blush py-20">
          <SectionTitle eyebrow="Student Life" title="Balanced growth beyond the classroom" />
          <div className="mx-auto mt-10 grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
            {lifeAtMcc.map((item) => (
              <div key={item} className="rounded-2xl border border-mcc-line bg-white p-5 text-center text-sm font-black text-mcc-ink shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="What Parents & Students Say" title="Trusted by families who value formation and excellence" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.name} className="bg-white">
                <Quote className="h-8 w-8 text-mcc-line" />
                <p className="mt-4 text-base leading-8 text-mcc-muted">“{item.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mcc-blush text-sm font-black text-mcc-wine">{item.name.slice(0, 1)}</span>
                  <div>
                    <p className="font-black text-mcc-ink">{item.name}</p>
                    <p className="text-sm text-mcc-muted">{item.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
