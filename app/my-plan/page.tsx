import "swiper/css";
import "swiper/css/navigation";
import { MyPlanHero } from "@/components/sections/my_plan_hero";
import { Recipes } from "@/components/sections/recipes";
import { Workouts } from "@/components/sections/workouts";

const MyPlan = () => {
  return (
    <section>
      <MyPlanHero />
      <Recipes />
      <Workouts />
    </section>
  );
};
export default MyPlan;
