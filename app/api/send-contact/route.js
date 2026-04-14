import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 5000;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function validatePayload(payload) {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";

  if (company) {
    return { valid: true, bot: true, name, email, message, company };
  }

  if (!name || !email || !message) {
    return { valid: false, error: "Missing required fields" };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: "Invalid email address" };
  }

  if (name.length > MAX_NAME_LENGTH) {
    return { valid: false, error: "Name is too long" };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return { valid: false, error: "Message is too long" };
  }

  return { valid: true, bot: false, name, email, message, company };
}

function getConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

export async function POST(request) {
  const config = getConfig();
  if (!config) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  const validated = validatePayload(payload);
  if (!validated.valid) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  if (validated.bot) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const resend = new Resend(config.apiKey);

  try {
    const safeName = escapeHtml(validated.name);
    const safeEmail = escapeHtml(validated.email);
    const safeMessage = escapeHtml(validated.message).replace(/\n/g, "<br />");

    await resend.emails.send({
      from: config.from,
      to: [config.to],
      replyTo: validated.email,
      subject: `New portfolio message from ${validated.name}`,
      text: [
        `Name: ${validated.name}`,
        `Email: ${validated.email}`,
        "",
        "Message:",
        validated.message,
      ].join("\n"),
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact email send failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json({ error: "Unable to send message" }, { status: 500 });
  }
}
