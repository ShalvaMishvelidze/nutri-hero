"use client";
import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { ModalParagraph } from "@/components/atoms/modal_paragraph";
import { TitleField } from "@/components/atoms/registration_field";
import { Form } from "antd";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Dispatch, FormEvent, SetStateAction } from "react";
const ResetPasswordForm = ({
  slideInVariants,
  setStep,
}: {
  slideInVariants: Variants;
  setStep: Dispatch<SetStateAction<"login" | "reset_password">>;
}) => {
  const t = useTranslations("password_reset");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <motion.div
      key="email"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideInVariants}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <form onSubmit={handleSubmit} className="w-[324px] ">
        <TitleField
          mb="medium"
          title_size="_22"
          styleClassName="text-center max-xm:max-w-[200px] mx-auto "
          weight="bold"
        >
          {t("heading")}
        </TitleField>
        <ModalParagraph>{t("paragraph")}</ModalParagraph>
        <Form>
          <Form.Item name="email">
            <InputField placeholder={t("email")} />
          </Form.Item>
          <BtnField htmlType="submit" onClick={() => setStep("login")}>
            {t("button")}
          </BtnField>
        </Form>
      </form>
    </motion.div>
  );
};
export default ResetPasswordForm;
