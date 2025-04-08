import { useTranslations } from "next-intl";
import { FilterForm } from "./filter_form";
import { FilterGrid } from "./filter_grid";

const FilterContent = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <>
      <FilterForm t={t} />
      <FilterGrid />
    </>
  );
};
export default FilterContent;
