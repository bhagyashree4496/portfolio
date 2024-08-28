import React, { useState } from "react";

const EasterEgg = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="hidden md:block fixed bottom-4 right-4">
      <button
        onClick={handleClick}
        className="p-4 bg-gray-700 text-white rounded-full"
      >
        🐣
      </button>
      {clicks >= 5 && (
        <div className="mt-4 p-4 bg-purple-600 text-white rounded-lg">
          <p>You've unlocked a secret message!</p>
        </div>
      )}
    </div>
  );
};

export default EasterEgg;
