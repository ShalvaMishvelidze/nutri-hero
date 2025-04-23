"use client";
import { BtnField } from "@/components/atoms/btn_field";
import { HeadingField } from "@/components/atoms/heading_field";
import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const container =
  "relative w-full rounded-[5px] bg-white-6 pl-[25px] pr-[15px] py-[29px] flex justify-between items-center cursor-pointer max-xs:flex-col max-xs:items-start max-xs:gap-[10px] max-xs:p-[10px]";

const CardBottom = () => {
  const router = useRouter();
  const t = useTranslations("progress");

  return (
    <div
      className={container}
      onClick={() => router.push("/my-plan/goal/summary")}
    >
      <div className="flex flex-col">
        <HeadingField mt="none" heading_size="_13" color="gray" weight="normal">
          {t("card_2.heading")}
        </HeadingField>
        <TitleField title_size="_22" color="gray_60" mb="none">
          {t("card_2.title")}
        </TitleField>
      </div>
      <BtnField
        btn_size="_139"
        bg="purple_light"
        m_top="none"
        styleClassName="max-xs:!w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {t("card_2.activate")}
      </BtnField>
    </div>
  );
};
export default CardBottom;
