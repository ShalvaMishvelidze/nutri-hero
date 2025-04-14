"use client";
import { DateInput } from "@/components/atoms/date_input";
import { GenderSelect } from "@/components/atoms/gender_select";
import { InputField } from "@/components/atoms/input_field";
import { TitleField } from "@/components/atoms/registration_title";
import { Form } from "antd";
import { useTranslations } from "next-intl";

const PersonalDetails = () => {
  const t = useTranslations("account.personal_details");
  return (
    <div className="flex flex-col gap-[20px]">
      <TitleField title_size="_22" weight="bold" mb="none">
        {t("title")}
      </TitleField>
      <div className="flex flex-col gap-[20px]">
        <Form.Item name={"username"}>
          <InputField
            white
            placeholder={t("username")}
            value={"TheRuthIsOnFire"}
          />
        </Form.Item>
        <Form.Item name={"first_name"}>
          <InputField white placeholder={t("first_name")} value={"Ruth"} />
        </Form.Item>
        <Form.Item name={"last_name"}>
          <InputField white placeholder={t("last_name")} value={"Mendoza"} />
        </Form.Item>
        <div className="flex gap-[16px]">
          <Form.Item
            name={"gender"}
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <GenderSelect
              placeholder={t("gender")}
              male={t("male")}
              female={t("female")}
              img_url="/check-purple.svg"
              white
              value="Female"
            />
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
            <DateInput
              img_url="/calendar-purple.svg"
              placeholder={t("date_of_birth")}
              white
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};
export default PersonalDetails;
