import { container, cta_container } from "./LandingCta.style";
import { useTranslations } from "next-intl";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { BtnField } from "@/components/atoms/btn_field";
import Link from "next/link";

const LandingCta = () => {
  const t = useTranslations("landing_cta");

  return (
    <section className={container}>
      <div className={cta_container}>
        <ParagraphField heading_size="_22_24" mt="none" weight="medium">
          {t("paragraph")}
        </ParagraphField>
        <BtnField styleClassName="max-sm" btn_size="medium" m_top="none">
          <Link href="/registration">{t("button")}</Link>
        </BtnField>
      </div>
    </section>
  );
};
export default LandingCta;
