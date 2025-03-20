import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { RegistrationParagraph } from "@/components/atoms/registration_paragraph";
import { RegistrationTitle } from "@/components/atoms/registration_title";
import { Form } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Password = () => {
  const t = useTranslations("registration_password");

  return (
    <div className="max-w-[1280px] w-full flex gap-[101px] justify-center items-center">
      <Image
        className="w-1/2"
        src={"/girl-with-food.png"}
        alt="girl with food"
        width={632}
        height={720}
      />
      <div className="w-full pr-[140px]">
        <Form name="basic">
          <RegistrationTitle>{t("title")}</RegistrationTitle>
          <RegistrationParagraph>{t("paragraph")}</RegistrationParagraph>
          <div className="gap-[20px] mt-[30px] flex flex-col">
            {/* <Form.Item name={"password"}> */}
            <InputField
              name="password"
              placeholder={t("password")}
              input_size={"full"}
            />
            {/* </Form.Item> */}
            {/* <Form.Item> */}
            <InputField
              name="confirm_password"
              placeholder={t("confirm_password")}
              input_size={"full"}
            />
            {/* </Form.Item> */}
          </div>
        </Form>
        <div className="flex justify-end">
          <BtnField btn_size="medium" m_top="big">
            <Link href={"/registration/success"}>{t("button")}</Link>
          </BtnField>
        </div>
      </div>
    </div>
  );
};
export default Password;
