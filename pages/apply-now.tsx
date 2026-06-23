import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Clock3, Mail, Phone, ShieldCheck } from "lucide-react";
import { CSSProperties, useState } from "react";
import AdmissionEnquiryForm, { AdmissionEnquiry } from "../src/component/Product/AdmissionEnquiryForm";
import Footer from "../src/component/Product/Footer";
import Header from "../src/component/Product/Header";
import SuccessModal from "../src/component/Product/SuccessModal";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#801431",
  "panelTint": "#FFF7FA",
  "cardRadius": 28,
  "modalWidth": 560,
  "modalDensity": 0.86
}/*EDITMODE-END*/;

const nextSteps = [
  {
    title: "Enquiry Received",
    description: "Your details are captured by the admissions team for review.",
  },
  {
    title: "We Contact You",
    description: "A staff member reaches out by email, phone, or WhatsApp to confirm next steps.",
  },
  {
    title: "Admission Guidance Provided",
    description: "You receive clear guidance on class placement, documents, and visit arrangements.",
  },
];

const pageVariables = {
  "--admission-accent": "var(--ocd-tweak-accent-color, #801431)",
  "--admission-panel-tint": "var(--ocd-tweak-panel-tint, #FFF7FA)",
  "--admission-card-radius": "calc(var(--ocd-tweak-card-radius, 28) * 1px)",
  "--admission-section-gap": "calc(var(--ocd-tweak-section-gap, 32) * 1px)",
  "--admission-modal-max-width": "calc(var(--ocd-tweak-modal-width, 560) * 1px)",
  "--admission-modal-density": "var(--ocd-tweak-modal-density, 0.86)",
} as CSSProperties;

/** Public Apply Now / Admission Enquiry page. No payment or backend integration is included. */
export default function ApplyNowPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [, setLatestEnquiry] = useState<AdmissionEnquiry | null>(null);

  function handleSubmitted(enquiry: AdmissionEnquiry) {
    setLatestEnquiry(enquiry);
    setModalOpen(true);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-mcc-blush text-mcc-ink" style={pageVariables}>
      <Head>
        <title>Apply Now | Admission Enquiry | Madonna Catholic College</title>
        <meta
          name="description"
          content="Submit an admission enquiry for Madonna Catholic College. No payment is collected on this page."
        />
      </Head>

      <Header />

      <main className="relative">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white via-mcc-blush to-transparent" />
        <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-mcc-line bg-white px-4 py-2 text-sm font-black text-mcc-wine shadow-soft transition hover:border-mcc-wine hover:bg-white focus:outline-none focus:ring-4 focus:ring-mcc-line/70"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>

          <div className="mt-8 grid gap-[var(--admission-section-gap)] lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:items-start">
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="overflow-hidden rounded-[var(--admission-card-radius)] border border-mcc-line bg-white shadow-card"
              aria-labelledby="admission-form-title"
            >
              <div className="border-b border-mcc-line bg-[var(--admission-panel-tint)] px-5 py-6 sm:px-8">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-mcc-wine">Admission Enquiry</p>
                <h1 id="admission-form-title" className="mt-3 text-3xl font-black leading-tight text-mcc-ink sm:text-4xl">
                  Apply Now to Madonna Catholic College
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-mcc-muted">
                  Share your parent/guardian contact details and the class your child is applying for. The school will contact you shortly with guidance.
                </p>
              </div>

              <div className="px-5 py-6 sm:px-8 sm:py-8">
                <AdmissionEnquiryForm onSubmitted={handleSubmitted} />
              </div>
            </motion.section>

            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
              className="rounded-[var(--admission-card-radius)] border border-mcc-line bg-[#FFF8FB] p-5 shadow-soft sm:p-7 lg:sticky lg:top-6"
              aria-labelledby="what-happens-next-title"
            >
              <div className="rounded-2xl border border-mcc-line bg-white p-5 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--admission-accent)] text-white shadow-soft">
                    <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-mcc-wine">No Payment Required</p>
                    <h2 id="what-happens-next-title" className="mt-2 text-2xl font-black text-mcc-ink">
                      What happens next
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-mcc-muted">
                  This page only collects admission enquiry details and simulates notifying the school. It does not process application fees or any payment.
                </p>
              </div>

              <ol className="mt-6 grid gap-4">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-mcc-line bg-white p-4 shadow-soft">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mcc-pink text-sm font-black text-mcc-wine">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-black text-mcc-ink">Step {index + 1}: {step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-mcc-muted">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 grid gap-3 rounded-2xl border border-mcc-line bg-white p-5 text-sm text-mcc-muted shadow-soft">
                <p className="flex items-center gap-3 font-bold text-mcc-ink">
                  <Clock3 className="h-5 w-5 text-mcc-wine" aria-hidden="true" />
                  Typical response: shortly after review
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-mcc-wine" aria-hidden="true" />
                  Email follow-up from admissions office
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-mcc-wine" aria-hidden="true" />
                  Phone or WhatsApp confirmation when needed
                </p>
              </div>
            </motion.aside>
          </div>
        </section>
      </main>

      <Footer />

      <SuccessModal
        open={modalOpen}
        message="Your enquiry has been received. You will receive an email update soon."
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
