# MERN Stack Blog Application

A complete, industrial-grade MERN stack blog application with authentication, CRUD operations for posts, and a responsive Tailwind CSS frontend.

## Features

- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Frontend**: React (Vite), React Router, Context API
- **Styling**: Tailwind CSS for a modern, responsive design
- **Authentication**: JWT stored in HTTP-only cookies
- **Security**: bcrypt password hashing, helmet, express-rate-limit, CORS

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB running locally (default: `mongodb://127.0.0.1:27017/mern_blog`)

### 1. Clone or Extract the Project
Open a terminal in the `blog-app` root directory.

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and configure environment variables:
```bash
cd backend
npm install
cp .env.example .env
```
*(Optionally edit the `.env` file to change your `JWT_SECRET` or database URI)*

Start the backend server (development mode):
```bash
npm run dev
```
The server should start on `http://localhost:5000`.

### 3. Frontend Setup
Open a **new terminal tab/window**, navigate to the frontend directory, install dependencies, and start the app:
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The frontend will run via Vite, typically on `http://localhost:5173`. 
*(If your Vite port is different, make sure `FRONTEND_URL` in the backend `.env` matches it to allow CORS & Cookies).*

---

## 📖 Usage

1. **Register**: Click "Register" in the Navbar to create a new user account.
2. **Login**: Use your newly created account to log in.
3. **Create a Post**: Once logged in, click "Create Post" to write a blog post.
4. **Edit/Delete**: If you view a post you authored, you will see "Edit" and "Delete" buttons to manage your content.

Enjoy your beautiful new MERN application!
