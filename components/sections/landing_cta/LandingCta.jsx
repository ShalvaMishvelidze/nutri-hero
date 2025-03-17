import { Btn } from "@/components/atoms/btn";
import {
  container,
  cta_btn,
  cta_container,
  cta_paragraph,
} from "./LandingCta.style";
import { useTranslations } from "next-intl";

const LandingCta = () => {
  const t = useTranslations("landing_cta");
  return (
    <section className={container}>
      <div className={cta_container}>
        <p className={cta_paragraph}>{t("paragraph")}</p>
        <Btn className={cta_btn}>{t("button")}</Btn>
      </div>
    </section>
  );
};
export default LandingCta;
