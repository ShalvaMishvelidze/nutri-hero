import { HeadingField } from "@/components/atoms/heading_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import {
  filter_container,
  filter_icon,
  header_right,
  sort_bottom,
  sort_container,
  sort_icon,
  sort_top,
} from "./FilterHeaderRight.style";

const FilterHeaderRight = ({
  t,
  dropdown,
  setDropdown,
}: {
  t: ReturnType<typeof useTranslations>;
  dropdown: boolean;
  setDropdown: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className={header_right}>
      <div className={sort_container}>
        <Image
          src={"/sort.svg"}
          alt="sort"
          width={16}
          height={16}
          className={sort_icon}
        />
        <HeadingField
          heading_size="_13"
          color="blue"
          styleClassName={sort_top}
          mt="none"
          textWrap="wrap"
          maxLength={18}
        >{`${t("sort.1")}`}</HeadingField>
        <HeadingField
          heading_size="_13"
          color="blue"
          styleClassName={sort_bottom}
          mt="none"
          textWrap="wrap"
          maxLength={18}
        >{`${t("sort.2")}`}</HeadingField>
      </div>
      <div className={filter_container} onClick={() => setDropdown(!dropdown)}>
        <Image
          src={"/filter.svg"}
          alt="filter"
          width={16}
          height={16}
          className={filter_icon}
        />
      </div>
    </div>
  );
};
export default FilterHeaderRight;
