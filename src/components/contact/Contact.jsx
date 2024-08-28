import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-purple-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>
        <div className="flex justify-center mb-10">
          <FaMapMarkerAlt className="mx-4 text-3xl" />
          <FaPhone className="mx-4 text-3xl" />
          <FaEnvelope className="mx-4 text-3xl" />
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
