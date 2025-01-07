import React from "react";

import Footer from "./components/footer/Footer";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  return (
    <div className="app relative scroll-smooth">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />

      <Footer />
    </div>
  );
}

export default App;
