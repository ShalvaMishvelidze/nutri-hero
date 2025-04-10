"use client";
import { useTranslations } from "next-intl";
import {
  btn_style,
  container,
  content_container,
  img_style,
} from "./Nutrition.style";
import { useState } from "react";
import { MiniNavWrapper } from "../mini_nav_wrapper";
import { CardText } from "@/components/molecules/card_text";
import { Btn } from "@/components/atoms/btn";
import Image from "next/image";
import { ArrowRightSVGIcon } from "@/components/icons";

const Nutrition = () => {
  const t = useTranslations("landing_exercise");
  const [selectedKey, setSelectedKey] = useState<number>(0);
  const nav_links = [
    t("nutrition_nav.healthy"),
    t("nutrition_nav.personalized"),
    t("nutrition_nav.professional"),
  ];

  return (
    <div className={container}>
      <div className={content_container}>
        <MiniNavWrapper
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          heading={t("nutrition_header")}
          nav_links={nav_links}
          is_light
        />
        {nav_links.map((link, index) => {
          if (selectedKey === index) {
            return (
              <CardText
                key={link}
                is_light
                heading={t(`nutrition.heading_${index + 1}`)}
                paragraph={t(`nutrition.paragraph_${index + 1}`)}
              />
            );
          }
        })}
        <Btn type="text" className={btn_style}>
          {t("read_more")}
          <ArrowRightSVGIcon />
        </Btn>
      </div>
      <Image
        src={"/salad.png"}
        alt="women in a gym"
        width={494}
        height={319}
        className={img_style}
      />
    </div>
  );
};
export default Nutrition;
