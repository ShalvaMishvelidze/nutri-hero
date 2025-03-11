import Logo from "@/components/atoms/logo";
import { container, paragraph } from "./Copyright.style";
import { useTranslations } from "next-intl";

const Copyright = () => {
  const t = useTranslations("footer");

  return (
    <div className={container}>
      <Logo color="blue" />
      <p className={paragraph}>
        &copy; {t("copyright")} {new Date().getFullYear()}
      </p>
    </div>
  );
};
export default Copyright;
