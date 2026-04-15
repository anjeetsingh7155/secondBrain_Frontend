# 🧠 Second Brain – Frontend

Second Brain is a React-based frontend application that helps users store, organize, and manage useful content like YouTube videos, Twitter posts, and links in one place.

---

## 🚀 Features

- 🔐 User Authentication (Signup / Login)
- 📦 Add, View, and Delete Content
- 🏷️ Tag-based Organization
- 📤 Share Brain Feature (copy link)
- 🎥 Embedded YouTube Videos
- 🐦 Twitter Link Preview
- 💅 Clean and Responsive UI

---

## 🛠️ Tech Stack

- React (TypeScript)
- Tailwind CSS
- Axios
- React Router

---

## 📂 Project Structure
src/ ├── components/ │    ├── ui/ │    ├── Icons/ ├── Pages/ │    ├── Dashboard.tsx │    ├── SignIn.tsx │    ├── SignUp.tsx ├── config.ts

---

## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https://github.com/anjeetsingh7155/secondBrain_Frontend.git⁠� cd secondBrain_Frontend

### 2. Install dependencies
npm install

### 3. Configure Backend URL

Edit `config.ts`:
export const Backend_Url = "http://localhost:5000⁠�";

### 4. Run the application
npm run dev

---

## 🔐 Authentication

- JWT token is stored in localStorage
- Token is sent in API requests using Authorization header

---

## 📌 Key Components

- **Dashboard** → Displays all saved content  
- **CreateContentModel** → Add new content with tags  
- **Card** → Displays individual content  
- **Auth Pages** → SignIn & SignUp  

---

## 🚀 Future Improvements

- 🔍 Search functionality  
- 🏷️ Filter by tags  
- ✏️ Edit content  
- 🌙 Dark mode  
- 🤖 AI-based recommendations  

---

## 👨‍💻 Author

Anjeet Singh

---

⭐ If you like this project, give it a star!
