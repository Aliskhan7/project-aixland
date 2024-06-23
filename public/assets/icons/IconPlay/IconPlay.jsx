import React from "react";

const IconPlay = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_128_3200)">
        <circle
          cx="40"
          cy="40"
          r="40"
          fill="url(#paint0_radial_128_3200)"
          fill-opacity="0.6"
        />
        <circle
          cx="40"
          cy="40"
          r="39.5"
          stroke="url(#paint1_linear_128_3200)"
        />
      </g>
      <path
        d="M49.187 41.128C48.7163 42.9187 46.4897 44.184 42.035 46.7147C37.7283 49.1614 35.575 50.384 33.8403 49.8934C33.1213 49.6896 32.4673 49.3033 31.9417 48.772C30.667 47.4854 30.667 44.9907 30.667 40C30.667 35.0094 30.667 32.5147 31.9417 31.228C32.4674 30.6973 33.1215 30.3115 33.8403 30.108C35.575 29.6147 37.7283 30.8387 42.035 33.2854C46.4883 35.816 48.7163 37.0814 49.1883 38.872C49.3844 39.6113 49.3844 40.3888 49.1883 41.128"
        fill="#F2F2F2"
      />
      <defs>
        <filter
          id="filter0_b_128_3200"
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
            result="effect1_backgroundBlur_128_3200"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_128_3200"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_128_3200"
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
          id="paint1_linear_128_3200"
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

export default IconPlay;
