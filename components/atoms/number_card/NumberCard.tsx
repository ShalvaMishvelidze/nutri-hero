import { HeadingField } from "../heading_field";
import { TitleField } from "../registration_title";
import { Color } from "./NumberCard.config";
import { number_cards } from "./NumberCard.style";

const NumberCard = ({
  title,
  heading,
  size = "big",
  color = "white",
}: {
  title: string;
  heading: string;
  size?: "big" | "normal" | "small";
  color?: keyof typeof Color;
}) => {
  return (
    <>
      {size === "big" && (
        <div className={number_cards}>
          <TitleField color={Color[color]} title_size="giant" mb="none">
            {title}
          </TitleField>
          <HeadingField
            mt="none"
            color={Color[color]}
            weight="normal"
            heading_size="_20"
          >
            {heading}
          </HeadingField>
        </div>
      )}
      {size === "normal" && (
        <div className={number_cards}>
          <TitleField
            weight="bold"
            color={Color[color]}
            title_size="bigger"
            mb="none"
          >
            {title}
          </TitleField>
          <HeadingField
            mt="none"
            color={Color[color]}
            weight="normal"
            heading_size="_13"
          >
            {heading}
          </HeadingField>
        </div>
      )}
      {size === "small" && (
        <div className={number_cards}>
          <TitleField
            weight="normal"
            color={Color[color]}
            title_size="_22"
            mb="none"
          >
            {title}
          </TitleField>
          <HeadingField
            mt="none"
            color={Color[color]}
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
