import { NumberCard } from "@/components/atoms/number_card";
import { useTranslations } from "next-intl";

const NumberCards = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <div className="w-full flex justify-between items-center mt-[9px]">
      <NumberCard title="111" size="small" color="black" heading={t("days")} />
      <NumberCard
        title="182"
        size="small"
        color="black"
        heading={t("exercises")}
      />
      <NumberCard title="101" size="small" color="black" heading={t("meals")} />
    </div>
  );
};
export default NumberCards;
