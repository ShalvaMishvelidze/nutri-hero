import { Btn } from "@/components/atoms/btn";
import Image from "next/image";
import { slider_btn, slider_btn_container } from "./SliderBtnContainer.style";
import { CarouselRef } from "antd/es/carousel";
import { RefObject } from "react";

const SliderBtnContainer = ({
  carouselRef,
}: {
  carouselRef: RefObject<CarouselRef>;
}) => {
  return (
    <div className={slider_btn_container}>
      <Btn
        className={`${slider_btn}`}
        onClick={() => carouselRef.current?.prev()}
      >
        <Image
          src={"/arrow-left.svg"}
          alt="Previous"
          width={11}
          height={18.8}
        />
      </Btn>
      <Btn
        className={`${slider_btn}`}
        onClick={() => carouselRef.current?.next()}
      >
        <Image
          src={"/arrow-right.svg"}
          alt="Previous"
          width={11}
          height={18.8}
        />
      </Btn>
    </div>
  );
};
export default SliderBtnContainer;
