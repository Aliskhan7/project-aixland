"use client";
import React from "react";
import Button from "@/app/components/UI/Button/Button";
import Image from "next/image";
import flag from "@/../public/assets/icons/flag-germany.svg";
import metaverse from "@/../public/assets/icons/metaverse.svg";
import mainBg_1 from "@/../public/assets/images/main-bg_1.png";
import mainBg_2 from "@/../public/assets/images/main-bg_2.png";
import mainBg_3 from "@/../public/assets/images/main-bg_3.png";
import main_num_1 from "@/../public/assets/images/number_1.png";
import main_num_2 from "@/../public/assets/images/number_2.png";
import main_num_3 from "@/../public/assets/images/number_3.png";
import Play from "@/../public/assets/icons/Play/Play";
import { motion } from "framer-motion";
import "./Main.scss";

const textAnimated = {
  hidden: {
    y: -500,
  },
  visible: {
    y: 0,
    transition: { duration: 0.3, delay: 0.2 },
  },
};

const Main = () => {
  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      className="container bg-figure mx-auto mb-[160px]"
    >
      <motion.div
        variants={textAnimated}
        className="mx-auto  max-w-[650px] w-full my-[70px]"
      >
        <div className="flex items-center gap-x-3 mb-4 justify-center">
          <div className="flex items-center gap-x-2  py-2 px-3 border border-dark-400 rounded-full">
            <Image src={flag} alt="flag" />
            <span className="text-sm text-white">Based in Germany</span>
          </div>
          <div className="flex items-center gap-x-2 py-2 px-3 border border-dark-400 rounded-full">
            <Image src={metaverse} alt="metaverse" />
            <span className="text-sm text-white">Metaverse</span>
          </div>
        </div>
        <div className="text-center mx-auto mb-9">
          <h1 className="title mb-4">
            Meet the world's first WEB3 Industrial Metanetwork
          </h1>
          <p className="subtitle">
            Aixland - The first global industrial Metaverse, representing an
            innovative solution for coordinating and managing all types of real
            estate and infrastructure, taking related operational and business
            processes to a new level of efficiency and interconnectedness.
          </p>
        </div>
        <Button
          bg="bg-gray-100"
          p="px-3 py-2"
          classStyle="hover:bg-gray-200 duration-150 ease-in text-sm flex gap-x-2 items-center mx-auto "
        >
          Watch demo <Play />
        </Button>
      </motion.div>

      <div className="main-bgs flex items-center gap-x-7 max-w-[906px] w-full mx-auto">
        <div className="main-bgs_inner main-bgs_inner__first">
          <Image className="main_bg" src={mainBg_1} alt="mainBg_1" />
          <Image className="number-bg" src={main_num_1} alt="main_num" />
        </div>
        <div className="main-bgs_inner main-bgs_inner__second">
          <Image className="main_bg" src={mainBg_2} alt="mainBg_1" />
          <Image className="number-bg" src={main_num_2} alt="main_num" />
        </div>
        <div className="main-bgs_inner main-bgs_inner__third">
          <Image className="main_bg" src={mainBg_3} alt="mainBg_1" />
          <Image className="number-bg" src={main_num_3} alt="main_num" />
        </div>
      </div>
    </motion.main>
  );
};

export default Main;
