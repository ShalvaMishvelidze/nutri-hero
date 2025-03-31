import Image from "next/image";
import { circle, container, icon, text_container } from "./RecipeIcon.style";
import { ParagraphField } from "../paragraph_field";
import { HeadingField } from "../heading_field";

const RecipeIcon = ({
  icon_url,
  paragraph,
  heading,
}: {
  icon_url: string;
  paragraph: string;
  heading: string;
}) => {
  return (
    <div className={container}>
      <div className={circle}>
        <Image
          src={icon_url}
          alt={paragraph}
          width={30}
          height={30}
          className={icon}
        />
      </div>
      <div className={text_container}>
        <ParagraphField
          color="white"
          heading_size="tiny"
          weight="normal"
          mt="none"
          textTransform="uppercase"
        >
          {paragraph}
        </ParagraphField>
        <HeadingField
          color="white"
          heading_size="small"
          weight="bold"
          mt="none"
          textTransform="uppercase"
        >
          {heading}
        </HeadingField>
      </div>
    </div>
  );
};
export default RecipeIcon;
