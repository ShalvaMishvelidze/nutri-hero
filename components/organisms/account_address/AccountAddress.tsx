import { InputField } from "@/components/atoms/input_field";
import { TitleField } from "@/components/atoms/registration_field";
import { Form } from "antd";
import { useTranslations } from "next-intl";

const AccountAddress = () => {
  const t = useTranslations("account.address");
  return (
    <div className="flex flex-col gap-[20px]">
      <TitleField title_size="_22" weight="bold" mb="none">
        {t("title")}
      </TitleField>
      <div className="flex flex-col gap-[20px]">
        <Form.Item name={"address"}>
          <InputField white placeholder={t("address")} />
        </Form.Item>
        <div className="flex gap-[16px] max-xs:flex-col">
          <Form.Item
            name={"city"}
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <InputField white placeholder={t("city")} />
          </Form.Item>
          <Form.Item
            name={"post_code"}
            rules={[
              {
                required: true,
                message: "Please select your date of birth!",
              },
            ]}
          >
            <InputField white placeholder={t("post_code")} />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};
export default AccountAddress;
