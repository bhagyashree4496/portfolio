import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">Follow me on social media:</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://twitter.com/your-profile"
            className="text-2xl hover:text-purple-600"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/your-profile"
            className="text-2xl hover:text-purple-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            className="text-2xl hover:text-purple-600"
          >
            <FaLinkedin />
          </a>
        </div>
        <form className="space-y-4 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Subscribe to my newsletter"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-600 font-semibold rounded-lg hover:bg-purple-700"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-6">&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
