"use client";
import { container } from "./VideoContainer.style";
import { ReactNode, useEffect, useState } from "react";
import { Items, Pb } from "./VideoContainer.config";
import Image from "next/image";

const VideoContainer = ({
  children,
  items = "center",
  pb = "none",
  overlay = false,
  videoRef,
}: {
  children: ReactNode;
  items?: keyof typeof Items;
  pb?: keyof typeof Pb;
  overlay?: boolean;
  videoRef?: React.RefObject<HTMLVideoElement>;
}) => {
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const video = document.getElementById("main-video");
      if (video) {
        const rect = video.getBoundingClientRect();
        setShowMiniPlayer(rect.bottom < 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMiniPlayer = () => {
    setShowMiniPlayer(false);
  };

  const handleScrollToMainVideo = () => {
    if (videoRef!.current) {
      videoRef!.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${container} ${Items[items]} ${Pb[pb]}`}>
      <video
        ref={videoRef}
        className="w-full h-full absolute top-0 left-0 z-1 object-cover"
        id="main-video"
        autoPlay
        muted
      >
        <source src="/video-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showMiniPlayer && (
        <div className="fixed top-[120px] right-[140px] w-[409px] shadow-md z-50">
          <Image
            src={"/scroll-into-view.svg"}
            alt="scroll"
            width={18}
            height={18}
            className="absolute top-[10px] left-[10px] cursor-pointer size-[18px] z-50"
            onClick={handleScrollToMainVideo}
          />
          <Image
            src={"/cancel.svg"}
            alt="scroll"
            width={18}
            height={18}
            className="absolute top-[10px] right-[10px] cursor-pointer size-[18px] z-50"
            onClick={handleCloseMiniPlayer}
          />
          <video autoPlay muted className="w-full  object-cover">
            <source src="/video-bg.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      <div className="relative z-50 max-w-[1280px] w-full">{children}</div>
      {overlay && (
        <div className="bg-gray-15 absolute left-0 top-0 w-full h-full z-10"></div>
      )}
    </div>
  );
};
export default VideoContainer;
