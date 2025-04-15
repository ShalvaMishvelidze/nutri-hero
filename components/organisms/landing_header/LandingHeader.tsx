"use client";
import Logo from "@/components/atoms/logo";
import Nav from "@/components/molecules/nav";
import { header_container, nav_container } from "./LandingHeader.style";
import HeaderBtnContainer from "@/components/molecules/header_btn_container";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { BtnField } from "@/components/atoms/btn_field";
import SidebarSvg from "@/components/icons/SidebarSvg";
import { Sidebar } from "../sidebar";
import { useState } from "react";

const LandingHeader = () => {
  const locale = useLocale();
  const [aside, setAside] = useState(false);

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
      <div className="flex justify-end items-center gap-[20px]">
        <BtnField
          styleClassName="!hidden max-xm:!block"
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
        <BtnField
          styleClassName="[body_&]:!px-0 !hidden max-xm:!block"
          btn_size="auto"
          m_top="none"
          bg="empty"
          onClick={() => {
            setAside(!aside);
          }}
        >
          <SidebarSvg />
        </BtnField>
      </div>
      <Sidebar aside={aside} />
    </section>
  );
};
export default LandingHeader;
