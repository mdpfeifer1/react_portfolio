import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"; // Necessary for __dirname in ES modules

dotenv.config();

// Simulating __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://mdpfeifer1.github.io/react_portfolio/", // Update if needed
  })
);

// Environment Variables Check
if (
  !process.env.EMAIL_USER ||
  !process.env.EMAIL_PASS ||
  !process.env.EMAIL_TO
) {
  console.error("Missing required environment variables.");
  process.exit(1); // Stop the server if variables are missing
}

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Routes
app.post("/send-email", (req, res) => {
  const { name, email, phone, about } = req.body;

  if (!name || !email || !phone || !about) {
    return res.status(400).send("All fields are required.");
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${about}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Failed to send email.");
    }
    console.log("Email sent successfully:", info.response);
    res.status(200).send("Email sent successfully.");
  });
});

// Serve React Static Files
app.use(express.static(path.join(__dirname, "build")));

// Catch-All Route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
