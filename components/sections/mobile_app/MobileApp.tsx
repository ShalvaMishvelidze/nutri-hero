import { CardText } from "@/components/molecules/card_text";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { container, img_style, text_container } from "./MobileApp.style";
import { StoresContainer } from "@/components/molecules/stores_container";

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
        <CardText
          title={t("heading")}
          heading={t("text_heading")}
          paragraph={t("text_paragraph")}
        />
        <StoresContainer storeStyles="mt-[70px]" />
      </div>
    </section>
  );
};
export default MobileApp;
