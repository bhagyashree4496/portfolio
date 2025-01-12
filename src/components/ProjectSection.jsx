import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // Removed unused icons
import plant from "../assets/plantsmarket.PNG";
import youtube from "../assets/youtube.PNG";
import levora from "../assets/levora.PNG";
import travel from "../assets/travel.PNG";
import todo from "../assets/todo.PNG";
import shop from "../assets/1.PNG";
import Doc from "../assets/doc.PNG";
import planit from "../assets/plan.PNG";
import { FaGithub } from "react-icons/fa6";
// Project Card Component
const ProjectCard = ({
  image,
  title,
  description,
  link,
  technologies,
  git,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto flex flex-col">
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
        <div className="flex items-center gap-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 inline-flex items-center"
          >
            <span> View Project</span> <FaExternalLinkAlt className="ml-1" />
          </a>
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 inline-flex items-center"
          >
            <span> Source code</span> <FaGithub className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "ShopSphere",
      description:
        "ShopSphere is a scalable e-commerce platform built with the MERN stack, featuring secure user authentication, product management, and payment processing for a seamless shopping experience.",
      image: shop, // Replace with actual project image link
      link: "https://shopsphere-bp.vercel.app/",
      git: "https://github.com/bhagyashree4496/shopsphere",
      technologies: ["React", "NodeJs", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "DocAi",
      description:
        "DocAI for Medical Questions uses ChatGPT AI to provide accurate, real-time answers to medical queries by analyzing and interpreting medical documents, helping users access reliable health information with ease",
      image: Doc, // Replace with actual project image link
      link: "https://github.com/bhagyashree4496/docai",
      technologies: ["React", "Tailwind CSS", "ChatGPT API"],
      git: "",
    },
    {
      title: "Planit",
      description:
        "A MERN stack-based To-Do app where users can sign up, log in, and manage tasks (create, edit, delete, mark as complete). It is built with React.js for the frontend, Node.js/Express.js for the backend, and MongoDB for data storage",
      image: planit, // Replace with actual project image link
      link: "https://planit-a4zc.vercel.app/",
      technologies: ["React", "NodeJs", "MongoDB", "Tailwind CSS"],
      git: "https://github.com/bhagyashree4496/Planit",
    },
    {
      title: "Levora About",
      description:
        "Created a dynamic clone of the Levora.com 'About' section, using animations to enhance user engagement and highlight brand storytelling.",
      image: levora, // Replace with actual project image link
      link: "https://levoraabout-bhagya.netlify.app/",
      technologies: ["ReactJs", "TailwindCSS", "Framer Motion"],
      git: "https://github.com/bhagyashree4496/levoraAbout",
    },
    {
      title: "Youtube Clone",
      description:
        "A YouTube clone is a platform for uploading, watching, and sharing videos, with features like recommendations and search.",
      image: youtube, // Replace with actual project image link
      link: "https://youtubeclonebp.netlify.app/",
      technologies: ["ReactJs", "TailwindCSS", "React Player"],
      git: "https://github.com/bhagyashree4496/youtube_clone",
    },

    {
      title: "Travel Adviosor",
      description:
        "A travel advisor app that helps users discover destinations, plan trips, and find personalized recommendations for attractions, accommodations, and dining options.",
      image: travel, // Replace with actual project image link
      link: "https://travel-advisor-bp.netlify.app/",
      technologies: ["ReactJs", "TailwindCSS", "MaterialUI"],
      git: "https://github.com/bhagyashree4496/Travel-Advisor",
    },
    {
      title: "ToDo App",
      description:
        "A todo app that helps users manage tasks efficiently, allowing them to create, organize, and track their to-do lists for improved productivity",
      image: todo, // Replace with actual project image link
      link: "https://todocrudbp.netlify.app/",
      technologies: ["ReactJs", "TailwindCSS", "Render"],
      git: "https://github.com/bhagyashree4496/todo_json_server",
    },
    {
      title: "Ecommerce UI",
      description:
        "A plant market e-commerce website offers a variety of plants and gardening supplies, allowing customers to browse, purchase, and have plants delivered directly to their door with ease.",
      image: plant, // Replace with actual project image link
      link: "https://plantmarket-bp.netlify.app/",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      git: "https://github.com/bhagyashree4496/Ecommerce",
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
              git={project.git}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
