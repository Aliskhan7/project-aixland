"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Benefits.scss";
import IconPlay from "../../../../public/assets/icons/IconPlay/IconPlay";
import IconPause from "../../../../public/assets/icons/IconPause/IconPause";
export const blocksAnimated = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
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
    <section className="pt-[112px] pb-[70px] ">
      <div className="mx-auto benefits">
        {/*<svg*/}
        {/*  className="svg"*/}
        {/*  width="1300"*/}
        {/*  height="400"*/}
        {/*  xmlns="http://www.w3.org/2000/svg"*/}
        {/*>*/}
        {/*  <text x="10" y="50" fill="none" stroke="black" strokeWidth="2">*/}
        {/*    BENEFITS FOR USERS*/}
        {/*  </text>*/}
        {/*</svg>*/}
        {/*<h2 className="benefits-title">Benefits for users</h2>*/}
        <div className="video-block">
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
            width={858}
            height={480}
            ref={videoRef}
            className="mx-auto rounded-xl"
            muted
          >
            <source src="/assets/videos/animation_house.mp4" type="video/mp4" />
            <source
              src="/assets/videos/animation_house3.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/*<video*/}
        {/*  src="../../../../public/assets/animation_house.mp4"*/}
        {/*  width={858}*/}
        {/*  height={480}*/}
        {/*></video>*/}
      </div>
      <div className="flex gap-x-8 max-w-[858px] mx-auto">
        <p className="text-sm text-gray-100 font-thin">
          <span>/ </span> The metaverse as a digital interface is designed to
          combine the physical world of real estate and infrastructure with the
          flexibility and unlimited possibilities of digital space
        </p>
        <p className="text-sm text-gray-100 font-thin">
          <span>/ </span> The platform will remove the spatial and temporal
          barriers associated with real estate management and will allow for
          accurate monitoring and analysis of operational processes in real time
        </p>
      </div>
    </section>
  );
};

export default Benefits;
