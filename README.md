# 💬 Chatify — Real-Time Chat Application

<div align="center">

### Modern Full-Stack Real-Time Messaging Platform

A fast, secure, and responsive chat application built with **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. Chatify enables users to communicate in real time with secure authentication, email verification, password recovery, and a modern user interface.

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react)

![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge\&logo=vite)

![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge\&logo=node.js)

![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge\&logo=mongodb)

![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-black?style=for-the-badge\&logo=socketdotio)

![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge\&logo=jsonwebtokens)

</p>

---

## ✨ Features

### 💬 Real-Time Messaging

* Instant messaging with Socket.IO
* Live message delivery
* Online user detection
* Conversation history
* Message synchronization

### 🔐 Secure Authentication

* User Registration
* Login & Logout
* JWT Authentication
* HTTP-only Cookies
* Protected Routes

### 📧 Email System

* Email Verification
* Verification Code
* Forgot Password
* Password Reset
* Resend Email Integration

### 👤 User Experience

* Responsive UI
* Loading Skeletons
* Notifications
* Typing Sound Effects
* Clean Chat Interface

### ⚡ Performance

* Optimized API Requests
* Persistent Authentication
* Efficient State Management with Zustand
* Responsive Design

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* Zustand
* React Router
* Axios
* Tailwind CSS
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT
* Bcrypt
* Cookie Parser

## Services

* Cloudinary
* Resend Email API
* Arcjet Security

---

# 📁 Project Structure

```text
Chatify/
│
├── 📁 frontend/
│   │
│   ├── 📁 public/
│   │   ├── avatar.png
│   │   ├── login.png
│   │   ├── signup.png
│   │   └── sounds/
│   │
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── ChatsList.jsx
│   │   │   ├── ContactList.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── ProfileHeader.jsx
│   │   │   └── Skeleton Components
│   │   │
│   │   ├── 📁 hooks/
│   │   │   └── useKeyboardSound.js
│   │   │
│   │   ├── 📁 libs/
│   │   │   └── axios.js
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── ChatPage.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   └── EmailVerificationPage.jsx
│   │   │
│   │   ├── 📁 store/
│   │   │   ├── useAuthStore.js
│   │   │   └── useChatStore.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── 📁 backend/
│   │
│   ├── 📁 src/
│   │   ├── 📁 configs/
│   │   │   ├── db.js
│   │   │   ├── socket.js
│   │   │   ├── cloudinary.js
│   │   │   ├── resend.js
│   │   │   └── arcjet.js
│   │   │
│   │   ├── 📁 controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   │
│   │   ├── 📁 middleware/
│   │   │   ├── protectRoute.js
│   │   │   ├── socketAuthMiddleware.js
│   │   │   └── arcjet.middleware.js
│   │   │
│   │   ├── 📁 models/
│   │   │   ├── User.js
│   │   │   └── Message.js
│   │   │
│   │   ├── 📁 routes/
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   │
│   │   ├── 📁 emails/
│   │   ├── 📁 utils/
│   │   └── server.js
│   │
│   └── package.json
│
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/<your-username>/chatify.git

cd chatify
```

## Install Backend

```bash
cd backend

npm install

npm run dev
```

## Install Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

### Backend

```env
PORT=

MONGODB_URI=

JWT_SECRET=

CLIENT_URL=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

RESEND_API_KEY=
```

---

# 🏗 System Architecture

```mermaid
flowchart LR

User --> React Frontend

React Frontend --> Express API

Express API --> MongoDB

Express API --> Socket.IO

Express API --> Cloudinary

Express API --> Resend

Socket.IO --> Real-Time Chat
```

---

# 🔄 Authentication Flow

```text
Register
     │
     ▼
Email Verification
     │
     ▼
Login
     │
     ▼
JWT Token
     │
     ▼
HTTP-only Cookie
     │
     ▼
Protected Routes
```

---

# 💬 Messaging Flow

```text
User A

↓

Socket.IO

↓

Express Server

↓

MongoDB

↓

Socket.IO

↓

User B
```

---

# 📸 Screenshots

| Login          | Signup         | Chat           |
| -------------- | -------------- | -------------- |
| Add Screenshot | Add Screenshot | Add Screenshot |

---

# 📌 Future Improvements

* Voice Messages
* Image Sharing
* Video Calling
* Group Chats
* Emoji Reactions
* Read Receipts
* Message Search
* Push Notifications
* File Uploads
* Dark & Light Themes

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Abhinav Kumar Bindra**

Feel free to connect, contribute, or open an issue if you have ideas for improving the project.

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

**Built with ❤️ using React, Express, MongoDB & Socket.IO**

</div>
