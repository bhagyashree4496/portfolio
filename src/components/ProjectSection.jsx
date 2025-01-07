import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // Removed unused icons
import plant from "../assets/plantsmarket.PNG";
import youtube from "../assets/youtube.PNG";
import levora from "../assets/levora.PNG";
import travel from "../assets/travel.PNG";
import todo from "../assets/todo.PNG";
// Project Card Component
const ProjectCard = ({ image, title, description, link, technologies }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
      <img className="w-full h-48 object-cover " src={image} alt={title} />
      <div className="p-6 flex flex-col justify-between items-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-900 py-1 px-3 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 inline-flex items-center"
        >
          View Project <FaExternalLinkAlt className="ml-1" />
        </a>
      </div>
    </div>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "Ecommerce Website",
      description:
        "A plant market e-commerce website offers a variety of plants and gardening supplies, allowing customers to browse, purchase, and have plants delivered directly to their door with ease.",
      image: plant, // Replace with actual project image link
      link: "https://plantmarket-bp.netlify.app/",
      technologies: [
        "React",
        "NodeJs",
        "MongoDB",
        "Tailwind CSS",
        "JavaScript",
      ],
    },
    {
      title: "Youtube Clone",
      description:
        "A YouTube clone is a platform for uploading, watching, and sharing videos, with features like recommendations and search.",
      image: youtube, // Replace with actual project image link
      link: "https://youtubeclonebp.netlify.app/",
      technologies: ["ReactJs", "TailwindCSS", "React Player"],
    },
    {
      title: "Levora About",
      description:
        "Created a dynamic clone of the Levora.com 'About' section, using animations to enhance user engagement and highlight brand storytelling.",
      image: levora, // Replace with actual project image link
      link: "https://levoraabout-bhagya.netlify.app/",
      technologies: ["ReactJs", "TailwindCSS", "Framer Motion"],
    },
    {
      title: "Travel Adviosor",
      description:
        "A travel advisor app that helps users discover destinations, plan trips, and find personalized recommendations for attractions, accommodations, and dining options.",
      image: travel, // Replace with actual project image link
      link: "https://travel-advisor-bp.netlify.app/",
      technologies: ["ReactJs", "TailwindCSS", "MaterialUI"],
    },
    {
      title: "ToDo App",
      description:
        "A todo app that helps users manage tasks efficiently, allowing them to create, organize, and track their to-do lists for improved productivity",
      image: todo, // Replace with actual project image link
      link: "https://todocrudbp.netlify.app/",
      technologies: ["ReactJs", "TailwindCSS", "Render"],
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">My Projects</h2>
        <p className="text-lg text-gray-700 mb-12">
          Here are some of the projects I have worked on:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
