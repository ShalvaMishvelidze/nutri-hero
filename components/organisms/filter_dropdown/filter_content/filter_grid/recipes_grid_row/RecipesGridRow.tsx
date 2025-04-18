import GridCard from "@/components/organisms/grid_card/GridCard";
import { useTranslations } from "next-intl";

const RecipesGridRow = () => {
  const t = useTranslations("my_plan.recipes");

  return (
    <>
      <GridCard
        img_url="/recipe-1.png"
        title={t("1.name")}
        paragraph={t("1.type")}
      />
      <GridCard
        img_url="/recipe-2.png"
        title={t("2.name")}
        paragraph={t("2.type")}
      />
      <GridCard
        img_url="/recipe-3.png"
        title={t("3.name")}
        paragraph={t("3.type")}
      />
    </>
  );
};
export default RecipesGridRow;
