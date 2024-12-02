import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import logo from './img/logo2.png';
import "./App.css";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".cursor");
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;

      // Create particles
      const particle = document.createElement("div");
      particle.classList.add("particle");
      document.body.appendChild(particle);

      // Position particle near the cursor
      particle.style.left = `${e.pageX}px`;
      particle.style.top = `${e.pageY}px`;

      // Remove the particle after animation
      setTimeout(() => {
        particle.remove();
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
      <div className="App">
        <div class="background"></div>
        <div class="cursor"></div>
        <video autoPlay loop muted playsInline className="background-video">
        <source src="/assets/background-vid3.mp4" type="video/mp4" />
      </video>     
      <img src={logo} className="App-logo" alt="logo" />     
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Router>       
   
         <footer>Copyright Casey Baines - 2024</footer>
      </div>
  );
}

export default App;
