"use client";
import Logo from "@/components/atoms/logo";
import Nav from "@/components/molecules/nav";
import { header_container, nav_container } from "./LandingHeader.style";
import HeaderBtnContainer from "@/components/molecules/header_btn_container";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { BtnField } from "@/components/atoms/btn_field";

const LandingHeader = () => {
  const locale = useLocale();

  return (
    <section className={header_container}>
      <Logo color="black" />
      <div className={nav_container}>
        <Nav />
        <HeaderBtnContainer />
        <BtnField
          btn_size="auto"
          bg="empty"
          m_top="none"
          textColor="purple"
          onClick={() => {
            setUserLocale(locale === "en" ? "ka" : "en");
          }}
        >
          {locale === "en" ? "ka" : "en"}
        </BtnField>
      </div>
    </section>
  );
};
export default LandingHeader;
