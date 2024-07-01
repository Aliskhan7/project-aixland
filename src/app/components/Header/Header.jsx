import React from "react";
import Menu from "@/app/components/Menu/Menu";
import Image from "next/image";
import logo from "@/../public/assets/images/logo.svg";
import Button from "@/app/components/UI/Button/Button";
import LinkArrow from "@/../public/assets/icons/LinkArrow/LinkArrow";
const Header = () => {
  return (
    <div className="border-b border-dark-400">
      <header className="xl:container px-4 xl:px-0 py-6 mx-auto flex justify-between items-center ">
        <Image src={logo} alt="Logo" />
        <Menu />
        <a href="https://aixland.io/demo/accounts/login/" target="_blank">
          <Button
            bg="bg-gray-100"
            p="px-3 py-2"
            classStyle="hover:bg-gray-200 duration-150 ease-in text-sm flex gap-x-2 items-center"
          >
            Sing in
            <LinkArrow />
          </Button>
        </a>
      </header>
    </div>
  );
};

export default Header;
