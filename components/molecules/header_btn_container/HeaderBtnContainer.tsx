import { useTranslations } from "next-intl";
import { btn_empty, btn_filled, container } from "./HeaderBtnContainer.style";
import { Btn } from "@/components/atoms/btn";
import Link from "next/link";

const HeaderBtnContainer = () => {
  const t = useTranslations("header");

  return (
    <div className={container}>
      <Link href="/auth?signup=true">
        <Btn className={btn_filled}>{t("sign_up")}</Btn>
      </Link>
      <Link href="/auth?login=true">
        <Btn className={btn_empty}>{t("login")}</Btn>
      </Link>
    </div>
  );
};
export default HeaderBtnContainer;
