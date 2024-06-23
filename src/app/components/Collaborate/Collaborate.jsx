"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Button from "@/app/components/UI/Button/Button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LogoGradient from "@/../public/assets/icons/LogoGradient/LogoGradient";
import { blocksAnimated } from "@/app/components/Projects/Projects";
import LinkArrow from "@/../public/assets/icons/LinkArrow/LinkArrow";
import NextArrow from "@/../public/assets/icons/NextArrow/NextArrow";
import PrevArrow from "../../../../public/assets/icons/PrevArrow/PrevArrow";
import { collaborateData } from "@/app/components/Collaborate/data";
import "./Collaborate.scss";
export const textAnimated = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
};
const Collaborate = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className=" mx-auto pt-[70px] pb-[150px] collaborate"
    >
      <motion.div
        variants={textAnimated}
        className="text-center mx-auto mb-[70px]"
      >
        <h2 className="title mb-9">
          Join our network of partners and be <br /> a part of innovative
          projects
        </h2>
        <Button
          bg="bg-gray-100"
          p="px-3 py-2"
          classStyle="hover:bg-gray-200 duration-150 ease-in text-sm flex gap-x-2 items-center mx-auto "
        >
          Collaborate with Us <LinkArrow />
        </Button>
      </motion.div>

      <motion.div variants={blocksAnimated}>
        <Swiper
          initialSlide={1}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={250}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          className="collaborate-swiper"
        >
          {collaborateData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="collaborate-swiper_inner">
                  <Image src={item.url} alt="collaborate_img" />
                  <div>
                    <h3 className="text-gray-100 text-2xl font-medium mb-2">
                      {item.title} <span className="collaborate-dot">.</span>
                    </h3>
                    <p className="text-gray-100 text-base font-normal">
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="flex justify-center mx-auto gap-x-3 mt-9 pb-2">
            <div className="arrow-swiper_horizontal" ref={navigationPrevRef}>
              <PrevArrow />
            </div>
            <div className="arrow-swiper_horizontal" ref={navigationNextRef}>
              <NextArrow />
            </div>
          </div>
        </Swiper>
        <div className="animate-collaborate w-full mx-auto flex justify-center">
          <LogoGradient />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Collaborate;
