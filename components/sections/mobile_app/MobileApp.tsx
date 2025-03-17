import { CardText } from "@/components/molecules/card_text";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { container, img_style, text_container } from "./MobileApp.style";
import { CardTextTitle } from "@/components/atoms/card_text_title";

const MobileApp = () => {
  const t = useTranslations("mobile_app");

  return (
    <section className={container}>
      <Image
        className={img_style}
        src={"/woman-with-phone.png"}
        alt="Mobile App"
        width={503}
        height={567}
      />
      <div className={text_container}>
        <CardTextTitle>{t("heading")}</CardTextTitle>
        <CardText heading={t("text_heading")} paragraph={t("text_paragraph")} />
      </div>
    </section>
  );
};
export default MobileApp;
