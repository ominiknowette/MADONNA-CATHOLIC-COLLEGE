---
schemaVersion: 1
scope: workspace
updatedAt: "2026-06-22T16:03:30.236Z"
workspaceName: "Madonna Catholic College"
---

# Project Memory

## Project Overview
- Madonna Catholic College web portal built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.
- Covers public school website, authentication flow, student portal, and principal/admin workflows.
- Uses mock/static data for now, with future backend/database connection expected.

## Current State
- Existing Next.js pages project with public site, student portal, and principal portal routes.
- Public Principal/Sister full message page exists at `/principal-message`; homepage CTA links to it.
- Public Apply Now / Admission Enquiry page exists at `/apply-now`; admission CTAs link there.
- Admission enquiry is mock-only: no payment and no backend integration.
- Admission submission clears the form, logs mock payload, may persist locally, and shows a compact card-style success modal.
- Success modal copy includes: “You will receive an email update soon.”
- `SuccessModal.tsx` was rewritten with clean JSX closing tags after repeated malformed `/div>` parse errors; local Next.js build still needs confirmation.
- Homepage admissions section was refined into a polished MCC-styled process panel with clearer hierarchy, softer surfaces, two-column process cards, and stronger CTA.
- `DESIGN.md` exists and remains the authoritative design-system artifact; it was updated with the refined admissions process pattern.
- Standalone verifier cannot mount Next.js TSX components directly; `DESIGN.md` validation passed.
- `AGENTS.md` and `.codesign/settings.json` remain absent.

## Artifacts
- `DESIGN.md`: authoritative MCC design-system baton with stable visual/component rules.
- `README.md`: project description, local run instructions, and route overview.
- `package.json`: Next.js app dependencies and scripts.
- `pages/index.tsx`: public landing page route using `PublicHome`.
- `pages/apply-now.tsx`: public admission enquiry page and success modal invocation; includes modal sizing/density tweak controls.
- `pages/principal-message.tsx`: public Principal/Sister message page.
- `pages/login.tsx`: login route.
- `pages/dashboard.tsx`, `pages/results.tsx`, `pages/my-grades.tsx`, `pages/events.tsx`, `pages/profile.tsx`: student portal routes.
- `pages/principal/*`: principal/admin dashboard, approvals, reports, settings, staff, and student pages.
- `src/component/Product/PublicHome.tsx`: public homepage; recently rewritten/refined, especially the admissions process area.
- `src/component/Product/AdmissionEnquiryForm.tsx`: reusable enquiry form with validation, loading state, mock submit, console logging, and localStorage persistence.
- `src/component/Product/SuccessModal.tsx`: reusable compact card-style success confirmation modal.
- `src/component/Product/Header.tsx`, `Footer.tsx`, `Card.tsx`: shared public UI components.
- `src/lib/data.ts`, `src/lib/principalData.ts`: mock data.
- `tailwind.config.ts`, `styles/globals.css`: MCC-themed styling setup.

## Design Direction
- Modern Catholic college identity: clean, elegant, structured, professional, wine-and-white interface.
- Primary MCC brand wine is `#801431`; avoid overly bright pink/purple wine.
- Cards should remain mostly white or softly wine-tinted, with rounded corners, soft borders, and subtle shadows.
- Use wine for important actions, active states, sidebars, key icons, table headers, selected badges, and confirmation accents.
- Public forms use clean card-based layouts, label-above-input fields, visible validation, loading/disabled states, and responsive stacking.
- Homepage admissions process should feel guided and reassuring, using compact process cards, timeline/step hierarchy, soft wine accents, and clear “Apply Now” CTA.
- Portals use card-based dashboards, fixed desktop sidebar patterns, responsive layouts, Lucide icons, and subtle motion.
- Do not use real staff, principal, teacher, Reverend Sister, or student photos in portal UI; use generic circular avatar placeholders.

## User Feedback
- User asked to inspect before editing existing source files.
- User prefers concise, controlled AI coding prompts and no broad redesigns unless requested.
- Respect read-only requests; inspect and summarize without editing when explicitly requested.
- The MCC wine previously looked too pink/purple; use corrected logo-derived wine.
- Principal portal must not include announcements or public communication tools.
- Admission enquiry page must not include payment logic or payment integration.
- User wanted the admission success modal to use a better card style, mention email updates, be smaller/more fitted, and then requested repeated build parse-error fixes.
- User asked whether mockups can be designed without integration; answer given: yes, mockups can stay separate from live Next.js pages.

## Decisions
- Product scope includes public website, login, student portal, and principal/admin portal.
- Public website includes hero, CTA, statistics, Principal/Sister message, navigation, Apply Now, About, Admissions, Academics, Student Life, Faith & Mission, News & Events.
- Student portal includes dashboard, results/grades, events, staff directory, and profile.
- Principal portal includes dashboard, staff/class-teacher assignment, promotion approvals, students overview, reports, and settings.
- Login flow routes users based on role/email pattern.
- Controlled Promotion System direction: class teacher reviews, principal finalizes special cases, and student class/session history must be preserved.
- Principal message page is public, not a portal page, and uses existing public header/footer style.
- Apply Now is an admission enquiry collection page only; submission shows success modal, clears form, logs mock payload, and may persist locally.
- Admission confirmation should communicate that the enquiry was received and an email update will arrive soon.

## Open Questions
- Whether the app should remain a prototype with mock data or connect to a backend.
- Final authentication/authorization model and route guards.
- Which workflows require real persistence or form submission.
- Whether `/principal-message` should eventually move under `/about/principal-message`.
- Whether user will provide the real MCC logo asset or Sister/principal portrait reference.
- Whether admission enquiries should later connect to email service, CRM, or database.
- Whether local Next.js dev/build now passes after the `SuccessModal.tsx` rewrite and latest homepage rewrite.

## Next Steps
- Run local TypeScript/Next.js build checks to confirm `SuccessModal.tsx` and rewritten `PublicHome.tsx` compile in the actual app.
- Preview homepage, `/apply-now`, `/principal-message`, and header CTAs in a working browser environment.
- Confirm the refined admissions process layout on mobile and desktop.
- Confirm the compact admission success modal on small screens.
- Continue fixing targeted layout issues only when requested, especially shared portal shell/sidebar behavior.
- Define backend/data model if moving beyond prototype.

## Promotion Candidates For DESIGN.md
- MCC primary wine `#801431` as stable brand reference.
- Generic circular avatar placeholder rule for staff/principal/student identities.
- Refined homepage admissions process pattern: white/soft-tinted process panel, step cards, wine accents, reassuring guidance copy, and clear CTA.
- Admission enquiry pattern: two-section responsive layout with form card plus “What happens next” info panel.
- Compact card-style success modal pattern for mock public form submissions, including email-update confirmation copy and viewport-fitted sizing.
- Public message-page pattern: public navbar, back link, large soft wine-tinted card, two-column intro, readable long-form body.
- Card-based dashboard and portal layout system.
- Fixed desktop sidebar with independently scrolling main content.
- Use of Lucide icons and Framer Motion transitions.

## Recent History
- 2026-06-22: Workspace inspected read-only; summarized as MCC public site plus student and principal portal prototype.
- 2026-06-22: Added `/principal-message`, linked homepage “Read Full Message” CTA, updated public layout/styling files, and created minimal `DESIGN.md`.
- 2026-06-22: Added `/apply-now` admission enquiry page, reusable form and success modal, mock notification behavior, localStorage persistence, and admission CTA routing.
- 2026-06-22: Updated admission success modal into a richer card-style confirmation and changed copy to mention receiving an email update soon.
- 2026-06-22: Tightened admission success modal sizing; updated `DESIGN.md`; preview still could not launch, but design baton validation passed.
- 2026-06-22: Reopened repeated `SuccessModal.tsx` parse error, rewrote the modal component with clean JSX closing tags, exposed five tweakable values, and verified `DESIGN.md`.
- 2026-06-22: Refined homepage admissions process in `PublicHome.tsx`, updated `DESIGN.md`, exposed tweak controls, and verified the design baton.