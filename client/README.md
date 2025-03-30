# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Freaky Fashion - React & SQLite

## Overview

**Freaky Fashion** is a modern e-commerce platform built with React for the frontend and SQLite as the database. The project features a clean UI, responsive design, and dynamic product data fetching using a Node.js + Express backend.

## Features

✅ **Responsive Design** – Optimized for desktop screens  
✅ **Dynamic Product Display** – Fetches product data from SQLite via API  
✅ **Tailwind CSS Styling** – Clean and minimalistic design  
✅ **Component-Based Architecture** – Modular and reusable React components  
✅ **SQLite Database** – Lightweight and easy-to-use database  
✅ **React Frontend** – Interactive and fast UI with Vite

## Technologies Used

- **React** (Frontend)
- **Tailwind CSS** (Styling)
- **Node.js & Express** (Backend API)
- **SQLite-3** (Database)
- **Vite** (Frontend build tool)

## Installation

### **1. Clone the Repository**

```sh
git clone https://github.com/OS136/freaky-fashion-react.git
cd freaky-fashion-react
```

### **2. Install Dependencies**

Navigate to both the `client` and `server` folders and install dependencies:

```sh
cd client && npm install
cd ../server && npm install
```

### **3. Set Up the Database**

Navigate to the `server/db` folder and create the `products.db` file by running:

```sh
sqlite3 products.db < Untitled-1.sqlite3-query
```

To verify the database:

```sh
sqlite3 products.db
.tables
```

### **4. Start the Backend Server**

Go to the `server` folder and run:

```sh
npm start
```

The backend should now be running on **http://localhost:8000**.

### **5. Start the Frontend (React App)**

Navigate to the `client` folder and run:

```sh
npm run dev
```

If using **Vite**, run:

```sh
npm run dev
```

The React app should now be available at **http://localhost:3002**.
