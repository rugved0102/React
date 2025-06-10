# 🚀 React Router Project – Learning Single Page Applications

This project is built to practice and understand the core concepts of **React Router** in the context of a Single Page Application (SPA). It includes routing, nested layouts, data loading, and dynamic URLs.

---

## 📁 Project Structure

```text
src/
├── components/
│ ├── Header.jsx
│ ├── Home.jsx
│ ├── Contact.jsx
│ ├── About.jsx
│ ├── User.jsx
│ └── Github.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠️ Key Concepts and Features

### 1. 📍 React Router Setup

- Used `createBrowserRouter` and `RouterProvider` for routing.
- Defined nested routes using `createRoutesFromElements`.
- Used `<Outlet />` in layout for rendering child routes.

### 2. 🧭 Navigation (NavLink vs Link)

- **`<NavLink>`** is used for navigation with active styling.
- **`<Link>`** is used for basic routing without styles.
- `NavLink` adds an `active` class automatically, useful for highlighting current page.

### 3. 👤 Dynamic Routing with `useParams`

- The `User.jsx` component reads dynamic URL segments (like `/user/:userid`) using `useParams()`.
- It fetches and displays the `userid` value.

```jsx
const { userid } = useParams();
```
### 4. 🔄 Data Fetching with `useLoaderData()`
- Used in `Github.jsx` to fetch GitHub user data before the component mounts.

- Fetched data is passed via `loader()` function in route config.

- Cleaner than using `useEffect`.
```jsx
const data = useLoaderData();
```
### 5. 📦 Layouts and Outlets
- `App.jsx` acts as the root layout with shared components like `<Header />`.

- Nested routes are rendered using `<Outlet />`.

| Route       | Component   | Description                          |
|-------------|-------------|--------------------------------------|
| `/`         | Home.jsx    | Landing page                         |
| `/about`    | About.jsx   | About us section                     |
| `/contact`  | Contact.jsx | Contact form                         |
| `/user/:id` | User.jsx    | Dynamic user page via URL param      |
| `/github`   | Github.jsx  | GitHub data using loader             |


## 💻 How to Run
```bash
npm install
npm run dev
```
Make sure you have `react-router-dom` installed:
```bash
npm install react-router-dom
```
## 🔍 What I Learned
- How to set up SPA routing using React Router v6.

- Navigating using `NavLink` and `Link`.

- Handling dynamic URLs using `useParams`.

- Prefetching route data using `loader` and accessing it via `useLoaderData()`.

- Using nested routes and shared layouts via `Outlet`.

## 📌 Tech Stack
- ⚛️ React (Vite)

- 🧭 React Router v6

- 💨 Tailwind CSS for styling