import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"; 

dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://mikelpfeiferportfolio-9ef30b755f95.herokuapp.com/",
    "https://mdpfeifer1.github.io/react_portfolio/",
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.options("*", cors()); 

// Environment Variables Check
if (
  !process.env.EMAIL_USER ||
  !process.env.EMAIL_PASS ||
  !process.env.EMAIL_TO
) {
  console.error("Missing required environment variables.");
  process.exit(1); 
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
app.use('/react_portfolio',express.static(path.join(__dirname, "dist")));

// Catch-All Route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
