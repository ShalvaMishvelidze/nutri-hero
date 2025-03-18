"use client";
import { InputPrimary } from "@/components/atoms/input_primary";
import { ModalBtn } from "@/components/atoms/modal_btn";
import { ModalHeading } from "@/components/atoms/modal_heading";
import { ModalParagraph } from "@/components/atoms/modal_paragraph";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
const ResetPasswordForm = ({
  slideInVariants,
  setStep,
}: {
  slideInVariants: Variants;
  setStep: Dispatch<SetStateAction<"login" | "reset_password">>;
}) => {
  const t = useTranslations("password_reset");
  const [email, setEmail] = useState("");

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
        <ModalHeading>{t("heading")}</ModalHeading>
        <ModalParagraph>{t("paragraph")}</ModalParagraph>
        <InputPrimary
          name="email"
          type="email"
          value={email}
          placeholder={t("email")}
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <ModalBtn onClick={() => setStep("login")}>{t("button")}</ModalBtn>
      </form>
    </motion.div>
  );
};
export default ResetPasswordForm;
