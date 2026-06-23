import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, BookOpen, Cross, PenLine, Quote, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../src/component/Product/Footer";
import Header from "../src/component/Product/Header";

const messageParagraph =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";

const messageParagraphs = [messageParagraph, messageParagraph, messageParagraph, messageParagraph];

/** Public principal message page for Madonna Catholic College. */
export default function PrincipalMessagePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-mcc-blush text-mcc-ink">
      <Head>
        <title>Principal's Message | Madonna Catholic College</title>
        <meta
          name="description"
          content="Read the full message from the Principal of Madonna Catholic College."
        />
      </Head>

      <Header />

      <main className="relative">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white via-mcc-blush to-transparent" />
        <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-mcc-line bg-white px-4 py-2 text-sm font-black text-mcc-wine shadow-soft transition hover:border-mcc-wine hover:bg-white focus:outline-none focus:ring-4 focus:ring-mcc-line/70"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 overflow-hidden rounded-[2rem] border border-mcc-line bg-[#FFF8FB] shadow-card"
          >
            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-10 lg:p-10 xl:p-12">
              <div className="min-w-0 self-center">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-mcc-wine">
                  A Message From Our Principal
                </p>
                <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight text-mcc-ink sm:text-4xl lg:text-5xl">
                  Nurturing Minds. Building Character. Transforming Lives.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-mcc-ink/85 sm:text-lg">
                  At MCC, we are committed to raising young men and women who excel academically while living out Gospel values in all they do.
                </p>

                <div className="mt-8 flex flex-col gap-4 border-l-4 border-mcc-wine pl-5">
                  <p className="font-display text-3xl italic leading-none text-mcc-wine sm:text-4xl">Sr. Mary Clare</p>
                  <div>
                    <p className="text-base font-black text-mcc-ink">Sr. Mary Clare Eze, DMMM</p>
                    <p className="mt-1 text-sm font-semibold text-mcc-muted">Principal, Madonna Catholic College</p>
                  </div>
                </div>
              </div>

              <aside className="relative min-h-[340px] overflow-hidden rounded-[1.75rem] border border-mcc-line bg-white p-6 shadow-soft sm:min-h-[400px]" aria-label="Principal visual placeholder">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-mcc-pink" />
                <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-mcc-line/35" />
                <div className="relative flex h-full min-h-[300px] flex-col items-center justify-center rounded-[1.35rem] border border-dashed border-mcc-line bg-gradient-to-br from-white via-mcc-blush to-white px-6 text-center">
                  <span className="flex h-28 w-28 items-center justify-center rounded-full border border-mcc-line bg-white text-mcc-wine shadow-soft">
                    <UserRound className="h-14 w-14" strokeWidth={1.6} />
                  </span>
                  <div className="mt-7 flex items-center justify-center gap-3 text-mcc-wine">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mcc-pink"><BookOpen className="h-5 w-5" /></span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mcc-pink"><Cross className="h-5 w-5" /></span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mcc-pink"><PenLine className="h-5 w-5" /></span>
                  </div>
                  <p className="mt-6 max-w-xs text-sm font-bold leading-6 text-mcc-muted">
                    Generic leadership portrait placeholder. Replace only when an approved MCC portrait is supplied.
                  </p>
                </div>
              </aside>
            </div>

            <div className="mx-5 border-t border-mcc-line sm:mx-8 lg:mx-10 xl:mx-12" />

            <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10 xl:px-12">
              <div className="mb-7 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mcc-wine text-white shadow-soft">
                  <Quote className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-mcc-wine">Full Message</p>
                  <h2 className="mt-1 text-xl font-black text-mcc-ink sm:text-2xl">Faith. Knowledge. Service.</h2>
                </div>
              </div>

              <div className="mx-auto max-w-4xl space-y-6 text-base leading-8 text-mcc-ink/85 sm:text-lg sm:leading-9">
                {messageParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
