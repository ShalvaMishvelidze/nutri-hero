"use client";
import { BtnField } from "@/components/atoms/btn_field";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const WeekDaysNav = ({ days, parent }: { days: string[]; parent: string }) => {
  const [activeDay, setActiveDay] = useState(0);
  return (
    <div className="h-[50px] max-w-[1000px] w-full mx-auto mt-[30px] relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${parent}-prev-day`,
          nextEl: `.${parent}-next-day`,
        }}
        slidesPerView={7}
        spaceBetween={8}
        className="h-[50px] max-w-[940px] w-full mx-auto"
      >
        {days.map((day, index) => (
          <SwiperSlide
            key={index}
            className={`group w-[128px] h-[50px] [body_&]:flex items-center justify-center ${
              activeDay === index ? "bg-blue" : "bg-blue-5"
            } rounded-[4px] cursor-pointer hover:bg-blue hover:text-white`}
            onClick={() => setActiveDay(index)}
          >
            <p
              className={`text-[12px] leading-[17px] text-gray-60 group-hover:text-white  ${
                activeDay === index ? "text-white" : "text-gray-60"
              }`}
            >
              {day}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex justify-between items-center h-[50px] absolute top-0 left-0">
        <BtnField
          m_top="none"
          btn_size="smallest"
          h="medium"
          bg="light"
          rootClassName={`${parent}-prev-day`}
        >
          <Image
            src={"/arrow-left-white.svg"}
            alt="left arrow"
            width={11}
            height={19}
            className="w-[11px] h-[19px]"
          />
        </BtnField>
        <BtnField
          m_top="none"
          btn_size="smallest"
          h="medium"
          bg="light"
          rootClassName={`${parent}-next-day`}
        >
          <Image
            src={"/arrow-right-white.svg"}
            alt="right arrow"
            width={11}
            height={19}
            className="w-[11px] h-[19px]"
          />
        </BtnField>
      </div>
    </div>
  );
};
export default WeekDaysNav;
