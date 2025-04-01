import "swiper/css";
import "swiper/css/navigation";
import { getLocale } from "@/actions";
import { RecipeIcon } from "@/components/atoms/recipe_icon";
import { TitleField } from "@/components/atoms/registration_title";
import { HeroContainer } from "@/components/sections/hero_container";
import { Recipes } from "@/components/sections/recipes";
import { getNext30Days } from "@/utils";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Tags } from "@/components/molecules/recipe_tags";
import { Table } from "@/components/molecules/recipe_table";
import { HeadingField } from "@/components/atoms/heading_field";
import { StepsContainer } from "@/components/organisms/steps_container";
import { Preferences } from "@/components/molecules/reactions";
import { Ingredients } from "@/components/organisms/ingredients";
import { Tips } from "@/components/molecules/tips";

const SingleRecipe = async () => {
  const locale = await getLocale();
  const days = getNext30Days(locale);
  const t = await getTranslations("single_recipe");

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
      <div className="max-w-[1000px] w-full py-[90px] mx-auto">
        <TitleField title_size="bigger" mb="none">
          {t("title")}
        </TitleField>
        <Tags tags={[1, 2, 3, 4]} />
        <Table />
        <div className="flex w-full gap-[101px]">
          <div className="w-[490px]">
            <StepsContainer t={t} steps={[1, 2, 3, 4, 5]} />
          </div>
          <div className="w-[409px] flex flex-col items-center gap-[30px]">
            <HeadingField
              textAlign="center"
              color="purple"
              heading_size="_13"
              weight="normal"
            >
              {t("preferences")}
            </HeadingField>
            <Preferences
              translationsFieldName={"single_recipe"}
              preferences={[1, 2, 3, 4]}
            />
            <Ingredients t={t} ingredients={[1, 2, 3, 4, 5, 6]} />
            <Tips t={t} />
          </div>
        </div>
      </div>
      <Recipes days={days} />
    </section>
  );
};
export default SingleRecipe;
