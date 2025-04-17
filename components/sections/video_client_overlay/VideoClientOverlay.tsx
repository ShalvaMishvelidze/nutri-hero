"use client";
import { TitleField } from "@/components/atoms/registration_field";
import { VideoContainer } from "../video_container";
import { IconsContainer } from "@/components/molecules/icons_container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { container } from "./VideoClientOverlay.style";
import { useRef, useState } from "react";

const VideoClientOverlay = ({
  translationFieldName,
}: {
  translationFieldName: string;
}) => {
  const t = useTranslations(translationFieldName);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <VideoContainer
      styleClassName="max-sm:px-[30px]"
      items="end"
      overlay
      videoRef={videoRef}
    >
      <div className={container}>
        <Image
          src={"/play.svg"}
          alt="play"
          width={50}
          height={50}
          className="size-[50px] cursor-pointer max-xm:size-[30px]"
          onClick={handleTogglePlay}
        />
        <TitleField
          styleClassName="text-center"
          textCase="uppercase"
          title_size="biggest"
          color="white"
        >
          {t("title")}
        </TitleField>
      </div>
      <IconsContainer img_prefix={"workout"} t={t} icons={[1, 2, 3, 4]} />
    </VideoContainer>
  );
};
export default VideoClientOverlay;
