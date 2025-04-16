"use client";
import { BtnField } from "@/components/atoms/btn_field";
import { DateInput } from "@/components/atoms/date_input";
import { GenderSelect } from "@/components/atoms/gender_select";
import { InputField } from "@/components/atoms/input_field";
import { TitleField } from "@/components/atoms/registration_field";
import { Form } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

const container =
  "flex justify-center items-center max-w-[1280px] w-full mx-auto gap-[101px] max-lg:gap-[40px]";
const form_container =
  "pr-[140px] max-lg:pr-[40px] max-xm:py-[100px] max-xm:px-[30px]";
const form_style = "!flex !flex-col !flex-wrap !w-full gap-[20px] !mt-[20px]";

const Personal = () => {
  const t = useTranslations("my_plan.personal");
  const router = useRouter();

  return (
    <div className={container}>
      <Image
        className="w-1/2 max-xm:hidden "
        src="/egg-salad.png"
        alt="My Plan"
        width={632}
        height={720}
      />
      <div className={form_container}>
        <TitleField>{t("title")}</TitleField>
        <Form
          onFinish={() => router.push("/my-plan/goal")}
          onValuesChange={(changedValue, allValues) => {
            console.log(changedValue, allValues);
          }}
          className={form_style}
        >
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
            <BtnField
              styleClassName="max-lg:!mt-[10px] max-xm:!w-full"
              btn_size="medium"
              m_top="medium"
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
export default Personal;
