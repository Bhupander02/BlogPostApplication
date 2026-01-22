# 📝 BlogPostApplication

A modern **full-stack blog application** built with **React, Redux Toolkit, React Router, and Appwrite**.  
It supports **authentication-based access control** and full **CRUD operations** on blog posts.

This project demonstrates **real-world frontend architecture**, **protected routes**, **global authentication state**, and **clean component organization**.

---

## 🚀 Features

### 🔐 Authentication (Appwrite)
- Login & Signup  
- Persistent user sessions  

---

### 🛡️ Protected Routes
- Auth-based access using a custom `AuthLayout`

---

### 📝 Blog Post Management
- Create, edit, and delete posts  
- View all posts  
- View individual posts using dynamic routes  

---

### 🧠 Global State Management
- Authentication handled via **Redux Toolkit**

---

### ⚡ Client-Side Routing
- Nested routing with **React Router v6**

---

### 🎨 Responsive UI
- Styled using **Tailwind CSS**

---

### ⏳ Loading State Handling
- Prevents UI flicker during authentication checks

---

## 🧠 Project Architecture

```text
src/
├── appwrite/
│   └── auth.js
├── components/
│   ├── AuthLayout.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Login.jsx
├── pages/
│   ├── Home.jsx
│   ├── Signup.jsx
│   ├── AddPost.jsx
│   ├── EditPost.jsx
│   ├── Allposts.jsx
│   └── Post.jsx
├── store/
│   ├── authSlice.js
│   └── store.js
├── App.jsx
├── main.jsx
└── index.css
```

🛠️ Tech Stack
Layer	Technology
Frontend	React (Vite)
Routing	React Router v6
State Management	Redux Toolkit
Authentication	Appwrite
Styling	Tailwind CSS
Build Tool	Vite
🔐 Authentication Flow

On app load, App.jsx checks the current user via Appwrite

Authentication state is stored globally using Redux

UI renders only after auth verification

Routes are protected using a custom AuthLayout

useEffect(() => {
  authService.getCurrentUser()
    .then((userData) => {
      if (userData) dispatch(login({ userData }))
      else dispatch(logout())
    })
    .finally(() => setLoading(false))
}, [])

🧭 Routing Overview

Routing is handled using nested routes in main.jsx.

🌐 Public Routes

/ → Home

/login → Login

/signup → Signup

/post/:slug → Single Blog Post

🔒 Protected Routes

(Accessible only when authenticated)

/all-posts

/add-post

/edit-post/:slug

<AuthLayout>
  <AddPost />
</AuthLayout>

---
▶️ Getting Started
📋 Prerequisites

Node.js v16+

npm or yarn

Appwrite project setup

📦 Installation
git clone https://github.com/Bhupander02/BlogPostApplication.git
cd BlogPostApplication
npm install

⚙️ Environment Variables

Create a .env file:

VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id

---

▶️ Run the App
npm run dev

Application will be available at:

http://localhost:5173

🧪 State Management (Redux)

Authentication state managed in authSlice

User data persists across page refresh

Logout clears global auth state

📈 Future Improvements

💬 Comments system

❤️ Like & bookmark posts

🧑‍💻 User profile pages

🔍 Search & filter posts

🧾 Markdown editor for posts
