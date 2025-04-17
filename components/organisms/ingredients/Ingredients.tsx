import { useTranslations } from "next-intl";
import { container, ingredients_container } from "./Ingredients.style";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { HeadingField } from "@/components/atoms/heading_field";
import { InputField } from "@/components/atoms/input_field";
import { BtnField } from "@/components/atoms/btn_field";

const Ingredients = ({
  t,
  ingredients,
}: {
  t: ReturnType<typeof useTranslations>;
  ingredients: number[];
}) => {
  return (
    <div className={container}>
      <div className="flex gap-[10px] justify-start items-center">
        <HeadingField heading_size="_16" weight="bold" mt="none">
          {t("ingredients_for")}
        </HeadingField>
        <InputField input_size="_35" h="_25" value={"1"} />
        <HeadingField heading_size="_16" weight="bold" mt="none">
          {t("servings")}
        </HeadingField>
      </div>
      <div className={ingredients_container}>
        {ingredients.map((ingredient) => {
          return (
            <div
              key={`ingredient_${ingredient}`}
              className="flex justify-between items-center"
            >
              <ParagraphField heading_size="_14" weight="normal" mt="none">
                {t(`ingredients_list.${ingredient}`)}
              </ParagraphField>
              <ParagraphField heading_size="_14" weight="bold" mt="none">
                {t(`ingredients_list._${ingredient}`)}
              </ParagraphField>
            </div>
          );
        })}
      </div>
      <HeadingField
        heading_size="_16"
        weight="bold"
        mt="_60"
        styleClassName="max-xm:!mt-[40px] max-sm:!mt-[30px]"
      >
        {t("allergens")}
      </HeadingField>
      <ParagraphField
        styleClassName="max-sm:!mt-[10px]"
        heading_size="_14"
        weight="normal"
        mt="normal"
      >
        {t("contains")}
      </ParagraphField>
      <BtnField
        styleClassName="max-sm:!w-full max-sm:!mt-[20px]"
        btn_size="medium"
        bg="purple_light"
        radius="_3"
        text="tiny"
      >
        {t("purchase")}
      </BtnField>
    </div>
  );
};
export default Ingredients;
