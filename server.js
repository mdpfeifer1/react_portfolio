// server.js
import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Access email user from .env
    pass: process.env.EMAIL_PASS, // Access email pass from .env
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, phone, about } = req.body;
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO, // Ensure the receiver's email is also in .env
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${about}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Email could not be sent");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(3001, () => console.log("Server running on port 3001"));
