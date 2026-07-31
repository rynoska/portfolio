import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z.email("Please enter a valid email address").max(254),
  message: z.string().trim().min(10, "Message is too short").max(2000, "Message is too long"),
  website: z.string().optional().default(""),
  formStartedAt: z.number().int().positive(),
  turnstileToken: z.string().optional(),
});

const MIN_FORM_FILL_MS = 2500;

async function verifyTurnstile(token: string, ip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return true;
  }

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) {
    body.set("remoteip", ip);
  }

  const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  if (!verification.ok) {
    return false;
  }

  const result = (await verification.json()) as { success?: boolean };
  return Boolean(result.success);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
        { status: 400 }
      );
    }

    const { name, email, message, website, formStartedAt, turnstileToken } = parsed.data;

    if (website.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (Date.now() - formStartedAt < MIN_FORM_FILL_MS) {
      return NextResponse.json({ error: "Submission failed spam checks" }, { status: 400 });
    }

    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return NextResponse.json({ error: "Captcha verification is required" }, { status: 400 });
      }

      const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
      const isHuman = await verifyTurnstile(turnstileToken, ip);

      if (!isHuman) {
        return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
      }
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Tide House <onboarding@resend.dev>";

    if (!resendApiKey || !toEmail) {
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const subject = `New contact form submission from ${name}`;
    const submittedAt = new Date().toISOString();

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Submitted: ${submittedAt}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unable to send message right now" }, { status: 500 });
  }
}
