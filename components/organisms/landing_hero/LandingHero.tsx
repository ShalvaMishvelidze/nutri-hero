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
      <Btn className="!mt-[50px] !w-[324px] !h-[50px] !bg-purple !text-white !rounded-[5px] !border-box">
        {t("button")}
      </Btn>
    </div>
  );
};
export default LandingHero;
