import "swiper/css";
import "swiper/css/navigation";
import { getLocale } from "@/actions";
import { TitleField } from "@/components/atoms/registration_field";
import { Recipes } from "@/components/sections/recipes";
import { getNext30Days } from "@/utils";
import { getTranslations } from "next-intl/server";
import { Tags } from "@/components/molecules/recipe_tags";
import { Table } from "@/components/molecules/recipe_table";
import { HeadingField } from "@/components/atoms/heading_field";
import { StepsContainer } from "@/components/organisms/steps_container";
import { Preferences } from "@/components/molecules/reactions";
import { Ingredients } from "@/components/organisms/ingredients";
import { Tips } from "@/components/molecules/tips";
import { VideoClientOverlay } from "@/components/sections/video_client_overlay";

const SingleRecipe = async () => {
  const locale = await getLocale();
  const days = getNext30Days(locale);
  const t = await getTranslations("single_recipe");

  return (
    <section>
      <VideoClientOverlay translationFieldName={"single_recipe"} />
      <div className="max-w-[1000px] w-full py-[90px] mx-auto max-xl:px-[30px] max-xm:py-[50px] max-xm:pb-0">
        <TitleField title_size="bigger" mb="none">
          {t("title")}
        </TitleField>
        <Tags tags={[1, 2, 3, 4]} />
        <Table />
        <div className="flex w-full gap-[101px] max-xm:flex-col-reverse max-xm:gap-[50px]">
          <div className="w-[490px] max-xm:w-full">
            <StepsContainer t={t} steps={[1, 2, 3, 4, 5]} />
          </div>
          <div className="w-[409px] max-xm:w-full flex flex-col items-center gap-[30px]">
            <HeadingField
              textAlign="center"
              color="purple"
              textTransform="uppercase"
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
      <div className="max-xl:px-[30px]">
        <Recipes days={days} />
      </div>
    </section>
  );
};
export default SingleRecipe;
