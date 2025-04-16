import HeaderBtnContainer from "@/components/molecules/header_btn_container";
import {
  landing_links,
  logged_in_links,
} from "@/components/molecules/nav/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Sidebar = ({
  is_logged_in,
  aside,
}: {
  is_logged_in?: boolean;
  aside: boolean;
}) => {
  const t = useTranslations("header");
  return (
    <nav
      className={`absolute hidden max-xm:flex top-[80px] left-0 w-full bg-white shadow-md flex-col gap-[20px] justify-center items-end [&_a]:w-max px-[30px] transition-h duration-[400ms] overflow-hidden ${
        aside ? "h-[320px]" : "h-0"
      }`}
    >
      {is_logged_in
        ? logged_in_links.map((link) => {
            return (
              <Link key={link} href={`/${link}`}>
                {t(link)}
              </Link>
            );
          })
        : landing_links.map((link) => {
            return (
              <Link key={link} href={`/#${link}`}>
                {t(link)}
              </Link>
            );
          })}
      <HeaderBtnContainer />
    </nav>
  );
};
export default Sidebar;
