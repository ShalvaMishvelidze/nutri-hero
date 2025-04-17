import { useTranslations } from "next-intl";
import { FilterForm } from "./filter_form";
import { FilterGrid } from "./filter_grid";

const FilterContent = ({
  t,
  dropdown,
}: {
  t: ReturnType<typeof useTranslations>;
  dropdown: boolean;
}) => {
  return (
    <>
      {dropdown && <FilterForm t={t} />}
      <FilterGrid />
    </>
  );
};
export default FilterContent;
