# 📘 React Context API 

## 🔍 Why do we need the Context API?

In React, **data is usually passed down from parent to child using props**.

But when the data needs to be used by **many deeply nested components**, passing it down through multiple layers becomes:

- Repetitive
- Hard to manage
- Error-prone

This is known as **prop drilling**.

---

## ❌ Problem: Prop Drilling

Imagine a tree like this:
``` jsx
<App>  
└── Page  
    └── Sidebar  
        └── UserInfo  

```
If you want to show the user info in UserInfo:

- You must pass the user data from `<App>` ➝ `<Page>` ➝ `<Sidebar>` ➝ `<UserInfo>`

- Even though `Page` and `Sidebar` don’t care about `user`, they have to carry the props
## ✅ Solution: Context API

React Context API solves prop drilling by allowing you to:
- Create global data containers (contexts)
- Provide values at a higher level (like `<App>`)
- Consume them at any level (like `<UserInfo>`) directly

---

## 🧠 What exactly is the Context API?

React Context API is a set of tools built into React to:
- Create a context: `React.createContext()`
- Provide data globally: `<Context.Provider value={...}>`
- Use that data anywhere: `useContext(Context)`

---

## 🔄 How Context Works Internally
- `createContext()` creates a context object with `.Provider` and `.Consumer`.

- React internally uses a tree traversal algorithm to propagate the nearest matching Provider's value.

- The `useContext()` hook subscribes to context changes, re-rendering when the context value updates.

--- 

## 🛠️ When to Use Context

Use context when:
- Multiple components need access to the same global data
- You want to avoid passing props manually through many layers

### Common use cases:
- Logged-in user info
- Dark/light theme
- Language/locale settings
- Shopping cart
- App settings

---

## ⚠️ When NOT to Use Context

- For frequently changing values like animation state or real-time typing — these cause re-renders.
- For one-off parent-to-child communication — simple props are fine.

---

## 🧾 Summary

| Concept        | Why it matters                                       |
|----------------|------------------------------------------------------|
| `Props`        | Good for simple parent-to-child data passing         |
| `Context API`  | Good for sharing global state without prop drilling  |
| `Provider`     | Defines what data is available and to whom           |
| `useContext`   | Hook to access context data directly in components   |

---

## 🧩 Benefits

- Cleaner, more maintainable code
- Centralized control over shared data
- Reduces duplication and prop clutter
- Scales better in large apps
