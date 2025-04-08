import { BtnField } from "@/components/atoms/btn_field";
import { InputField } from "@/components/atoms/input_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { TitleField } from "@/components/atoms/registration_title";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { search_container, text_container } from "./LibraryHeroContent.style";
import { Dispatch, SetStateAction } from "react";
import { Form } from "antd";

const LibraryHeroContent = ({
  t,
  setShowContent,
}: {
  t: ReturnType<typeof useTranslations>;
  setShowContent: Dispatch<SetStateAction<boolean>>;
}) => {
  const onFinish = () => {
    setShowContent(true);
  };
  return (
    <>
      <div className={text_container}>
        <TitleField mb="none" color="white" title_size="biggest">
          {t("title")}
        </TitleField>
        <ParagraphField heading_size="medium" mt="none" color="white">
          {t("paragraph")}
        </ParagraphField>
      </div>
      <Form onFinish={onFinish}>
        <div className={search_container}>
          <Form.Item
            name="search"
            rules={[{ required: true, message: t("required") }]}
          >
            <InputField
              h="_50"
              placeholder={`   ${t("placeholder")}`}
              prefix={
                <Image
                  src={"/magnifying-glass.svg"}
                  alt="magnifying glass"
                  width={19}
                  height={19}
                  className="size-[19px]"
                />
              }
            />
          </Form.Item>
          <BtnField h="medium" m_top="none" htmlType="submit" btn_size="medium">
            {t("workouts")}
          </BtnField>
          <BtnField
            h="medium"
            m_top="none"
            htmlType="submit"
            btn_size="medium"
            bg="blue"
          >
            {t("recipes")}
          </BtnField>
        </div>
      </Form>
    </>
  );
};
export default LibraryHeroContent;
