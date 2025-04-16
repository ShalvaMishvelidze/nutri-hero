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
          <InputField
            white
            placeholder={t("address")}
            value={"23 Watkin Street"}
          />
        </Form.Item>
        <div className="flex gap-[16px]">
          <Form.Item
            name={"gender"}
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <InputField white placeholder={t("city")} value={"Swansea"} />
          </Form.Item>
          <Form.Item
            name={"date_of_birth"}
            rules={[
              {
                required: true,
                message: "Please select your date of birth!",
              },
            ]}
          >
            <InputField white placeholder={t("post_code")} value={"SA16YD"} />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};
export default AccountAddress;
