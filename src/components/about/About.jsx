import React from "react";

const milestones = [
  {
    year: "2024",
    title: "Started Working at XYZ",
    description: "Began my career as a software developer at XYZ.",
  },
  {
    year: "2023",
    title: "Graduated from ABC University",
    description: "Completed my degree in Computer Science.",
  },
  // Add more milestones as needed
];

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  {milestone.year}
                </div>
                <div className="w-full h-1 bg-gray-300 mx-4"></div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
