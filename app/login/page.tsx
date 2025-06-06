"use client";
import { ModalWrapper } from "@/components/organisms/modal_wrapper";
import { HeroContainer } from "@/components/sections/hero_container";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoginForm } from "@/components/organisms/login";
import { ResetPasswordForm } from "@/components/organisms/reset_password_form";

const slideInVariants = {
  reset_password: {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  login: {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
};

const Login = () => {
  const [step, setStep] = useState<"login" | "reset_password">("login");

  return (
    <HeroContainer childrenWidth="full">
      <motion.div
        layout
        className="relative overflow-hidden transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          <ModalWrapper styleClassNames="pt-[50px] max-xm:py-[30px] pb-[42px] max-xm:!max-w-[420px] max-xm:!w-full max-xm:!px-[60px] max-sm:!px-[30px] flex justify-center w-max mx-auto">
            {step === "login" && (
              <LoginForm
                slideInVariants={slideInVariants.login}
                setStep={setStep}
              />
            )}
            {step === "reset_password" && (
              <ResetPasswordForm
                slideInVariants={slideInVariants.reset_password}
                setStep={setStep}
              />
            )}
          </ModalWrapper>
        </AnimatePresence>
      </motion.div>
    </HeroContainer>
  );
};
export default Login;
