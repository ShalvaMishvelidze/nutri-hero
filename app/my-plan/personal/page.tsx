"use client";
import { BtnField } from "@/components/atoms/btn_field";
import { DateInput } from "@/components/atoms/date_input";
import { GenderSelect } from "@/components/atoms/gender_select";
import { InputField } from "@/components/atoms/input_field";
import { TitleField } from "@/components/atoms/registration_field";
import { Form } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Personal = () => {
  const t = useTranslations("my_plan.personal");

  return (
    <div className="flex justify-center items-center max-w-[1280px] w-full mx-auto gap-[101px]">
      <Image
        className="w-1/2"
        src="/egg-salad.png"
        alt="My Plan"
        width={632}
        height={720}
      />
      <div className="pr-[140px]">
        <TitleField>{t("title")}</TitleField>
        <Form className="!flex !flex-col !flex-wrap !w-full gap-[20px] !mt-[20px]">
          <Form.Item
            name={"username"}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <InputField placeholder={t("username")} />
          </Form.Item>
          <div className="flex gap-[20px]">
            <Form.Item
              name={"first_name"}
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <InputField placeholder={t("first_name")} />
            </Form.Item>
            <Form.Item
              name={"last_name"}
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <InputField placeholder={t("last_name")} />
            </Form.Item>
          </div>
          <div className="flex gap-[20px]">
            <Form.Item
              name={"gender"}
              rules={[
                { required: true, message: "Please select your gender!" },
              ]}
            >
              <GenderSelect
                placeholder={t("gender")}
                male={t("male")}
                female={t("female")}
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
              <DateInput placeholder={t("date_of_birth")} />
            </Form.Item>
          </div>
          <div className="flex justify-end">
            <BtnField btn_size="medium" m_top="medium">
              {t("button")}
            </BtnField>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Personal;
