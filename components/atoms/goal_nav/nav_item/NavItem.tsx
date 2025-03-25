import { Dispatch, RefObject, SetStateAction } from "react";
import { container, container_active } from "./NavItem.style";
import { CarouselRef } from "antd/es/carousel";

const NavItem = ({
  number,
  section,
  setSection,
  carouselRef,
}: {
  number: 0 | 1 | 2 | 3;
  section: 0 | 1 | 2 | 3;
  setSection: Dispatch<SetStateAction<0 | 1 | 2 | 3>>;
  carouselRef: RefObject<CarouselRef>;
}) => {
  return (
    <div
      className={`${section === number ? container_active : container}`}
      onClick={() => {
        setSection(number);
        carouselRef.current?.goTo(number);
      }}
    >
      {number + 1}
    </div>
  );
};
export default NavItem;
