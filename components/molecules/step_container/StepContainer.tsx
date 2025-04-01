import { HeadingField } from "@/components/atoms/heading_field";
import { container, line, line_container } from "./StepContainer.style";
import { ParagraphField } from "@/components/atoms/paragraph_field";

const StepContainer = ({ step, desc }: { step: string; desc: string }) => {
  return (
    <div className={container}>
      <div className={line_container}>
        <HeadingField
          heading_size="_20"
          mt="none"
          styleClassName="w-max whitespace-nowrap"
          weight="bold"
        >
          {step}
        </HeadingField>
        <div className={line}></div>
      </div>
      <ParagraphField
        heading_size="small"
        leading="big"
        mt="none"
        weight="normal"
      >
        {desc}
      </ParagraphField>
    </div>
  );
};
export default StepContainer;
