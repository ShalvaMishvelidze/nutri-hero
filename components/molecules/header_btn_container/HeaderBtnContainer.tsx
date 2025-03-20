import { useTranslations } from "next-intl";
import { container } from "./HeaderBtnContainer.style";
import Link from "next/link";
import { BtnField } from "@/components/atoms/btn_field";

const HeaderBtnContainer = () => {
  const t = useTranslations("header");

  return (
    <div className={container}>
      <Link href="/registration">
        <BtnField btn_size="small" m_top="none">
          {t("sign_up")}
        </BtnField>
      </Link>
      <Link href="/login">
        <BtnField btn_size="auto" m_top="none" bg="empty">
          {t("login")}
        </BtnField>
      </Link>
    </div>
  );
};
export default HeaderBtnContainer;
