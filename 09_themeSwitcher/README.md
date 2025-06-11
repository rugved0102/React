# 🌗 Theme Switcher App — React + Tailwind CSS

A modern, responsive React application with **light/dark theme switching** functionality, implemented using **React Context API**, a **custom hook**, and styled using **Tailwind CSS**. This project demonstrates scalable front-end architecture, state management, and elegant UI theming — perfect for product displays or UI demos.

---

## 📸 Preview

Light Mode | Dark Mode
:--:|:--:
![Light Theme](./screenshots/light.png) | ![Dark Theme](./screenshots/dark.png)

---

## 🔗 Live Demo

> Coming Soon / [Add Deployment URL Here]

---

## 🎯 Features

✅ Toggle between **light** and **dark** mode  
✅ Uses **React Context API** for global theme management  
✅ Includes a **custom hook** `useTheme()` for cleaner logic  
✅ Theme change affects the entire app via `<html>` class  
✅ Built with **Tailwind CSS 3.4.3** using `dark:` utilities  
✅ Clean, reusable **UI components**  
✅ Fully **responsive design**  
✅ **Production-ready** folder structure

---

## 🛠️ Tech Stack

| Technology       | Purpose                        |
|------------------|--------------------------------|
| React            | UI library                     |
| Tailwind CSS     | Utility-first CSS styling      |
| PostCSS          | CSS transformation             |
| Vite             | Build tool (optional)          |
| JavaScript (ES6) | Language used                  |

---

## 📁 Folder Structure

```text
09_themeSwitcher/
├── public/
├── src/
│ ├── components/
│ │ ├── ThemeBtn.jsx # Theme toggle switch
│ │ └── Card.jsx # Sample product card with dark/light support
│ ├── contexts/
│ │ └── theme.js # Context API + custom hook
│ ├── App.jsx # Main layout with context provider
│ ├── index.css # Tailwind imports
│ └── main.jsx # React DOM rendering
├── tailwind.config.js # Tailwind config
├── postcss.config.js # PostCSS config
├── package.json # Project metadata
└── README.md # You are here
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16.x
- npm ≥ 8.x

### Installation

```bash
# Clone the repository
git clone https://github.com/rugved0102/React.git
cd 09_themeSwitcher

# Install dependencies
npm install

# Start the development server
npm run dev
``` 
---
## 💡 How It Works
T- heme State is managed via `useState` in `App.jsx`.

- Theme context is created using `createContext()` and passed using `<ThemeProvider>`.

- A custom hook `useTheme()` is used in components to access and update the theme state.

- A `useEffect()` hook updates the `<html>` element’s class (either `"light"` or `"dark"`) to trigger Tailwind’s theme styling.

- Tailwind CSS uses `dark:` classes throughout components to apply styles accordingly.

## 🧠 Concepts Demonstrated
- ✅ Functional component architecture

- ✅ React Context + custom hook (`useTheme`)`

- ✅ Dark/light theming using `html.classList`

- ✅ Tailwind CSS’s `dark:` variants

- ✅ Accessibility via semantic tags and screen reader support

- ✅ Component reusability
---
## 👨‍💻 Author

**Rugved Junghare**  
*Exploring React*  
  
[![GitHub](https://img.shields.io/badge/GitHub-black?logo=github&style=flat-square)](https://github.com/rugved0102)
