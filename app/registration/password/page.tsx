"use client";
import { Form } from "antd";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { TitleField } from "@/components/atoms/registration_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { useRouter } from "next/navigation";

const container =
  "max-w-[1280px] w-full mx-auto flex gap-[101px] justify-center items-center max-lg:gap-[40px] ";
const form_container =
  "w-1/2 max-xm:max-w-[500px] max-xm:w-full max-xm:py-[120px] pr-[140px] max-lg:pr-[40px] max-xm:px-[30px]";

const Password = () => {
  const t = useTranslations("registration_password");
  const [form] = Form.useForm();
  const router = useRouter();

  return (
    <div className={container}>
      <Image
        className="w-1/2 max-xm:hidden"
        src={"/girl-with-food.png"}
        alt="girl with food"
        width={632}
        height={720}
      />
      <div className={form_container}>
        <Form
          form={form}
          name="basic"
          onFinish={() => router.push("/registration/success")}
        >
          <TitleField title_size="big" weight="bold" mb="none">
            {t("title")}
          </TitleField>
          <ParagraphField
            weight="normal"
            heading_size="tiny"
            mt="small"
            color="gray_60"
          >
            {t("paragraph")}
          </ParagraphField>
          <div className="gap-[20px] mt-[30px] flex flex-col ">
            <Form.Item
              name={"password"}
              rules={[
                { required: true, message: "Please enter password!" },
                {
                  min: 8,
                  message: "Password must be at least 8 characters long!",
                },
                {
                  pattern: /(?=.*[0-9])/,
                  message: "Password must contain at least one number!",
                },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                  message:
                    "Password must contain at least one upper and lower case letters!",
                },
                {
                  pattern: /^\S*$/,
                  message: "Password must not contain spaces!",
                },
              ]}
            >
              <InputField
                name="password"
                placeholder={t("password")}
                input_size={"full"}
                type="password"
              />
            </Form.Item>
            <Form.Item
              name="confirm_password"
              rules={[
                { required: true, message: "Please enter password again!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <InputField
                name="confirm_password"
                placeholder={t("confirm_password")}
                input_size={"full"}
                type="password"
              />
            </Form.Item>
          </div>
          <div className="flex justify-end">
            <BtnField
              styleClassName="max-lg:!mt-[50px] max-xm:!mt-[30px] max-xm:!w-full"
              btn_size="medium"
              m_top="big"
              htmlType="submit"
            >
              {t("button")}
            </BtnField>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Password;
