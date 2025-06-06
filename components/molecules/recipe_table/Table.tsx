import { HeadingField } from "@/components/atoms/heading_field";
import { container, table, table_heads, table_item } from "./Table.style";
import { useTranslations } from "next-intl";
import { ParagraphField } from "@/components/atoms/paragraph_field";

const line_style =
  "w-full border-t-[1px] border-t-gray-35 absolute top-1/2 left-0 transform -translate-y-1/2 max-sm:hidden";

const RecipeTable = () => {
  const t = useTranslations("single_recipe");

  return (
    <div className={container}>
      <div className={table_heads}>
        <HeadingField heading_size="small" weight="bold" mt="none">
          {t("facts")}
        </HeadingField>
        <ParagraphField
          styleClassName="max-sm:!mt-0"
          mt="small"
          color="dark_gray"
          heading_size="small"
          weight="normal"
        >
          {t("per")} 100{t("g")}
        </ParagraphField>
      </div>
      <div className={table}>
        <div className={line_style}></div>
        <div className={table_item}>
          <HeadingField heading_size="small" weight="bold" mt="none">
            {t("energy")}
          </HeadingField>
          <ParagraphField
            styleClassName="max-sm:!mt-0"
            mt="small"
            color="dark_gray"
            heading_size="small"
            weight="normal"
          >
            10.2{t("g")}
          </ParagraphField>
        </div>
        <div className={table_item}>
          <HeadingField heading_size="small" weight="bold" mt="none">
            {t("cal")}
          </HeadingField>
          <ParagraphField
            styleClassName="max-sm:!mt-0"
            mt="small"
            color="dark_gray"
            heading_size="small"
            weight="normal"
          >
            10.2{t("g")}
          </ParagraphField>
        </div>
        <div className={table_item}>
          <HeadingField heading_size="small" weight="bold" mt="none">
            {t("fat")}
          </HeadingField>
          <ParagraphField
            styleClassName="max-sm:!mt-0"
            mt="small"
            color="dark_gray"
            heading_size="small"
            weight="normal"
          >
            10.2{t("g")}
          </ParagraphField>
        </div>
        <div className={table_item}>
          <HeadingField heading_size="small" weight="bold" mt="none">
            {t("sat_fat")}
          </HeadingField>
          <ParagraphField
            styleClassName="max-sm:!mt-0"
            mt="small"
            color="dark_gray"
            heading_size="small"
            weight="normal"
          >
            10.2{t("g")}
          </ParagraphField>
        </div>
        <div className={table_item}>
          <HeadingField heading_size="small" weight="bold" mt="none">
            {t("carbs")}
          </HeadingField>
          <ParagraphField
            styleClassName="max-sm:!mt-0"
            mt="small"
            color="dark_gray"
            heading_size="small"
            weight="normal"
          >
            10.2{t("g")}
          </ParagraphField>
        </div>
        <div className={table_item}>
          <HeadingField heading_size="small" weight="bold" mt="none">
            {t("sugar")}
          </HeadingField>
          <ParagraphField
            styleClassName="max-sm:!mt-0"
            mt="small"
            color="dark_gray"
            heading_size="small"
            weight="normal"
          >
            10.2{t("g")}
          </ParagraphField>
        </div>
        <div className={table_item}>
          <HeadingField heading_size="small" weight="bold" mt="none">
            {t("protein")}
          </HeadingField>
          <ParagraphField
            styleClassName="max-sm:!mt-0"
            mt="small"
            color="dark_gray"
            heading_size="small"
            weight="normal"
          >
            10.2{t("g")}
          </ParagraphField>
        </div>
        <div className={table_item}>
          <HeadingField heading_size="small" weight="bold" mt="none">
            {t("salt")}
          </HeadingField>
          <ParagraphField
            styleClassName="max-sm:!mt-0"
            mt="small"
            color="dark_gray"
            heading_size="small"
            weight="normal"
          >
            10.2{t("g")}
          </ParagraphField>
        </div>
      </div>
    </div>
  );
};
export default RecipeTable;
