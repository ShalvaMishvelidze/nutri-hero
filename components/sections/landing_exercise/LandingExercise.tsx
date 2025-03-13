import { Exercise } from "@/components/organisms/exercise";
import { container } from "./LandingExercise.style";
import { Nutrition } from "@/components/organisms/nutrition";

const LandingExercise = () => {
  return (
    <div className={container}>
      <Exercise />
      <Nutrition />
    </div>
  );
};
export default LandingExercise;
