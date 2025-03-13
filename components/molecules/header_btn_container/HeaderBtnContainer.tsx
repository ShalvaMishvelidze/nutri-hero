import { useTranslations } from "next-intl";
import { btn_empty, btn_filled, container } from "./HeaderBtnContainer.style";
import { Btn } from "@/components/atoms/btn";

const HeaderBtnContainer = () => {
  const t = useTranslations("header");

  return (
    <div className={container}>
      <Btn className={btn_filled}>{t("sign_up")}</Btn>
      <Btn className={btn_empty}>{t("login")}</Btn>
    </div>
  );
};
export default HeaderBtnContainer;
