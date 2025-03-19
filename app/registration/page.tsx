"use client";
import { CardText } from "@/components/molecules/card_text";
import { ModalWrapper } from "@/components/organisms/modal_wrapper";
import RegistrationForm from "@/components/organisms/registration_form/RegistrationForm";
import { HeroContainer } from "@/components/sections/hero_container";
import { useTranslations } from "next-intl";

const Registration = () => {
  const t = useTranslations("registration");

  return (
    <HeroContainer>
      <ModalWrapper styleClassNames="[&]:items-start">
        <div className="flex-1 border-[1px]">
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
