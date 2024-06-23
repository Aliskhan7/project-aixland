import React from "react";

const Menu = () => {
  return (
    <nav>
      <ul className="flex gap-x-8 text-dark-200 text-sm">
        <li>
          <a className="hover:text-gray-100 ease-in transition" href="#">
            About us
          </a>
        </li>
        <li>
          <a className="hover:text-gray-100 ease-in transition" href="#">
            Benefits
          </a>
        </li>
        <li>
          <a className="hover:text-gray-100 ease-in transition" href="#">
            Features
          </a>
        </li>
        <li>
          <a className="hover:text-gray-100 ease-in transition" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-gray-100 ease-in transition" href="#">
            Partners
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
