# Hamza's Barber Shop — Build Plan

## Brand & Design
- Background `#0D0D0D`, gold accent `#C9A84C`, soft cream text
- Fonts: Playfair Display (display) + Inter (body)
- Gold-framed logo (uploaded) in header & footer
- Mobile-first, smooth scroll, subtle motion via framer-motion

## Routes (TanStack file-based)
- `__root.tsx` — shared nav + footer + SEO defaults + LocalBusiness JSON-LD
- `/` — hero, stats, featured services, styles preview, testimonials, CTA
- `/services` — full pricing menu with "Final price confirmed at appointment" note
- `/styles` — editorial gallery (6 AI-generated hero images), each with "Book this style"
- `/booking` — 4-step flow (service → date/time → contact → confirm)
- `/about` — story, values
- `/contact` — address, hours, phone, Google Maps embed

## Backend (Lovable Cloud)
**Table `bookings`**: id, customer_name, email, phone, service, barber ('Hamza'), date, time, notes, status, created_at. RLS: anyone can INSERT, only service_role reads.

**Server function** `src/lib/booking.functions.ts` → `createBooking`:
1. Validate with zod
2. Insert into `bookings` (admin client)
3. `Promise.allSettled([sendResendEmail, sendTelegramMessage])`
4. Return booking id

## Connectors
- **Resend** — styled HTML confirmation to customer
- **Telegram Bot** — instant owner notification with booking details
- Both via Lovable connectors (no manual keys needed)

## Booking Logic
- Hours: Mon–Fri 09:30–18:30, Sat 09:30–17:00, Sun closed
- 30-min slots, 1-hour lead time, 2-hour cancellation window
- react-hook-form + zod validation

## Styles Gallery
6 AI-generated editorial images in `src/assets/` (Skin Fade, Classic Cut, Beard Sculpt, Hot Towel Shave, Modern Textured, Father & Son), each deep-links to `/booking?service=...`

## SEO
- German keywords, unique title/description per route
- LocalBusiness JSON-LD with address, hours, phone
- og:image per leaf route

## Build Order
1. Connect Resend + Telegram connectors
2. Migration: `bookings` table + RLS + GRANTs
3. Design tokens in `src/styles.css`, fonts, logo asset
4. `__root.tsx` shell (nav, footer, JSON-LD)
5. Home + Services + About + Contact routes
6. Styles gallery with generated images
7. Booking form + `createBooking` server fn + email/telegram helpers
8. QA: submit a test booking, verify email + telegram fire

Ready to build on your approval.