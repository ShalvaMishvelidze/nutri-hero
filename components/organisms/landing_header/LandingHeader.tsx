"use client";
import Logo from "@/components/atoms/logo";
import Nav from "@/components/molecules/nav";
import {
  header_container,
  language_btn,
  nav_container,
} from "./LandingHeader.style";
import HeaderBtnContainer from "@/components/molecules/header_btn_container";
import { Button } from "antd";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";

const LandingHeader = () => {
  const locale = useLocale();

  return (
    <section className={header_container}>
      <Logo color="black" />
      <div className={nav_container}>
        <Nav />
        <HeaderBtnContainer />
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
export default LandingHeader;
