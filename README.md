# Video Platform - Full Stack Assignment

This is a **full-stack video platform** built with React, Node.js, Express, MongoDB, and Tailwind CSS.  
The app supports **user authentication**, **video upload**, **video processing**, and **dashboard viewing**.

---

## ✅ Features

- User **registration** and **login** with JWT authentication
- **Protected dashboard** for logged-in users
- **Video upload** with simulated processing (`processing → safe / flagged`)
- **MongoDB Atlas** used for storing users and videos
- **Frontend deployed** on Render
- **Backend deployed** on Render
- Minimal **Tailwind CSS UI** for quick functionality demonstration
- **Error handling** on login, register, and upload (alerts in UI)

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, Axios, Socket.io client
- **Backend:** Node.js, Express, Mongoose, JWT, Socket.io
- **Database:** MongoDB Atlas
- **Deployment:** Render (frontend + backend)

---

## 🌐 Deployment

- **Backend:** [https://video-platform-20yg.onrender.com](https://video-platform-20yg.onrender.com)
- **Frontend:** [https://video-platform-frontend.onrender.com](https://video-platform-frontend.onrender.com)

> Note: The backend URL is hard-coded in Axios for this assignment.

---

## ⚡ How to Run Locally

### Backend

```bash
cd backend
npm install
# Create .env file:
# PORT=5000
# MONGO_URI=<your-mongodb-atlas-uri>
# JWT_SECRET=secret123
node server.js
```
