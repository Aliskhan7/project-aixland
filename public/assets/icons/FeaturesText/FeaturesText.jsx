import React from "react";

const FeaturesText = () => {
  return (
    <svg
      width="100%"
      height="400"
      viewBox="0 0 1550 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000">
            <animate
              attributeName="stop-color"
              values="#000;#FFF;#000"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#000">
            <animate
              attributeName="stop-color"
              values="#FFF;#000;#FFF"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <text
        className="features-text-size"
        x="50%"
        y="50%"
        fontSize="18.5em"
        fontWeight="bold"
        fill="url(#gradient)"
        fontFamily="Golos Text, sans-serif"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        FEATURES
      </text>
    </svg>
  );
};

export default FeaturesText;
