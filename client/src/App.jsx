// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { BrowserRouter, Outlet } from "react-router-dom";
// import Navbar from "./Components/Navbar";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Navbar></Navbar>
//       <Outlet></Outlet>
//       <footer>
//         Made by{" "}
//         <a href="https://github.com/Itssmepj" target="_blank">
//           Pranjal
//         </a>
//       </footer>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Outlet />
      <footer className="absolute bottom-0 left-0 w-full text-center pb-4">
        Made by{" "}
        <a
          href="https://github.com/Itssmepj"
          target="_blank"
          className="text-blue-500 font-bold"
        >
          Pranjal
        </a>
      </footer>
    </div>
  );
}

export default App;
