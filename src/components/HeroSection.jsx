import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div
      id="about"
      className="bg-gray-900 text-white h-[80vh] md:h-screen flex flex-col justify-center items-center text-center px-4"
    >
      {/* Hero Content */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-indigo-500">Bhagyashree Patil</span>
      </h1>
      <h2 className="text-xl md:text-3xl lg:text-4xl mb-6">
        <span>I specialize in </span>
        <span className="text-indigo-400">
          <Typewriter
            words={[
              "Web Development",
              "React",
              "React Native",
              "NodeJs",
              "Mongodb",
              "TailwindCss",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-6 max-w-lg md:max-w-2xl">
        I'm a front-end developer passionate about creating clean and intuitive
        user interfaces. With a focus on modern web technologies, I love
        bringing ideas to life through code.
      </p>

      {/* Social Media and Contact Links */}
      <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 mb-6">
        {/* Phone Number */}
        <a
          href="tel:+1234567890"
          className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition duration-300"
        >
          <FiPhoneCall size={24} />
          <span>+919731877132</span>
        </a>

        {/* Email */}
        <a
          href="mailto:youremail@example.com"
          className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition duration-300"
        >
          <AiOutlineMail size={24} />
          <span>bhagyashree4496@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition duration-300"
        >
          <AiFillLinkedin size={24} />
          <span>/bhagyashreepatil4496/</span>
        </a>
      </div>

      {/* Call to Action Button */}
      <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300">
        <a
          href="https://www.linkedin.com/in/bhagyashreepatil4496/"
          target="_blank"
        >
          Contact Me
        </a>
      </button>
    </div>
  );
};

export default HeroSection;
