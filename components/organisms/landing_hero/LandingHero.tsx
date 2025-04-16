import { container } from "./LandingHero.style";
import { useTranslations } from "next-intl";
import { TitleField } from "@/components/atoms/registration_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { BtnField } from "@/components/atoms/btn_field";
import Link from "next/link";

const LandingHero = () => {
  const t = useTranslations("landing_hero");
  return (
    <div className={container}>
      <TitleField
        styleClassName="max-w-[600px] text-center px-[30px]"
        textCase="capitalize"
        title_size="biggest"
        weight="bold"
        mb="_10"
      >
        {t("heading")}
      </TitleField>
      <ParagraphField weight="normal" heading_size="_22_28" mt="none">
        {t("paragraph")}
      </ParagraphField>
      <BtnField btn_size="big">
        <Link href={"/registration"}>{t("button")}</Link>
      </BtnField>
    </div>
  );
};
export default LandingHero;
