import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Header from "./component/utils/Header";
import Footer from "./component/utils/Footer";
import { useState } from "react";
import { useEffect } from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
// const Content = () => {
//   // const [userName, setUserName] = useState("John");
//   // const [name, setName] = useState("Kenny");
//   // const [count, setCount] = useState(0);
//   // const MyName = false;

//   // // const handleName = () => {
//   // //   setName("Fabolous");
//   // // }
//   // const handleName = () => {
//   //   setName("Fabolous");
//   // };

//   // useEffect(() => {
//   //   handleName;
//   //   // handleName();
//   // }, [count]);
//   // const handleName = () => {

//   // return (
//   //   <>
//   //     <h1>Hello {name}</h1>
//   //     <button onClick={handleName}>click me</button>
//   //     {MyName ? "Fabulous" : "not a man"}
//   //   </>
//   // );
// };

// const cities = ["lagos", "Abj", "Ibadan", "jijkjbb"];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
