"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Benefits.scss";
import IconPlay from "../../../../public/assets/icons/IconPlay/IconPlay";
import IconPause from "../../../../public/assets/icons/IconPause/IconPause";
import { motion } from "framer-motion";

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
const textAnimated = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: { duration: 0.4, delay: 0.2 },
  },
};
const Benefits = () => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPaused(false);
      } else {
        video.pause();
        setIsPaused(true);
      }
    }
  };

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    const button = buttonRef.current;

    if (video && !video.paused) {
      if (!video.matches(":hover") && !button.matches(":hover")) {
        setShowButton(false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const button = buttonRef.current;

    if (video && button) {
      video.addEventListener("mouseenter", handleMouseEnter);
      video.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (video && button) {
        video.removeEventListener("mouseenter", handleMouseEnter);
        video.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused) {
      setShowButton(true);
    }
  }, [isPaused]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      className="pt-[112px] pb-[70px] "
    >
      <div className="mx-auto benefits">
        <motion.h2
          variants={textAnimated}
          className="2xl:container benefits-title"
        >
          Benefits for users
        </motion.h2>
        <div className="overflow-hidden container mx-auto px-5">
          <motion.div variants={textAnimated} className="video-block">
            {showButton && (
              <button
                ref={buttonRef}
                onClick={togglePlayPause}
                className="video-block_btn"
              >
                {isPaused ? <IconPlay /> : <IconPause />}
              </button>
            )}

            <video
              height={480}
              ref={videoRef}
              className="mx-auto max-w-[858px] w-full rounded-xl"
              muted
            >
              <source
                src="/assets/videos/animation_house.mp4"
                type="video/mp4"
              />
              <source
                src="/assets/videos/animation_house3.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
      <div className="flex gap-x-8 px-5 max-w-[858px] mx-auto">
        <motion.p
          variants={blocksAnimated}
          custom={1.5}
          className="text-sm text-gray-100 font-thin font_golos"
        >
          <span>/ </span> The metaverse as a digital interface is designed to
          combine the physical world of real estate and infrastructure with the
          flexibility and unlimited possibilities of digital space
        </motion.p>
        <motion.p
          variants={blocksAnimated}
          custom={2}
          className="text-sm text-gray-100 font-thin"
        >
          <span>/ </span> The platform will remove the spatial and temporal
          barriers associated with real estate management and will allow for
          accurate monitoring and analysis of operational processes in real time
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Benefits;
