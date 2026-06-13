import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { randomUUID } from "crypto";

// ── Credentials (server-only, never sent to browser) ─────────────────────────
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID; // Hamza's personal Telegram chat ID

// Sender — MUST match a verified sender in your Brevo account
const FROM_NAME = process.env.FROM_NAME || "Hamza's Barber Shop";
const FROM_EMAIL = process.env.FROM_EMAIL || "la-mama@wearesignalzero.tech"; // ✅ verified sender in Brevo

// ─────────────────────────────────────────────────────────────────────────────

const BookingSchema = z.object({
  customer_name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(5).max(40),
  service: z.string().min(1).max(80),
  appointment_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  appointment_time: z.string().regex(/^\d{2}:\d{2}$/),
  notes: z.string().max(500).optional().default(""),
});

export type BookingInput = z.infer<typeof BookingSchema>;

export const createBooking = createServerFn({ method: "POST" })
  .validator((input: unknown) => BookingSchema.parse(input))
  .handler(async ({ data }) => {
    const bookingId = randomUUID();

    const dateLabel = new Date(
      `${data.appointment_date}T${data.appointment_time}`
    ).toLocaleString("de-DE", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const tasks: Promise<unknown>[] = [];

    // ── 1. Email to CUSTOMER (Brevo — sends to ANY email, no domain needed) ────
    const emailHtml = `
      <div style="font-family:Inter,Arial,sans-serif;background:#0D0D0D;color:#F5EFE0;padding:40px 32px;max-width:580px;margin:0 auto;border-radius:16px;border:1px solid rgba(201,168,76,0.2)">
        <div style="text-align:center;padding-bottom:28px;border-bottom:1px solid rgba(201,168,76,0.15);margin-bottom:28px">
          <h1 style="font-family:Georgia,serif;color:#C9A84C;margin:0 0 6px;font-size:26px;letter-spacing:1px">Hamza's Barber Shop</h1>
          <p style="color:#A89F8C;font-size:11px;letter-spacing:.25em;text-transform:uppercase;margin:0">Koblenz-Neuendorf</p>
        </div>
        <p style="font-size:17px;margin:0 0 8px">Hallo <b>${escapeHtml(data.customer_name)}</b>,</p>
        <p style="color:#C9A84C;font-size:15px;margin:0 0 24px">✂️ Ihr Termin ist bestätigt!</p>
        <div style="background:#181818;border:1px solid rgba(201,168,76,0.15);border-radius:10px;padding:20px 24px;margin-bottom:24px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr style="border-bottom:1px solid rgba(201,168,76,0.08)">
              <td style="padding:10px 0;color:#A89F8C;width:40%">Leistung</td>
              <td style="padding:10px 0;font-weight:600">${escapeHtml(data.service)}</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(201,168,76,0.08)">
              <td style="padding:10px 0;color:#A89F8C">Datum &amp; Uhrzeit</td>
              <td style="padding:10px 0;font-weight:600">${escapeHtml(dateLabel)}</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(201,168,76,0.08)">
              <td style="padding:10px 0;color:#A89F8C">Barber</td>
              <td style="padding:10px 0;font-weight:600">Hamza</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#A89F8C">Buchungs-Nr.</td>
              <td style="padding:10px 0;font-size:12px;color:#C9A84C;letter-spacing:.1em">${bookingId.slice(0, 8).toUpperCase()}</td>
            </tr>
          </table>
        </div>
        ${data.notes ? `<div style="background:#181818;border-left:3px solid #C9A84C;border-radius:4px;padding:12px 16px;margin-bottom:24px;font-size:13px;color:#A89F8C"><b style="color:#F5EFE0">Ihre Anmerkung:</b> ${escapeHtml(data.notes)}</div>` : ""}
        <div style="background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15);border-radius:10px;padding:16px 20px;margin-bottom:28px">
          <p style="margin:0;font-size:13px;color:#A89F8C;line-height:1.6">
            ⏰ Bitte sagen Sie Ihren Termin <b style="color:#F5EFE0">spätestens 2 Stunden vorher</b> ab, falls Sie verhindert sind.<br>
            Der endgültige Preis wird vor Ort bestätigt.
          </p>
        </div>
        <p style="margin:0;font-size:12px;color:#A89F8C;text-align:center">
          Hamza's Barber Shop · Koblenz-Neuendorf<br>Wir freuen uns auf Sie! 🙏
        </p>
      </div>
    `;

    tasks.push(
      fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: FROM_NAME, email: FROM_EMAIL },
          to: [{ email: data.email, name: data.customer_name }],
          subject: `✂️ Terminbestätigung – ${dateLabel}`,
          htmlContent: emailHtml,
        }),
      })
        .then(async (r) => {
          if (!r.ok) {
            console.error("[Booking] Brevo failed", r.status, await r.text());
          } else {
            console.log("[Booking] ✅ Email sent to customer:", data.email);
          }
        })
        .catch((e) => console.error("[Booking] Brevo error", e))
    );

    // ── 2. Telegram notification to HAMZA (new booking alert) ─────────────────
    const telegramText =
      `🪒 <b>Neue Buchung!</b>\n\n` +
      `<b>Kunde:</b> ${escapeHtml(data.customer_name)}\n` +
      `<b>Leistung:</b> ${escapeHtml(data.service)}\n` +
      `<b>Wann:</b> ${escapeHtml(dateLabel)}\n` +
      `<b>Telefon:</b> ${escapeHtml(data.phone)}\n` +
      `<b>Email:</b> ${escapeHtml(data.email)}` +
      (data.notes ? `\n<b>Notiz:</b> ${escapeHtml(data.notes)}` : "") +
      `\n\n<b>Ref:</b> <code>${bookingId.slice(0, 8).toUpperCase()}</code>`;

    tasks.push(
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramText,
          parse_mode: "HTML",
        }),
      })
        .then(async (r) => {
          if (!r.ok) {
            console.error("[Booking] Telegram failed", r.status, await r.text());
          } else {
            console.log("[Booking] ✅ Telegram notification sent to Hamza");
          }
        })
        .catch((e) => console.error("[Booking] Telegram error", e))
    );

    await Promise.allSettled(tasks);

    return { ok: true, id: bookingId };
  });

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
