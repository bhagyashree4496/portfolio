import React from "react";
import { FaBriefcase } from "react-icons/fa"; // Briefcase icon for experience

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Front-End Developer",
      company: "ilaqa Technologies.",
      duration: "July 2024 - Present",
      description:
        "Working on developing responsive and user-friendly web application using React. Collaborated closely with designers and to implement engaging UI/UX designs and with node deeloper for api integrations.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    },
    {
      role: "Front-End Developer",
      company: "Sixpep Technologies",
      duration: "July 2023 - April 2024",
      description:
        "Designed and developed the iLaqa website, focusing on responsive UI, seamless user experience, and optimized performance. Integrated REST APIs, collaborating with backend teams using Express.js and MongoDB to ensure smooth data operations. Implemented AWS authentication and integrated Razorpay for secure and scalable user transactions. Enhanced user engagement through performance optimizations and new feature implementations. Explored Shopify & Ecwid for e-commerce integration, specifically for bulk community deals.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Express.js",
        "MongoDB",
        "AWS",
        "Razorpay",
        "Shopify",
        "Ecwid",
      ],
    },
    // Add more experience as needed
  ];

  return (
    <section className="bg-white py-12" id="experience">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <FaBriefcase className="text-blue-900 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-800">
                {experience.role}
              </h3>
              <p className="text-gray-600 font-medium">{experience.company}</p>
              <p className="text-gray-500 text-sm mb-4">
                {experience.duration}
              </p>
              <p className="text-gray-700 mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-900 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
