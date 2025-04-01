import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email to yourself with sender as the visitor's email
    const { data, error } = await resend.emails.send({
      from: `${name} <${email}>`, // Using visitor's email as sender
      to: 'syedfaiezahmed@gmail.com', // Your email address
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #2563eb;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            Sent via your portfolio contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email' }, 
        { status: 400 }
      );
    }

    // Send confirmation to the visitor
    await resend.emails.send({
      from: 'Syed Faiez Ahmed <no-reply@resend.dev>',
      to: email,
      subject: 'Thank you for your message',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you soon.</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}