const nodemailer = require("nodemailer");

export async function sendEmail(emailInfo) {
    let transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "alex@asrpromedia.com",
            pass: process.env.BREVO_SMTP_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: `Web Dev Kit <alex@asrpromedia.com>`,
        to: "alex@asrpromedia.com",
        subject: "New Website Lead!",
        html: `
            <p>From: ${emailInfo?.firstName} ${emailInfo?.lastName}</p>
            <p>Email: ${emailInfo?.email}</p>
            <p>Phone: ${emailInfo?.phone}</p>
            <p>Service: ${emailInfo?.service}</p>
            <p>Message: ${emailInfo?.message}</p>
            </body>
              `,
    });
}