import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const roles = ["Frontend Developer", "Software Engineer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole];
      setDisplayedText((prev) => (isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)));

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole]);

  const contactUs = () => {
    navigate("/contact");
  };
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-black dark:text-white">
      <h1 className="text-6xl font-extrabold text-center mb-4">
        Welcome, I'm <span className="text-blue-500">Shubham Verma</span>
      </h1>
      <p className="text-xl md:text-3xl text-center mb-6">
        A Passionate <span className="text-blue-500 border-b-2 border-blue-500">{displayedText}</span>
      </p>
      <button
        onClick={contactUs}
        className="mt-6 px-8 py-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 font-semibold"
      >
        Get in Touch
      </button>
    </section>
  );
};

export default Hero;
