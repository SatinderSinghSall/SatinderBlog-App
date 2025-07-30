**App Documentation** for **Full-Stack SatinderBlog App** it includes features, folder structure, and usage for both the **frontend (client)** and **backend (server)**.

---

# 📘 SatinderBlog App Documentation

A modern full-stack blogging platform built with a frontend in **React (Vite)** and a backend powered by **Node.js, Express, and MongoDB**. QuickBlog allows users to create, edit, and delete blog posts with secure authentication.

---

## 🚀 Features

### ✅ Frontend

- Built with **React** and **Vite**
- Clean and responsive UI
- User authentication (sign up / log in)
- Create, read, update, and delete blog posts
- Real-time updates using API calls
- Deployed via **Vercel**

### ✅ Backend

- Built with **Node.js** and **Express.js**
- RESTful API with CRUD operations
- JWT-based authentication
- MongoDB/Mongoose for data persistence
- CORS and middleware support
- Deployed via **Vercel** or similar serverless environments

---

## 📁 Folder Structure

```
Full-Stack QuickBlog App/
├── frontend/           # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
```

---

## 🧪 API Endpoints

### Auth

- `POST /api/auth/register` – Register new user
- `POST /api/auth/login` – Login and receive token

### Blogs

- `GET /api/blogs/` – Get all blogs
- `POST /api/blogs/` – Create new blog
- `PUT /api/blogs/:id` – Update a blog
- `DELETE /api/blogs/:id` – Delete a blog

> Authenticated endpoints require Bearer Token in headers.

---

## 🧩 Tech Stack

| Layer      | Tech                            |
| ---------- | ------------------------------- |
| Frontend   | React, Vite, Axios, CSS         |
| Backend    | Node.js, Express, JWT, Mongoose |
| Database   | MongoDB (Atlas or local)        |
| Deployment | Vercel (client & server)        |

---

## 🔒 Authentication

- JWT used for secure API access
- Auth token stored in localStorage
- Middleware to protect private routes

---

## 📦 Deployment

Frontend and Backend is deployed separately:

1. Frontend is deployed in Vercel.
2. Backend is deployed in Render.

---
