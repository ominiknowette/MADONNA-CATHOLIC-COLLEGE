---
version: alpha
name: Madonna Catholic College Design System
---

## Overview
Madonna Catholic College uses a clean, elegant Catholic school identity for both the public website and role-based portals. The visual system should feel structured, professional, and welcoming, with wine used for leadership, navigation, key actions, active states, and icons while keeping page backgrounds light and cards mostly white.

## Colors
- `mcc.wine`: `#801431` — primary MCC wine from the school logo; use for buttons, active states, selected badges, key icons, and table/sidebar emphasis.
- `mcc.plum`: `#6F0F2A` — darker hover and pressed state.
- `mcc.pink`: `#F8E8EE` — soft wine background for highlighted sections and callouts.
- `mcc.line`: `#E8B8C6` — light wine border for cards, dividers, chips, and focus rings.
- `mcc.blush`: `#FFF7FA` / `#FFF8FB` — very light page background.
- `mcc.paper`: `#FFFFFF` — primary card and content surface.
- `mcc.ink`: `#2B1631` / close to `#1F1028` — main heading and body text.
- `mcc.muted`: `#7A6B80` — secondary labels, metadata, and descriptions.

## Typography
- Primary UI font: system sans stack configured as `font-sans`.
- Display/accent font: Georgia-style serif configured as `font-display`, reserved for signatures, ceremonial headings, and editorial details.
- Headings should be bold, compact, and dark wine/navy; body text should use comfortable line height for school communications.

## Rounded
- Small controls: `rounded-lg` to `rounded-xl`.
- Cards and portal surfaces: `rounded-2xl`.
- Feature/message cards: `rounded-[2rem]` when a more ceremonial public-page treatment is needed.
- Avatars and icon placeholders: full circle.

## Spacing
- Public sections use `max-w-7xl` with responsive horizontal padding `px-4 sm:px-6 lg:px-8`.
- Dashboard cards should have generous but not crowded spacing: typically `p-5` to `p-6`.
- Long-form public reading pages should keep paragraphs around `max-w-4xl` with `leading-8` or higher.

## Components
- Public header/footer are shared across marketing pages and should remain consistent.
- Cards: white or very light wine-tinted surfaces, subtle wine border, soft shadow.
- Buttons: primary wine with plum hover; secondary white with wine border.
- Avatars: use generic circular person placeholders only. Do not use real student, teacher, staff, principal, or Reverend Sister photos unless an approved asset is supplied.
- Portal sidebars: fixed on desktop, full viewport height, wine background, logout anchored near the bottom; main content scrolls independently.
- Public principal message page: use existing public header/footer, back link, large wine-tinted message card, responsive two-column intro, decorative divider, and readable long-form body copy.

- Public admissions process blocks should avoid four narrow vertical cards inside split layouts. Prefer a rounded white panel with a two-column step grid, small numbered badges, subtle oversized step numerals, readable left-aligned copy, and a clear follow-up CTA.

- Homepage hero-adjacent callouts should feel school-authored rather than metric-driven: prefer a short welcome/admissions guidance panel with real CTAs over generic stat cards.


## Admissions Enquiry Pattern

- Public admission enquiry pages use a two-section layout: primary form card on the left and a supportive “What happens next” panel on the right.
- Forms should remain card-based with white surfaces, `mcc.line` borders, `mcc.blush`/soft wine-tinted headers, and `mcc.wine` as the primary submit action.
- Admission enquiry submissions are informational only; do not introduce payment UI, fee collection, checkout language, or payment integrations.
- Success confirmations use an accessible centered ceremonial card modal: large green success check, MCC eyebrow, serif “Enquiry Submitted!” heading, soft wine-tinted next-step card, clear close control, and the message: “Your enquiry has been received. You will receive an email update soon.”
- Reusable public form components should include visible labels, required-field validation, keyboard focus states, and loading feedback before the success state.


### Compact confirmation cards

- Admission success modals should stay fitted to the viewport: max width around 560px, reduced internal padding, and `max-height` with internal scroll if needed.
- Keep the confirmation hierarchy intact: wine accent, green check confirmation, concise email-update copy, and one clear Close action.
