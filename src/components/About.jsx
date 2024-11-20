import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/my-avatar.png";

const skills = [
  { name: "Web Development", level: 90 },
  { name: "HTML / CSS", level: 85 },
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "React Js", level: 70 },
  { name: "Angular Js", level: 70 },
  { name: "Java", level: 60 },
  { name: "Node Js", level: 60 },
];

const About = () => {
  return (
    <section id="about" className="py-16  bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left: Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={profile} alt="Profile" className=" w-64 h-64 lg:w-80 lg:h-80 object-cover" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-800 dark:text-white">About Me</h2>
            <p className="mt-6 text-lg lg:text-xl text-gray-700 dark:text-gray-300">
              I'm a <span className="text-blue-500 font-semibold">Front-End Developer</span> based in{" "}
              <span className="text-blue-500 font-semibold">India</span>, specializing in web development. I am passionate about
              transforming complex problems into simple, elegant, and intuitive designs.
            </p>
            <p className="mt-4 text-lg lg:text-xl text-gray-700 dark:text-gray-300">
              My role involves creating websites that are not only functional and user-friendly but also visually appealing. I ensure that
              each project receives a personal touch, making your product distinctive and engaging. My goal is to convey your message and
              identity in the most creative and effective manner possible.
            </p>
            <motion.a
              href="/projects"
              className="mt-6 inline-block bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className=" max-w-3xl mx-auto border-t border-dashed border-white p-3 mt-6">
        <h3 className=" text-3xl font-bold mb-4 text-center text-black dark:text-white">My Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-lg font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-yellow-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
