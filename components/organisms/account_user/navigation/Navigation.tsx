import { useTranslations } from "next-intl";
import Link from "next/link";

const container = "flex flex-col gap-[60px] mt-[45px]";
const link_container = "flex flex-col gap-[10px]";
const link_style = "text-[16px] leading-[20px] text-black hover:text-purple";

const Navigation = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <div className={container}>
      <div className={link_container}>
        <Link href={"/account?section=personal_details"} className={link_style}>
          {t("navigation.personal_details")}
        </Link>
        <Link href={"/account?section=allergens"} className={link_style}>
          {t("navigation.allergens")}
        </Link>
        <Link href={"/account?section=settings"} className={link_style}>
          {t("navigation.settings")}
        </Link>
      </div>
      <Link href={"/"} className={link_style}>
        {t("navigation.logout")}
      </Link>
    </div>
  );
};
export default Navigation;
