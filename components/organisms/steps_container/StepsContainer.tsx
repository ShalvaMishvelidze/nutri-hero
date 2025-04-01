import { PrintBtn } from "@/components/atoms/print_btn";
import { StepContainer } from "@/components/molecules/step_container";
import { useTranslations } from "next-intl";
import { container } from "./StepsContainer.style";

const StepsContainer = ({
  t,
  steps,
}: {
  t: ReturnType<typeof useTranslations>;
  steps: number[];
}) => {
  return (
    <div className={container}>
      {steps.map((step) => {
        return (
          <StepContainer
            key={`step_${step}`}
            step={`${t("step")} ${step}`}
            desc={t(`steps_list.${step}`)}
          />
        );
      })}
      <PrintBtn text={t("print")} />
    </div>
  );
};
export default StepsContainer;
