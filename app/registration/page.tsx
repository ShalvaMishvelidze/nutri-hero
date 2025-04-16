"use client";
import { CardText } from "@/components/molecules/card_text";
import { ModalWrapper } from "@/components/organisms/modal_wrapper";
import RegistrationForm from "@/components/organisms/registration_form/RegistrationForm";
import { HeroContainer } from "@/components/sections/hero_container";
import { useTranslations } from "next-intl";

const Registration = () => {
  const t = useTranslations("registration");

  return (
    <HeroContainer styleClassName="max-lg:h-[600px] max-sm:h-[500px]">
      <ModalWrapper styleClassNames="[&]:items-start mx-auto pt-[120px] max-lg:pt-[50px] pb-[45px] max-lg:px-[30px] max-lg:gap-[40px] max-sm:py-[30px]">
        <div className="flex-1 max-xm:hidden">
          <CardText
            title={t("title")}
            heading={t("heading")}
            paragraph={t("paragraph")}
          />
        </div>
        <RegistrationForm />
      </ModalWrapper>
    </HeroContainer>
  );
};
export default Registration;
