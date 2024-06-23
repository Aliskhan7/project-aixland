import React from "react";
import Image from "next/image";
import Instagram from "@/../public/assets/icons/Instagram/Instagram";
import Telegram from "@/../public/assets/icons/Telegram/Telegram";
import Linkedin from "@/../public/assets/icons/Linkedin/Linkedin";
import Form from "@/app/components/Form/Form";
import logoSmall from "@/../public/assets/images/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer pt-[70px] pb-12 bg-dark-500">
      <div className="xl:container mx-auto p-4 xl:p-0">
        <div className="flex gap-x-3 items-center mb-[93px]">
          <p className="w-[135px] uppercase text-gray-100 text-base font-medium">
            Contact us
          </p>
          <hr className="line" />
          <Image src={logoSmall} width={60} alt="logo" />
        </div>

        <div className="flex justify-between items-start">
          <div className="flex flex-col justify-between h-[100%]">
            <div className="flex gap-x-[89px]">
              <div className="flex flex-col">
                <a href="#" className="text-sm decoration-0 text-dark-200">
                  Info@aixland.io
                </a>
                <div className="flex gap-x-3 mt-4">
                  <a href="#" className="hover:scale-110 ease-in duration-100">
                    <Instagram />
                  </a>
                  <a href="#" className="hover:scale-110 ease-in duration-100">
                    <Telegram />
                  </a>
                  <a href="#" className="hover:scale-110 ease-in duration-100">
                    <Linkedin />
                  </a>
                </div>
              </div>
              <p className="text-sm text-dark-200 max-w-[307px]">
                The metaverse as a digital interface is designed combine the
                physical world of real estate and
              </p>
            </div>
          </div>
          <Form />
        </div>
        <div className="text-dark-200 text-[12px] flex justify-evenly">
          © 2024 Aixland
        </div>
      </div>
    </footer>
  );
};

export default Footer;
