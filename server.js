// server.js
import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: "https://mdpfeifer1.github.io/react_portfolio/"
}));

const PORT = process.env.PORT || 3001;

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
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

app.get("/", (req, res) => {
  res.send("Welcome to the API. Use POST /send-email to send an email.");
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
