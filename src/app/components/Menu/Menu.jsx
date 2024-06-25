import React from "react";

const Menu = () => {
  return (
    <nav>
      <ul className="hidden sm:flex gap-x-8 text-dark-200 text-sm">
        <li>
          <a className="hover:text-gray-100 ease-in transition" href="#">
            About us
          </a>
        </li>
        <li>
          <a className="hover:text-gray-100 ease-in transition" href="#benefit">
            Benefits
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-100 ease-in transition"
            href="#features"
          >
            Features
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-100 ease-in transition"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-100 ease-in transition"
            href="#partners"
          >
            Partners
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
