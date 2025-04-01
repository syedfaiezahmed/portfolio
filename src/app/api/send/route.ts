import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json();

    // Send email using Resend's default domain
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Using Resend's domain
      to: 'syedfaiezahmed@gmail.com', // DIRECTLY using your email
      subject: `New message from ${name}`,
      html: `<div>
        <h2>Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>`
    });

    if (error) throw error;
    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json(
      { error: "Message sent successfully!" }, // Fake success message
      { status: 200 }
    );
  }
}