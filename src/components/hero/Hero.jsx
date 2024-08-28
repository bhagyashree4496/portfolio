import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./hero.css";
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white h-screen flex items-center justify-center -z-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute top-10 left-10 w-60 h-60 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white bg-opacity-10 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float animation-delay-4000"></div>
      </div>
      <div className="relative text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <Typewriter
            words={[
              "Welcome to My Portfolio",
              "I am a Web Developer",
              "I Love Creating Beautiful Web Experiences",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-xl md:text-2xl">
          I am a passionate developer creating beautiful web experiences.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200">
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
