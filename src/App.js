import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css"; // Ensure Tailwind CSS is imported
import Profile from "./components/Profile";
import Experince from "./components/Experince";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/experience" element={<Experince />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
