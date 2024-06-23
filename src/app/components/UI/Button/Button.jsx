import React from "react";

function Button({ children, bg, p, classStyle }) {
  return (
    <button
      className={`${bg} ${p} ${classStyle} rounded-lg text-dark-700 text-sm font-normal font_golos`}
    >
      {children}
    </button>
  );
}
export default Button;
