import { useTranslations } from "next-intl";
import { ProgressHeaderCard } from "./progress_header_card";

const container =
  "grid grid-cols-3 gap-[16px] w-full max-w-[1000px] mx-auto mt-[40px]";

const ProgressHeaderCards = ({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) => {
  return (
    <div className={container}>
      <ProgressHeaderCard
        heading={t("weight")}
        amount="54"
        unit={t("kg")}
        edit={t("edit")}
        save={t("save")}
      />
      <ProgressHeaderCard
        heading={t("height")}
        amount="5'2"
        unit={t("inches")}
        edit={t("edit")}
        save={t("save")}
      />
      <ProgressHeaderCard
        heading={t("bmi")}
        amount="22.5"
        unit={t("healthy")}
        bg="green"
        textColor="white"
      />
    </div>
  );
};
export default ProgressHeaderCards;
