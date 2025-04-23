import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { TitleField } from "@/components/atoms/registration_field";
import { Form } from "antd";
import { useTranslations } from "next-intl";

const ContactDetails = () => {
  const t = useTranslations("account.contact_details");
  return (
    <div className="flex flex-col gap-[20px]">
      <TitleField title_size="_22" weight="bold" mb="none">
        {t("title")}
      </TitleField>
      <div className="flex flex-col gap-[20px]">
        <Form.Item name={"phone"}>
          <InputField white placeholder={t("phone")} />
        </Form.Item>
        <Form.Item name={"email"}>
          <InputField white placeholder={t("email")} />
        </Form.Item>
      </div>
      <div className="flex justify-end gap-[16px]">
        <BtnField btn_size="medium" bg="gray">
          {t("cancel")}
        </BtnField>
        <BtnField btn_size="medium">{t("save")}</BtnField>
      </div>
    </div>
  );
};
export default ContactDetails;
