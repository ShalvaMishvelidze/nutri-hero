import { BtnField } from "@/components/atoms/btn_field";
import { HeadingField } from "@/components/atoms/heading_field";
import { TitleField } from "@/components/atoms/registration_title";
import { useTranslations } from "next-intl";

const container =
  "relative w-full rounded-[5px] bg-white-6 pl-[25px] pr-[15px] py-[29px] flex justify-between items-center";

const CardBottom = () => {
  const t = useTranslations("progress");

  return (
    <div className={container}>
      <div className="flex flex-col">
        <HeadingField mt="none" heading_size="_13" color="gray" weight="normal">
          {t("card_2.heading")}
        </HeadingField>
        <TitleField title_size="_22" color="gray_60" mb="none">
          {t("card_2.title")}
        </TitleField>
      </div>
      <BtnField btn_size="_139" bg="purple_light" m_top="none">
        {t("card_2.activate")}
      </BtnField>
    </div>
  );
};
export default CardBottom;
