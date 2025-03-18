import { motion, Variants } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
const ResetPasswordForm = ({
  slideInVariants,
  setStep,
}: {
  slideInVariants: Variants;
  setStep: Dispatch<SetStateAction<"login" | "reset_password">>;
}) => {
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
      <div className="w-[324px]">
        <button onClick={() => setStep("login")}>login</button>
      </div>
    </motion.div>
  );
};
export default ResetPasswordForm;
