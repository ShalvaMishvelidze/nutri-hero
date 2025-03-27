import "swiper/css";
import "swiper/css/navigation";
import { MyPlanHero } from "@/components/sections/my_plan_hero";
import { Recipes } from "@/components/sections/recipes";

const MyPlan = () => {
  return (
    <section>
      <MyPlanHero />
      <Recipes />
    </section>
  );
};
export default MyPlan;
