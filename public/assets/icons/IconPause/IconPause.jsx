import React from "react";

const IconPause = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_128_3196)">
        <circle
          cx="40"
          cy="40"
          r="40"
          fill="url(#paint0_radial_128_3196)"
          fill-opacity="0.6"
        />
        <circle
          cx="40"
          cy="40"
          r="39.5"
          stroke="url(#paint1_linear_128_3196)"
        />
      </g>
      <path
        d="M36 47C37.1 47 38 46.1 38 45V35C38 33.9 37.1 33 36 33C34.9 33 34 33.9 34 35V45C34 46.1 34.9 47 36 47ZM42 35V45C42 46.1 42.9 47 44 47C45.1 47 46 46.1 46 45V35C46 33.9 45.1 33 44 33C42.9 33 42 33.9 42 35Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_128_3196"
          x="-8"
          y="-8"
          width="96"
          height="96"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_128_3196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_128_3196"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_128_3196"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27.4286 18.8571) rotate(69.9739) scale(65.0777)"
        >
          <stop stop-color="white" stop-opacity="0.9" />
          <stop offset="1" stop-color="#F5F5F5" stop-opacity="0.7" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_128_3196"
          x1="108.5"
          y1="-81"
          x2="43"
          y2="38.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconPause;
