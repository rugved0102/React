# 📘 React Internal Working & Flow 

## 🔹 Objective

Understand how React converts JSX or `React.createElement()` into actual UI, and how the rendering process works internally.

---

## 🧱 1. What is JSX?

JSX is just **syntactic sugar** for `React.createElement()`.

```jsx
<a href="https://google.com" target="_blank">
  Click me to visit Google
  {anotherUser}
</a>
```
Gets compiled by Babel (JS compiler) into:
```js
React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google',
  anotherUser
)
```

## 🧠 2. What does `React.createElement()` do?
It returns a React Element object, also called the Virtual DOM representation.

Example output:
```js
{
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
    children: [
      'Click me to visit Google',
      anotherUser
    ]
  }
}
```
This object is lightweight and describes what the UI should look like — but it's not the real DOM yet.

## ⚙️ 3. React's Internal Phases
### 🔹 Phase 1: Render (Virtual DOM creation)
`React.createElement()` returns a Virtual DOM (a plain JavaScript object).

If you're using JSX, it first gets compiled to `React.createElement(...)`.

### 🔹 Phase 2: Reconciliation (Diffing using Fiber)
React builds a **Fiber Tree**.

It compares (diffs) the current tree to the previous tree.

Decides what changed (add/remove/update nodes).

### 🔹 Phase 3: Commit (Real DOM updates)
React updates the actual **DOM** using **ReactDOM**.

Only the minimal required changes are made (performance optimization).

## React Rendering Flow

JSX
 ↓ (Babel)
React.createElement()
 ↓
Virtual DOM (React Element)
 ↓
Fiber Tree (Reconciliation)
 ↓
DOM Update via ReactDOM (Commit)
