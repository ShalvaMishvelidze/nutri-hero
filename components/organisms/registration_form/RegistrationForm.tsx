"use client";
import { small_container, terms_container } from "./RegistrationForm.style";
import { ModalLink } from "@/components/atoms/modal_link";
import { AuthLink } from "@/components/atoms/auth_link";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Form } from "antd";
import { RadioInputs } from "../radio_inputs";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const t = useTranslations("registration");
  const router = useRouter();

  const onValuesChange = (
    changedValues: Record<string, unknown>,
    allValues: Record<string, unknown>
  ) => {
    console.log("onValuesChange:", changedValues, allValues);
  };

  const onFinish = (values: Record<string, unknown>) => {
    console.log("onFinish:", values);
    router.push("/registration/password");
  };

  return (
    <Form
      form={form}
      name="basic"
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      autoComplete="off"
      className="w-[324px] max-xm:w-8/12 max-sm:w-full"
    >
      <div className={small_container}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          className="[body_&]:mb-0"
        >
          <InputField
            placeholder={` ${t("email")}`}
            rootClassName="custom-input"
            type="email"
            prefix={
              <Image src={"/email.svg"} alt="email" width={22} height={22} />
            }
            white
          />
        </Form.Item>
        <ModalLink href="#" img_url="/google.svg">
          {t("google")}
        </ModalLink>
        <ModalLink href="#" img_url="/facebook.svg">
          {t("facebook")}
        </ModalLink>
      </div>
      <div className={terms_container}>
        <Form.Item
          name="terms"
          valuePropName="checked"
          className="[body_&]:mb-0"
        >
          <div className="flex items-center justify-between">
            <RadioInputs
              paragraphs={[
                <ParagraphField
                  key={"custom_registration_radio"}
                  mt="none"
                  heading_size="_12_22"
                  color="gray_60"
                  weight="light"
                >
                  {t("i_have")}{" "}
                  <Link className="text-purple hover:underline" href="/terms">
                    {t("terms")}
                  </Link>
                </ParagraphField>,
              ]}
              form={form}
              name="terms"
              radioJustify="between"
              w="full"
              childrenAreString={false}
            />
          </div>
        </Form.Item>
      </div>
      <Form.Item className="[body_&]:mb-0">
        <BtnField htmlType="submit" styleClassName="max-xm:!mt-[5px]">
          {t("button")}
        </BtnField>
      </Form.Item>
      <AuthLink
        text={t("login_text")}
        link="login"
        link_text={t("login_link")}
      />
    </Form>
  );
};
export default RegistrationForm;
