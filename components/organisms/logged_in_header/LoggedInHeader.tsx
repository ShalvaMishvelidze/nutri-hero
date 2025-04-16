"use client";
import Logo from "@/components/atoms/logo";
import Nav from "@/components/molecules/nav";
import { header_container } from "./LoggedInHeader.style";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { BtnField } from "@/components/atoms/btn_field";
import SidebarSvg from "@/components/icons/SidebarSvg";
import { Sidebar } from "../sidebar";
import { useState } from "react";

const LoggedInHeader = () => {
  const locale = useLocale();
  const [aside, setAside] = useState(false);

  return (
    <section className="w-full shadow-md max-xl:px-[30px]">
      <div className={header_container}>
        <Logo color="black" />
        <div className="flex gap-[10px] max-xm:hidden">
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
        <Sidebar is_logged_in aside={aside} />
      </div>
    </section>
  );
};
export default LoggedInHeader;
