"use client";
import React, { useState } from "react";
import Button from "@/app/components/UI/Button/Button";
import Image from "next/image";
import flag from "@/../public/assets/icons/flag-germany.svg";
import metaverse from "@/../public/assets/icons/metaverse.svg";
import Play from "@/../public/assets/icons/Play/Play";
import { motion } from "framer-motion";
import "./Main.scss";
import { images } from "@/app/components/Main/data";

const topAnimated = {
  hidden: {
    y: -500,
  },
  visible: {
    y: 0,
    transition: { duration: 0.5, delay: 0.4 },
  },
};

const Main = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  const handleImageClick = (index) => {
    setExpandedImage(expandedImage === index ? null : index);
  };

  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      className="container bg-figure mx-auto mb-[35px] sm:mb-[160px] overflow-hidden"
    >
      <motion.div
        variants={topAnimated}
        className="mx-auto max-w-[427px] sm:max-w-[650px] w-full my-[70px]"
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
            Meet the world&apos;s first WEB3 Industrial Metanetwork
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

      <div className="main-bgs flex items-center flex-col lg:flex-row gap-y-[17px] gap-x-7 px-5 md:px-0 max-w-[906px] w-full mx-auto">
        {images.map((image, index) => (
          <div className="w-full lg:w-[284px]" key={index}>
            <div
              className={`main-bgs_inner image-block ${expandedImage === index ? `expanded expanded-${index}` : `main-bgs_inner__${index}`}`}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.img}
                width={284}
                height={466}
                alt={`Image ${index + 1}`}
                className="image main_bg"
              />

              <Image
                className="number-bg"
                src={image.img_number}
                alt="main_num"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.main>
  );
};

export default Main;
