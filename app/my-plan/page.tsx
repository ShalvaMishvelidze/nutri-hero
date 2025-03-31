import "swiper/css";
import "swiper/css/navigation";
import { MyPlanHero } from "@/components/sections/my_plan_hero";
import { Recipes } from "@/components/sections/recipes";
import { Workouts } from "@/components/sections/workouts";
import { getLocale } from "@/actions";
import { getNext30Days } from "@/utils";

const MyPlan = async () => {
  const locale = await getLocale();
  const days = getNext30Days(locale);

  return (
    <section>
      <MyPlanHero />
      <Recipes days={days} />
      <Workouts days={days} />
    </section>
  );
};
export default MyPlan;
