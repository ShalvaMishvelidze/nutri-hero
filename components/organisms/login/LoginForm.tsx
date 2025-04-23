"use client";
import { motion, Variants } from "framer-motion";
import { or_container, or_div, small_container } from "./LoginForm.style";
import { InputPostfix } from "@/components/atoms/input_postfix";
import { Dispatch, SetStateAction } from "react";
import { ModalLink } from "@/components/atoms/modal_link";
import { AuthLink } from "@/components/atoms/auth_link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { setIsLoggedInCookie } from "@/actions";
import { TitleField } from "@/components/atoms/registration_field";
import { Form } from "antd";
import { InputField } from "@/components/atoms/input_field";
import { BtnField } from "@/components/atoms/btn_field";

const LoginForm = ({
  slideInVariants,
  setStep,
}: {
  slideInVariants: Variants;
  setStep: Dispatch<SetStateAction<"login" | "reset_password">>;
}) => {
  const router = useRouter();
  const t = useTranslations("login");

  return (
    <motion.div
      key={"login"}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideInVariants}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="w-full">
        <TitleField
          mb="medium"
          title_size="_22"
          styleClassName="text-center max-xm:max-w-[200px] mx-auto "
          weight="bold"
        >
          {t("welcome")}
        </TitleField>
        <Form
          onFinish={() => {
            setIsLoggedInCookie(true).then(() => {
              router.push("/my-plan");
            });
          }}
          className={small_container}
        >
          <Form.Item
            rules={[{ required: true, message: "Please enter your username!" }]}
            name="username"
          >
            <InputField placeholder={t("username")} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please enter your password!" }]}
            name="password"
          >
            <InputField
              placeholder={t("password")}
              type="password"
              suffix={
                <InputPostfix onClick={() => setStep("reset_password")}>
                  {t("forgot")}
                </InputPostfix>
              }
            />
          </Form.Item>
          <div className={or_container}>
            <div className={or_div}></div>
            <span className="text-gray-45">{t("or")}</span>
            <div className={or_div}></div>
          </div>
          <div className={small_container}>
            <ModalLink href="#" img_url="/google.svg">
              {t("google")}
            </ModalLink>
            <ModalLink href="#" img_url="/facebook.svg">
              {t("facebook")}
            </ModalLink>
          </div>
          <BtnField htmlType="submit">{t("login")}</BtnField>
        </Form>
        <AuthLink
          text={t("register_text")}
          link="registration"
          link_text={t("register_link")}
        />
      </div>
    </motion.div>
  );
};
export default LoginForm;
