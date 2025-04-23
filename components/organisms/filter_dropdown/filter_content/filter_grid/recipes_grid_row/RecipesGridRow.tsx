import GridCard from "@/components/organisms/grid_card/GridCard";
import { useTranslations } from "next-intl";
import Link from "next/link";

const RecipesGridRow = () => {
  const t = useTranslations("my_plan.recipes");

  return (
    <>
      <Link href="/my-plan/recipes/1">
        <GridCard
          img_url="/recipe-1.png"
          title={t("1.name")}
          paragraph={t("1.type")}
        />
      </Link>
      <Link href="/my-plan/recipes/2">
        <GridCard
          img_url="/recipe-2.png"
          title={t("2.name")}
          paragraph={t("2.type")}
        />
      </Link>
      <Link href="/my-plan/recipes/3">
        <GridCard
          img_url="/recipe-3.png"
          title={t("3.name")}
          paragraph={t("3.type")}
        />
      </Link>
    </>
  );
};
export default RecipesGridRow;
