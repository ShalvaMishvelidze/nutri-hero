import { BtnField } from "@/components/atoms/btn_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_field";
import { Switch } from "antd";
import { useTranslations } from "next-intl";

const allergens_container = "flex flex-col gap-[10px] mt-[30px]";
const allergen_container =
  "allergens-container w-full h-[50px] rounded-[5px] border border-blue-5 flex justify-between items-center px-[20px] max-xxs:px-[10px]";

const Allergens = () => {
  const t = useTranslations("account.allergens");
  return (
    <div className="w-full">
      <TitleField weight="bold" title_size="_22" mb="_10">
        {t("title")}
      </TitleField>
      <ParagraphField
        heading_size="small"
        color="dark_gray"
        weight="normal"
        mt="none"
      >
        {t("paragraph")}
      </ParagraphField>
      <div className={allergens_container}>
        {Array.from({ length: 14 }, (_, index) => index + 1).map((item) => (
          <div className={allergen_container} key={`allergen_${item}`}>
            <ParagraphField heading_size="small" mt="none" weight="normal">
              {t(`${item}`)}
            </ParagraphField>
            <Switch
              checkedChildren={t("on")}
              unCheckedChildren={t("off")}
              className="!scale-150 max-xxs:!scale-100"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-[16px] mt-[30px] max-xs:flex-col">
        <BtnField m_top="none" btn_size="medium" bg="gray">
          {t("cancel")}
        </BtnField>
        <BtnField m_top="none" btn_size="medium">
          {t("save")}
        </BtnField>
      </div>
    </div>
  );
};
export default Allergens;
