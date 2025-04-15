import { Btn } from "@/components/atoms/btn";
import { container, cta_btn, cta_container } from "./LandingCta.style";
import { useTranslations } from "next-intl";
import { ParagraphField } from "@/components/atoms/paragraph_field";

const LandingCta = () => {
  const t = useTranslations("landing_cta");
  return (
    <section className={container}>
      <div className={cta_container}>
        <ParagraphField heading_size="_22_24" mt="none" weight="medium">
          {t("paragraph")}
        </ParagraphField>
        <Btn className={cta_btn}>{t("button")}</Btn>
      </div>
    </section>
  );
};
export default LandingCta;
