import { HeadingField } from "@/components/atoms/heading_field";
import { useTranslations } from "next-intl";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { container, tags_container } from "./Tags.style";

const Tags = ({ tags }: { tags: number[] }) => {
  const t = useTranslations("single_recipe");
  return (
    <div className={container}>
      <HeadingField heading_size="small" weight="bold" mt="none">
        {t("tags")}
      </HeadingField>
      <div className={tags_container}>
        {tags.map((tag) => {
          return (
            <ParagraphField
              key={`tag_${tag}`}
              heading_size="small"
              mt="none"
              color="purple"
              weight="normal"
            >
              {t(`tags_list.${tag}`)}
            </ParagraphField>
          );
        })}
      </div>
    </div>
  );
};
export default Tags;
