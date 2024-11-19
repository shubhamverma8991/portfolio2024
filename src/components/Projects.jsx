import React from "react";

const Projects = () => {
  return (
    <section className="p-8 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white dark:bg-black text-black dark:text-white rounded shadow-lg">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="mt-2">Description of project 1.</p>
        </div>
        <div className="p-4 bg-white dark:bg-black text-black dark:text-white rounded shadow-lg">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p className="mt-2">Description of project 2.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
