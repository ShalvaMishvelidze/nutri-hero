"use client";
import { HeroContainer } from "@/components/sections/hero_container";
import { HeroImage } from "@/components/atoms/hero_image";
import { LandingHero } from "@/components/organisms/landing_hero";
import { LandingExercise } from "@/components/sections/landing_exercise";
import { Slider } from "@/components/sections/slider";
import { CardText } from "@/components/molecules/card_text";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("slider");

  const slides_1 = [
    {
      img_url: "/thierry-henry.png",
      TextComponent: (
        <CardText
          heading={t("text_heading_1")}
          paragraph={t("text_paragraph_1")}
        />
      ),
    },
    {
      img_url: "/salt-man.png",
      TextComponent: (
        <CardText
          heading={t("text_heading_2")}
          paragraph={t("text_paragraph_2")}
        />
      ),
      right_to_left: true,
    },
  ];

  const slides_2 = [
    {
      img_url: "/salt-man.png",
      TextComponent: (
        <CardText
          heading={t("text_heading_2")}
          paragraph={t("text_paragraph_2")}
        />
      ),
      right_to_left: true,
    },
    {
      img_url: "/thierry-henry.png",
      TextComponent: (
        <CardText
          heading={t("text_heading_1")}
          paragraph={t("text_paragraph_1")}
        />
      ),
    },
  ];

  return (
    <>
      <HeroContainer>
        <HeroImage />
        <LandingHero />
      </HeroContainer>
      <LandingExercise />
      <Slider slides={slides_1} />
      <Slider slides={slides_2} />
    </>
  );
}
