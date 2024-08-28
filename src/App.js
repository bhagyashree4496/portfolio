import React from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import EasterEgg from "./components/EasterEgg";
import Testimonials from "./components/Testimonial";
import DarkModeToggle from "./components/darkmode/DarkModeToggle";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header /> {/* Add the Header component */}
      {/* <DarkModeToggle /> */}
      <EasterEgg />
      <Hero />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
