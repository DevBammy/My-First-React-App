import Button from "./component/Button";
import Heading from "./component/Heading";
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

// const App = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   console.log(fullName, email, phoneNumber);
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!fullName || !email || !phoneNumber || !password) {
//       return alert("pls fill all fields");
//     }
//     alert(`welcome ${fullName}`);
//   };

//   return (
//     <>
//       <form>
//         <div>
//           <input
//             type="text"
//             placeholder="Fullname"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             placeholder="Phone number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button onClick={handleLogin}>Sumbit</button>
//       </form>
//     </>
//   );

// export default Content;

//   setUserName("mary");
// }
// const [userName, setUserName]
// const [name, setName] = useState("Dave");
// const [count, setCount] = useState(0);

// const handleNameChange = () => {
//   const names = ["Kenny", "Fabulous", "Dave"];
//   const int = Math.floor(Math.random() * 3);
//   setName(names[int]);
// };

// const handleClick = () => {
//   setCount(count + 1);
//   console.log(count);
// };

// const handleClick2 = () => {
//   console.log(count);
// };
// return (
//   <div>
//     <p onDoubleClick={handleClick}>Hello {name}!</p>
//     <button onClick={handleNameChange}>Change Name</button>
//     <button onClick={handleClick}>Click It</button>
//     <button onClick={handleClick2}>Click It</button>
//   </div>
// );

// list

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
