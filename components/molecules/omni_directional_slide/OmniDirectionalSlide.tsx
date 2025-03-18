import Image from "next/image";
import { ReactNode } from "react";
import { slide_img, slide_text_wrapper } from "./OmniDirectionalSlide.style";

const OmniDirectionalSlide = ({
  right_to_left,
  TextComponent,
  index,
  img_url,
}: {
  right_to_left?: boolean;
  TextComponent: ReactNode;
  index: number;
  img_url: string;
}) => {
  return (
    <>
      {right_to_left ? (
        <>
          <div className={slide_text_wrapper}>{TextComponent}</div>
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
          <div className={slide_text_wrapper}>{TextComponent}</div>
        </>
      )}
    </>
  );
};

export default OmniDirectionalSlide;
