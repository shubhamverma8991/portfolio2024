import React from "react";

const Contact = () => {
  return (
    <section className="p-8 bg-white dark:bg-black">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-lg">
        Feel free to reach out to me at:{" "}
        <a href="mailto:your.email@example.com" className="text-accent">
          your.email@example.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
