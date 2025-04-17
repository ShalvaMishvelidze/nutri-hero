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
      <div className="max-xl:px-[30px]">
        <Recipes days={days} />
        <Workouts days={days} />
      </div>
    </section>
  );
};
export default MyPlan;
