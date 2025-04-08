import { HeadingField } from "@/components/atoms/heading_field";
import { useTranslations } from "next-intl";

const header_left = "flex gap-[4px]";

const FilterHeaderLeft = ({
  t,
  dropdown,
}: {
  t: ReturnType<typeof useTranslations>;
  dropdown: boolean;
}) => {
  return (
    <div className={header_left}>
      {dropdown || (
        <>
          <HeadingField
            mt="none"
            weight="bold"
            color="blue"
            heading_size="medium"
          >{`${t("recipes")}`}</HeadingField>
          <HeadingField
            mt="none"
            color="gray"
            heading_size="medium"
            weight="bold"
          >{`/`}</HeadingField>
          <HeadingField
            mt="none"
            color="gray"
            heading_size="medium"
            weight="bold"
          >{`${t("exercise")}`}</HeadingField>
        </>
      )}
      {dropdown && (
        <HeadingField mt="none" heading_size="medium" weight="bold">{`${t(
          "results"
        )}`}</HeadingField>
      )}
    </div>
  );
};
export default FilterHeaderLeft;
