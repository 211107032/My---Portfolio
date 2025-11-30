# Milind Rajput - Portfolio

A premium, animated, and responsive personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **No-Scroll Navigation**: Unique app-like experience where sections transition smoothly without scrolling.
- **Animated UI**: Rich animations using Framer Motion (Hero particles, slide-ins, hover effects).
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile.
- **Contact Form**: Integrated with MongoDB for storing messages.
- **Dynamic Content**: Sections for Skills, Projects, Experience, Education, and Blog.

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: MongoDB (Mongoose)

## 📦 Installation

1.  **Clone the repository** (or navigate to the project folder):
    ```bash
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**:
    Create a `.env.local` file in the root directory and add your MongoDB URI:
    ```env
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio
    ```

4.  **Run Locally**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Deployment

This project is optimized for **Vercel**.

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  Add the `MONGODB_URI` environment variable in Vercel settings.
4.  Deploy!

## 📂 Structure

- `src/app`: Main application routes and layout.
- `src/components`: Reusable UI components.
- `src/components/sections`: Individual portfolio sections (Hero, About, etc.).
- `src/lib`: Utility functions (Database connection).
