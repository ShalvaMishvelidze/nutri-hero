import "swiper/css";
import "swiper/css/navigation";
import { getLocale } from "@/actions";
import { TitleField } from "@/components/atoms/registration_title";
import { getNext30Days } from "@/utils";
import { getTranslations } from "next-intl/server";
import { Tags } from "@/components/molecules/recipe_tags";
import { HeadingField } from "@/components/atoms/heading_field";
import { StepsContainer } from "@/components/organisms/steps_container";
import { Preferences } from "@/components/molecules/reactions";
import { Tips } from "@/components/molecules/tips";
import { Workouts } from "@/components/sections/workouts";
import { VideoClientOverlay } from "@/components/sections/video_client_overlay";

const SingleWorkout = async () => {
  const locale = await getLocale();
  const days = getNext30Days(locale);
  const t = await getTranslations("single_workout");

  return (
    <section>
      <VideoClientOverlay translationFieldName={"single_workout"} />
      <div className="max-w-[1000px] w-full py-[90px] mx-auto">
        <TitleField title_size="bigger" mb="none">
          {t("second_title")}
        </TitleField>
        <Tags tags={[1, 2, 3, 4]} />
        <div className="flex w-full gap-[101px]">
          <div className="w-[490px] mt-[65px]">
            <StepsContainer t={t} steps={[1, 2, 3, 4, 5]} />
          </div>
          <div className="w-[409px] flex flex-col items-center gap-[30px]">
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
            <Tips t={t} />
          </div>
        </div>
      </div>
      <Workouts days={days} />
    </section>
  );
};
export default SingleWorkout;
