"use client";
import { RadioInputs } from "@/components/organisms/radio_inputs";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useTranslations } from "next-intl";

const content_container = `flex justify-between w-full gap-[80px] max-lg:gap-[30px] max-xm:grid !pb-[30px] max-xm:grid-cols-2 max-sm:grid-cols-1 max-xm:gap-0`;

const FilterForm = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  const [form] = useForm();

  return (
    <Form form={form} className={content_container}>
      <RadioInputs
        heading={t("filters.1.title")}
        paragraphs={[t("filters.1.1"), t("filters.1.2"), t("filters.1.3")]}
        name="filter 1"
        radioInputGap="small"
        radioDirection="reverse"
        radioJustify="end"
        radioGap="small"
        radioGroupHeight="_110"
        form={form}
      />
      <RadioInputs
        heading={t("filters.2.title")}
        paragraphs={[t("filters.2.1"), t("filters.2.2")]}
        radioInputGap="small"
        radioDirection="reverse"
        radioJustify="end"
        radioGap="small"
        radioGroupHeight="_110"
        name="filter 1"
        form={form}
      />
      <RadioInputs
        styleClassName="grid grid-cols-2 min-w-[480px] max-sm:grid-cols-1 max-sm:min-w-full"
        heading={t("filters.3.title")}
        radioInputGap="small"
        radioDirection="reverse"
        radioJustify="end"
        radioGap="small"
        w="full"
        paragraphs={[
          t("filters.3.1"),
          t("filters.3.2"),
          t("filters.3.3"),
          t("filters.3.4"),
          t("filters.3.5"),
          t("filters.3.6"),
          t("filters.3.7"),
          t("filters.3.8"),
          t("filters.3.9"),
          t("filters.3.10"),
          t("filters.3.11"),
          t("filters.3.12"),
          t("filters.3.13"),
          t("filters.3.14"),
        ]}
        name="filter 1"
        form={form}
      />
    </Form>
  );
};
export default FilterForm;
