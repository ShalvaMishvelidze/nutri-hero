import { NumberCard } from "@/components/atoms/number_card";
import { useTranslations } from "next-intl";

const container = "flex items-center gap-[27px]";

const ProgressHeaderRight = ({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) => {
  return (
    <div className={container}>
      <NumberCard size="normal" title="232" heading={t("days")} />
      <NumberCard size="normal" title="182" heading={t("exercises")} />
      <NumberCard size="normal" title="101" heading={t("meals")} />
    </div>
  );
};
export default ProgressHeaderRight;
