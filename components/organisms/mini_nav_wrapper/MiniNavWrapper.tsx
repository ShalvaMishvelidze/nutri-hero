import { MiniNavHeading } from "@/components/atoms/mini_nav_heading";
import { MiniNav } from "@/components/molecules/mini_nav";
import { container, light_container } from "./MiniNavWrapper.style";

const MiniNavWrapper = ({
  selectedKey,
  setSelectedKey,
  is_light,
  nav_links,
  heading,
}: {
  selectedKey: number;
  setSelectedKey: (key: number) => void;
  is_light?: boolean;
  nav_links: string[];
  heading: string;
}) => {
  return (
    <div className={`${is_light ? light_container : container}`}>
      <MiniNavHeading is_light={is_light}>{heading}</MiniNavHeading>
      <MiniNav
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKey}
        nav_links={nav_links}
        is_light={is_light}
      />
    </div>
  );
};
export default MiniNavWrapper;
