import { ModalHeading } from "@/components/atoms/modal_heading";
import { motion, Variants } from "framer-motion";
import { or_container, or_div, small_container } from "./LoginForm.style";
import { InputPrimary } from "@/components/atoms/input_primary";
import { InputPostfix } from "@/components/atoms/input_postfix";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { ModalLink } from "@/components/atoms/modal_link";
import { AuthLink } from "@/components/atoms/auth_link";
import { useTranslations } from "next-intl";
import { ModalBtn } from "@/components/atoms/modal_btn";

const LoginForm = ({
  slideInVariants,
  setStep,
}: {
  slideInVariants: Variants;
  setStep: Dispatch<SetStateAction<"login" | "reset_password">>;
}) => {
  const t = useTranslations("login");

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

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
      <form onSubmit={handleSubmit} className="w-[324px]">
        <ModalHeading>{t("welcome")}</ModalHeading>
        <div className={small_container}>
          <InputPrimary
            name="username"
            type="text"
            value={loginUser.username}
            placeholder={t("username")}
            handleChange={(e) =>
              setLoginUser({
                ...loginUser,
                username: e.target.value,
              })
            }
          />
          <InputPrimary
            name="password"
            type="password"
            value={loginUser.password}
            placeholder={t("password")}
            handleChange={(e) =>
              setLoginUser({
                ...loginUser,
                password: e.target.value,
              })
            }
          >
            <InputPostfix onClick={() => setStep("reset_password")}>
              {t("forgot")}
            </InputPostfix>
          </InputPrimary>
        </div>
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
        <ModalBtn
          disabled={(!loginUser.username || !loginUser.password) && true}
        >
          {t("login")}
        </ModalBtn>
        <AuthLink
          text={t("register_text")}
          link="registration"
          link_text={t("register_link")}
        />
      </form>
    </motion.div>
  );
};
export default LoginForm;
