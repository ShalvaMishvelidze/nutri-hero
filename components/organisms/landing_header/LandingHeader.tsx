import Logo from "@/components/atoms/logo";
import Nav from "@/components/molecules/nav";
import { header_container, nav_container } from "./LandingHeader.style";
import HeaderBtnContainer from "@/components/molecules/header_btn_container";

const LandingHeader = () => {
  return (
    <section className={header_container}>
      <Logo color="black" />
      <div className={nav_container}>
        <Nav />
        <HeaderBtnContainer />
      </div>
    </section>
  );
};
export default LandingHeader;
