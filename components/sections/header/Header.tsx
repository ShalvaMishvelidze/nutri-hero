"use client";
import { LandingHeader } from "@/components/organisms/landing_header";
import { LoggedInHeader } from "@/components/organisms/logged_in_header";
import { usePathname } from "next/navigation";
import { container } from "./Header.style";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <section className={container}>
        {pathname === "/" ? <LandingHeader /> : <LoggedInHeader />}
      </section>
      {/* spacer */}
      <div className="w-full h-[80px]"></div>
    </>
  );
};
export default Header;
