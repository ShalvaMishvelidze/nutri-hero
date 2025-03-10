"use client";
import { LandingHeader } from "@/components/organisms/landing_header";
import { LoggedInHeader } from "@/components/organisms/logged_in_header";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <section className="bg-white">
      {pathname === "/" ? <LandingHeader /> : <LoggedInHeader />}
    </section>
  );
};
export default Header;
