import { CardBottom } from "./card_bottom";
import { CardTop } from "./cart_top";

const container = "max-w-[664px] w-full min-w-[324px] flex flex-col gap-[16px]";

const ContentLeft = () => {
  return (
    <div className={container}>
      <CardTop />
      <CardBottom />
    </div>
  );
};
export default ContentLeft;
