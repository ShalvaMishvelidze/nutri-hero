import { useTranslations } from "next-intl";
import { btn_empty, btn_filled, container } from "./HeaderBtnContainer.style";
import { Btn } from "@/components/atoms/btn";
import Link from "next/link";

const HeaderBtnContainer = () => {
  const t = useTranslations("header");

  return (
    <div className={container}>
      <Link href="/register">
        <Btn className={btn_filled}>{t("sign_up")}</Btn>
      </Link>
      <Link href="/login">
        <Btn className={btn_empty}>{t("login")}</Btn>
      </Link>
    </div>
  );
};
export default HeaderBtnContainer;
