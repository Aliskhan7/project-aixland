import React, { useEffect, useRef, useState } from "react";
import IconPlay from "../../../../../public/assets/icons/IconPlay/IconPlay";
import IconPause from "../../../../../public/assets/icons/IconPause/IconPause";
import { motion } from "framer-motion";

const topAnimated = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

const Video = () => {
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
    <motion.div variants={topAnimated} className="video-block">
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
        poster="/assets/videos/video-poster.gif"
      >
        <source src="/assets/videos/animation_house.mp4" type="video/mp4" />
        <source src="/assets/videos/animation_house3.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default Video;
