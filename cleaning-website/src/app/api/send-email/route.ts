
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse form data
    const formData = await request.json();
    const { firstName, lastName, contactNumber, email, message } = formData;

    // Validate required environment variables
    const smtpServer = process.env.SMTP_SERVER;
    const smtpPort = process.env.SMTP_PORT;
    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;

    if (!smtpServer || !smtpPort || !smtpEmail || !smtpPassword) {
      console.error('Missing SMTP configuration:', {
        server: !!smtpServer,
        port: !!smtpPort,
        email: !!smtpEmail,
        password: !!smtpPassword
      });
      return NextResponse.json(
        { message: 'Server email configuration error', success: false },
        { status: 500 }
      );
    }

    // Create a transporter object using SMTP
    const portNumber = parseInt(smtpPort, 10);
    const transporter = nodemailer.createTransport({
      host: smtpServer,
      port: portNumber,
      secure: portNumber === 465, // true for 465, false for other ports
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    // Verify SMTP connection configuration
    await transporter.verify().catch(error => {
      console.error('SMTP Verification failed:', error);
      throw new Error(`SMTP Connection Error: ${error.message}`);
    });

    // Email content
    const mailOptions = {
      from: smtpEmail,
      to: 'hashaamkhan975@gmail.com', // Receiver address
      subject: 'New Contact Form Submission',
      text: `
        Name: ${firstName} ${lastName}
        Contact Number: ${contactNumber}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({
      message: 'Email sent successfully',
      success: true
    });

  } catch (error: any) {
    console.error('Error sending email:', error);

    return NextResponse.json({
      message: `Failed to send email: ${error.message || 'Unknown error'}`,
      success: false
    }, {
      status: 500
    });
  }
}