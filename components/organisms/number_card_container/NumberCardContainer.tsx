import { NumberCard } from "@/components/atoms/number_card";
import { number_cards_container } from "./NumberCardContainer.style";
import { useTranslations } from "next-intl";

const NumberCardContainer = () => {
  const t = useTranslations("my_plan.hero");

  return (
    <div className={number_cards_container}>
      <NumberCard title="23" heading={t("days")} />
      <NumberCard title="18" heading={t("exercises")} />
      <NumberCard title="13" heading={t("meals")} />
    </div>
  );
};
export default NumberCardContainer;
