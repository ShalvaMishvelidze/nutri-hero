import { useTranslations } from "next-intl";
import { container } from "./HeaderBtnContainer.style";
import { Btn } from "@/components/atoms/btn";

const HeaderBtnContainer = () => {
  const t = useTranslations("header");

  return (
    <div className={container}>
      <Btn>{t("sign_up")}</Btn>
      <Btn>{t("login")}</Btn>
    </div>
  );
};
export default HeaderBtnContainer;
