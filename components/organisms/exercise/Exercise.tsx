"use client";
import { useTranslations } from "next-intl";
import { MiniNavWrapper } from "../mini_nav_wrapper";
import { ModalWrapper } from "../modal_wrapper";
import Image from "next/image";
import { CardText } from "@/components/molecules/card_text";
import { bottom_container, container } from "./Exercise.style";
import { useState } from "react";

const Exercise = () => {
  const t = useTranslations("landing_exercise");
  const [selectedKey, setSelectedKey] = useState<number>(0);

  const nav_links = [
    t("modal_nav.gym"),
    t("modal_nav.home"),
    t("modal_nav.yoga"),
  ];

  return (
    <ModalWrapper styleClassNames="pb-[40px] pt-[35px] top-[-72px]">
      <div className={container}>
        <MiniNavWrapper
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          heading={t("exercise")}
          nav_links={nav_links}
        />
        <div className={bottom_container}>
          <Image
            src={"/gym-woman-2.png"}
            alt="women in a gym"
            width={409}
            height={271}
          />
          {nav_links.map((link, index) => {
            if (selectedKey === index) {
              return (
                <CardText
                  key={link}
                  heading={t(`modal.heading_${index + 1}`)}
                  paragraph={t(`modal.paragraph_${index + 1}`)}
                />
              );
            }
          })}
        </div>
      </div>
    </ModalWrapper>
  );
};
export default Exercise;
