import { HeadingField } from "../heading_field";
import { TitleField } from "../registration_title";
import { number_cards } from "./NumberCard.style";

const NumberCard = ({
  title,
  heading,
  size = "big",
}: {
  title: string;
  heading: string;
  size?: "big" | "normal";
}) => {
  return (
    <>
      {size === "big" && (
        <div className={number_cards}>
          <TitleField color="white" title_size="giant" mb="none">
            {title}
          </TitleField>
          <HeadingField
            mt="none"
            color="white"
            weight="normal"
            heading_size="_20"
          >
            {heading}
          </HeadingField>
        </div>
      )}
      {size === "normal" && (
        <div className={number_cards}>
          <TitleField weight="bold" color="white" title_size="bigger" mb="none">
            {title}
          </TitleField>
          <HeadingField
            mt="none"
            color="white"
            weight="normal"
            heading_size="_13"
          >
            {heading}
          </HeadingField>
        </div>
      )}
    </>
  );
};
export default NumberCard;
