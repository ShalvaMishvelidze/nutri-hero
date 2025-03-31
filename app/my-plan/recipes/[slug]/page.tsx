import { RecipeIcon } from "@/components/atoms/recipe_icon";
import { TitleField } from "@/components/atoms/registration_title";
import { HeroContainer } from "@/components/sections/hero_container";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SingleRecipe = () => {
  const t = useTranslations("single_recipe");

  return (
    <section>
      <HeroContainer items="end" overlay img_url="/recipe-bg.png">
        <div className="flex flex-col items-center gap-[20px] mb-[144px]">
          <Image
            src={"/play.svg"}
            alt="play"
            width={50}
            height={50}
            className="size-[50px]"
          />
          <TitleField textCase="uppercase" title_size="biggest" color="white">
            {t("title")}
          </TitleField>
        </div>
        <div className="flex gap-[45px] justify-center items-center">
          <RecipeIcon
            icon_url="/clock.svg"
            paragraph={t("prep_time")}
            heading={t("n_a")}
          />
          <RecipeIcon
            icon_url="/clock.svg"
            paragraph={t("cook_time")}
            heading={`10${t("min")}`}
          />
          <RecipeIcon
            icon_url="/eat.svg"
            paragraph={t("serves")}
            heading={"2"}
          />
          <RecipeIcon
            icon_url="/bars.svg"
            paragraph={t("difficulty")}
            heading={t("easy")}
          />
        </div>
      </HeroContainer>
    </section>
  );
};
export default SingleRecipe;
