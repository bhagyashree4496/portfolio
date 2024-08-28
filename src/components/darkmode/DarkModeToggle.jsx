import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-gray-300 rounded-full dark:bg-gray-700"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
