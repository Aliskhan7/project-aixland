"use client";
import React from "react";
import Image from "next/image";
import logoSmall from "@/../public/assets/images/logo.svg";
import { motion } from "framer-motion";
import { textAnimated } from "@/app/components/Collaborate/Collaborate";
import { projectsData } from "@/app/components/Projects/data";
import "./Projects.scss";

export const blocksAnimated = {
  hidden: {
    y: 200,
  },
  visible: {
    y: 0,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="container px-5 md:px-0 overflow-hidden mx-auto pb-36 pt-[70px]"
      id="projects"
    >
      <motion.div
        variants={textAnimated}
        className="mx-auto text-center max-w-[790px]"
      >
        <h2 className="title mb-4">WEB3 driven projects on Aixland</h2>
        <p className="subtitle">
          Aixland ensures security, transparency, and user empowerment,
          fostering <br /> innovative, decentralized internet solutions
        </p>
      </motion.div>
      <div className="mt-[70px] grid gap-y-12">
        {projectsData.map((project) => {
          return (
            <motion.div
              variants={blocksAnimated}
              key={project.id}
              className="flex lg:grid flex-col-reverse lg:flex-col grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 md:"
            >
              <div
                className={`${project.id % 2 === 0 ? "order-none lg:order-1" : ""}  projects-lines rounded-xl border border-dark-400 bg-[#17171A66] p-[58px]`}
              >
                <div className="bg-dark-500 p-8 h-full rounded-xl">
                  <Image src={logoSmall} width={60} alt="logo" />
                  <div className="mt-6 ">
                    <h3 className="font-medium text-2xl text-gray-100 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-dark-200 text-base">{project.desc}</p>
                  </div>
                </div>
              </div>
              <Image src={project.url} alt={project.title} />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
