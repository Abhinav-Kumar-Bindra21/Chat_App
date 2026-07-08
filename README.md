# 📖 Project Architecture & Workflow

This section explains how the application works internally, from user authentication to real-time messaging, along with the overall architecture.

---

# 🎯 Project Overview

**Chat App** is a modern full-stack real-time messaging platform developed using the **MERN Stack**. The application enables users to communicate instantly through WebSockets while maintaining a secure authentication system using JWT stored in HTTP-only cookies.

The frontend is built with **React**, **Vite**, **Tailwind CSS**, and **Zustand**, while the backend uses **Node.js**, **Express**, **MongoDB**, **Socket.IO**, and **Cloudinary** for image management.

The project demonstrates modern software engineering practices including:

- RESTful API development
- Real-time communication
- Secure authentication
- Cloud media storage
- State management
- Responsive UI
- Modular architecture
- Production deployment

---

# 🏛 System Architecture

```text
                            ┌─────────────────────────┐
                            │      React Client       │
                            │  React + Vite + Zustand │
                            └────────────┬────────────┘
                                         │
                               Axios REST API
                                         │
                                         ▼
                   ┌────────────────────────────────────┐
                   │        Express.js Backend          │
                   │────────────────────────────────────│
                   │ Authentication                    │
                   │ User Management                   │
                   │ Message Controller                │
                   │ Socket.IO Server                  │
                   │ Middleware                        │
                   └────────────┬──────────────────────┘
                                │
                ┌───────────────┴────────────────┐
                ▼                                ▼
         MongoDB Atlas                     Cloudinary
      Users & Messages                  Profile Images
                │
                ▼
           Resend API
      Email Verification
```

---

# 🚀 Complete Application Workflow

```text
                   User Opens Website
                           │
                           ▼
                  Check Authentication
                           │
          ┌────────────────┴────────────────┐
          │                                 │
          ▼                                 ▼
     Logged In                        Not Logged In
          │                                 │
          ▼                                 ▼
  Redirect to Chat                 Login / Register
          │                                 │
          ▼                                 ▼
 Socket.IO Connected              Email Verification
          │                                 │
          └────────────────┬────────────────┘
                           ▼
                    Start Chatting
                           │
                           ▼
             Send / Receive Messages
                           │
                           ▼
               MongoDB + Socket.IO
                           │
                           ▼
               Real-time UI Updates
```

---

# 🔐 Authentication Flow

```text
User Login
    │
    ▼
Validate Credentials
    │
    ▼
Compare Password (bcrypt)
    │
    ▼
Generate JWT Token
    │
    ▼
Store JWT in HTTP-only Cookie
    │
    ▼
Browser Sends Cookie Automatically
    │
    ▼
Authentication Middleware
    │
    ▼
User Authorized
```

---

# 📝 User Registration Flow

```text
User Registers
      │
      ▼
Validate Input
      │
      ▼
Check Existing User
      │
      ▼
Hash Password
      │
      ▼
Store User in MongoDB
      │
      ▼
Generate OTP
      │
      ▼
Send Verification Email
      │
      ▼
User Enters OTP
      │
      ▼
Account Verified
```

---

# 💬 Real-Time Messaging Flow

```text
User A Sends Message
          │
          ▼
Frontend API Request
          │
          ▼
Express Controller
          │
          ▼
Save Message in MongoDB
          │
          ▼
Socket.IO Emits Event
          │
          ▼
User B Receives Message
          │
          ▼
React Updates Chat Instantly
```

---

# 🌐 Socket.IO Communication

```text
             User A
               │
      Socket Connection
               │
               ▼
      Express + Socket.IO
               │
      Store Active Users
               │
       ┌───────┴────────┐
       ▼                ▼
   User B Online   User B Offline
       │                │
Receive Instantly   Receive Later
```

---

# 📦 Backend Request Lifecycle

```text
Client Request
      │
      ▼
Express Router
      │
      ▼
Authentication Middleware
      │
      ▼
Validation
      │
      ▼
Controller
      │
      ▼
Database Query
      │
      ▼
JSON Response
```

---

# ☁ Image Upload Flow

```text
Choose Profile Picture
         │
         ▼
React FormData
         │
         ▼
Express Upload Route
         │
         ▼
Cloudinary Upload
         │
         ▼
Image URL Returned
         │
         ▼
Store URL in MongoDB
         │
         ▼
Display Updated Profile
```

---

# 📧 Email Verification Flow

```text
Register
    │
    ▼
Generate OTP
    │
    ▼
Resend Email API
    │
    ▼
Verification Email Sent
    │
    ▼
User Enters OTP
    │
    ▼
Verify OTP
    │
    ▼
Account Activated
```

---

# 🗂 Folder Structure

```text
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
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── emails/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🗄 Database Design

## User Collection

```text
User
├── _id
├── fullName
├── email
├── password
├── profilePicture
├── isVerified
├── createdAt
└── updatedAt
```

## Message Collection

```text
Message
├── _id
├── senderId
├── receiverId
├── text
├── image
├── createdAt
└── updatedAt
```

---

# 🚀 Deployment Architecture

```text
                User Browser
                      │
                      ▼
                  Vercel
             (React Frontend)
                      │
          HTTPS API Requests
                      │
                      ▼
                  Render
        Express + Socket.IO Server
             │               │
             ▼               ▼
     MongoDB Atlas      Cloudinary
             │
             ▼
         Resend API
```

---

# 🛡 Security Workflow

```text
Client Request
      │
      ▼
CORS Validation
      │
      ▼
JWT Verification
      │
      ▼
HTTP-only Cookie Check
      │
      ▼
Arcjet Protection
      │
      ▼
Controller
      │
      ▼
MongoDB
```

---

# ⭐ Key Features

- 🔐 JWT Authentication
- 🍪 HTTP-only Cookie Security
- 💬 Real-time Messaging with Socket.IO
- ☁ Cloudinary Image Upload
- 📧 Email Verification using Resend
- 📱 Fully Responsive UI
- ⚡ Zustand State Management
- 🎨 Tailwind CSS Design
- 🚀 MERN Stack Architecture
- 🔒 Protected API Routes
- 🌍 Production Ready
- 📦 Modular Code Structure

---

# 📈 Future Enhancements

- ✅ Group Chats
- ✅ Typing Indicators
- ✅ Read Receipts
- ✅ Voice Messages
- ✅ Video Calling
- ✅ Emoji Reactions
- ✅ Message Search
- ✅ Push Notifications
- ✅ File Sharing
- ✅ Dark Mode
- ✅ Chat Backup & Restore
