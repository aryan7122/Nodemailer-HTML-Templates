
## 🔥 **React + Nodemailer Template Project**

### 📁 **Folder Structure**

```
/backend               # Node.js backend (Nodemailer server)
 ├── server.js          # Main server file
 ├── .env               # SMTP credentials
 ├── vercel.json        # Vercel config

/frontend              # React frontend
 ├── src
 │    ├── components
 │    │      ├── EmailForm.jsx        # Email form with template selector
 │    │      └── EmailForm.scss       # SCSS styling
 │    ├── App.js                      # Main React file
 │    ├── index.js                    # React entry point
 │    └── package.json                # Dependencies
 ├── public
 ├── README.md                        # Documentation
```

---

### 🚀 **Backend: Node.js + Nodemailer**

📂 **server.js**
```javascript
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

app.post("/send-email", async (req, res) => {
    const { receiver_email, subject, template } = req.body;

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: receiver_email,
        subject: subject,
        html: template
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send email" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

📂 **.env**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

### 🌐 **Frontend: React + SCSS**

📂 **EmailForm.jsx**
```javascript
import React, { useState } from "react";
import axios from "axios";
import "./EmailForm.scss";

const EmailForm = () => {
    const [formData, setFormData] = useState({
        receiver_email: "",
        subject: "",
        template: ""
    });

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post("https://your-vercel-backend.vercel.app/send-email", formData);
            setResponse(res.data.message);
        } catch (error) {
            setResponse("Failed to send email");
        }

        setLoading(false);
    };

    return (
        <div className="email-form-container">
            <h2>Send Email with HTML Template</h2>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="receiver_email"
                    placeholder="Receiver Email"
                    value={formData.receiver_email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />

                <select name="template" value={formData.template} onChange={handleChange} required>
                    <option value="">Select Template</option>
                    <option value="<h1>Welcome!</h1><p>Thanks for signing up!</p>">Welcome</option>
                    <option value="<h1>Reset Password</h1><p>Click the link below to reset password.</p>">Reset Password</option>
                    <option value="<h1>Invoice</h1><p>Your invoice details are attached.</p>">Invoice</option>
                </select>

                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Email"}
                </button>
            </form>

            {response && <p>{response}</p>}
        </div>
    );
};

export default EmailForm;
```

---

### 🎨 **SCSS Styling: EmailForm.scss**
```scss
.email-form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

    h2 {
        text-align: center;
        color: #333;
    }

    form {
        display: flex;
        flex-direction: column;

        input, select {
            margin: 10px 0;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        button {
            background: #4CAF50;
            color: white;
            padding: 12px;
            border: none;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                background: #45a049;
            }
        }
    }

    p {
        text-align: center;
        color: #4CAF50;
        font-weight: bold;
    }
}
```

---

## 🚀 **Deployment on Vercel**

### ✅ **Backend**
1. Go to [Vercel](https://vercel.com)  
2. Create a new project  
3. Upload **backend** folder  
4. Add environment variables:
```
SMTP_HOST  
SMTP_PORT  
SMTP_USER  
SMTP_PASS  
```
5. Deploy the project 🚀  

---

### ✅ **Frontend**
1. Deploy **frontend** folder on Vercel/Netlify  
2. Use the backend URL in `axios.post()` in React frontend  
3. Done! 🎉  

---

## 📄 **README.md**

```markdown
# 🚀 Nodemailer HTML Template Sender (React + Node.js)

A project to send **HTML emails with dynamic templates** using **Nodemailer backend** and **React frontend**.

---

## ⚙️ **Tech Stack**
- 💻 Backend: Node.js, Express, Nodemailer  
- 🌐 Frontend: React.js, SCSS  
- 🚀 Deployment: Vercel  

---

## 🚀 **How to Use**

1. Clone the repo:
```bash
git clone <your-repo-url>
cd backend
npm install
```

2. Set environment variables:
```
SMTP_HOST  
SMTP_PORT  
SMTP_USER  
SMTP_PASS  
```

3. Start backend:
```bash
node server.js
```

4. Go to frontend:
```bash
cd frontend
npm install
npm start
```

5. **Deploy on Vercel**

---

## 🔥 **API Testing**

### Endpoint:
```
POST https://<your-vercel-backend-url>/send-email
```

### Request Body:
```json
{
  "receiver_email": "user@example.com",
  "subject": "Welcome!",
  "template": "<h1>Welcome!</h1><p>Thanks for signing up!</p>"
}
```

---

## 📞 **Contact**
- 📧 Email: aryankushwahalifenote@gmail.com  
- 🔥 GitHub: [Your GitHub Profile](https://github.com/aryan7122)  
```

---

✅ **Yeh complete README.md hai jo saari instructions, React frontend, Nodemailer backend, aur deployment guide ke saath hai!** 🚀🔥  
Isko **GitHub par upload** karke share karo! 🎉😎
