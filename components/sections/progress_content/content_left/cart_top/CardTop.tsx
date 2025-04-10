"use client";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_title";
import { EditBtn } from "@/components/sections/progress_header/progress_header_cards/progress_header_card/edit_btn";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

const container =
  "relative w-full rounded-[5px] bg-white-6 px-[25px] py-[16px] cursor-pointer";
const btn_container = "absolute top-[12px] right-[10px]";

const CartTop = () => {
  const router = useRouter();
  const t = useTranslations("progress");
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div
      className={container}
      onClick={() => router.push("/my-plan/goal/summary")}
    >
      <div className={btn_container}>
        <EditBtn
          isEditing={isEditing}
          edit={t("edit")}
          save={t("save")}
          setIsEditing={setIsEditing}
        />
      </div>
      <HeadingField mt="none" heading_size="_13" color="gray" weight="normal">
        {t("card_1.heading")}
      </HeadingField>
      <TitleField
        styleClassName="[&]:tracking-[1.2px]"
        title_size="medium"
        textCase="uppercase"
        mb="none"
      >
        {t("card_1.title")}
      </TitleField>
      <ParagraphField
        mt="none"
        heading_size="small"
        color="gray_60"
        weight="normal"
      >
        {t("card_1.paragraph")}
      </ParagraphField>
    </div>
  );
};
export default CartTop;
