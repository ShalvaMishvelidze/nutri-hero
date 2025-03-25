import { Dispatch, RefObject, SetStateAction } from "react";
import { NavItem } from "./nav_item";
import { CarouselRef } from "antd/es/carousel";

const GoalNav = ({
  section,
  carouselRef,
  setSection,
}: {
  section: 0 | 1 | 2 | 3;
  carouselRef: RefObject<CarouselRef>;
  setSection: Dispatch<SetStateAction<0 | 1 | 2 | 3>>;
}) => {
  return (
    <div className="flex justify-between items-center relative w-full mb-[60px]">
      <NavItem
        carouselRef={carouselRef}
        number={0}
        setSection={setSection}
        section={section}
      />
      <NavItem
        carouselRef={carouselRef}
        number={1}
        setSection={setSection}
        section={section}
      />
      <NavItem
        carouselRef={carouselRef}
        number={2}
        setSection={setSection}
        section={section}
      />
      <NavItem
        carouselRef={carouselRef}
        number={3}
        setSection={setSection}
        section={section}
      />
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 h-[1px] bg-blue-5 right-0 z-1 "></div>
    </div>
  );
};
export default GoalNav;
