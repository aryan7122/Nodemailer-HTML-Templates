✅🔥 📄 README.md for Nodemailer Backend with Dynamic HTML Email Templates

🚀 Email Sender API with Nodemailer & Vercel Deployment

🔥 This project allows you to send dynamic HTML emails with custom templates using Nodemailer.You can deploy it on Vercel and use it as an unlimited email-sending API.

⚙️ Features

✅ Send fully dynamic HTML emails.✅ Use Postman or Thunder Client to test the API.✅ Deployed on Vercel with unlimited API calls.✅ Easily configurable with environment variables.✅ Ready to be used in React.js frontend projects.

📁 Folder Structure

/email-sender
 ├── node_modules/         → Dependencies
 ├── .env                  → Environment variables
 ├── index.js              → Main backend file
 ├── package.json          → Dependencies and scripts
 ├── README.md             → Project documentation
 └── vercel.json           → Vercel deployment configuration

🚀 Getting Started

🔥 Step 1: Clone the Repository

git clone <YOUR_REPO_URL>
cd email-sender

🔥 Step 2: Install Dependencies

npm install

🔥 Step 3: Set Up Environment Variables

Create a .env file in the root directory and add the following:

SMTP_SERVICE=gmail
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_gmail_app_password

🔥 How to Run Locally

Start the server locally:

npm start

Test the API using Thunder Client or Postman:

POST http://localhost:3000/send-email

✅ Request Body Example:

{
  "sender_email": "your_email@gmail.com",
  "sender_password": "your_app_password",
  "receiver_email": "receiver@gmail.com",
  "subject": "Test Email",
  "html_content": `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
        <h2 style="background: #4CAF50; color: white; padding: 10px;">Contact Form</h2>
        <p><strong>Name:</strong> Aryan Kushwaha</p>
        <p><strong>Email:</strong> aryankushwahalifenote@gmail.com</p>
        <p><strong>Message:</strong> This is a fully dynamic HTML email!</p>
        <hr/>
        <p style="font-size: 12px; color: #555;">Sent from Aryan's website</p>
    </div>
  `
}

✅ Success Response:

{
  "success": "Email sent successfully!"
}

✅ Error Response:

{
  "error": "Failed to send email"
}

🔥 Deploying on Vercel

Push your code to GitHub:

git add .
git commit -m "Initial Commit"
git push origin main

Deploy to Vercel:

Go to Vercel → Import GitHub Repository.

Set environment variables in Settings → Environment Variables:

SMTP_SERVICE = gmail  
SMTP_USER = your_email@gmail.com  
SMTP_PASSWORD = your_gmail_app_password  

Deploy the project.

✅ You will get a Live URL (e.g., https://email-sender.vercel.app).

Test the Deployed API in Postman:

POST https://email-sender.vercel.app/send-email

🔥 Using with React.js Frontend

You can use this backend with any React.js frontend project to send emails.

✅ Frontend Example:

import React, { useState } from "react";
import axios from "axios";

const EmailSender = () => {
  const [emailData, setEmailData] = useState({
    sender_email: "your_email@gmail.com",
    sender_password: "your_app_password",
    receiver_email: "receiver@gmail.com",
    subject: "Dynamic Email",
    html_content: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
          <h2 style="background: #4CAF50; color: white; padding: 10px;">Welcome!</h2>
          <p><strong>Message:</strong> This is a dynamic HTML email sent from React.js!</p>
          <hr/>
          <p style="font-size: 12px; color: #555;">Sent from my website</p>
      </div>
    `
  });

  const sendEmail = async () => {
    try {
      const response = await axios.post(
        "https://email-sender.vercel.app/send-email",
        emailData
      );
      console.log(response.data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send email");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Send Email</h2>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default EmailSender;

🚀 API Endpoints

✅ POST /send-email

Description: Send dynamic HTML emails.

Body Parameters:

sender_email → Your email address.

sender_password → Gmail app password.

receiver_email → Receiver's email address.

subject → Subject of the email.

html_content → HTML template for the email.

🚀 Tech Stack

✅ Backend: Node.js, Express, Nodemailer✅ Deployment: Vercel✅ Frontend: React.js (Example included)

🚀 Contributing

Fork the project.

Create a new branch:

git checkout -b feature/your-feature

Commit your changes:

git commit -m "Add your feature"

Push to the branch:

git push origin feature/your-feature

Open a pull request.

📧 Contact

🔥 Author: Aryan Kushwaha📩 Email: aryankushwahalifenote@gmail.com🔗 GitHub: Aryan's GitHub

✅🔥 Enjoy your dynamic email-sending API! 🚀Agar koi issue ya customization chahiye to batao bhai! 🔥🚀

