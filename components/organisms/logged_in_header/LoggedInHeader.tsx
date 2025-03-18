import Logo from "@/components/atoms/logo";
import Nav from "@/components/molecules/nav";
import { header_container, language_btn } from "./LoggedInHeader.style";
import { Button } from "antd";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";

const LoggedInHeader = () => {
  const locale = useLocale();

  return (
    <section className={header_container}>
      <Logo color="black" />
      <div className="flex gap-[10px]">
        <Nav is_logged_in />
        <Button
          className={language_btn}
          onClick={() => {
            setUserLocale(locale === "en" ? "ka" : "en");
          }}
        >
          {locale === "en" ? "ka" : "en"}
        </Button>
      </div>
    </section>
  );
};
export default LoggedInHeader;
