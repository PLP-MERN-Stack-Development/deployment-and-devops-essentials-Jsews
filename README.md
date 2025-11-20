# 📘 EduDraft – Full MERN Stack Application (React CRA Version)

A complete MERN (MongoDB, Express, React, Node.js) educational platform built using **Create React App**, not Vite. This README version reflects the structure and commands before switching to Vite.

---

## 🚀 Overview

EduDraft is a learning platform allowing users to browse courses, enroll, authenticate, and access dashboards. Built using the MERN stack, it supports production deployment, monitoring, and CI/CD.

This README includes:

* Project setup
* CRA-based frontend guide
* Backend setup
* Environment variables
* Deployment guide
* CI/CD workflows
* Monitoring setup

---

## 📂 Project Structure

```
## File Structure
edudraft/
├─ backend/
│ ├─ package.json
│ ├─ server.js
│ ├─ src/
│ │ ├─ routes/
│ │ │ └─ api.js
│ │ ├─ controllers/
│ │ │ └─ courseController.js
│ │ ├─ utils/
│ │ │ └─ logger.js
│ │ └─ sentry.js
│ └─ .env.example
├─ frontend/
│ ├─ package.json
│ ├─ public/
│ │ ├─ index.html
│ │ └─ images/ (place image files here: hero.jpg, course1.jpg, course2.jpg)
│ └─ src/
│ ├─ index.js
│ ├─ App.jsx
│ ├─ components/
│ │ ├─ CourseCard.jsx
│ │ └─ Header.jsx
│ ├─ pages/
│ │ └─ Home.jsx
│ └─ styles/
│ └─ main.css
├─ .github/
│ └─ workflows/
│ ├─ backend-ci.yml
│ ├─ backend-cd-render.yml
│ ├─ frontend-ci.yml
│ └─ frontend-cd-vercel.yml
├─ README.md
└─ .gitignore

---

## 🧰 Technologies Used

### **Frontend (React – Create React App)**

* Create React App
* React Router DOM
* TailwindCSS or normal CSS
* Axios
* JWT auth handling

### **Backend (Node.js + Express)**

* Express.js
* MongoDB + Mongoose
* JWT Authentication
* CORS, Helmet, Compression
* Winston logger

### **CI/CD**

* GitHub Actions
* Automatic testing + building
* Deployment pipelines

### **Monitoring**

* Health checks
* Error logs
* UptimeRobot/Sentry compatible

---

## 🛠️ Local Installation

### **1️⃣ Clone the repository**

```bash
git clone <https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Jsews.git>
cd EduDraft
```

### **2️⃣ Install dependencies**

#### Backend

```bash
cd backend
npm install
```

#### Frontend (CRA)

```bash
cd ../frontend
npm install
```

### **3️⃣ Configure environment variables**

Copy `.env.example` → create `.env` inside **frontend** and **backend**.

#### **Backend `.env`**

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/edudraft
JWT_SECRET=your_secret_here
NODE_ENV=development
```

#### **Frontend `.env` (CRA format)**

```
REACT_APP_API_URL=http://localhost:5000
```

> Note: CRA requires env variables to start with `REACT_APP_`

### **4️⃣ Run the app locally**

#### Backend

```bash
npm run dev
```

#### Frontend (Create React App)

```bash
npm start
```

---

## 🌐 Deployment Instructions

### **Backend Deployment (Render / Railway / Heroku)**

1. Connect GitHub Repo
2. Add backend environment variables
3. Auto-deploy enabled

### **Frontend Deployment (Netlify )**

* Build command:

```bash
npm run build
```

* Publish folder:

```
build
```

* Add env variable:

```
REACT_APP_API_URL=<your backend URL>
```

---

## 🔄 CI/CD Setup

Located in `.github/workflows/`:

* `backend-ci.yml` – builds + tests backend
* `frontend-ci.yml` – builds React CRA app
* `backend-cd.yml` – deploys backend
* `frontend-cd.yml` – deploys frontend

CI includes:

* ESLint
* Automated builds
* Deployment triggers

---

## 📊 Monitoring & Maintenance

Monitoring tools include:

* `/api/health` endpoint
* Winston logs
* Optional Sentry integration
* UptimeRobot-friendly checks

Maintenance:

* Weekly dependency updates
* MongoDB backups
* Error log reviews

---

## 🌍 Deployment URLs

(Replace after deployment)

* **Frontend:** [https://edudraft.netlify.app/](https://edudraft.netlify.app/)
* **Backend:** [https://your-backend.com/api](https://your-backend.com/api)

---

## 🖼️ Screenshots 

* Home Page
* Services page
  <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/baebba5b-06f0-48f1-8379-f85d39b6f485" />
  <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/d3602670-c471-4ce4-be20-ee007b6f037d" />



---

## 🙌 Author

Developed by **Janice Tusiime Sewava**

---

## 📜 License

MIT License



