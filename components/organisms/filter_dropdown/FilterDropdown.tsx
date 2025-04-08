"use client";
import { useTranslations } from "next-intl";
import { container, header_container } from "./FilterDropdown.style";
import { useState } from "react";
import { FilterHeaderLeft } from "./filter_header_left";
import { FilterHeaderRight } from "./filter_header_right";
import { FilterContent } from "./filter_content";

const FilterDropdown = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <section className={container}>
      <div className={header_container}>
        <FilterHeaderLeft t={t} dropdown={dropdown} />
        <FilterHeaderRight
          t={t}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
      </div>
      {dropdown && <FilterContent t={t} />}
    </section>
  );
};
export default FilterDropdown;
