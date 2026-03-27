# 🚀 AI Flow App (MERN + React Flow + OpenRouter)

A full-stack application that allows users to input a prompt, generate AI responses, visualize the flow using React Flow, and store results in a MongoDB database.

---

## 📌 Features

* 🔹 Interactive flow-based UI using React Flow
* 🔹 Input prompt and generate AI response
* 🔹 Visual connection between Input Node and Result Node
* 🔹 Save prompt & response to MongoDB
* 🔹 View saved history with accordion UI
* 🔹 Loading indicators and toast notifications
* 🔹 Responsive UI using Material UI / Bootstrap

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Flow
* Axios
* Material UI / Bootstrap
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### AI Integration

* OpenRouter API (Free Models)

---

## 📂 Project Structure

```
project-root/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── pages/
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
Frontend: git clone https://github.com/Ani1445/AI_FLOW_Frontend.git
cd frontend

Backend: git clone https://github.com/Ani1445/AI_FLOW_Backend.git
cd Backend
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create a `.env` file inside backend:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_api_key
```

Run backend:

```
npm start
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
```

Run frontend:

```
npm run dev
```

---

## 🔌 API Endpoints

### ➤ Generate AI Response

```
POST /api/ask-ai
```

### ➤ Save Prompt & Response

```
POST /api/add
```

### ➤ Get All Saved Data

```
GET /api/get
```

---


## 🚀 Future Enhancements

* ✨ Add edit & delete functionality (CRUD)
* ✨ Add search & filter history
* ✨ Multi-node workflow builder
* ✨ Export responses (PDF/CSV)
* ✨ User authentication

---

## 🧠 Learning Highlights

* Integrated third-party AI APIs securely via backend
* Managed state and UI with React Flow
* Built RESTful APIs using Express.js
* Stored structured data using MongoDB
* Implemented responsive and interactive UI

---

## 🙌 Acknowledgements

* React Flow
* OpenRouter API
* Material UI / Bootstrap

🚀 Deployment

Frontend → Vercel

Push frontend/ to GitHub

Import to vercel.com

Set VITE_API_URL=https://your-backend.onrender.com/api

Deploy

Backend → Render

Push backend/ to GitHub

Create new Web Service on render.com

Build command: npm install

Start command: npm start

Add all environment variables from .env.example

Deploy
