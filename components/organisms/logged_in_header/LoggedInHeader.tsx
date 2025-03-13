import Logo from "@/components/atoms/logo";
import Nav from "@/components/molecules/nav";
import { header_container } from "./LoggedInHeader.style";

const LoggedInHeader = () => {
  return (
    <section className={header_container}>
      <Logo color="black" />
      <Nav is_logged_in />
    </section>
  );
};
export default LoggedInHeader;
