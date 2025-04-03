"use client";
import {
  container,
  mini_player_style,
  video_style,
} from "./VideoContainer.style";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [miniPlayer, setMiniPlayer] = useState<"disabled" | "enabled">(
    "enabled"
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition > 500) {
      if (miniPlayer !== "disabled") {
        setShowMiniPlayer(true);
      }
    } else {
      setShowMiniPlayer(false);
      setMiniPlayer("enabled");
    }
  }, [scrollPosition, miniPlayer]);

  const handleCloseMiniPlayer = () => {
    setShowMiniPlayer(false);
    setMiniPlayer("disabled");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${container} ${Items[items]} ${Pb[pb]}`}>
      <div className={`${video_style} ${showMiniPlayer && mini_player_style} `}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover relative z-10"
          id="main-video"
          autoPlay
          muted
          onEnded={() => videoRef?.current?.play()}
        >
          <source src="/video-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Image
          src={"/scroll-into-view.svg"}
          alt="scroll"
          width={18}
          height={18}
          className={`absolute top-[10px] left-[10px] cursor-pointer size-[18px] z-30 ${
            showMiniPlayer ? "block" : "hidden"
          }`}
          onClick={handleScrollToTop}
        />
        <Image
          src={"/cancel.svg"}
          alt="scroll"
          width={18}
          height={18}
          className={`absolute top-[10px] right-[10px] cursor-pointer size-[18px] z-30 ${
            showMiniPlayer ? "block" : "hidden"
          }`}
          onClick={handleCloseMiniPlayer}
        />
      </div>
      <div className="relative z-40 max-w-[1280px] w-full">{children}</div>
      {overlay && (
        <div className="bg-gray-15 absolute left-0 top-0 w-full h-full z-10"></div>
      )}
    </div>
  );
};
export default VideoContainer;
