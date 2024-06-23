"use client";
import React from "react";
import "./Features.scss";
import Image from "next/image";
import logoSmall from "@/../public/assets/images/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FeaturesText from "../../../../public/assets/icons/FeaturesText/FeaturesText";
import { featuresData } from "@/app/components/Features/data";

const Features = () => {
  return (
    <section className="pt-[70px]">
      <div className="xl:container mx-auto">
        <div className="flex gap-x-3 items-center mb-[93px]">
          <Image src={logoSmall} width={60} alt="logo" />
          <hr className="line" />
        </div>
        <div>
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {featuresData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Image src={item.url} alt="features_img_1" />
                  <div className="max-w-[330px]">
                    <span className="text-gray-100 text-2xl font-medium mb-4">
                      {item.number}
                    </span>
                    <p className="text-dark-200 text-base font-normal">
                      {item.text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="animate-features 2xl:container mx-auto flex justify-center">
        <FeaturesText />
      </div>
    </section>
  );
};

export default Features;
