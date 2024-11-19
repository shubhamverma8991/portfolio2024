import React, { useState, useEffect } from "react";
import "./Hero.css";

const roles = ["Frontend Developer", "Software Engineer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-5xl font-bold">
        Hello, This is <span className="text-blue-600">Shubham Verma</span>
      </h1>
      <p className="mt-4 text-2xl">
        And I'm a <span className="text-blue-600 border-r-2 border-blue-600">{displayedText}</span>
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 font-semibold transition-colors duration-300">
        Contact Me
      </button>
    </section>
  );
};

export default Hero;
