# 💱 Currency Converter (React Project)

A simple and elegant currency converter built with **React**, using a public API for real-time exchange rates.

---

## 📚 What I Learned

### ✅ React Fundamentals
- **JSX** syntax and component structure
- Usage of **`useState`** for managing local state
- Usage of **`useEffect`** for side effects like fetching data
- **Props**: Passing and handling data between components
- **Event handlers**: Managing `onChange`, `onClick`, and `onSubmit`

### 🔁 Data Flow
- Top-down data flow using props
- Controlled inputs for real-time data binding
- Passing callback functions like `onAmountChange` and `onCurrencyChange` to handle input and dropdown updates

### 📦 Custom Hook
- Created a **custom hook `useCurrencyInfo(fromCurrency)`** to:
  - Fetch currency data from API
  - Return the exchange rates object (e.g., `{ inr: 83.11, eur: 0.91, ... }`)
- Learned how to reuse logic using hooks
### Dataflow
```text
InputBox (From)  --> [amount, fromCurrency] -->
     App        --> useCurrencyInfo(from) -->
                  --> currencyInfo[to] * amount -->
InputBox (To)    <-- convertedAmount
```

### 🧩 Component Design
- Built a **reusable `InputBox` component**:
  - Accepts amount, currency, label, and change handlers
  - Supports disabling inputs for the converted amount
- Used `useId()` for accessible input labeling

### 🌐 API Integration
- Fetched exchange rate data from:`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
- Parsed and used only the relevant nested data

### 🎨 Styling (Tailwind CSS)
- Used **Tailwind CSS** utility classes for quick and responsive styling
- Applied **backdrop blur**, gradient background, and mobile-friendly layout

---

## 🔧 Features

- Convert between any two currencies
- Live exchange rates via API
- Input and dropdown handling
- Swap button to quickly exchange `from` and `to` currencies
- Responsive and aesthetic UI

---

## 🚀 How to Run Locally

1. Clone the repository  
 `git clone https://github.com/your-username/currency-converter.git`

2. Install dependencies  
 `npm install`

3. Start the development server  
 `npm run dev`

---

## 📁 Folder Structure

```text
src/
├── App.jsx
├── components/
│ └── InputBox.jsx
├── hooks/
│ └── useCurrencyInfo.js
└── assets/
└── logos (optional)
```

---

## 📸 Preview

![Screenshot 2025-06-05 183429](https://github.com/user-attachments/assets/dde1f0cb-ff9d-4c90-8370-645f78470d5c)


---

## 🛠️ Tech Stack

- React
- Tailwind CSS
- JavaScript (ES6+)
- Vite (for fast build)

---

## 🧠 Next Steps

- Add third currency comparison
- Store currency preferences locally
- Add loading indicator while fetching

---



