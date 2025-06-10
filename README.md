# 👥 User Management App

A full-stack **User Management Application** built with **MERN Stack** (MongoDB, Express, React, Node.js). This app allows users to perform basic CRUD operations — Create, Read, Update, and Delete users. It also includes responsive styling with Tailwind CSS.

---

## 🚀 Features

- ✅ Create a new user
- ✅ View all users
- ✅ Edit existing user information
- ✅ Delete a user
- ✅ Error handling and loading states
- ✅ Fully responsive UI
- ✅ API connected with MongoDB Atlas

---

## 🛠️ Tech Stack

### Frontend

- React
- Tailwind CSS
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

---

## 📁 Folder Structure

```js
01-user-management-app/
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── index.css/
│ │ ├── App.css/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── tailwind.config.js
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ └── server.js
├── .env
└── README.md
```

---

## ⚙️ Setup Instructions

### 📌 Prerequisites

- Node.js and npm installed
- MongoDB Atlas account
- Vite (optional but recommended)

### 🔧 Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend/` directory

```ini
PORT=8080
MONGODB_URI=your_mongo_connection_string
```

- Run backend

```bash
npm run dev
```

## 🌐 Frontend Setup

```bash
cd client
npm install
```

- Run frontend:

```bash
npm run dev
```

---

## 🔍 API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | /api/users      | Get all users   |
| GET    | /api/users/\:id | Get single user |
| POST   | /api/users      | Create a user   |
| PUT    | /api/users/\:id | Update user     |
| DELETE | /api/users/\:id | Delete user     |

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- MongoDB Atlas

- Tailwind CSS

- Vite

- React
