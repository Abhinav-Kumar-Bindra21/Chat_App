# 💬 Chat App – Real-Time Full Stack Messaging Application

A modern, secure, real-time chat application built with the **MERN Stack**, **Socket.IO**, and **React 19**. Users can create an account, verify their email, chat instantly, upload profile pictures, and receive live message updates.

Designed with scalability, authentication, and security best practices.

---

## 📸 Preview

> Add screenshots or GIFs here

```
/docs/images/login.png
/docs/images/chat.png
/docs/images/profile.png
```

---

# ✨ Features

### 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication (HTTP-only Cookies)
- Email Verification (OTP)
- Password Hashing using bcrypt
- Protected Routes
- Auto Login Check

---

### 💬 Real-Time Messaging

- One-to-one Chat
- Instant Message Delivery
- Socket.IO Integration
- Online/Offline User Status
- Live Message Updates
- Automatic Conversation Refresh

---

### 👤 User Profile

- Upload Profile Picture
- Cloudinary Image Storage
- Edit User Information
- View Other Users

---

### 📧 Email Services

- Email Verification
- Beautiful HTML Email Templates
- Resend Email API Integration

---

### 🛡 Security

- Arcjet Protection
- JWT Authentication
- HTTP-only Cookies
- Password Encryption
- Route Protection Middleware
- Input Validation

---

### 🎨 Frontend

- React 19
- React Router v7
- Tailwind CSS v4
- Zustand State Management
- Axios API Client
- React Hot Toast
- Responsive UI

---

### ⚙ Backend

- Express.js
- MongoDB
- Mongoose ODM
- Socket.IO
- Cloudinary
- Resend
- JWT
- bcrypt

---

# 🏗 Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS
- Zustand
- Axios
- React Router
- Socket.IO Client
- React Hot Toast

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT
- bcrypt
- Cloudinary
- Arcjet
- Resend

---

# 📂 Project Structure

```
chat-app/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── lib/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── configs/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── emails/
│   │   ├── utils/
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---

# ⚡ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/chat-app.git

cd chat-app
```

---

## Install Frontend

```bash
cd frontend

npm install
```

---

## Install Backend

```bash
cd ../backend

npm install
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=

MONGODB_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RESEND_API_KEY=

CLIENT_URL=
```

---

## Frontend (.env)

```env
VITE_SERVER_URL=http://localhost:5000
```

---

# ▶ Running the Project

Backend

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

---

# 🔄 Application Flow

```
Register
      │
      ▼
Email Verification
      │
      ▼
Login
      │
      ▼
JWT Cookie Created
      │
      ▼
Protected Dashboard
      │
      ▼
Socket Connected
      │
      ▼
Live Messaging
```

---

# 📡 REST API

## Authentication

| Method | Endpoint |
|----------|--------------------------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| POST | /api/auth/logout |
| GET | /api/auth/check |
| POST | /api/auth/verify-email |

---

## Messages

| Method | Endpoint |
|----------|------------------------|
| GET | /api/messages/users |
| GET | /api/messages/:id |
| POST | /api/messages/send/:id |

---

# 🔒 Authentication Flow

```
User Login
      │
      ▼
Generate JWT
      │
      ▼
Store in HTTP-only Cookie
      │
      ▼
Protected Middleware
      │
      ▼
User Authorized
```

---

# 🌐 Socket.IO Events

### Client → Server

- send-message

- connect

- disconnect

---

### Server → Client

- receive-message

- online-users

- disconnect

---

# 📧 Email Workflow

```
Register
      │
      ▼
Generate OTP
      │
      ▼
Send Verification Email
      │
      ▼
Verify Email
      │
      ▼
Account Activated
```

---

# 🛡 Security Features

- JWT Authentication

- HTTP-only Cookies

- bcrypt Password Hashing

- Arcjet Protection

- Route Authorization

- MongoDB Validation

- Input Sanitization

---

# 🚀 Deployment

Frontend

- Vercel

Backend

- Render

Database

- MongoDB Atlas

Images

- Cloudinary

Emails

- Resend

---

# 📦 Dependencies

### Frontend

- React
- Vite
- Zustand
- Axios
- Tailwind CSS
- Socket.IO Client
- React Router
- React Hot Toast

### Backend

- Express
- MongoDB
- Mongoose
- Socket.IO
- JWT
- bcrypt
- Cloudinary
- Arcjet
- Resend

---

# 📈 Future Improvements

- Group Chats

- Voice Messages

- Video Calling

- Message Reactions

- Read Receipts

- Typing Indicator

- Push Notifications

- Dark Mode

- File Sharing

- Message Search

- Emoji Picker

- Chat Backup

---

# 🤝 Contributing

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Avinash Kumar Bindra**

GitHub: https://github.com/Abhinav-Kumar-Bindra21

---

## ⭐ Support

If you like this project, consider giving it a **Star ⭐** on GitHub.

It helps others discover the project and motivates further development.

---
