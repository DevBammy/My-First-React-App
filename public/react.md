# 📘 ReactJS Complete Beginner Lesson Notes

---

## **Module 1: Introduction to React**

### 1.1 What is React?

- React is a **JavaScript library** for building **user interfaces**.
- It was developed by **Facebook (Meta)** in 2013.
- React is **component-based**, **declarative**, and supports **reusable code**.

💡 Example without React:

```html
<div id="root"></div>
<script>
  const root = document.getElementById('root');
  root.innerHTML = '<h1>Hello World</h1>';
</script>
```

💡 Example with React:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello World</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

### 1.2 Why React?

- **Reusable components** → saves time.
- **Virtual DOM** → makes apps faster.
- **One-way data binding** → predictable behavior.
- **Strong community & ecosystem** → lots of libraries and tools.

---

## **Module 2: Setting up React**

### 2.1 Installation

- Using **Create React App (CRA):**

```bash
npx create-react-app my-app
cd my-app
npm start
```

- Using **Vite (recommended for speed):**

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

---

### 2.2 Project Structure

```
my-app/
 ┣ src/
 ┃ ┣ App.js      → Main component
 ┃ ┣ index.js    → Entry point
 ┣ public/       → Static files
 ┣ package.json  → Dependencies
```

---

## **Module 3: JSX (JavaScript XML)**

### 3.1 What is JSX?

- A syntax extension for JavaScript.
- Looks like HTML but is actually JavaScript.

💡 Example:

```jsx
const name = 'Bamidele';
const element = <h1>Hello, {name}</h1>;
```

### 3.2 Rules of JSX

- Only **one parent element**.
- Use **className** instead of `class`.
- Must close all tags (`<img />`).

---

## **Module 4: Components**

### 4.1 Types of Components

1. **Functional Components** (preferred)

```jsx
function Welcome() {
  return <h1>Hello, Student!</h1>;
}
```

2. **Class Components** (older style)

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, Student!</h1>;
  }
}
```

### 4.2 Props (Passing Data)

```jsx
function Student(props) {
  return <h2>My name is {props.name}</h2>;
}

function App() {
  return <Student name="Bamidele" />;
}
```

---

## **Module 5: State & Hooks**

### 5.1 State with `useState`

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### 5.2 Side Effects with `useEffect`

```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return <h2>Time: {time}</h2>;
}
```

---

## **Module 6: Event Handling**

```jsx
function Button() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## **Module 7: Conditional Rendering**

```jsx
function UserGreeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>;
}
```

---

## **Module 8: Lists and Keys**

```jsx
const students = ['John', 'Mary', 'Paul'];

function App() {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
}
```

---

## **Module 9: Forms in React**

```jsx
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Hello ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## **Module 10: React Router**

```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}
function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

---

## **Module 11: Fetching Data (API Calls)**

```jsx
import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## **Module 12: Context API (State Management)**

```jsx
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

function App() {
  const [user] = useState('Bamidele');
  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  const user = useContext(UserContext);
  return <h1>Hello {user}</h1>;
}
```

---

## **Module 13: Styling in React**

- **CSS file**

```jsx
import './App.css';
function App() {
  return <h1 className="title">Hello</h1>;
}
```

- **Inline CSS**

```jsx
function App() {
  const style = { color: 'red', fontSize: '20px' };
  return <h1 style={style}>Hello</h1>;
}
```

---

## **Module 14: Advanced Basics**

- **Fragments (`<>`)** → return multiple elements.
- **Lifting State Up** → share state between components.
- **Controlled vs Uncontrolled Components**.
- **Custom Hooks** → reusable logic.

---

## **Module 15: Mini Project Idea**

✅ **Build a Simple Blog App**

- Components: Navbar, Posts, SinglePost, AddPost.
- Features: Add Post, List Posts, View Post.
- Practice: State, Props, Router, Forms.

---

# 🎯 Final Words for Students

- React is all about **breaking UI into components**.
- Learn **JS fundamentals** (arrays, objects, functions) well.
- Start small → then move to **projects**.

---
