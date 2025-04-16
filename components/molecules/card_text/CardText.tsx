import { TitleField } from "@/components/atoms/registration_field";
import { container } from "./CardText.style";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";

const CardText = ({
  title,
  heading,
  paragraph,
  is_light,
}: {
  title?: string;
  heading: string;
  paragraph: string;
  is_light?: boolean;
}) => {
  return (
    <div className={`${container} ${is_light && "mt-[30px]"}`}>
      {title && (
        <TitleField mb="none" title_size="_42_52" weight="bold">
          {title}
        </TitleField>
      )}
      <HeadingField
        mt="none"
        heading_size="medium"
        weight="medium"
        color={is_light ? "white" : "black"}
      >
        {heading}
      </HeadingField>
      <ParagraphField
        mt="none"
        heading_size="_16_24"
        weight="normal"
        color={is_light ? "white" : "black"}
      >
        {paragraph}
      </ParagraphField>
    </div>
  );
};
export default CardText;
