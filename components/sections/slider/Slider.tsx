import {
  container,
  slider_btn,
  slider_btn_container,
  swiper_slide,
} from "./Slider.style";
import { ReactNode } from "react";
import Image from "next/image";
import { Btn } from "@/components/atoms/btn";
import { Carousel } from "antd";

const Slider = ({
  id,
  slides,
}: {
  id: number;
  slides: {
    img_url: string;
    TextComponent: ReactNode;
    right_to_left?: boolean;
  }[];
}) => {
  return (
    <section className={container}>
      <Carousel slidesPerRow={2}>
        {slides.map(({ img_url, TextComponent, right_to_left }, index) => {
          return (
            <>
              <div className="w-1/2">{TextComponent}</div>
              <Image
                width={640}
                height={720}
                src={img_url}
                alt={`Slide ${index}`}
                className="w-1/2"
              />
            </>
          );
        })}
      </Carousel>
      {/* <div className={slider_btn_container}>
        <Btn className={`${slider_btn} prev-btn-${id}`}>
          <Image
            src={"/arrow-left.svg"}
            alt="Previous"
            width={24}
            height={24}
          />
        </Btn>
        <Btn className={`${slider_btn} next-btn-${id}`}>
          <Image
            src={"/arrow-right.svg"}
            alt="Previous"
            width={24}
            height={24}
          />
        </Btn>
      </div> */}
    </section>
  );
};

export default Slider;
