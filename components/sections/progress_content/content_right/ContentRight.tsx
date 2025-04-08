"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./card";
import { Pagination } from "swiper/modules";

const container = "max-w-[324px] w-full";

const ContentRight = () => {
  return (
    <Swiper
      modules={[Pagination]}
      className={`${container} [&_.swiper-pagination-bullet]:bg-blue`}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
    </Swiper>
  );
};
export default ContentRight;
