import { TitleField } from "@/components/atoms/registration_field";
import { Accordion } from "@/components/sections/accordion";
import { ContactForm } from "@/components/sections/contact_form";
import { HeroContainer } from "@/components/sections/hero_container";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <section>
      <HeroContainer img_url="/contact-bg.png" overlay h="small" items="center">
        <TitleField
          title_size="biggest"
          weight="bold"
          mb="none"
          color="white"
          styleClassName="text-center"
        >
          {t("title")}
        </TitleField>
      </HeroContainer>
      <div className="w-full max-w-[664px] mx-auto my-[40px] ">
        <div className="max-m:px-[30px]">
          <Accordion />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;
