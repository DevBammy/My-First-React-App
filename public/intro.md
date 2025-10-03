# 📘 Introduction to React.js

## 1. What is React?

- **React** is a **JavaScript library** for building **user interfaces (UI)**.
- Created by **Facebook (Meta)** in **2013**.
- Helps developers build **fast, reusable, and interactive** web applications.
- Used by companies like **Facebook, Instagram, Netflix, WhatsApp, Airbnb**.

👉 Think of React as Lego blocks — you build UIs by combining small, reusable pieces called **components**.

---

## 2. Why Use React?

- **Component-based** → Build UI in small, reusable parts.
- **Fast rendering** with a **Virtual DOM** (updates only what changes, not the whole page).
- **Declarative** → You describe _what_ you want, and React figures out _how_ to update the UI.
- **Popular & in-demand** → Huge community, many jobs, widely adopted.

---

## 3. Key Features of React

- **JSX (JavaScript XML):** Lets you write HTML-like code inside JavaScript.
- **Components:** Small, reusable building blocks of UI.
- **Props:** Way to pass data into components.
- **State:** Keeps track of data that changes over time.
- **Virtual DOM:** Optimizes how UI updates, making apps faster.
- **React Router:** Helps manage multiple pages in your app.

---

## 4. Setting Up React

You can create a React project in different ways, but the easiest for beginners is with **Vite**.

**Steps**

```bash
# Create a new React project
npm create vite@latest blog-app

# Navigate into project
cd blog-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 5. React vs. Traditional JavaScript

### Traditional JavaScript (without React)

- You manually update the DOM (`document.getElementById`, `innerHTML`).
- As the project grows, code becomes messy and hard to manage.

### React

- UI is broken into components.
- You don’t manually update the DOM; React handles it.
- Cleaner, reusable, easier to maintain.

---

## 6. First React Component

A **component** is like a function that returns UI.

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
      <p>This is my first React component.</p>
    </div>
  );
}

export default App;
```

---

## 7. How React Works (Big Picture)

1. You build **components** (functions that return UI).
2. Components use **props** and **state** for dynamic data.
3. React uses the **Virtual DOM** to update only what changes.
4. The user sees a **fast, interactive** app.

---

## 8. Summary

- React is a **JavaScript library** for building UIs.
- It’s **component-based, fast, and declarative**.
- You’ll build UIs using **JSX, components, props, and state**.
- React makes apps easier to build, maintain, and scale.
