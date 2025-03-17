import Image from "next/image";
import { ReactNode } from "react";
import { slide_img, slide_text_wrapper } from "./OmniDirectionalSlide.style";
import { CardTextTitle } from "@/components/atoms/card_text_title";

const OmniDirectionalSlide = ({
  right_to_left,
  TextComponent,
  index,
  heading,
  img_url,
}: {
  right_to_left?: boolean;
  TextComponent: ReactNode;
  index: number;
  heading: string;
  img_url: string;
}) => {
  return (
    <>
      {right_to_left ? (
        <>
          <div className={slide_text_wrapper}>
            <CardTextTitle>{heading}</CardTextTitle>
            {TextComponent}
          </div>
          <Image
            width={640}
            height={720}
            src={img_url}
            alt={`Slide ${index}`}
            className={slide_img}
          />
        </>
      ) : (
        <>
          <Image
            width={640}
            height={720}
            src={img_url}
            alt={`Slide ${index}`}
            className={slide_img}
          />
          <div className={slide_text_wrapper}>
            <CardTextTitle>{heading}</CardTextTitle>
            {TextComponent}
          </div>
        </>
      )}
    </>
  );
};

export default OmniDirectionalSlide;
