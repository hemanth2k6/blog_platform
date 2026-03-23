# 🚀 Blog Platform

![GitHub repo size](https://img.shields.io/github/repo-size/hemanth2k6/blog_platform)
![GitHub stars](https://img.shields.io/github/stars/hemanth2k6/blog_platform?style=social)
![GitHub forks](https://img.shields.io/github/forks/hemanth2k6/blog_platform?style=social)
![MIT License](https://img.shields.io/badge/license-MIT-green)

A **full-stack blog application** where users can create, read, update, and delete blog posts with authentication. Built using modern web technologies and deployed on cloud platforms.

---

## 🌐 Live Demo

* 🔗 Frontend: https://blog-platform-ten-rho.vercel.app/
* ⚠️ Backend: Currently inactive (free-tier limitation)

> **Note:** Backend is hosted on Render free tier, which goes to sleep after inactivity. It may take time to wake up or may not respond.

---

## 🧠 Features

* 🔐 User Authentication (Signup/Login)
* ✍️ Create, Edit, Delete Blogs
* 📖 Read blogs from all users
* ⚡ Fast and responsive UI
* 🌐 REST API integration
* 🔒 Secure routes with JWT

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

---

## 📁 Project Structure

```
blog_platform/
│
├── frontend/       # React Frontend
├── backend/        # Express Backend
└── README.md
```

---

## ⚙️ Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/hemanth2k6/blog_platform.git
cd blog_platform
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🚀 Deployment

### Frontend

* Hosted on **Vercel**
* Auto-deploy on Git push
* Fast CDN delivery

### Backend

* Hosted on **Render**
* Free-tier service
* ⚠️ Automatically sleeps after inactivity

### Database

* MongoDB Atlas (Cloud Database)

---

## ⚠️ Important Notice

* Backend may be **slow or unresponsive** due to Render free-tier limitations
* First request after inactivity may take **30–60 seconds**
* This is expected behavior for free hosting

---

## 🧪 API Endpoints (Sample)

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |
| GET    | /api/posts         | Get all posts |
| POST   | /api/posts         | Create post   |
| PUT    | /api/posts/:id     | Update post   |
| DELETE | /api/posts/:id     | Delete post   |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Hemanth**

* GitHub: https://github.com/hemanth2k6

---

## ⭐ Show Your Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 📢 Share it

---

## 📌 Future Improvements

* Add comments on posts
* Like & save feature
* Rich text editor
* Image upload support
* Pagination & search

---

> 💡 This project is built for learning full-stack development and demonstrating real-world deployment skills.
