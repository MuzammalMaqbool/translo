import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, number, company, message } = req.body;

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com", // Replace with your SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "your-email@example.com", // Replace with your email
        pass: "your-password", // Replace with your password
      },
    });

    // Define email content
    const mailOptions = {
      from: "your-email@example.com",
      to: "recipient@example.com", // Replace with recipient email
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      // Send mail
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
