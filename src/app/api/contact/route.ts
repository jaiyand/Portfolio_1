import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Server-side validation schema with strict boundary checks
const serverContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address.' })
    .max(255, { message: 'Email must not exceed 255 characters.' }),
  subject: z
    .string()
    .trim()
    .min(3, { message: 'Subject must be at least 3 characters.' })
    .max(200, { message: 'Subject must not exceed 200 characters.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(5000, { message: 'Message must not exceed 5000 characters.' }),
});

// Lightweight in-memory rate limiting (max 5 submissions per IP within 60 seconds)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 5;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= maxRequests) {
    return true;
  }

  entry.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // Rate limit check based on request headers
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown-client';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many contact requests. Please wait a minute before sending another message.' },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: 'Invalid request payload.' },
        { status: 400 }
      );
    }

    // 1. Server-side Data Validation
    const validationResult = serverContactSchema.safeParse(body);
    if (!validationResult.success) {
      const firstIssue = validationResult.error.issues[0];
      return NextResponse.json(
        { error: firstIssue?.message || 'Invalid form input details.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // 2. Check for Resend API Key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('SERVER ERROR: RESEND_API_KEY environment variable is not defined.');
      return NextResponse.json(
        { error: 'Email service is not configured on the server. Please set RESEND_API_KEY in .env.local.' },
        { status: 500 }
      );
    }

    // 3. Initialize Resend client
    const resend = new Resend(apiKey);

    // Sender configuration: Default to Resend onboarding address for unverified domains
    // If user verifies a custom domain in Resend later, they can set RESEND_FROM_EMAIL in env.
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';
    const recipientEmail = 'jaiyandanand@gmail.com';

    // 4. Dispatch Email via Resend
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [recipientEmail],
      subject: `New Portfolio Contact — ${subject}`,
      replyTo: email, // Crucial: Clicking 'Reply' in Gmail/Outlook will reply directly to visitor's email
      text: `New message received from your portfolio\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Portfolio Contact</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080607; padding: 24px; color: #F7EDE7;">
            <div style="max-width: 600px; margin: 0 auto; background: #10090B; padding: 32px; border-radius: 16px; border: 1px solid rgba(190, 90, 70, 0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
              <h2 style="margin-top: 0; color: #E3A06F; font-size: 20px; border-bottom: 1px solid rgba(190, 90, 70, 0.2); padding-bottom: 12px; font-family: monospace;">
                New Message Received from Portfolio
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 90px; color: #9E8582; font-family: monospace;">Name:</td>
                  <td style="padding: 8px 0; color: #F7EDE7;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #9E8582; font-family: monospace;">Email:</td>
                  <td style="padding: 8px 0; color: #F7EDE7;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #BE5A46; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #9E8582; font-family: monospace;">Subject:</td>
                  <td style="padding: 8px 0; color: #F7EDE7;">${escapeHtml(subject)}</td>
                </tr>
              </table>
              <div style="margin-top: 24px; padding: 16px; background-color: #080607; border-left: 4px solid #8F1720; border-radius: 8px; border-top: 1px solid rgba(190, 90, 70, 0.2); border-right: 1px solid rgba(190, 90, 70, 0.2); border-bottom: 1px solid rgba(190, 90, 70, 0.2);">
                <h4 style="margin-top: 0; margin-bottom: 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #9E8582; font-family: monospace;">
                  Message:
                </h4>
                <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #F7EDE7;">${escapeHtml(message)}</p>
              </div>
              <div style="margin-top: 24px; font-size: 12px; color: #9E8582; border-top: 1px solid rgba(190, 90, 70, 0.2); padding-top: 16px; font-family: monospace;">
                Sent via Portfolio Contact Form • Clicking reply will respond directly to <strong>${escapeHtml(email)}</strong>.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API Delivery Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to deliver message via Resend.' },
        { status: 500 }
      );
    }

    console.log('Successfully dispatched email via Resend to jaiyandanand@gmail.com:', data?.id);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent directly to jaiyandanand@gmail.com.',
      id: data?.id,
    });

  } catch (err: unknown) {
    console.error('Unhandled Contact Route Exception:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your message. Please try again.' },
      { status: 500 }
    );
  }
}
