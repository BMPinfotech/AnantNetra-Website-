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
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });


    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 16px 8px;">
      <!-- Main Card -->
       <div style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0;">
      
      <!-- Header Banner -->
      <div style="background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); padding: 28px 16px; text-align: center; color: #ffffff;">
        <span style="background: rgba(255, 255, 255, 0.2); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; font-weight: 600;">AnantNetra Event</span>
        <h1 style="margin: 12px 0 0 0; font-size: 20px; font-weight: 700; color: #ffffff;">New Event Registration</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; color: #e0e7ff; font-weight: 500;">${eventTitle}</p>
      </div>

      <!-- Content Area -->
      <div style="padding: 20px 16px;">
        
        <!-- Field 1: Full Name -->
        <div style="margin-bottom: 12px; padding: 12px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #f1f5f9;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px;">Full Name</div>
          <div style="font-size: 15px; font-weight: 600; color: #0f172a; word-break: break-word;">${fullName}</div>
        </div>

        <!-- Field 2: Email Address -->
        <div style="margin-bottom: 12px; padding: 12px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #f1f5f9;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px;">Email Address</div>
          <div style="font-size: 14px; color: #0f172a; word-break: break-word;">
            <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none; font-weight: 500;">${email}</a>
          </div>
        </div>

        <!-- Field 3: Company & Contact Number (Stacked Box) -->
        <div style="margin-bottom: 12px; padding: 12px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #f1f5f9;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px;">Company</div>
          <div style="font-size: 14px; color: #334155; margin-bottom: 10px; word-break: break-word;">${company || "N/A"}</div>
          
          <div style="border-top: 1px solid #e2e8f0; margin: 8px 0;"></div>

          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px; margin-top: 8px;">Contact Number</div>
          <div style="font-size: 14px; color: #334155; word-break: break-word;">${contactNumber}</div>
        </div>

        <!-- Field 4: LinkedIn Profile -->
        <div style="margin-bottom: 12px; padding: 12px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #f1f5f9;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px;">LinkedIn Profile</div>
          <div style="font-size: 14px; color: #334155; word-break: break-all;">
            ${
              linkedin
                ? `<a href="${linkedin}" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 500;">View LinkedIn Profile &rarr;</a>`
                : "N/A"
            }
          </div>
        </div>

        <!-- Field 5: Transaction ID -->
        <div style="margin-bottom: 12px; padding: 12px; background-color: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #166534; letter-spacing: 0.5px; margin-bottom: 4px;">Transaction ID</div>
          <div style="font-size: 15px; font-weight: 700; color: #15803d; font-family: monospace; letter-spacing: 0.5px; word-break: break-all;">${transactionId}</div>
        </div>

        <!-- Field 6: Idea / Product Description -->
        <div style="padding: 12px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #f1f5f9;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 6px;">Idea / Product Description</div>
          <div style="font-size: 14px; color: #334155; line-height: 1.5; white-space: pre-line; word-break: break-word;">${idea}</div>
        </div>

      </div>

      <!-- Footer -->
      <div style="background-color: #f8fafc; padding: 16px; border-top: 1px solid #e2e8f0; text-align: center;">
        <p style="margin: 0; font-size: 11px; color: #94a3b8;">This is an automated notification from <strong>AnantNetra</strong> Event Registration System.</p>
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