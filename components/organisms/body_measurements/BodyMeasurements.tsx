import { TitleField } from "@/components/atoms/registration_field";
import { useTranslations } from "next-intl";
import { UnitCard } from "../unit_card";
import { HeadingField } from "@/components/atoms/heading_field";
import { Switch } from "antd";

const grid =
  "grid grid-cols-2 max-sm:grid-cols-1 gap-x-[16px] gap-y-[20px] w-full";

const unit_container =
  "w-full rounded-[5px] border border-blue-5 px-[12px] flex justify-between items-center h-[50px] mt-[40px] max-xs:px-[8px]";

const BodyMeasurements = () => {
  const t = useTranslations("account.body_measurements");
  return (
    <div className="w-full">
      <TitleField title_size="_22" mb="_20" weight="bold">
        {t("title")}
      </TitleField>
      <div className={grid}>
        <UnitCard
          amount="22.5"
          heading={t("1.title")}
          unit={t("1.unit")}
          bg="green"
          textColor="white"
        />
        <UnitCard
          amount="162"
          heading={t("2.title")}
          unit={t("2.unit")}
          edit={t("edit")}
          save={t("save")}
        />
        <UnitCard
          amount="54"
          heading={t("3.title")}
          unit={t("3.unit")}
          edit={t("edit")}
          save={t("save")}
        />
        <UnitCard
          amount="82"
          heading={t("4.title")}
          unit={t("4.unit")}
          edit={t("edit")}
          save={t("save")}
        />
      </div>
      <div className={unit_container}>
        <HeadingField
          styleClassName="pl-[8px] max-xs:pl-0"
          heading_size="_16"
          weight="normal"
          mt="none"
        >
          {t("unit")}
        </HeadingField>
        <Switch
          checkedChildren={t("imperial")}
          unCheckedChildren={t("metric")}
          className="!bg-purple !scale-150 !mr-[20px] max-sm:!scale-100 max-xs:!mr-0"
        />
      </div>
    </div>
  );
};
export default BodyMeasurements;
