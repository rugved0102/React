# ⚛️ React: Virtual DOM, Fiber & Reconciliation

## 📘 1. Virtual DOM (VDOM)

- The Virtual DOM is a lightweight **JavaScript object representation** of the actual DOM.
- It allows React to **efficiently update the UI** without interacting directly with the real DOM (which is slow).
- Every time state or props change, React:
  1. Creates a new Virtual DOM.
  2. Compares it with the previous Virtual DOM (diffing).
  3. Updates only the changed parts in the real DOM.

### ✅ Why use it?
- Faster UI updates.
- Less direct DOM manipulation = better performance.

---

## ⚙️ 2. Fiber Architecture

- **Fiber** is the new **reconciliation engine** in React (since v16).
- It improves React's ability to:
  - **Pause**, **interrupt**, and **prioritize** work.
  - Break rendering into units (called **fibers**) to be executed over multiple frames.
- Helps React **stay responsive** even with heavy updates.

### 🧠 Example:
- If React is updating a large list and the user clicks a button, Fiber allows React to **pause the update and handle the click first**.

---

## 🔁 3. Reconciliation

- **Reconciliation** is the process of comparing the old Virtual DOM with the new one to find **what has changed**.
- React uses a **diffing algorithm** to:
  - Detect changes.
  - Minimize DOM operations.
- Key strategies:
  - Elements with **same type**: Keep the node, update props.
  - Elements with **different types**: Replace the node entirely.
  - **Keys** help identify list items and optimize updates.

---

## 📌 Summary

| Term           | Role                                                           |
|----------------|----------------------------------------------------------------|
| Virtual DOM    | JS copy of real DOM for faster updates                         |
| Fiber          | React's rendering engine (interruptible, prioritized updates)  |
| Reconciliation | Algorithm to efficiently update UI based on changes            |

---
📚 Read more about React Fiber Architecture:  
[React Fiber Architecture GitHub Repo](https://github.com/acdlite/react-fiber-architecture)
