"use client";
import React from "react";
import "./Benefits.scss";
import { motion } from "framer-motion";
import Video from "@/app/components/UI/Video/Video";

const blocksAnimated = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: custom * 0.2 },
  }),
};
const topAnimated = {
  hidden: {
    y: "-145%",
  },
  visible: {
    y: 0,
    transition: { duration: 0.4, delay: 0.2 },
  },
};
const Benefits = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      className="benefits pt-[112px] pb-[70px]"
      id="benefit"
    >
      <div className="mx-auto ">
        <motion.h2
          variants={topAnimated}
          className="2xl:container mx-auto benefits-title"
        >
          Benefits for users
        </motion.h2>
        <div className="overflow-hidden container mx-auto px-5">
          <Video />
        </div>
      </div>
      <ul className="benefits-list flex gap-x-8 px-5 max-w-[858px] mx-auto">
        <motion.li
          variants={blocksAnimated}
          custom={1.5}
          className="text-sm text-gray-100 font-thin font_golos"
        >
          The metaverse as a digital interface is designed to combine the
          physical world of real estate and infrastructure with the flexibility
          and unlimited possibilities of digital space
        </motion.li>
        <motion.li
          variants={blocksAnimated}
          custom={2}
          className="text-sm text-gray-100 font-thin"
        >
          The platform will remove the spatial and temporal barriers associated
          with real estate management and will allow for accurate monitoring and
          analysis of operational processes in real time
        </motion.li>
      </ul>
    </motion.section>
  );
};

export default Benefits;
