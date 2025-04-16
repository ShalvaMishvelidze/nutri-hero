"use client";
import { MiniNav } from "@/components/molecules/mini_nav";
import { TitleField } from "@/components/atoms/registration_field";
import { useState } from "react";
import GridCard from "@/components/organisms/grid_card/GridCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import SwiperBtnContainer from "@/components/molecules/swiper_btn_container/SwiperBtnContainer";
import { useTranslations } from "next-intl";
import { container, swiper_style } from "./Recipes.style";
import { WeekDaysNav } from "@/components/organisms/week_days_nav";

const Recipes = ({ days }: { days: string[] }) => {
  const t = useTranslations("my_plan.recipes");
  const [selectedKey, setSelectedKey] = useState(0);
  const [hiddenBtn, setHiddenBtn] = useState<"first" | "last" | "none">(
    "first"
  );

  const nav_links = [t("nav.today"), t("nav.tomorrow"), t("nav.week")];

  const handleSlideChange = (swiper: SwiperCore) => {
    if (swiper.isBeginning) {
      setHiddenBtn("first");
    } else if (swiper.isEnd) {
      setHiddenBtn("last");
    } else {
      setHiddenBtn("none");
    }
  };

  return (
    <div className={container}>
      <TitleField title_size="big" mb="medium">
        {t("title")}
      </TitleField>
      <MiniNav
        nav_links={nav_links}
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKey}
      />
      {selectedKey === 2 && <WeekDaysNav days={days} parent="recipes" />}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".recipes-prev",
          nextEl: ".recipes-next",
        }}
        spaceBetween={16}
        slidesPerView={3}
        className={`recipe-swiper ${swiper_style}`}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <GridCard
            img_url="/recipe-1.png"
            title={t("1.name")}
            paragraph={t("1.type")}
            can_be_checked
          />
        </SwiperSlide>
        <SwiperSlide>
          <GridCard
            img_url="/recipe-2.png"
            title={t("2.name")}
            paragraph={t("2.type")}
            can_be_checked
          />
        </SwiperSlide>
        <SwiperSlide>
          <GridCard
            img_url="/recipe-3.png"
            title={t("3.name")}
            paragraph={t("3.type")}
            can_be_checked
          />
        </SwiperSlide>
        <SwiperSlide>
          <GridCard
            img_url="/recipe-1.png"
            title={t("1.name")}
            paragraph={t("1.type")}
            can_be_checked
          />
        </SwiperSlide>
        <SwiperSlide>
          <GridCard
            img_url="/recipe-2.png"
            title={t("2.name")}
            paragraph={t("2.type")}
            can_be_checked
          />
        </SwiperSlide>
        <SwiperSlide>
          <GridCard
            img_url="/recipe-3.png"
            title={t("3.name")}
            paragraph={t("3.type")}
            can_be_checked
          />
        </SwiperSlide>
      </Swiper>
      <SwiperBtnContainer
        hiddenBtn={hiddenBtn}
        prevRootClassName={"recipes-prev"}
        nextRootClassName={"recipes-next"}
      />
    </div>
  );
};
export default Recipes;
