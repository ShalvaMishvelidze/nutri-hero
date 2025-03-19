import { LandingParagraph } from "@/components/atoms/landing_paragraph";
import { container } from "./LandingHero.style";
import { Btn } from "@/components/atoms/btn";
import { LandingHeading } from "@/components/atoms/landing_heading";
import { useTranslations } from "next-intl";

const LandingHero = () => {
  const t = useTranslations("landing_hero");
  return (
    <div className={container}>
      <LandingHeading>{t("heading")}</LandingHeading>
      <LandingParagraph>{t("paragraph")}</LandingParagraph>
      <Btn className="[body_&]:mt-[50px] [body_&]:w-[324px] [body_&]:h-[50px] [body_&]:bg-purple [body_&]:text-white [body_&]:rounded-[5px] [body_&]:border-box">
        {t("button")}
      </Btn>
    </div>
  );
};
export default LandingHero;
