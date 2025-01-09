import React from "react";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import MaterialIcon from "@mui/icons-material/DeveloperMode"; // Example Material UI Icon

const SkillsSection = () => {
  return (
    <section id="skill" className="bg-gray-100 py-12 px-1">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">My Skills</h2>
        <p className="text-lg text-gray-700 mb-12">
          Here are some technologies I work with as a front-end developer:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Icons for Skills */}
          <div className="text-xl flex flex-col items-center md:text-6xl text-yellow-500">
            <SiJavascript />
            <p className="mt-2 text-sm">JavaScript</p>
          </div>
          <div className="text-xl flex flex-col items-center md:text-6xl text-blue-500">
            <FaReact />
            <p className="mt-2 text-sm">React</p>
          </div>
          <div className="text-xl flex flex-col items-center md:text-6xl text-blue-500">
            <FaReact />
            <p className="mt-2 text-sm">React Native</p>
          </div>

          <div className="text-xl flex flex-col items-center md:text-6xl text-green-600">
            <FaNodeJs />
            <p className="mt-2 text-sm">Node.js</p>
          </div>

          <div className="text-xl flex flex-col items-center md:text-6xl text-blue-400">
            <SiTailwindcss />
            <p className="mt-2 text-sm">Tailwind CSS</p>
          </div>

          <div className="text-xl flex flex-col items-center md:text-6xl text-purple-600">
            <FaBootstrap />
            <p className="mt-2 text-sm">Bootstrap</p>
          </div>

          <div className="text-xl flex flex-col items-center md:text-6xl text-green-500">
            <SiMongodb />
            <p className="mt-2 text-sm">MongoDB</p>
          </div>

          <div className="text-xl flex flex-col items-center md:text-6xl text-gray-700">
            <SiExpress />
            <p className="mt-2 text-sm">Express.js</p>
          </div>

          {/* Material UI Icon */}
          <div className="text-xl flex flex-col items-center md:text-6xl text-indigo-600">
            <MaterialIcon />
            <p className="mt-2 text-sm">Material UI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
