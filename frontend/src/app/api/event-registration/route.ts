import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, company, linkedin, contactNumber, transactionId, idea, eventTitle } = await req.json();

    if (!fullName || !email || !contactNumber || !transactionId || !idea) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background-color: #f8fafc; padding: 40px 20px;">
    <!-- Main Card -->
    <div style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025); border: 1px solid #e2e8f0;">
      
      <!-- Header Banner -->
      <div style="background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); padding: 32px 24px; text-align: center; color: #ffffff;">
        <span style="background: rgba(255, 255, 255, 0.2); font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; padding: 4px 12px; border-radius: 20px; font-weight: 600;">AnantNetra Event</span>
        <h1 style="margin: 12px 0 0 0; font-size: 22px; font-weight: 700; color: #ffffff;">New Event Registration</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; color: #e0e7ff; font-weight: 500;">${eventTitle}</p>
      </div>

      <!-- Content Area -->
      <div style="padding: 32px 24px;">
        
        <!-- Registration Details Table -->
        <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 24px;">
          <tbody>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; width: 35%; background-color: #f8fafc; border-top-left-radius: 6px;">Full Name</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #1e293b; border-top-right-radius: 6px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; background-color: #f8fafc;">Email Address</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #1e293b;">
                <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none; font-weight: 500;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; background-color: #f8fafc;">Company</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #334155;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; background-color: #f8fafc;">LinkedIn Profile</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #334155;">
                ${
                  linkedin
                    ? `<a href="${linkedin}" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 500;">View Profile &rarr;</a>`
                    : "N/A"
                }
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; background-color: #f8fafc;">Contact Number</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #334155;">${contactNumber}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; background-color: #f8fafc;">Transaction ID</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 700; color: #16a34a; font-family: monospace; letter-spacing: 0.5px;">${transactionId}</td>
            </tr>
          </tbody>
        </table>

        <!-- Idea / Product Section -->
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; margin-top: 12px;">
          <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Idea / Product Description</h4>
          <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-line;">${idea}</p>
        </div>

      </div>

      <!-- Footer -->
      <div style="background-color: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">This is an automated notification from the <strong>AnantNetra</strong> Event Registration System.</p>
      </div>

      </div>
    </div>
    `;

    await transporter.sendMail({
      from: `"Event Registration" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `New Registration: ${fullName} - ${eventTitle}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending registration email:", error);
    return NextResponse.json({ error: "Failed to send registration email" }, { status: 500 });
  }
}