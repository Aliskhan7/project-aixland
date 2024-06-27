import React from "react";
const Alert = ({ color, children }) => {
  return (
    <div
      className={`${color === "Success" ? "text-[#2FDD7F] bg-[#2FDD7F1A]" : "text-[#FF3939] bg-[#FF39391A]"} w-full absolute top-[-71px] left-0 py-3 px-4 rounded-lg text-gray-100`}
    >
      {children}
    </div>
  );
};

export default Alert;
