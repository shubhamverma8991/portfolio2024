import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Ecoloop (FreeLance)",
    title: "FrontEnd Developer",
    duration: "May 2024 — Present",
    details: [
      "Built dynamic user interfaces using ReactJS, Angular, and modern CSS frameworks like TailwindCSS and Bootstrap.",
      "Optimized website performance, achieving significant improvements in loading times and SEO rankings.",
      "Delivered pixel-perfect UI designs by translating Figma and Adobe XD mockups into functional components.",
      "Effectively managed multiple projects, ensuring timely delivery without compromising quality or functionality.",
    ],
  },
  {
    company: "Refactor Academy Pvt Ltd.",
    title: "Software Development Engineer -2 (FED)",
    duration: "July 2023 — April 2024",
    details: [
      "Spearheaded the development of the Co-lending website, a critical platform utilized by banks for lending the Operations and fostering financial partnerships.",
      "Designed intuitive and user-friendly interfaces to optimize interactions for Investors and Originators across multiple lending modules, enhancing user experience.",
      "Collaborated cross-functionally to integrate various APIs into the platform, improving functionality and interoperability with other systems.",
    ],
  },
  {
    company: "Makerobos Pvt Ltd.",
    title: "Angular Developer",
    duration: "March 2023 — May 2023",
    details: [
      "Spearheaded the development of an e-commerce website for Ellementry.com.",
      "Implemented Router Guard to enable specific task execution from Chat and designated links.",
      "Collaborated with Google Analytics team to incorporate essential meta tags for website indexing and tracking.",
    ],
  },
  {
    company: "Born Commerce Pvt Ltd.",
    title: "Software Developer (FED)",
    duration: "Nov 2021 — Feb 2023",
    details: [
      "Developed web pages showcasing various brand products and services for the Walmart project using HTML, CSS, JavaScript and ReactJS.",
      "Utilized internal Walmart tools, Pronto and Tempo for testing and product page development.",
      "Integrated web pages with third-party software to enhance functionality.",
    ],
  },
];

const education = [
  {
    institution: "Institute Of Advance Computing & Software Development",
    degree: "PG-DAC",
    duration: "May 2021 — Nov 2021",
  },
  {
    institution: "Chhattisgarh Swami Vivekanand Technical University",
    degree: "B.E",
  },
];

const Experince = () => {
  return (
    <section className="p-8 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-gray-800 dark:text-gray-200 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-black dark:text-white">Experience</h2>
        <div className="relative border-l border-gray-300 dark:border-gray-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 ml-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-black dark:text-white">{exp.company}</h3>
                <p className="text-lg text-yellow-500">{exp.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-6 text-center text-black dark:text-white">Education</h2>
        <div className="relative border-l border-gray-300 dark:border-gray-700">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-8 ml-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-black dark:text-white">{edu.institution}</h3>
                <p className="text-lg text-yellow-500">{edu.degree}</p>
                {edu.duration && <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experince;
