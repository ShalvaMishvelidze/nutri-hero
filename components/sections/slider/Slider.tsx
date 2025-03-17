"use client";
import { carousel_slide, container } from "./Slider.style";
import { ReactNode, useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { SliderBtnContainer } from "@/components/molecules/slider_btn_conainer";
import { OmniDirectionalSlide } from "@/components/molecules/omni_directional_slide";

const Slider = ({
  slides,
}: {
  slides: {
    img_url: string;
    TextComponent: ReactNode;
    right_to_left?: boolean;
  }[];
}) => {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <section className={container}>
      <Carousel
        ref={carouselRef}
        slidesPerRow={1}
        autoplay
        autoplaySpeed={5000}
      >
        {slides.map(({ img_url, TextComponent, right_to_left }, index) => {
          return (
            <div className={carousel_slide} key={img_url}>
              <OmniDirectionalSlide
                TextComponent={TextComponent}
                img_url={img_url}
                right_to_left={right_to_left}
                index={index}
              />
            </div>
          );
        })}
      </Carousel>
      <SliderBtnContainer carouselRef={carouselRef} />
    </section>
  );
};

export default Slider;
