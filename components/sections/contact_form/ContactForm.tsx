"use client";
import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_title";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("contact.get_in_touch");

  return (
    <div>
      <TitleField styleClassName="mt-[40px]" mb="none" title_size="medium">
        {t("title")}
      </TitleField>
      <ParagraphField>{t("paragraph")}</ParagraphField>
      <Form className="!mt-[30px] flex flex-col gap-[20px]">
        <div className="flex gap-[16px]">
          <Form.Item
            name={"email"}
            rules={[
              {
                required: true,
                message:
                  "You can't submit your message without valid email address!",
              },
            ]}
          >
            <InputField placeholder={t("email")} type="email" white />
          </Form.Item>
          <Form.Item
            name={"name"}
            rules={[
              {
                required: true,
                message:
                  "You can't submit your message without providing name field!",
              },
            ]}
          >
            <InputField placeholder={t("name")} type="text" white />
          </Form.Item>
        </div>
        <Form.Item
          name={"subject"}
          rules={[
            {
              required: true,
              message:
                "You can't submit your message without providing subject field!",
            },
          ]}
        >
          <InputField placeholder={t("subject")} type="text" white />
        </Form.Item>
        <Form.Item
          name={"message"}
          rules={[
            {
              required: true,
              message: "You can't submit an empty message!",
            },
            {
              min: 10,
              max: 500,
              message:
                "Your message should be between 10 and 500 characters long!",
            },
          ]}
        >
          <TextArea
            placeholder={t("message")}
            className="!h-[150px]"
            style={{ resize: "none" }}
          />
        </Form.Item>
        <div className="flex justify-end">
          <BtnField htmlType="submit" btn_size="medium" m_top="_10">
            {t("btn")}
          </BtnField>
        </div>
      </Form>
    </div>
  );
};
export default ContactForm;
