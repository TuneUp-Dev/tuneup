require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Career applications
app.post("/api/apply", async (req, res) => {
  const {
    name,
    email,
    gender,
    mobile,
    institution,
    degree,
    year,
    graduationYear,
    applyingFor,
  } = req.body;

  if (!name || !email || !mobile) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Email to the applicant
    const applicantMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Application Received",
      text: `Dear ${name},
Thank you for applying for the ${applyingFor} developer role. Our team will review your application and contact you soon.
      
      \nBest Regards,
TuneUp Technologies.`,
    };

    // Email to the admin with all details
    const adminEmail = "info@tuneuptech.in";

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: "New Application Received",
      text: `A new application has been received from ${name},

        Name: ${name}
        Email: ${email}
        Gender: ${gender}
        Mobile: ${mobile}
        Institution: ${institution}
        Degree: ${degree}
        Year: ${year}
        Graduation Year: ${graduationYear}
        Applying For: ${applyingFor}`,
    };

    // Send emails
    await transporter.sendMail(applicantMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Contact mail
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required" });
  }

  try {
    // Email to the admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@tuneuptech.in",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>This message was sent from the contact form on TuneUp Technologies website.</p>
      `,
    };

    // Email confirmation to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting TuneUp Technologies",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to TuneUp Technologies. We have received your message and our team will get back to you soon.</p>
        <br>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br>
        <p><strong>Best Regards,</strong></p>
        <p>TuneUp Technologies Team</p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({
      message: "Failed to send your message. Please try again later.",
    });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
