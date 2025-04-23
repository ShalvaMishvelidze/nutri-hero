import { ContentLeft } from "./content_left";
import { ContentRight } from "./content_right";

const container =
  "flex gap-[16px] max-w-[1000px] w-full mx-auto mb-[20px] max-xl:px-[30px] max-sm:flex-col";
const ProgressContent = () => {
  return (
    <section className={container}>
      <ContentLeft />
      <ContentRight />
    </section>
  );
};
export default ProgressContent;
