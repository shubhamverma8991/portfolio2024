import React from "react";
import { motion } from "framer-motion";
import { IoEyeOutline } from "react-icons/io5";
import proj1 from "../assets/portfoliowebiste.jpg";
import proj2 from "../assets/prepquest.jpg";
import dummy from "../assets/dummy.webp";

const projects = [
  {
    title: "Website for Interview Preparation",
    description:
      "Developed a fully functional Website which helps with coding study materials, explore questions, answers, and pseudo-code crafted for clarity.",
    technologies: ["React", "JavaScript", "MySQL", "Java", "Framer-motion", "Tailwnd CSS"],
    link: "https://prepquest.netlify.app/",
    image: proj2,
  },
  {
    title: "Portfolio Website",
    description:
      "Created a personal portfolio website to showcase my projects and skills, utilizing Tailwind CSS for styling and Framer Motion for animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://iamshubham.netlify.app/",
    image: proj1,
  },
  {
    title: "Resume Builder",
    description: "A website that allows users to create resumes using provided templates.",
    technologies: ["React", "JavaScript", "Tailwnd CSS"],
    // link: "https://biobuild.netlify.app",
    link: "https://loading.netlify.app/",
    image: dummy,
  },
];

const Projects = () => {
  return (
    <section className="h-full p-8 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
            className="p-4 bg-white dark:bg-transparent text-black dark:text-white rounded-2xl shadow-lg overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <figure className="relative overflow-hidden rounded">
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="mb-2 rounded transition-all duration-300 ease-in-out w-full h-auto"
              />
              <motion.div
                className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white rounded transition-all duration-300 opacity-0 hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <IoEyeOutline size={40} />
              </motion.div>
            </figure>
            <h3 className="project-title text-xl font-bold mt-2">{project.title}</h3>
            <p className="project-category mt-2 text-sm lg:text-base">{project.description}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
