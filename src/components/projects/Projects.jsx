import React from "react";
import { Tilt } from "react-tilt";

const projects = [
  {
    name: "Project One",
    description: "This is a description of project one.",
    image: "path-to-image-1.jpg",
    link: "#",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    name: "Project Two",
    description: "This is a description of project two.",
    image: "path-to-image-2.jpg",
    link: "#",
    technologies: ["Node.js", "MongoDB"],
  },
  // Add more projects as needed
];

const Projects = () => {
  const [filter, setFilter] = React.useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">My Projects</h2>
        <div className="mb-8">
          <button
            className={`mx-2 px-4 py-2 rounded-lg ${
              filter === "All" ? "bg-purple-600 text-white" : "bg-gray-300"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-lg ${
              filter === "React" ? "bg-purple-600 text-white" : "bg-gray-300"
            }`}
            onClick={() => setFilter("React")}
          >
            React
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-lg ${
              filter === "Node.js" ? "bg-purple-600 text-white" : "bg-gray-300"
            }`}
            onClick={() => setFilter("Node.js")}
          >
            Node.js
          </button>
          {/* Add more filters as needed */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <Tilt
              className="Tilt"
              options={{ max: 25, scale: 1.05 }}
              key={index}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-purple-600 font-semibold hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
