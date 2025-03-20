"use client";
import { Form } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { RegistrationParagraph } from "@/components/atoms/registration_paragraph";
import { TitleField } from "@/components/atoms/registration_title";

const Password = () => {
  const t = useTranslations("registration_password");
  const [form] = Form.useForm();
  return (
    <div className="max-w-[1280px] w-full mx-auto flex gap-[101px] justify-center items-center">
      <Image
        className="w-1/2"
        src={"/girl-with-food.png"}
        alt="girl with food"
        width={632}
        height={720}
      />
      <div className="w-1/2 pr-[140px]">
        <Form form={form} name="basic">
          <TitleField>{t("title")}</TitleField>
          <RegistrationParagraph>{t("paragraph")}</RegistrationParagraph>
          <div className="gap-[20px] mt-[30px] flex flex-col ">
            <Form.Item
              name={"password"}
              rules={[{ required: true, message: "Please enter password!" }]}
            >
              <InputField
                name="password"
                placeholder={t("password")}
                input_size={"full"}
              />
            </Form.Item>
            <Form.Item
              name="confirm_password"
              rules={[
                { required: true, message: "Please enter password again!" },
              ]}
            >
              <InputField
                name="confirm_password"
                placeholder={t("confirm_password")}
                input_size={"full"}
              />
            </Form.Item>
          </div>
          <div className="flex justify-end">
            <BtnField btn_size="medium" m_top="big">
              <Link href={"/registration/success"}>{t("button")}</Link>
            </BtnField>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Password;
