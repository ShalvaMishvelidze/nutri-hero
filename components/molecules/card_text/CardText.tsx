import { CardTextHeading } from "./card_text_heading";
import { CardTextParagraph } from "./card_text_paragraph";
import { container } from "./CardText.style";

const CardText = ({
  heading,
  paragraph,
  is_light,
}: {
  heading: string;
  paragraph: string;
  is_light?: boolean;
}) => {
  return (
    <div className={`${container} ${is_light && "mt-[30px]"}`}>
      <CardTextHeading is_light={is_light}>{heading}</CardTextHeading>
      <CardTextParagraph is_light={is_light}>{paragraph}</CardTextParagraph>
    </div>
  );
};
export default CardText;
