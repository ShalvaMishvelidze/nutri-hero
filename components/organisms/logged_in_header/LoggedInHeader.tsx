import Logo from "@/components/atoms/logo";
import Nav from "@/components/molecules/nav";
import { header_container } from "./LoggedInHeader.style";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { BtnField } from "@/components/atoms/btn_field";

const LoggedInHeader = () => {
  const locale = useLocale();

  return (
    <section className="w-full shadow-md">
      <div className={header_container}>
        <Logo color="black" />
        <div className="flex gap-[10px]">
          <Nav is_logged_in />
          <BtnField
            btn_size="auto"
            bg="empty"
            m_top="none"
            m_left="medium"
            p_bottom="tiny"
            textColor="purple"
            onClick={() => {
              setUserLocale(locale === "en" ? "ka" : "en");
            }}
          >
            {locale === "en" ? "ka" : "en"}
          </BtnField>
        </div>
      </div>
    </section>
  );
};
export default LoggedInHeader;
