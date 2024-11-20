import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const { name, email, message } = formData;
    const isFormValid = name && email && message;
    setIsButtonDisabled(!isFormValid);
  }, [formData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
      <motion.article
        className="contact h-screen max-w-5xl mx-auto space-y-8 py-12 px-6"
        data-page="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="text-center"></header>
        <section className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <section className="mapbox flex-1">
            <figure className="mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089981537!2d77.46612532514631!3d12.953945613629573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716871887589!5m2!1sen!2sin"
                width="100%"
                height="380"
                loading="lazy"
                className="rounded-lg shadow-md"
                title="map"
              ></iframe>
            </figure>
          </section>

          <section className="contact-form flex-1">
            <motion.form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6 max-w-lg mx-auto"
              data-form
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl text-center font-semibold text-gray-800 dark:text-gray-200">Get In Touch With Me</h2>

              <input type="hidden" name="access_key" value="42877094-c145-4d98-8d73-b2500fbffe99" />
              <input type="hidden" name="subject" value="Resume Contact Us" />
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out text-black dark:text-black"
                  placeholder="Full name"
                  required
                  data-form-input
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out text-black dark:text-black"
                  placeholder="Email address"
                  required
                  data-form-input
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out text-black dark:text-black"
                placeholder="Your Message"
                required
                data-form-input
                onChange={handleChange}
              ></textarea>

              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <motion.button
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 border rounded-lg transition-all ${
                  isButtonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white hover:bg-black-700"
                }`}
                type="submit"
                disabled={isButtonDisabled}
                data-form-btn
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ion-icon name="paper-plane" className="text-xl"></ion-icon>
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          </section>
        </section>
      </motion.article>
    </section>
  );
};

export default Contact;
