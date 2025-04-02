import { RecipeIcon } from "@/components/atoms/recipe_icon";
import { useTranslations } from "next-intl";
import { container } from "./IconsContainer.style";

const IconsContainer = ({
  img_prefix,
  t,
  icons,
}: {
  img_prefix: string;
  t: ReturnType<typeof useTranslations>;
  icons: number[];
}) => {
  return (
    <div className={container}>
      {icons.map((icon) => {
        return (
          <RecipeIcon
            key={`icon_${icon}`}
            icon_url={`/${img_prefix}-icon-${icon}.svg`}
            paragraph={t(`icon_names.${icon}`)}
            heading={t(`icon_desc.${icon}`)}
          />
        );
      })}
    </div>
  );
};
export default IconsContainer;
