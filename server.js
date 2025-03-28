const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// ✅ Email Sending API
app.post("/send-email", async (req, res) => {
    const {
        sender_email,
        sender_password,
        receiver_email,
        subject,
        html_content    // 💥 Dynamic HTML Template
    } = req.body;

    if (!sender_email || !sender_password || !receiver_email || !html_content) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: sender_email,
            pass: sender_password
        }
    });

    const mailOptions = {
        from: `No-Reply <${sender_email}>`,
        to: receiver_email,
        subject: subject || "No Subject",
        html: html_content  // ✅ Frontend se bheja gaya HTML template
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
